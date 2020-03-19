import { Model } from "./Model";

export class Company extends Model {

    async getAllCompany() {
        let response = await fetch(this.url + '/v1/company');
        let a = await response.json();
        return a;
    }

}