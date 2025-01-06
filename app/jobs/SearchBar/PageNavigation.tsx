import React from "react";
import Image from "next/image";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Handle page change
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center items-center w-full mt-6">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-8 mx-1 bg-white rounded-button-pill aspect-square disabled:opacity-50"
      >
        <Image
          src="/icons/icon-park-outline_back-one-left.svg"
          width={24}
          height={24}
          alt="Previous"
        />
      </button>

      {/* Page Number Buttons */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`flex justify-center items-center px-16 mx-1 font-bold text-black rounded-button-pill aspect-square ${
            page === currentPage
              ? "bg-primary-600 text-white"
              : "bg-white text-black"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-8 mx-1 bg-white rounded-button-pill aspect-square disabled:opacity-50"
      >
        <Image
          src="/icons/icon-park-outline_back-one-right.svg"
          width={24}
          height={24}
          alt="Next"
        />
      </button>
    </div>
  );
};

export default Pagination;
