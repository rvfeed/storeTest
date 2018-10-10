import StoreModel from "../model/storeModel";
class StoreCtrl{
    post;
    constructor(){
        this.store = new StoreModel();
    }    
    login(userData){
        return this.post.findUser(userData);        
    }
    saveStatus(post){
        return this.post.savePost(post);
    }
    getDepartment(id){
        return this.post.getDepartment(id);
    }
    convertToPath(arr = []){                 
       return  (arr.length)?'@'+arr.join('@')+'@':'';
    }
    getDataFromStore(metaData){
        console.log("metadata", metaData)
   //     let path = 
   //     console.log(path)
        return this.store.getDataFromStore(this.convertToPath(Object.values(metaData).filter(item => !!item)));
    }
    deleteRecord(id){
        return this.post.deleteStatus(id);
    }
    
    addRecord(id, comment){
        comment.id = Date.now();
        return this.post.addComment(id, comment);
    }
   
    
}

export default StoreCtrl;