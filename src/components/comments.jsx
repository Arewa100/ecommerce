import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const comments = [
  { id: 1, text: "Excellent service!", author: "John Doe" },
  { id: 2, text: "Loved the product quality.", author: "Jane Smith" },
  { id: 3, text: "Fast delivery and great customer support.", author: "Alice Johnson" },
];

const Comments = () => {
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    }, 3000); // Change comment every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="comments-container">
      <AnimatePresence wait>
        <motion.div
          key={comments[currentCommentIndex].id}
          initial={{ opacity: 0, x: 100, scale:0.9}}
          animate={{ opacity: 1, x: 0, scale:2}}
        //   exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.9 }}
          className="comment"
        >
          <p className="comment-text">{comments[currentCommentIndex].text}</p>
          <p className="comment-author">- {comments[currentCommentIndex].author}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Comments;
