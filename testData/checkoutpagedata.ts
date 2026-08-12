import { randomData } from '../utils/randomdata';
export const checkoutpagedata ={

    userDetails:{
        name:"Rajesh",
        email: randomData.getEmail("rajesh"),
        phone: randomData.getPhoneNumber(),
        address: "123 Main Street",
        city: "Texas",
        zipcode: randomData.getZipCode(),
        state:"GA"
    }
}