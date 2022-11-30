import express from 'express'
import mongoose from "mongoose";


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/tuiter'

console.log(process.env.DB_CONNECTION_STRING+"yo")
mongoose.connect(CONNECTION_STRING);

import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'

const app = express()
app.use(express.json());
app.use(cors())
HelloController(app)
UserController(app)
TuitsController(app);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`))