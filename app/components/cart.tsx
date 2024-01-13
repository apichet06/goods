'use client'

import axios from "axios";
import { useCallback, useEffect } from "react";
import { api } from "./config";
import { useAppContext } from "./qtyContext";


export default function Cart() {
    const { setAmount } = useAppContext()
    const GetAmount = useCallback(async () => {

        try {
            const response = await axios.get(api + '/cartIems');

            if (response.status === 200) {
                if (Array.isArray(response.data.data)) {
                    const totalCartQty = response.data.data.reduce((acc: any, item: any) => acc + item.cart_qty, 0);
                    setAmount(totalCartQty);
                } else {
                    console.log('Invalid data format');
                    return 0;
                }
            }

        } catch (error) {
            return error
        }

    }, [])

    useEffect(() => {
        GetAmount()
    }, [GetAmount])

    return null

}


