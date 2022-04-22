import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

import { connect, useSelector, useDispatch } from "react-redux";
import { setSearchField, requestRobots } from "../actions";

const App = () => {
  // const [robots, setRobots] = useState([]);
  // const [searchfield, setSearchfield] = useState("");

  const dispatch = useDispatch();
  const searchfield = useSelector((state) => state.searchReducer.searchField);
  const robots = useSelector((state) => state.requestRobotsReducer.robots);
  const isPending = useSelector((state) => state.isPending);

  useEffect(() => {
    dispatch(requestRobots());
  }, []);

  const onSearchChange = (event) => {
    const searchField = event.target.value;
    dispatch(setSearchField(searchField));
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchfield={searchfield} searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default connect()(App);
