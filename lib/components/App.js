import DataApi from 'state-api';
//import {data} from '../testData.json';
import React from 'react';
import ArticleList from './ArticleList';
import axios from 'axios';

//const api=new DataApi(data);
class  App extends React.Component {
  //TODO add initial data
  //whats the purpose of keeping client side api calling and server side passing data???
  state={
    articles:{},
    authors:{},
  }
  constructor(){
    super();
    // eslint-disable-next-line linebreak-style
    //since the data is asynchronous it has to be removed from the constructor
/*     this.state={
      articles: api.getArticles(),
      authors :api.getAuthors()
    }; */
  }

  async compononentDidMount(){
//fetchin data
  const resp=await axios.fetch('/data');
  const dataApi=new DataApi(resp.data);
  this.setState(()=>{
    articles:dataApi.getArticles();
    authors:dataApi.getAuthors();
  });

  }
    articleActions={
      lookForAuthor:authorId=>this.state.authors[authorId]
    }
    render(){
      return(
        <div>
          <ArticleList
            articles={this.state.articles}
            articleActions={this.articleActions}
          />
        </div>
  
      );
    }
}
export default App;