import DataApi from 'state-api';
import React from 'react';
import ArticleList from './ArticleList';
import axios from 'axios';

class  App extends React.Component {
  state={
    articles:this.props.initialData.articles,
    authors:this.props.initialData.authors,
  }

  async compononentDidMount(){
    const resp = await axios.get('/data');
    const dataApi=new DataApi(resp.data);
    this.setState(()=>({
      articles:dataApi.getArticles(),
      authors:dataApi.getAuthors(),
    }));
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