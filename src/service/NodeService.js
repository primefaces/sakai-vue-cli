import axios from 'axios';

export default class NodeService {

	getFilesystem() {
		return axios.get('assets/layout/data/filesystem.json').then(res => res.data.data);
	}

	getTreeNodes() {
		return axios.get('assets/layout/data/treenodes.json').then(res => res.data.root);
	}

	getTreeTableNodes() {
		return axios.get('assets/layout/data/treetablenodes.json').then(res => res.data.root);
	}
}