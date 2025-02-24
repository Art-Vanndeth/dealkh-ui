import React, { SetStateAction, useRef, useState } from 'react';
import { CloseIcon, SearchIcon } from '@/components/icons';
import { CiLocationOn } from "react-icons/ci";
import { Input } from '@nextui-org/react';
import { useSubmitFormMutation } from '@/redux/api';
import { useRouter } from 'next/navigation';

const SearchLocation: React.FC = () => {
  const [submitForm] = useSubmitFormMutation();
  const [searchValue, setSearchValue] = useState('');
  const [productDropdown, setProductDropdown] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  // const handleSearchChange = (event: {
  //   target: { value: SetStateAction<string> };
  // }) => {
  //   const newSearchValue = event.target.value;
  //   setSearchValue(newSearchValue);
  //   setProductDropdown(newSearchValue.length > 0);
  // };

  const handleSubmitSearch = () => {
    router.push(`/searching-shop-name?searchValue=${searchValue}`);
    setProductDropdown(false);
  };

  const handleSubmitSearchNearby = () => {
    router.push(`/searching-nearby`);
    setProductDropdown(false);
    setClickCount(0);
  };

  const handleClearSearch = () => {
    setSearchValue('');
    setProductDropdown(false);
    setClickCount(0);
  };

  const handleInputClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    setProductDropdown(clickCount % 2 === 0);
  };

  return (
    <div
      className="relative"
    >
      <Input
        aria-label="Location Search"
        classNames={{
          inputWrapper:
            'bg-default-100 rounded-none rounded-r-xl w-[200px] mt-1',
          input: 'text-sm',
        }}
        labelPlacement="outside"
        placeholder={searchValue || 'Search Shop'}
        endContent={
          searchValue ? (
            <CloseIcon
              onClick={handleClearSearch}
              className="flex-shrink-0 cursor-pointer text-base text-default-400"
            />
          ) : (
            <SearchIcon
              onClick={handleSubmitSearch}
              className="pointer-events-none flex-shrink-0 text-base text-default-400"
            />
          )
        }
        type="search"
        value={searchValue}
        onClick={handleInputClick}
      />
      {productDropdown && (
        <div className="relative">
          <div className="absolute left-0 top-[2px] mt-1 w-[200px] origin-top-left grid-cols-2 gap-4 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <h1 className="text-gray py-2 text-center text-warning">
                Locations
              </h1>
              <a
                  className="block px-4 py-2 text-sm text-gray-700 transition-all ease-in-out hover:bg-warning hover:text-white items-center justify-between"
                  role="menuitem"
                  onClick={() => handleSubmitSearchNearby()}
                >
                  <div className="flex items-center gap-2">
                    <CiLocationOn  size={24} color='gray-700'/>
                    <span>Search nearby</span>
                  </div>
                </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchLocation;