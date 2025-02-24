import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { useDeleteProductFeedbackMutation } from '@/redux/service/ratingAndFeedback';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from 'next-themes';

interface DeleteFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  feedbackId: string;
  refetchFeedback: () => void;
}

const DeleteFeedbackModal: React.FC<DeleteFeedbackModalProps> = ({
  isOpen,
  onClose,
  feedbackId,
  refetchFeedback,
}) => {
  const [deleteFeedback, { isLoading }] = useDeleteProductFeedbackMutation();
  const { theme } = useTheme();
  const handleDelete = async () => {
    try {
      await deleteFeedback({ feedbackId }).unwrap();
      toast.success('Successfully deleted your feedback', {
        autoClose: 2000,
        theme: theme,
      });
      refetchFeedback();
      onClose();
    } catch (error) {
      toast.error('Failed to delete feedback', {
        autoClose: 2000,
        theme: theme,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Confirm Delete
            </ModalHeader>
            <ModalBody>
              <p>Are you sure you want to delete this feedback?</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button
                color="primary"
                onPress={handleDelete}
                disabled={isLoading}
              >
                Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DeleteFeedbackModal;
