import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-200"></div>
    </div>
  );
};

export default Loader;
