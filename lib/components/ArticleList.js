import React from 'react';
import ArticleContainer from './Article';


const ArticleList=(props)=>{
  return (
    Object.values(props.state.articles).map(article=>
      <ArticleContainer
        key={article.id}
        article={article}
      />
    )
  );
};

  

export default ArticleList;