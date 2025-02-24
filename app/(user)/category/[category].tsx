import { useRouter } from 'next/router';
import React from 'react';

const CategoryPage: React.FC = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Category: {category}</h1>
      {/* Add content related to the category */}
    </div>
  );
};

export default CategoryPage;