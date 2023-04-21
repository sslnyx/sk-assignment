import { useEffect, useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allPostsLoaded, setAllPostsLoaded] = useState(false);
  const [posts, setPosts] = useState({});
  const [post, setPost] = useState();

  const fetchPosts = async (page) => {
    setIsLoading(true);
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`;
    const res = await fetch(url);
    const data = await res.json();
    setIsLoading(false);
    if (!data.length) {
      //   console.log("all loaded");
      setAllPostsLoaded(true);
      return;
    }
    // console.log("insert post")
    setPosts((prevPosts) => ({ ...prevPosts, [page]: data }));
  };

  const fetchSinglePost = async (id) => {
    setIsLoading(true);
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    setPost(data);
  };

  return {
    posts,
    post,
    isLoading,
    allPostsLoaded,
    setAllPostsLoaded,
    fetchPosts,
    fetchSinglePost,
  };
};

export default useFetch;
