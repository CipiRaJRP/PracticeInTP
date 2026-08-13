import winston from 'winston';

const {combine,timestamp,printf} = winston.format;

const logFormat = printf(({level,timestamp,message,...metadata})=>{
    
    let output = `[${timestamp}] ${level.toUpperCase()} : ${message}`;

    if (Object.keys(metadata).length > 0) {
        output += ` ${JSON.stringify(metadata)}`;
    }

    return output;
});

export const logger = winston.createLogger({
    level:"info",
    format:combine(timestamp(),logFormat),
    transports:[
        new winston.transports.Console()
    ],
});

export type AppLogger = typeof logger;


