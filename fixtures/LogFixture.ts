import {test as base,expect} from '@playwright/test'
import fs from 'fs';
import path from 'path';
import { logger,AppLogger } from '../utils/logger';

const MASK = "SENSITIVE_DATA_MASKED";

type LogFixture ={
    log:AppLogger;
}

const sensitive_Keys =[
    "cvv",
    "cardnumber",
    "expiry"
];

function maskData(data:Record<string,unknown>){

    return Object.fromEntries(
        Object.entries(data).map(([key,value])=>{
            return [key,
               sensitive_Keys.includes(key.toLowerCase())?MASK:value
            ];
        })
    )
}

export const test = base.extend<LogFixture>({
 
   log: async({},use,testInfo)=>{
     const test_logs:string[] = [];

     function writeLog(message:string,data:Record<string,unknown> = {}){
          const prefix = `${testInfo.title}`;

          const masked = maskData(data);

          logger.info(`${prefix} ${message}`,masked);

          let text = `${prefix} ${message} ${masked}`;

          if(Object.keys(masked).length){
            text+="\n\n";
            text+=Object.entries(masked)
              .map(([k,v])=>`${k}:${v}`)
              .join("\n");
          }

          test_logs.push(text);
     }

     writeLog("Test Started");

     await use({
        ...logger,
        info:writeLog
     } as AppLogger)

     writeLog(`${testInfo.status}`);

     const folder = path.join(process.cwd(),"test_logs");

     fs.mkdirSync(folder,{recursive:true});

     const file = path.join(folder,
        `${testInfo.title.replace(/\s+/g,"_")}.txt`
     );

     fs.writeFileSync(file,test_logs.join("\n\n"));

     await testInfo.attach("Execution Logs",{
        body:test_logs.join("\n\n"),
        contentType:"text/plain"
     });

   }
})

export {expect};