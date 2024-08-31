import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import Create from './components/Create';
import NavBar from './components/NavBar';

function App() {
  const [posts, setPosts] = useState([]);
  const [view, setView] = useState('posts'); // State to manage the current view

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleCreate = (newPost) => {
    setPosts([newPost, ...posts]);
    setView('posts'); // Switch back to post list after creating a post
  };

  const handleUpdate = (updatedPost) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const fetchPosts = () => {
    setView('posts');
  };

  const addPost = () => {
    setView('create');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar onFetchPosts={fetchPosts} onAddPost={addPost} />

      {/* Main Content */}
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">GStart</h1>
        <div className="max-w-3xl mx-auto space-y-6">
          {view === 'posts' && (
            <PostList
              posts={posts}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          )}
          {view === 'create' && <Create onCreate={handleCreate} />}
        </div>
      </div>
    </div>
  );
}

export default App;
