import {db as database} from "services"
const db = database.ref("/articles")
var articles = [];
class ArticleService {
    getAll(){
        return db;
    }
    create(article){
        return db.push(article);
    }
    getSingle(key){
        return db.child(key);
    }
    update(key,value){
        return db.child(key).update(value);
    }
    delete(key){
        return db.child(key).remove();
    }
    deleteAll(){
        return db.remove();
    }
}
export default new ArticleService();