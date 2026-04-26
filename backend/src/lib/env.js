import dotenv from "dotenv";
dotenv.config({quite:true});


export const ENV={
    PORT:process.env.PORT,
    NODE_ENV:process.env.NODE_ENV,
    DB_URL:process.env.DB_URL,
    CLIENT_URL:process.env.CLIENT_URL,
    JWT_SECRET:process.env.JWT_SECRET || "your-secret-key-change-in-production",
    STREAM_API_KEY:process.env.STREAM_API_KEY,
    STREAM_API_SECRET:process.env.STREAM_API_SECRET
}