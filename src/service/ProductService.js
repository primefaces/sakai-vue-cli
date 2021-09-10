import axios from 'axios';

export default class ProductService {

    getProductsSmall() {
		return axios.get('assets/data/products-small.json').then(res => res.data.data);
	}

	getProducts() {
		return axios.get('assets/data/products.json').then(res => res.data.data);
    }

    getProductsWithOrdersSmall() {
		return axios.get('assets/data/products-orders-small.json').then(res => res.data.data);
	}
}
