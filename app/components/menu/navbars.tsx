'use client'

import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

export default function Navbars() {
    return (
        <Navbar bg="dark"
            data-bs-theme="dark"
            expand="lg"
            fixed="top"
            className="shadow navbar-underline">
            <Container>
                <Navbar.Brand href="#home">ระบบขายสินค้า Online</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#pricing">รายการสินค้า</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">ตระกล้าสินค้า</Nav.Link>
                        <Nav.Link href="#deets">เกี่ยวกับเรา</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            เข้าสู้ระบบ
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
