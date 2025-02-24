import React, { useEffect, useState } from 'react';
import {
  Badge,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tooltip,
} from '@nextui-org/react';
import { ErrorMessage, FieldArray, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from 'next-themes';

import {
  useGetProductFeedbackQuery,
  useUpdateProductFeedbackMutation,
} from '@/redux/service/ratingAndFeedback';
import { useUploadImagesMutation } from '@/redux/service/image';
import { Cancel, PhotoIcon } from '@/components/icons';
import PromptInput from '@/components/review/PromptInput';

interface UpdateFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  feedbackId: string;
  refetchFeedback: () => void;
  productSlug: string;
}

interface FormValues {
  description: string;
  images: { file: File | null; url: string }[];
}

const fileValidation = Yup.mixed<any>()
  .nullable()
  .test('fileSize', 'File size should be less than 10MB', (value) => {
    if (!value) return true;
    return value.size <= 10 * 1024 * 1024;
  })
  .test('fileFormat', 'Unsupported Format', (value) => {
    if (!value) return true;
    return ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
  });

const validationSchema = Yup.object().shape({
  description: Yup.string()
    .required('Description is required')
    .max(2000, 'Description must be less than 2000 characters')
    .trim('Please enter a valid description'),
  images: Yup.array().of(
    Yup.object().shape({
      file: fileValidation,
    })
  ),
});

export default function UpdateFeedbackModal({
  isOpen,
  onClose,
  feedbackId,
  refetchFeedback,
  productSlug,
}: UpdateFeedbackModalProps) {
  const [uploadImages] = useUploadImagesMutation();
  const [updateFeedback] = useUpdateProductFeedbackMutation();
  const { data: feedbackData } = useGetProductFeedbackQuery({ productSlug });
  const { theme } = useTheme();
  const [oldImages, setOldImages] = useState<string[]>([]);
  const [newImages, setNewImages] = useState<{ file: File; url: string }[]>([]);

  const initialValues: FormValues = {
    description: '',
    images: [],
  };

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        let uploadedUrls: { url: string }[] = [];

        if (newImages.length > 0) {
          const formData = new FormData();
          newImages.forEach((image) => {
            formData.append('files', image.file);
          });

          const imageResponse = await uploadImages(formData).unwrap();
          uploadedUrls = imageResponse.payload.map((file: any) => ({
            url: file.fullUrl,
          }));
        }

        const allImages = [
          ...oldImages.map((url) => ({ url })),
          ...uploadedUrls,
        ];

        const feedbackData = {
          uuid: feedbackId,
          description: values.description,
          images: allImages,
        };

        await updateFeedback(feedbackData).unwrap();
        toast.success('Feedback updated successfully.', {
          autoClose: 2000,
          theme: theme,
        });
        resetForm();
        refetchFeedback();
        onClose();
        setNewImages([]);
      } catch (error) {
        console.error('Error updating feedback:', error);
        toast.error('Failed to update feedback.', {
          autoClose: 2000,
          theme: theme,
        });
      }
    },
  });

  const {
    values,
    handleSubmit,
    setFieldValue,
    setValues,
    handleChange,
    errors,
    touched,
    resetForm,
  } = formik;

  useEffect(() => {
    if (feedbackData && feedbackData.payload) {
      const feedback = feedbackData.payload.find(
        (item) => item.uuid === feedbackId
      );
      if (feedback) {
        const initialImages = feedback.images.map((image) => ({
          file: null,
          url: image.url,
        }));
        setValues({
          description: feedback.description,
          images: initialImages,
        });
        setOldImages(feedback.images.map((image) => image.url));
        setNewImages([]);
      }
    }
  }, [feedbackData, feedbackId, setValues]);

  const onRemoveImage = (index: number) => {
    const updatedImages = [...values.images];
    if (updatedImages[index].file) {
      // Removing a new image
      setNewImages((prev) =>
        prev.filter((_, i) => i !== index - oldImages.length)
      );
    } else {
      // Removing an old image
      setOldImages((prev) => prev.filter((_, i) => i !== index));
    }
    updatedImages.splice(index, 1);
    setFieldValue('images', updatedImages);
  };

  const onAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newImagesArray = filesArray.map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));
      setNewImages((prev) => prev.concat(newImagesArray));
      setFieldValue('images', values.images.concat(newImagesArray));
    }
  };

  const handleModalClose = () => {
    // Reset form to initial state when modal is closed
    if (feedbackData && feedbackData.payload) {
      const feedback = feedbackData.payload.find(
        (item) => item.uuid === feedbackId
      );
      if (feedback) {
        const initialImages = feedback.images.map((image) => ({
          file: null,
          url: image.url,
        }));
        setValues({
          description: feedback.description,
          images: initialImages,
        });
        setOldImages(feedback.images.map((image) => image.url));
        setNewImages([]);
      }
    }
    toast.clearWaitingQueue();
    onClose();
  };
  return (
    <FormikProvider value={formik}>
      <Modal
        isOpen={isOpen}
        onOpenChange={(open) => {
          if (!open) handleModalClose();
        }}
      >
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader className="flex flex-col gap-1">
              Update Feedback
            </ModalHeader>
            <ModalBody className={'my-3'}>
              <div className="groupflex gap-2 ps-4 pt-4">
                <FieldArray name="images">
                  {() =>
                    values.images.map((imageObj, index) => (
                      <Badge
                        key={index}
                        isOneChar
                        className="opacity-100 group-hover:opacity-100"
                        content={
                          <Button
                            isIconOnly
                            radius="full"
                            size="sm"
                            color={'danger'}
                            variant="light"
                            onPress={() => onRemoveImage(index)}
                          >
                            <Cancel size={13} />
                          </Button>
                        }
                      >
                        <Image
                          alt="uploaded image cover"
                          className="h-14 w-14 rounded-small border-small border-default-200/50 object-cover"
                          src={imageObj.file ? imageObj.url : imageObj.url}
                        />
                      </Badge>
                    ))
                  }
                </FieldArray>
              </div>
              <PromptInput
                classNames={{
                  inputWrapper: '!bg-transparent shadow-none',
                  innerWrapper: 'relative',
                  input: 'pt-1 pb-6 !pr-10 text-medium',
                }}
                endContent={
                  <div className="absolute right-0 flex h-full flex-col items-end justify-between gap-2">
                    <div className="flex items-end gap-2">
                      <p className="py-1 text-tiny text-default-400">
                        {values.description.length}/2000
                      </p>
                    </div>
                  </div>
                }
                minRows={5}
                radius="lg"
                startContent={
                  <Tooltip showArrow content="Add Image">
                    <Button isIconOnly as="label" radius="full" variant="light">
                      <PhotoIcon size={28} />
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        style={{ display: 'none' }}
                        onChange={onAddImage}
                      />
                    </Button>
                  </Tooltip>
                }
                value={values.description}
                variant={'flat'}
                onValueChange={(val) => setFieldValue('description', val)}
              />
              <Tooltip showArrow content="Send message">
                <Button
                  color={!values.description ? 'default' : 'primary'}
                  isDisabled={!values.description}
                  radius="lg"
                  size="sm"
                  variant="solid"
                  className={
                    'bg-gradient-to-r from-pink-500 to-yellow-500 text-gray-50'
                  }
                  type="submit"
                  isLoading={formik.isSubmitting}
                >
                  send message
                </Button>
              </Tooltip>
            </ModalBody>
          </form>
        </ModalContent>
      </Modal>
      <ErrorMessage
        name="description"
        component="div"
        className="text-red-500"
      />
    </FormikProvider>
  );
}
