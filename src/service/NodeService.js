import axios from 'axios';

export default class NodeService {

    getTreeTableNodes() {
        return axios.get('assets//data/treetablenodes.json')
                .then(res => res.data.root);
    }

    getTreeNodes() {
        return axios.get('assets//data/treenodes.json')
                .then(res => res.data.root);
    }

}
