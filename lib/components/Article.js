import React from 'react';

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

const Article = (props) => {
  const { article, actions } = props;
  const author = actions.lookForAuthor(article.authorId);

  return (
    <div style={styles.articles}>
      <div style={styles.article}>
        <div style={styles.title}>{article.title}</div>
        <div style={styles.date}>{article.date}</div>
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

export default Article;