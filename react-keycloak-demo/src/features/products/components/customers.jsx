import { useEffect, useState } from 'react';
import { getCustomers } from '../api/get-customers';

const fetchCustomers = async () => {
    const customers = await getCustomers();
    return customers;
};

export default function Customers() {

    const [customers, setCustomers] = useState([]);
    
    useEffect(() => {
        fetchCustomers().then((customers) => setCustomers(customers));
    }
    , []);

    return (
        <div>
        <h4>Example data showing result from api request:</h4>
        <h4>Customers</h4>
        <ul>
            {customers.map((customer) => (
            <li key={customer.id}>{customer.name}</li>
            ))}
        </ul>
        </div>
    );
}