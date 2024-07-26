// 'use client';  -> using this the component becomes a client component

import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <>
      {/* <div className={styles.card}>
          <AddToCart />
      </div> */}

      {/* tailwind css */}
      {/* <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600'>
          <AddToCart />
      </div> */}

      <div>
        <AddToCart />
      </div>
    </>
  )
}

export default ProductCard