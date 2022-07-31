import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';

const SamsungBanner = ({ samsungBanner }) => {
  return (
    <div className='samsung-banner-container'>
      <div>
        <p className='beat-solo'>
          {samsungBanner.smallText}
        </p>
        <h3>
          {samsungBanner.midText}
        </h3>
        <h1>
          {samsungBanner.largeText1}
        </h1>
        <img src={urlFor(samsungBanner.image)} alt='headphones' className='samsung-banner-image' />

        <div>
          <Link href={`/product/${samsungBanner.product}`}>
            <button type='button'>{samsungBanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{samsungBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SamsungBanner