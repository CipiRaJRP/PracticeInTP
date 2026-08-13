import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve(__dirname, "../.env")
});

export class Config {
    static readonly baseUrl = process.env.BASEURL!;
    static readonly headed = true;
}