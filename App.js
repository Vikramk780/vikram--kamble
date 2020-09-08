import React from "react"
import Main from "./components/Main";
import Post from './components/Post';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import User from "./components/User";
import Gallary from "./components/Gallary";
import Todo from "./components/Todo";
class App extends React.Component{
    render(){
        return(   
          <BrowserRouter>
           <Switch>
           <Route exact path="/todo" component={Todo}></Route>
           <Route exact path="/gallary" component={Gallary}></Route>
           <Route exact path="/post" component={Post}></Route>
           <Route exact path="/" component={Main}></Route>
           <Route exact path="/user" component={User}></Route>
           <Route exact path="/user:id" component={User}></Route>
          </Switch>
          </BrowserRouter>
        )
    }
}
export default App;

