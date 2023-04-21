import { useEffect, useState, useRef } from "react";
import Header from "./components/header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./app.css";

function App() {
  const [start, setStart] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allPostsLoaded, setAllPostsLoaded] = useState(false);
  const url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=5`;
  const init = useRef(false);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    if (!data.length) {
      setAllPostsLoaded(true);
    }
    setStart((prevVal) => (prevVal += 5));
    setPosts((prevPosts) => [...prevPosts, ...data]);
    setLoading(false);
  };

  const props = {
    fetchPosts,
    loading,
    allPostsLoaded,
    posts,
  };

  useEffect(() => {
    if (init.current) return;
    fetchPosts();
    init.current = true;
  }, []);

  return (
    <div className="app">
      <Header />

      <main>{posts.length && <Outlet context={props} />}</main>

      <Footer />
    </div>
  );
}

export default App;
