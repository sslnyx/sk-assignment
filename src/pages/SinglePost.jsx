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
      {post && Object.keys(post).length === 0 && <span className="text-potato-500">post not found</span>}
      {post && Object.keys(post)?.length > 0 && (
        <div>
          <h1>
            #{post.id} {post.title}
          </h1>
          <p className="p-3">{post.body}</p>
          <div>
            <h6 className="inline-block">Author: </h6>
            <span> {post.userId}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
