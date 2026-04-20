import dotenv from "dotenv";
dotenv.config({quite:true});

// module.exports={
//     PORT:`${process.env.PORT}`,
// }
export const ENV={
    PORT:process.env.PORT,
    NODE_ENV:process.env.NODE_ENV,
    DB_URL:process.env.DB_URL,
    CLIENT_URL:process.env.CLIENT_URL,
    JWT_SECRET:process.env.JWT_SECRET || "your-secret-key-change-in-production"
}