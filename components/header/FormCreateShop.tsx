import React, { useRef, useState } from 'react';
import { Button, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useCreateShopMutation } from '@/redux/service/shop';
import { useGetAllShopTypesQuery } from '@/redux/service/shopType';
import CustomInput from '../customInput/customInput';
import CustomSelect from '../customInput/CustomSelect';
import CustomTextArea from '../customInput/CustomTextArea';
import MapCreateShopComponent from '@/components/Maps/MapCreateShopComponent';
import { ShopCreateRequest, Coordinates } from '@/types/shop'; 
import { IoImagesOutline } from 'react-icons/io5';
import { Cancel } from '../icons';
import { useUploadShopImageMutation } from '@/redux/service/shop';


interface CreateShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  refetch: () => void;
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[a-zA-Z0-9\s\-]+$/, 'Name must be properly formatted and can contain letters, numbers, single spaces, and single dashes')
    .max(100, 'Name must be less than 100 characters'),
  address: Yup.string().required('Address is required'),
  description: Yup.string().max(500, 'Description must be less than 500 characters'),
  slug: Yup.string()
    .matches(/^[a-z0-9\-]+$/, 'Slug must be properly formatted and can contain lowercase letters, numbers, and single dashes'),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^\d{9,10}$/, 'Phone number must be 9 or 10 digits long'),
  email: Yup.string().email('Invalid email').max(100, 'Email must be less than 100 characters'),
  openAt: Yup.string().matches(/^\d{2}:\d{2}$/, 'Please provide a valid opening time in the format HH:mm'),
  closeAt: Yup.string().matches(/^\d{2}:\d{2}$/, 'Please provide a valid closing time in the format HH:mm'),
  shopType: Yup.string().required('Shop type is required'),
  location: Yup.string().required('Location is required'),
});

const CreateShopModal: React.FC<CreateShopModalProps> = ({ isOpen, onClose, refetch }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [createShop] = useCreateShopMutation();
  const [uploadImage] = useUploadShopImageMutation();
  const [isUploading, setIsUploading] = useState(false);
  const { data: shopTypes, isLoading: isLoadingShopTypes, error } = useGetAllShopTypesQuery();

  const handleLocationSelect = (location: Coordinates, address: string, setFieldValue: (field: string, value: any) => void) => {
    const locationString = `${location.lat},${location.lng}`;
    setFieldValue('location', locationString);
    setFieldValue('address', address);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: (field: string, value: any) => void) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setFieldValue('profile', file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  const handleSubmit = async (values: ShopCreateRequest, { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void, resetForm: () => void }) => {
    setIsUploading(true);
    try {
      if (selectedFile) {
        const fileData = new FormData();
        fileData.append('file', selectedFile);

        const response = await uploadImage(fileData).unwrap();
        values.profile = response.payload.fullUrl;
      }

      await createShop(values).unwrap();
      resetForm();
      refetch();
      onClose();
    } catch (error) {
      console.error('Failed to create shop:', error);
    } finally {
      setIsUploading(false);
      setSubmitting(false);
    }
  };

  const initialValues = {
    name: '',
    address: '',
    description: '',
    slug: '',
    phoneNumber: '',
    email: '',
    openAt: '',
    closeAt: '',
    shopType: '',
    location: '',
    socialMedias: [],
    profile: '',
  };

  if (error) {
    console.error('Error fetching shop types:', error);
    return <div>Error loading shop types</div>;
  }

  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
      <ModalContent className="w-[90vw] h-auto max-w-[600px]">
        <ModalHeader className="dark:text-gray-100">DealKh</ModalHeader>
        <ModalBody className="text-2xl font-semibold dark:text-gray-100">Create New Shop</ModalBody>
        <ModalBody>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ setFieldValue }) => (
              <Form className="space-y-4">
                  <CustomInput label="Shop Name" type="text" name="name" />

                <div className="grid grid-cols-2 gap-4">
                  <CustomInput label="Phone Number" type="text" name="phoneNumber" />
                  <CustomInput label="Email" type="email" name="email" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <CustomInput label="Opening Time" placeholder="07:00" type="text" name="openAt" />
                  <CustomInput label="Closing Time" placeholder="19:00" type="text" name="closeAt" />
                </div>
                <div className="grid grid-cols-2 gap-4">

                  <CustomInput label="Slug" placeholder="deal-kh-shop" type="text" name="slug" />
                  <CustomSelect
                    label="Shop Type"
                    name="shopType"
                    options={shopTypes ? shopTypes.map((type: any) => ({
                      value: type.slug,
                      label: type.name,
                    })) : []}
                    placeholder="Select Shop Type"
                    onChange={(e: any) => setFieldValue('shopType', e.target.value)}
                  />
                </div>


                <CustomTextArea label="Description" name="description" placeholder="Enter shop description" />
                <div>

                   <label className="block text-slate-900 font-medium pb-2">Location</label>
                  <MapCreateShopComponent onLocationSelect={(location, address) => handleLocationSelect(location, address, setFieldValue)} />
                </div>
                <div className="mb-4 p-4 border-dashed border-2 border-stone-300 bg-foreground-50 dark:border-2 dark:text-white dark:border-foreground/40 rounded-lg flex flex-col items-center justify-center cursor-pointer">
                  <input
                    id="file-upload"
                    type="file"
                    onChange={(e) => handleFileChange(e, setFieldValue)}
                    className="hidden"
                    ref={fileInputRef}
                  />
                  <label htmlFor="file-upload" className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    {preview ? (
                      <div className="relative">
                        <Image src={preview} alt="Preview" className="w-[100px] h-[100px] object-cover rounded-lg" />
                        <Button
                          isIconOnly
                          color={'danger'}
                          variant={'solid'}
                          radius={'full'}
                          size={'sm'}
                          className="absolute top-0 right-0 p-1 transform-translate-y-1/2 translate-x-1/2 z-10"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeImage();
                          }}
                        >
                          <Cancel size={28} />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <div className="bg-slate-200 rounded-full p-3">
                            <IoImagesOutline className="w-6 h-6 text-gray-600" />
                          </div>
                        </label>
                        <p className="text-gray-500 mt-2">Click to upload or drag and drop</p>
                      </div>
                    )}
                  </label>
                </div>
                <ModalFooter className="flex justify-between">
                  <Button type="button" onClick={onClose} variant={'ghost'} color={'warning'} size={'md'} className={'px-14 py-2'} radius={'full'}>
                    Cancel
                  </Button>
                  <Button type="submit" className="w-full max-w-[10rem] px-4 py-2 bg-gradient-to-r from-pink-500 to-warning-500/80 text-white text-md font-semibold rounded-full ml-4">
                    {isUploading ? 'Creating...' : 'Create'}
                  </Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreateShopModal;

