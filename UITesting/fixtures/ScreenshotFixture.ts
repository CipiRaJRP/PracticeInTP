import {test as LoggerTest,expect} from './LogFixture';
import fs from 'fs';
import path from 'path';

type ScreenshotFixture ={
    captureScreenshot:(name:string)=>Promise<void>;
}

export const test = LoggerTest.extend<ScreenshotFixture>({
    captureScreenshot: (async ({page},use,testInfo)=>{
      
        const ScreenShot_dir = path.join(process.cwd(),"screenshots");

        fs.mkdirSync(ScreenShot_dir,{recursive:true});

        await use(async(name:string)=>{

            const file = path.join(ScreenShot_dir,`${testInfo.title.replace(/\s+/g,"_")}_${name}.png`);

            await page.screenshot({
                path:file,
                fullPage:true
            });

            await testInfo.attach(`${name}_screenshot`,{
                path:file,
                contentType:"image/png"
            });

        });
    }),
});

export {expect};

