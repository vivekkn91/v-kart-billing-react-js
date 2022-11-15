import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loginorm from "./loginForm_overview";
import Dashbord from "./dashbord/dashbordoverview";

class Navigator extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/dashbord">
            <Dashbord />
          </Route>
          <Route path="/">
            <Loginorm />
          </Route>

          {/*/======================== Admin ==========================//*/}
        </Switch>
      </Router>
    );
  }
}

function Home() {
  return (
    <div style={{ paddingTop: "20%", textAlign: "center" }}>
      <h1>Home</h1>
    </div>
  );
}

// function Pagenotfound(){
// return (
// <h1>Page Not found</h1>

// );
// }

export default Navigator;
