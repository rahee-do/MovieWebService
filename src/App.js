import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./routes/Home";
import Effects from "./routes/Effects";
import ToDoList from "./routes/ToDoList";
import Coins from "./routes/Coins";
import LatestMovie from "./routes/LatestMovie";
import Detail from "./routes/Detail";

function App() {
    // BrowserRouter 와 HashRouter 의 차이점
    // BrowserRouter 사용했을 때 url => http://localhost:3000/movies
    // HashRouter 사용했을 때 url => http://localhost:3000/#/movies

  return (
    <Router>
      {/* Switch 는 route(url) 를 찾아주는 역할 */}
      {/* 한번에 하나의 router 만 렌더링해주기 위해서 사용. */}
      <Switch>
          {/* Route 태그 내에 path 지정과 Route 안에 Component 를 넣어준다. */}
          <Route path="/effects">
              <Effects />
          </Route>
          <Route path="/todos">
              <ToDoList />
          </Route>
          <Route path="/coins">
              <Coins />
          </Route>
          <Route path="/movie">
              <LatestMovie />
          </Route>
          <Route path="/detail/:id">
              <Detail />
          </Route>
          <Route path="/">
              <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
