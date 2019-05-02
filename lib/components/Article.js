import React from 'react';
import {StoreContext} from './App';
import PropTypes from 'prop-types';


const styles = {
  articles : {
    width: 800,
    fontFamily: 'Helvetica Neue'
  },
  article: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#54b7ff',
    paddingBottom: 10
  },
  title: {
    paddingBottom: 10
  },
  link: {
    textDecoration: 'none',
    color: '#531fa3'
  },
  date: {
    paddingBottom: 10
  },
  author: {
    paddingBottom: 10
  },
  body: {
    paddingBottom: 10
  }
};


const Article=(props)=>{
  const article=props.article;
  const author = props.store.lookForAuthor(article.authorId);
  return(
    <div style={styles.articles}>
      <div style={styles.article}>
        <div style={styles.title}>{article.title}</div>
        <div style={styles.date}>{}</div>
      </div>

      <div style={styles.author}>
        <a href={author.website} style={styles.link}>
          {author.firstName} {author.lastName}
        </a>
      </div>

      <div style={styles.body}>
        <div>{article.body}</div>
      </div>
    </div>
  );
};

const  ArticleContainer=(props)=>
  (<StoreContext.Consumer>
    {(context) => (
      <Article {...props} store={context}/>)
    }
  </StoreContext.Consumer>
  );
  
Article.propTypes = {
  article:PropTypes.shape({
    date:PropTypes.string.isRequired
  })
};

export default ArticleContainer;