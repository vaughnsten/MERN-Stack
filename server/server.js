import express from 'express';
// import devBundle from './devBundle';
import path from 'path';
import template from './../template.js';
import { MongoClient } from 'mongodb';

const app = express();
// devBundle.compile(app);
const CURRENT_WORKING_DIR = process.cwd();
app.use('/dist',
express.static(path.join(CURRENT_WORKING_DIR, 'dist')));
app.get('/', (req, res) => {
    res.status(200).send(template());
});

let port = process.env.PORT || 7050;
app.listen(port, function onStart(err) {
     if(err){
         console.log(err);
     }
     console.info(`Server started on port %s.`, port);
});
//app.listen(port, () => console.log(`Server running on port ${port}`));

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-projects'

MongoClient.connect(url, (err,db)=>{
    console.log("Connected successfully to mongodb server");
    db.close();
});