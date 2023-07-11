import React from "react";
import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx"
import Searchpage from "./Searchpage.jsx"
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import VideoRecommend from "./VideoRecommend.jsx"
function App()
{
    return (
        <div>
        <Router>
         <Header />
            <Switch>
            <Route path="/search">
                 <div className="search_view">
                 <Sidebar />
                 <Searchpage />
        </div>
                
            </Route>
            <Route path="/">
               
        <div className="app_page">
        <Sidebar />
        <VideoRecommend className="recommend" />
        </div>
            </Route>
        </Switch>
        </Router>
       
         </div>
    )
}
export default App;