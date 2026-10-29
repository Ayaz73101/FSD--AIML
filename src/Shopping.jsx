import React, { useEffect } from 'react';

function Shopping() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products/categories'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }

        const scores = await response.json();

        console.log(scores);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Shopping</h1>
      <p>Check the browser console for product categories.</p>
    </div>
  );
}

export default Shopping;