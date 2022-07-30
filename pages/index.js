import React from 'react'

const Home = () => {
  return (
    <>
      Samsung Banner

      <div className='products-heading'>
        <h2>Beset Selling Products</h2>
        <p>Speaker of many variations</p>
      </div>

      <div className='products-container'>
        {
          ['P_1', 'P_2'].map(
            (product) => product
          )
        }
      </div>

      Footer
    </>
  )
}

export default Home