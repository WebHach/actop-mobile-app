import { Model } from "./Model";

export class Stock extends Model {

    async getAllStocks() {
        let response = await fetch(this.url + '/v1/stock');
        return response.json();
    }

}