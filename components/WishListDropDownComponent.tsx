import { Slider } from '@nextui-org/react';
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

export default function WishListDropDownComponent() {
  const [isOpen, setIsOpen] = useState(true);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [wishlistPercentage, setWishlistPercentage] = useState(0);
  const [wishlistDescription, setWishlistDescription] = useState('');

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Wishlist Percentage:', wishlistPercentage);
    console.log('Wishlist Description:', wishlistDescription);
    setWishlistPercentage(0);
    setWishlistDescription('');
    togglePopUp();
  };

  const handleDiscountChange = (e: any) => {
    setDiscountPercentage(e.target.value);
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                {/* context section */}
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div className="flex justify-between">
                      {/* context section wishlist */}
                      <div>
                        <h3
                          className="my-5 text-lg font-medium leading-6 text-gray-900"
                          id="modal-headline"
                        >
                          Wishlist
                        </h3>
                      </div>

                      {/* icon section */}
                      <div className="my-auto">
                        <button
                          className="text-gray-400 hover:text-gray-600 focus:outline-none"
                          onClick={togglePopUp}
                        >
                          <FiX className="h-6 w-6" />
                        </button>
                      </div>
                    </div>

                    {/* wishlist percentage */}
                    <div className="mt-5">
                      <Slider
                        label=" Wishilist Percentage"
                        step={0.1}
                        color="warning"
                        maxValue={1}
                        minValue={0}
                        defaultValue={0}
                        showSteps={true}
                        showTooltip={true}
                        showOutline={true}
                        disableThumbScale={true}
                        formatOptions={{
                          style: 'percent',
                          maximumFractionDigits: 0,
                        }}
                        tooltipValueFormatOptions={{
                          style: 'percent',
                          maximumFractionDigits: 0,
                        }}
                        classNames={{
                          base: 'w-[450px]',
                          filler:
                            'bg-gradient-to-r from-yellow-500 to-pink-500',
                          labelWrapper: 'mb-2',
                          label: 'block text-sm font-medium text-gray-700',
                          value: 'font-medium text-default-500 text-small',
                          thumb: [
                            'transition-size',
                            'bg-gradient-to-r from-pink-500 to-yellow-500',
                            'data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20',
                            'data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6',
                          ],
                          step: 'data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50',
                        }}
                        tooltipProps={{
                          offset: 10,
                          placement: 'bottom',
                          classNames: {
                            base: [
                              // arrow color
                              'before:bg-gradient-to-r before:from-pink-500 before:to-yellow-500',
                            ],
                            content: [
                              'py-2 shadow-xl',
                              'text-white bg-gradient-to-r from-pink-500 to-yellow-500',
                            ],
                          },
                        }}
                        onChange={(value: any) => setWishlistPercentage(value)}
                      />
                    </div>

                    {/* wishlist description */}
                    <div className="mt-8">
                      <label
                        htmlFor="wishlistDescription"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Wishlist Description
                      </label>
                      <textarea
                        id="wishlistDescription"
                        name="wishlistDescription"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-2 border-gray-500 pl-2 pt-2 text-sm font-medium text-gray-500"
                        placeholder="Make a wish here ✨..."
                        value={wishlistDescription}
                        onChange={(e) => setWishlistDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-gradient-to-r from-yellow-500 to-pink-500 px-4 py-2 font-bold text-white shadow-md transition duration-300 ease-in-out hover:from-yellow-600 hover:to-pink-800 sm:w-auto sm:text-sm lg:mr-4"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
