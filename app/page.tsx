import React from 'react';
import { api } from './components/config';
import axios from 'axios';
import Link from 'next/link';
import { PiShoppingCart } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import Cart from './components/cart';
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
          <div className='row justify-content-center'>
            <div className="col-md-6">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="ค้นหารายการสินค้า" />
                <div className="input-group-text" id="btnGroupAddon"><BsSearch /></div>
              </div>
            </div>
            <div className="col-md-12">
              <hr />
            </div>
            {products.map((pro: any, index: any) => (
              <div key={index} className='col-md-2 mb-2'>
                <div className='card shadow h-100'>
                  <div className='card-body'>
                    {pro.images && pro.images.length > 0 && (
                      <img
                        src={api + '/' + pro.images[0].image_file}
                        className="card-img-top img-fluid"
                        alt="Show Image"
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item custom-card-body">
                      <strong className="card-title mb-0"  >
                        {pro.pro_name}
                      </strong>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-9">
                          <strong className='text-danger'>{pro.pro_sellprice}฿</strong>
                        </div>
                        <div className="col-3 text-end">
                          <strong className='text-danger'>
                            <Link href={`./products/${pro.pro_id}`} className='btn btn-success btn-sm'><PiShoppingCart /></Link>
                          </strong>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
            <Cart />
          </div>
        </div >
      </>
    );
  } catch (error: any) {
    console.error(error.message);
    return <div>Error loading products</div>;
  }
}
