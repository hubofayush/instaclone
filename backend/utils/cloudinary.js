import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config({});

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME|| "duklubv0l",
    api_key: process.env.API_KEY || 416838789673828,
    api_secret: process.env.API_SECRET || "4INIeDwR-v3BYTdr5ta0Fgjf-kA"
});
export default cloudinary;
