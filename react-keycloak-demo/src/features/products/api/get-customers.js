import { api } from '../../../services/api-service';


export const  getCustomers = async () => {
    return api.get("/customer");
}