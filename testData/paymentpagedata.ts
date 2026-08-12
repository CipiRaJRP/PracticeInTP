import { Secrets} from '../utils/secrets';
export const paymentpagedata ={

    accountHolder:{
        name:"Rajesh",
    },

    paymentDetails:{
        cardNumber:Secrets.get("card_number"),
        expiry:Secrets.get("expiry"),
        cvv:Secrets.get("cvv")
    }
}