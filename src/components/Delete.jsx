import React from 'react';

function Delete({ postId, onDelete }) {
  const handleDelete = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    }).then(() => onDelete(postId));
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Delete Post
    </button>
  );
}

export default Delete;
