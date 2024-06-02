import axios from "../api/api";

const ProductService = {
    getProduct: async () => {
        const data = await axios.get(`/products`)
        return data;
    },

    getProductId: async (id) => {
        const data = await axios.get(`/products/${id}`)
        return data;
    },

    getProductSearch: async (value) => {
        const data = await axios.get(`/products/search?q=${value}`)
        return data;
    },

};



export default ProductService;