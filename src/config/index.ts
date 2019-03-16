import express from "express";
import errorhandler from "errorhandler";
import dotenv from "dotenv";

//let configPath = '';
dotenv.config({ path: "src/config/.env" });



function setUp(app: express.Application) {
    if (process.env.DEBUG) {
        console.info('Warning: DEBUG=true');
    }
    if (process.env.DEBUG) {
        app.use(errorhandler());
    };
}



export { setUp };
export default setUp;