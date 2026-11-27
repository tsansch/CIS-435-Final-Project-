import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import Signup from "./pages/Signup";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  function navigate(path) {
  window.history.pushState({}, "", path);
  setCurrentPath(path);
}

useEffect(() => {
  function handlePopState() {
    setCurrentPath(window.location.pathname);
  }

  window.addEventListener("popstate", handlePopState);

  return () => {
    window.removeEventListener("popstate", handlePopState);
  };
}, []);
  
  async function fetchPosts() {
    const { data, error } = await supabase
      .from("posts")
      .select(`
        id,
        title,
        content,
        created_at,
        profiles(username)
      `)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error.message);
    } else {
      setPosts(data || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  if (currentPath === "/signup") {
    return <Signup />;
  }

  return (
    <div style={{
      maxWidth: "800px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "Arial"
    }}>
      <h1>Forum Board</h1>
      <p>Share your thoughts with the community.</p>
        <button onClick={() => navigate("/signup")}>
        Sign Up
      </button>
      <hr />

      {loading ? (
        <p>Loading posts...</p>
      ) : posts.length === 0 ? (
        <p>No posts yet. Be the first to create one!</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "15px"
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>
              Posted by {post.profiles?.username || "Unknown user"}
            </small>
          </div>
        ))
      )}
    </div>
  );
}

export default App;