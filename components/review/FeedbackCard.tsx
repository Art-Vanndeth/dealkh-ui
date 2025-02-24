import React, { useState } from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
} from '@nextui-org/react';
import { StarIcon } from '@/components/review/StarIcon';
import DeleteFeedbackModal from './DeleteFeedbackModal';
import { DeleteIcon, MoreIcon } from '@/components/icons';
import UpdateFeedbackModal from '@/components/review/UpdateFeedbackModal';

interface FeedbackItemProps {
  review: {
    uuid: string;
    profile?: string;
    username: string;
    ratingValue: number;
    description: string;
    createdAt: string;
    images: { url: string }[];
  };
  productSlug: string;
  currentUser: string;
  refetchFeedback: () => void;
}

const FeedbackCard: React.FC<FeedbackItemProps> = ({
  review,
  currentUser,
  refetchFeedback,
  productSlug,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedFeedbackId, setSelectedFeedbackId] = useState<string | null>(
    null
  );

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleDeleteClick = (uuid: string) => {
    setSelectedFeedbackId(uuid);
    setIsDeleteModalOpen(true);
  };

  const handleEditClick = (uuid: string) => {
    setSelectedFeedbackId(uuid);
    setIsUpdateModalOpen(true);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isHalf = rating - i >= -0.5 && rating - i < 0;
      stars.push(
        <StarIcon
          key={i}
          filled={i <= rating}
          half={isHalf}
          color={i <= rating ? '#F5A524' : '#363636'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="mb-4 flex flex-col gap-4">
      <div className="rounded-medium bg-content1 p-5 shadow-small">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center justify-center gap-2 rounded-small outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus">
                <Image
                  src={review?.profile || '/images/members/votey.jpg'}
                  className="h-12 w-12 rounded-full bg-foreground-900 object-contain"
                  alt={review.username}
                  data-loaded="true"
                />
                <div className="inline-flex flex-col items-start">
                  <span className="text-small font-medium text-inherit">
                    {review.username || 'Anonymous'}
                  </span>
                  <span className="text-small text-foreground-400">
                    {new Date(review.createdAt).toLocaleDateString() || 'Date'}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {renderStars(review.ratingValue)}
              {review.username === currentUser && (
                <div className="flex gap-2">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button isIconOnly variant="light">
                        <MoreIcon size={32} />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Example with disabled actions">
                      <DropdownItem
                        onClick={() => handleEditClick(review.uuid)}
                      >
                        Edit
                      </DropdownItem>
                      <DropdownItem
                        key="delete"
                        className="text-danger"
                        color="danger"
                        startContent={<DeleteIcon />}
                        onClick={() => handleDeleteClick(review.uuid)}
                      >
                        Delete
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 w-full">
            <p className="mt-2 text-default-500">{review.description}</p>
            <div className="mt-4 flex">
              {review.images.map((image, imgIndex) => (
                <Image
                  key={imgIndex}
                  className="mr-2 h-28 w-28 rounded-lg bg-foreground object-cover"
                  src={image.url}
                  alt="Comment"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedFeedbackId && (
        <>
          <DeleteFeedbackModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            feedbackId={selectedFeedbackId}
            refetchFeedback={refetchFeedback}
          />
          <UpdateFeedbackModal
            isOpen={isUpdateModalOpen}
            onClose={() => setIsUpdateModalOpen(false)}
            feedbackId={selectedFeedbackId}
            refetchFeedback={refetchFeedback}
            productSlug={productSlug}
          />
        </>
      )}
    </div>
  );
};

export default FeedbackCard;
