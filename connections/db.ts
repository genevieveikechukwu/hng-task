import mongoose from "mongoose";
export default async function connect() {
    try {
        const uri= process.env.DB;
        if (uri) await mongoose.connect(uri);
        console.log("Database connected");

    } catch (error) {
        console.log(`could not connect to db ${error}`);
        process.exit(1);

    }

}