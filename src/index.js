import React from 'react';
import ReactDOM from 'react-dom';

// Create new component. 
// This component should produce some HTML

//const App = function (){
//	return <div> Hi! </div>;
//}

const App = () => {
	return <div> Hi! </div>;
}
// the only differenct between the above syntax and the => 
// syntax is the vale of 'this'


// Take this component's generated HTML and
// put it on the page (in the DOM)

//React.render(App); //no good
//ReactDOM.render(<App />); //no good
ReactDOM.render(<App />, document.querySelector('.container'));
