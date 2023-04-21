import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const SinglePost = () => {
  const { postId } = useParams();
  const { post, fetchSinglePost } = useFetch();

  useEffect(() => {
    if (post) return;
    fetchSinglePost(postId);
  }, []);

  return (
    <div className="single-Post rounded-lg border-primary border-4 p-5 text-center">
      {post && (
        <div>
          <h1>
            #{post.id} {post.title}
          </h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
