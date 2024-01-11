'use server'

import { api } from '../components/config';
import axios from 'axios';

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


        }
    } catch (error) {
        console.log(error);
        return error;
    }
}
