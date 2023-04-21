import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import PrimaryButton from "../ui/PrimaryButton";
import LoadingButton from "../ui/LoadingButton";
import PostCard from "../components/PostCard";
import usePagination from "../hooks/usePagination";
import useFetch from "../hooks/useFetch";

import "./post-archive.css";

const PostArchive = () => {
  const {
    posts,
    fetchPosts,
    isLoading,
    allPostsLoaded,
    setAllPostsLoaded,
    currentPage,
    handleNextPage,
    handlePrevPage,
  } = useOutletContext();

  return (
    <div className="posts-container">
      <div className="posts-wrapper">
        <h2 className="mb-5">Archive</h2>

        <div className="flex-1">
          {allPostsLoaded && (
            <span className="text-white">All Posts Loaded</span>
          )}
          {posts[currentPage]?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
          <div className="flex justify-center">
            {isLoading ? (
              <LoadingButton />
            ) : (
              <div className="flex justify-between w-full">
                <PrimaryButton
                  onClick={() => handlePrevPage(allPostsLoaded, setAllPostsLoaded)}
                  outline
                >
                  Prev
                </PrimaryButton>
                {!allPostsLoaded && (
                  <PrimaryButton onClick={handleNextPage} outline>
                    Next
                  </PrimaryButton>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostArchive;
