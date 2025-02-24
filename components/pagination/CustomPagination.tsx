import React from "react";
import { Pagination } from "@nextui-org/react";

interface CustomPaginationProps {
  total: number;                         
  currentPage: number;                   
  onPageChange: (page: number) => void;  
  pageSize: number;                      
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  total,
  currentPage,
  onPageChange,
  pageSize,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <Pagination
        isCompact
        showControls
        showShadow
        color="danger"
        total={total}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default CustomPagination;
