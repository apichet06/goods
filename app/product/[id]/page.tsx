
import { api } from '@/app/components/config';
import axios from 'axios';
import Link from 'next/link';
import React from 'react'
import { PiShoppingCart } from 'react-icons/pi';

interface PageProps {
    params: {
        id: string
    };
}

async function GetProducttype(type_id: number) {
    const response = await axios.get(api + '/products/pro_type/' + type_id);
    if (response.status === 200) {
        return response.data.data;
    } else {
        throw new Error('Cannot find product');
    }
}

async function GetProductID(id: any) {
    const response = await axios.get(api + '/products/' + id);
    if (response.status === 200) {
        return response.data.data;
    } else {
        throw new Error('Cannot find product');
    }
}


export default async function Page({ params }: PageProps) {
    const { id } = params

    const data = await GetProductID(id)
    const productType = await GetProducttype(data.product_type_id)


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div id="carouselExampleFade" className="carousel slide" data-bs-ride="true">
                                            <div className="carousel-inner">
                                                {data.images.map((image: any, index: any) => (
                                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                                        <img src={api + '/' + image.image_file} className="d-block w-100" alt={`Product Image ${index + 1}`} />
                                                    </div>
                                                ))}
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 mb-3">
                                <div className="card shadow">
                                    <div className="card-header bg-secondary text-light"> <h3>รายการสินค้า</h3></div>
                                    <div className="card-body">
                                        <h4> {data.pro_name}</h4>
                                        <p>ID : {data.pro_id}</p>
                                        <strong className='text-danger'>ราคา {data.pro_sellprice}฿</strong>
                                        <p className="text-success">คงเหลือ {data.pro_qty} {data.unit_name}</p>
                                        <hr />
                                        <div className="row justify-content-center  g-3 align-items-center">
                                            <div className="col-md-5">
                                                <div className="input-group">
                                                    <button type="button" className="btn btn-success btn-sm" >-</button>
                                                    <input type="text" className="form-control text-center form-control-sm" value={1} name='qty' readOnly />
                                                    <button type="button" className="btn btn-success btn-sm" >+</button>
                                                </div>
                                            </div>
                                            <div className="col-12 text-center">
                                                <div className="btn btn-success">เพิ่มสินค้าในตระกล้า</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <hr />
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5>รายละเอียดสินค้า</h5><hr />
                                        <h6>{data.pro_description}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <hr />
                        <h5>สินค้าใกล้เคียง</h5>
                        <hr />
                        <div className="row">
                            {productType.map((pro: any, index: any) => (
                                <div key={index} className='col-md-2 mb-2'>
                                    <div className='card shadow'>
                                        <div className='card-body'>
                                            {pro.images && pro.images.length > 0 && (
                                                <img src={api + '/' + pro.images[0].image_file} className="card-img-top mb-3" height={150} alt="Show Image" />
                                            )}
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"> <strong className="card-title mb-0">{pro.pro_name}</strong></li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col-9">
                                                        <strong className='text-danger'>{pro.pro_sellprice}฿</strong>
                                                    </div>
                                                    <div className="col-3 text-end">
                                                        <strong className='text-danger'>
                                                            <Link href={`${pro.pro_id}`} className='btn btn-success btn-sm'><PiShoppingCart /></Link>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
