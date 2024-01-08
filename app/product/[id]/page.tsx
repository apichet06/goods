
import { api } from '@/app/components/config';
import axios from 'axios';
import React from 'react'

interface PageProps {
    params: {
        id: string
    };
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
    // console.log(data);
    // console.log(data.images);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div id="carouselExampleFade" className="carousel slide carousel-fade">
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
                                    <div className="card-body">
                                        <h5>รายการสินค้า</h5>
                                        <p> {data.pro_name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h4>รายละเอียดสินค้า</h4>
                                        <h5>{data.pro_description}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <hr />
                        <h5>สินค้าใกล้เคียง</h5>
                        <div className="row">
                            <div className="col-md-2 mb-3">
                                <div className="card shadow">
                                    <div className="card-body">
                                        รายการสินค้า
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
