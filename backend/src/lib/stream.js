import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

console.log("Stream API Key:", apiKey ? "Set" : "Not set");
console.log("Stream API Secret:", apiSecret ? "Set" : "Not set");

if (!apiKey || !apiSecret) {
    throw new Error("STREAM_API_KEY and STREAM_API_SECRET must be defined in .env file");
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);
console.log("Stream Chat client initialized successfully");

export const upsertStreamUser = async (userData) => {
    try {
        await chatClient.upsertUser(userData);
        return userData;
    } catch (error) {
        console.error("Error upserting stream user:", error);
    }
};

export const deleteStreamUser = async (userId) => {
    try {
        await chatClient.deleteUser(userId);
    } catch (error) {
        console.error("Error deleting stream user:", error);
    }
};