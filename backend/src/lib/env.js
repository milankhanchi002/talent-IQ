import dotenv from "dotenv";
dotenv.config();

// module.exports={
//     PORT:`${process.env.PORT}`,
// }
export const ENV={
    PORT:process.env.PORT,
}