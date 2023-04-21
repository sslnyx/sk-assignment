import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import PrimaryButton from "../ui/PrimaryButton";
import LoadingButton from "../ui/LoadingButton";
import "./post-archive.css";

const PostArchive = () => {
  const { posts, fetchPosts, loading, allPostsLoaded } = useOutletContext();

  useEffect(() => {
    console.log(allPostsLoaded);
  }, [posts]);

  return (
    <div className="posts-container">

      {loading ? (
        <LoadingButton />
      ) : (
        !allPostsLoaded && (
          <PrimaryButton onClick={fetchPosts}>Load More</PrimaryButton>
        )
      )}
    </div>
  );
};

export default PostArchive;
