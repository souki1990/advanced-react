
class DataApi{

    constructor(rawData){
        this.data=rawData;    
    }

    mapIntoObject(arr){
           return arr.reduce((acc,curr)=>{
                acc[curr.id]=curr;
                return acc;
            },{})
    }

    getArticles(){
        
        return this.mapIntoObject(this.data.articles);

    }
    getAuthors(){
        return this.mapIntoObject(this.data.authors);
    }
}

export default DataApi;