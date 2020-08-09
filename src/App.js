import React from "react";

import { Home } from "./Components/Home";
import { Department } from "./Components/Department";
import { Employee } from "./Components/Employee";
import { Navigation } from "./Components/Navigation";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">React JS Demo</h3>
        <h5 className="m-3 d-flex justify-content-center">
          Employee Mamagement Portal
        </h5>

        <Navigation />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/department" component={Department} />
          <Route path="/employee" component={Employee} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       apiResponse:""
//     }
//     this.callApi();
//   }
//   callApi(){
//     fetch("http://localhost:3001/update")
//     .then(res => res.text()).then(res => this.setState({apiResponse:res}));
//   }
//   componentWillMount(){
//     this.callApi();
//   }
//   render(){
//     return(
//         <div>
//           <p>{this.state.apiResponse}</p>
//         </div>

//     );
//   }
// }
// export default App;