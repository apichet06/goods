'use client'
import React from 'react'
import { Col, Stack } from 'react-bootstrap'

export default function Footers() {
    return (
        <Stack className="fixed-bottom d-flex flex-wrap justify-content-between align-items-center py-2 border-top border-3 footer"  >
            <Col>
                <Stack className="text-center">
                    <span className="mb-3 mb-md-0 text-muted">&copy;2024 Ms. Apichet Singnakrong</span>
                </Stack>
            </Col>
        </Stack>
    )
}
