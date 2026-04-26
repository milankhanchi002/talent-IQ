import {StreamChat} from "stream-chat";
import { ENV } from "./env";
import { use } from "react";

const apiKey=ENV.STREAM_API_KEY;
const apiSecret=ENV.STREAM_API_SECRET;

if(!apiKey || !apiSecret){
    throw new Error("STREAM_API_KEY and STREAM_API_SECRET must be defined in .env file");
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);
export const upsertStreamUser=async(userData)=>{
    try{
        await chatClient.upsertUser(userData)
        return userData
    } catch (error) {
        console.error("Error upserting stream user:", error)
    }
}
export const deleteStreamUser=async(userId)=>{
    try{
        await chatClient.deleteUser(userId)
    } catch (error) {
        console.error("Error deleting stream user:", error)
    }
}
