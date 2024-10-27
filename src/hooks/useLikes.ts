import { useState, useEffect } from 'react';

export const useLikes = () => {
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem('portfolioLikes');
    return savedLikes ? parseInt(savedLikes, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('portfolioLikes', likes.toString());
  }, [likes]);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  return { likes, handleLike };
};