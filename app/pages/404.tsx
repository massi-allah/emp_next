import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 text-xl">Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
