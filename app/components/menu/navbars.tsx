import React from 'react'
import { PiShoppingCart } from "react-icons/pi";
import Link from 'next/link';
export default function Navbars() {
    return (
        <>

            <nav className="navbar navbar-expand-lg  shadow navbar-underline fixed-top" style={{ backgroundColor: '#47d147' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">ระบบขายสินค้า Online</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    หมวดหมู่สินค้า
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">อุปกรณ์คอมพิวเตอร์</a></li>
                                    <li><a className="dropdown-item" href="#">เครื่องเขียน</a></li>
                                    <li><a className="dropdown-item" href="#">อุปกรณ์ทั่วไป</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"><PiShoppingCart /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">เกี่ยวกับเรา</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">เข้าสู้ระบบ</a>
                            </li>
                        </ul>
                    </form>

                </div>
            </nav>

        </>


    )
}
