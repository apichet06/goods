'use server'

import { api } from '../components/config';
import axios from 'axios';


async function GetAmount() {
    const response = await axios.get(api + '/cartIems');

    if (response.status === 200) {
        if (Array.isArray(response.data.data)) {
            const totalCartQty = response.data.data.reduce((acc: any, item: any) => acc + item.cart_qty, 0);
            return totalCartQty;
        } else {
            console.log('Invalid data format');
            return 0;
        }
    }
}


export async function ProductServer(formData: any) {

    try {
        const { pro_id, qty } = formData;

        const FormData = {
            cart_qty: qty,
            products_id: pro_id,
            users_id: "1"
        };

        const response = await axios.post(api + '/cartIems', FormData);

        if (response.status === 200) {
            console.log("insert success");
            const amount = await GetAmount();

        }
    } catch (error) {
        console.log(error);
        return error;
    }
}
