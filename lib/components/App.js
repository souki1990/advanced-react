import React from 'react';
import ArticleList from './ArticleList';


export const StoreContext = React.createContext({});

class App extends React.Component {

	state = this.props.store.getState();

	render() {
	  return ( <
	    StoreContext.Provider value = {
	      this.props.store
	    } > {
	      this.props.children
	    } <
	      ArticleList state = {
	        this.state
	      }
	    /> <
	  /StoreContext.Provider>  
	  );
	}
}
export default App;
