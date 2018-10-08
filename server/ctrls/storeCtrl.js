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
       return  (arr.length)?'@'+arr.filter(item => !!item).join('@')+'@':'';
    }
    getDataFromStore(metaData){
        console.log("metadata", metaData)
        let path = 
        console.log(path)
        return this.store.getDataFromStore(this.convertToPath(Object.values(metaData)));
    }
    deleteStatus(id){
        return this.post.deleteStatus(id);
    }
    likeStatus(id, like){
        return this.post.likeStatus(id, like);
    }
    addComment(id, comment){
        comment.id = Date.now();
        return this.post.addComment(id, comment);
    }
    deleteComment(id, commentId){
        return this.post.deleteComment(id, commentId);
    }
    likeComment(id, commentId){
        return this.post.likeComment(id, commentId);
    }

    
}

export default StoreCtrl;