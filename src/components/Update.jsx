import React, { useState } from 'react';

const Update= ({ post, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleUpdate = () => {
    onUpdate({ ...post, title, body });
    setIsEditing(false);
  };

  return (
    <div className="flex items-center space-x-2">
      <button onClick={() => setIsEditing(!isEditing)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Edit post
      </button>
      {isEditing && (
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 p-2 rounded"
            placeholder="Post Title"
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border border-gray-300 p-2 rounded"
            placeholder="Post Body"
          />
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-3 py-2 rounded-md"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default Update;