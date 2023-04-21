import { useEffect, useState, useRef } from "react";
import Header from "./components/header";
import Footer from "./components/Footer";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import usePagination from "./hooks/usePagination";

import "./app.css";

function App() {
  const { posts, isLoading, allPostsLoaded, setAllPostsLoaded, fetchPosts } =
    useFetch();
  const [currentPage, handleNextPage, handlePrevPage] = usePagination();
  const init = useRef(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const props = {
    posts,
    isLoading,
    currentPage,
    allPostsLoaded,
    setAllPostsLoaded,
    handleNextPage,
    handlePrevPage,
  };

  useEffect(() => {
    if (posts[currentPage]) return; // if post already exist return
    fetchPosts(currentPage);
    if (!pathname.includes("posts")) navigate("posts");
  }, [currentPage]);

  return (
    <div className="app">
      <Header />
      <main>{posts && <Outlet context={props} />}</main>
      <Footer />
    </div>
  );
}

export default App;
