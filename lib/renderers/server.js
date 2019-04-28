import App from '../components/App';
import ReactDOMServer from 'react-dom/server';
import React from 'React';
import axios from 'axios';
import StoreApi from 'state-api';
import config from 'config';

const serverRender = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StoreApi(resp.data);
  return {
    initialMarkup: ReactDOMServer.renderToString( <App store = {
      store
    }/>),
    initialData:resp.data
  };
};

export default serverRender;
