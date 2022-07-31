import React from 'react';

import { client } from '../lib/client';
import { SamsungBanner, Product, FooterBanner, } from '../components';

const Home = ({ productData, bannerData }) => {
  return (
    <div>
      <SamsungBanner samsungBanner={bannerData.length && bannerData[0]} />
      {/* {console.log(bannerData)}
      {console.log(productData )} */}
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speaker of many variations</p>
      </div>

      <div className='products-container'>
        {
          productData.map(
            (product) => <Product key={product._id} product={product} />
          )
        }
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const productData = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { productData, bannerData }
  }
}

export default Home