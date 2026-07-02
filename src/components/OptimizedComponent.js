import React, { useEffect } from 'react';
import { loadImage } from '../utils/performanceUtils';

const OptimizedComponent = () => {
  useEffect(() => {
    loadImage('https://via.placeholder.com/150');
  }, []);

  return (
    <div>
      <h1>Optimized Component</h1>
      <img src="https://via.placeholder.com/150" alt="Placeholder" />
    </div>
  );
};

export default OptimizedComponent;