import app from './app';
import * as dotenv from "dotenv";

dotenv.config({path:"./env/config.env"});

const PORT = process.env.API_PORT || 1000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});