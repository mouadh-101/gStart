import React, { useState } from 'react';
import Update from './Update';
import Delete from './Delete';

function PostList({ posts, onUpdate, onDelete }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5; // Number of posts per page

  // Calculate the index of the last post on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  // Calculate the index of the first post on the current page
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // Slice the posts array to get the posts for the current page
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate the total number of pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Posts</h2>
      <ul>
        {currentPosts.map(post => (
          <li key={post.id} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-700 mb-4">{post.body}</p>
            <div className="flex space-x-4">
              <Update post={post} onUpdate={onUpdate} />
              <Delete postId={post.id} onDelete={onDelete} />
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-6 space-x-2">
        {/* Pagination Controls */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-4 py-2 rounded-md ${currentPage === pageNumber ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PostList;
