import config from '../config';
import mongodb from 'mongodb';
class ConnectMongo{
    dbUrl;
    dbo;
    db;
    ObjectId;
    constructor(){
        console.log("conn:",this instanceof ConnectMongo)
        if(!(this instanceof ConnectMongo)) return new ConnectMongo();
        this.dbUrl = config.db;
        this.ObjectId = mongodb.ObjectID;
        mongodb.MongoClient.connect(config.db,{poolSize: 10},  (err, db) => {
                if(err){
                    throw err;
                } else{   
                    this.db = db;                 
                    this.dbo = this.db.db(config.database);                }                
            });
    }
    connect(){ }
    
    disconnect(){
        this.db.close();
    }
}

export default new ConnectMongo();