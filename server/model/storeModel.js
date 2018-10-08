import mongoDb from "../db/connectDb";
import schema from "../schema/schema"
import mongodb from 'mongodb';
/*
db.getCollection('storeData').aggregate([

{$project: {"_id": 0, "LOCATION":1, "DEPARTMENT": 1, "CATEGORY": 1,  "SUBCATEGORY": 1}},
//{$project: { "_id": "$DEPARTMENT" , 'path': {$concat: ["*", "$DEPARTMENT","*","@", "$LOCATION", "@", "*name:","department"]}, }},
//{$project: { "_id": "$CATEGORY" , 'path': {$concat: ["*", "$CATEGORY","*","@", "$LOCATION", "@", "$DEPARTMENT", "@", "*name:","category"]}}},
      {$project: { "_id": "$SUBCATEGORY" , 'path': {$concat: ["*", "$SUBCATEGORY","*",  "@", "$LOCATION", "@", "$DEPARTMENT", "@", "$CATEGORY", "@", "*name:","subcatogery"
]}}},
      {$group: {_id: "$path"}},
])
*/
class StoreModel{
    post;
    constructor(){
        this.post = schema.post;       
    }
    findUser(user){
        return mongoDb.dbo.collection("users").findOne({"username": user });       
    }
    savePost(data){
      //  this.post.status = data;
        console.log("asdfasd", data);        
        return  mongoDb.dbo.collection("posts").insert({status: data});
    }
    updatePost(record, post){} 
    getAllLocations(){
        return new Promise((resolve, reject) => {  
             mongoDb.dbo.collection("storepath")
                    .find({path:null}, {_id:0, name: 1, path: 0})
                    .sort({"_id": -1})
                    .toArray((err, posts) => { 
                        if(err){
                        reject(err);
                    }    

                    resolve(posts);
                });
        });
    }
    getDataFromStore(id){
        console.log(id)
        return new Promise((resolve, reject) => {  
             mongoDb.dbo.collection("storeAlterData")
                    .find({PATH:{$regex:new RegExp(id, "gi")}})
                    .sort({"_id": -1})
                    .toArray((err, post) => { 
                        if(err){
                        reject(err);
                    }
                        resolve(post);
                });
        });
    }
    
    
    deleteStatus(id){     
          return  mongoDb.dbo.collection("posts").update({_id: mongodb.ObjectID(id)}, {$set: {deleted: 1}})
    }
    likeStatus(id, val){
          return  mongoDb.dbo.collection("posts").update({_id: mongodb.ObjectID(id)}, {$inc: {likes: val}});
    }
    addComment(id, val){
        return  mongoDb.dbo.collection("posts").update({_id: mongodb.ObjectID(id)}, {$addToSet: {comments: val}});
    }
    deleteComment(id, val){
        return  mongoDb.dbo.collection("posts").update({_id: mongodb.ObjectID(id)}, {$pull: {comments: {id: val}}});
    }
    likeComment(id, val){
        return  mongoDb.dbo.collection("posts").update({_id: mongodb.ObjectID(id), "comments.id": val },
         {$inc: {"comments.$.likes": 1}});
    }
    
}

export default StoreModel;