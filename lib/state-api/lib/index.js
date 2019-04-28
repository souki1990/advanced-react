
class DataApi{

  constructor(data){
    this.articles= this.mapIntoObject(data.articles);
    this.authors= this.mapIntoObject(data.authors);

  }

  mapIntoObject(arr){
    return arr.reduce((acc,curr)=>{
      acc[curr.id]=curr;
      return acc;
    },{});
  }

  //class properties to avoid (bind to this)
  lookForAuthor=(authorId)=>{
    return this.authors[authorId];
  }



  //class properties to avoid (bind to this)
  getState=()=>{
    return {
      articles:this.articles,
      authors:this.authors
    }
  }
}

export default DataApi;