import axios from 'axios';

export default class NodeService {

    getTreeTableNodes() {
        return axios.get('assets/layout/data/treetablenodes.json')
                .then(res => res.data.root);
    }

    getTreeNodes() {
        return axios.get('assets/layout/data/treenodes.json')
                .then(res => res.data.root);
    }

}
