import { useState } from "react";

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = (allPostsLoaded, setAllPostsLoaded) => {
    if (currentPage <= 1) return;
    if (allPostsLoaded) {
      setAllPostsLoaded(false);
    }
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return [currentPage, handleNextPage, handlePrevPage];
};

export default usePagination;
