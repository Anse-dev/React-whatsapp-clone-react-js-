/* Components import  */
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";

/* Styles */
import { GlobalStyles } from "./GlobalStyles";
import { useStateValue } from "./store/StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <>
      <div className="App">
        {!user ? (
          <Login />
        ) : (
          <div className="App-inner">
            <Router>
              <Sidebar />
              <Switch>
                <Route path="/chat/:friendId">
                  <Chat />
                </Route>
                <Route path="/">
                  <Chat />
                </Route>
              </Switch>
            </Router>
          </div>
        )}
      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
