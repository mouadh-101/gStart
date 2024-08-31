import React from 'react';

const NavBar = ({ onFetchPosts, onAddPost }) => {
  return (
    <nav className="bg-blue-400 p-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex space-x-4">
          <button
            onClick={onFetchPosts}
            className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Posts
          </button>
          <button
            onClick={onAddPost}
            className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Create Post
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;