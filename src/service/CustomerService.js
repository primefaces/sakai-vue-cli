import axios from 'axios'

export default class CustomerService {

	getCustomersSmall() {
		return axios.get('assets//data/customers-small.json').then(res => res.data.data);
    }

    getCustomersMedium() {
		return axios.get('assets//data/customers-medium.json').then(res => res.data.data);
    }

    getCustomersLarge() {
		return axios.get('assets//data/customers-large.json').then(res => res.data.data);
    }

    getCustomersXLarge() {
		return axios.get('assets//data/customers-xlarge.json').then(res => res.data.data);
	}
}
