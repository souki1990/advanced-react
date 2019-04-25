import App from '../components/App';

const reactDOMServer=require('react-dom/server');
const React=require('react');

const serverRender =() =>{
  return reactDOMServer.renderToString(<App/>);
};

export default serverRender;
