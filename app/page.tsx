import React from 'react';
import { api } from './components/config';
import axios from 'axios';
import Image from 'next/image';

async function getProduct() {
  const response = await axios.get(api + '/products/1/20');

  if (response.status === 200) {
    return response.data.data;
  } else {
    throw new Error('Cannot find product');
  }
}

export default async function Page() {
  try {
    const products = await getProduct();

    return (
      <>
        <div className='container'>
          <div className='row'>
            {products.map((pro: any, index: any) => (
              <div key={index} className='col-md-3 mb-2'>
                <div className='card shadow'>
                  <div className='card-body'>
                    {/* Check if pro.images is not null before accessing its properties */}
                    {pro.images?.image_file && (
                      <Image
                        src={api + pro.images.image_file}
                        alt={pro.pro_id}
                        width={50}
                        height={50}
                      />
                    )}
                    {/* Display other product information */}
                    {pro.pro_name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } catch (error: any) {
    console.error(error.message);
    // Handle the error, e.g., display an error message to the user
    return <div>Error loading products</div>;
  }
}
