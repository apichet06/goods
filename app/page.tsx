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
              <div key={index} className='col-md-2 mb-2'>
                <div className='card shadow'>
                  <div className='card-body'>
                    {pro.images && pro.images.length > 0 && (
                      <img src={api + '/' + pro.images[0].image_file} className="card-img-top mb-3" height={150} alt="Show Image" />
                    )}
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <strong className="card-title mb-0">{pro.pro_name}</strong></li>
                    <li className="list-group-item"><strong className='text-danger'>ราคา {pro.pro_sellprice}฿</strong></li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div >
      </>
    );
  } catch (error: any) {
    console.error(error.message);
    // Handle the error, e.g., display an error message to the user
    return <div>Error loading products</div>;
  }
}
