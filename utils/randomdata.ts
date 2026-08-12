
export class randomData{

    static getEmail(name:string):string{
        return `${name}@test.com`;
    }

    static getPhoneNumber():string{
        let phone = "9";

        for(let i=0;i < 9;i++){
          phone+=Math.floor(Math.random() * 10);
        }

        return phone;
    }

    static getZipCode():string{
        let code = "6";
        
        for(let i=0;i <4;i++){
            code+=Math.floor(Math.random() * 10);
        }

        return code;
    }
}