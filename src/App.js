// Практическая работа
import React from "react";
import Profile from "./practice/profile";
import Congratulations from "./practice/congratulations";
import TodoList from "./practice/person";
import PackingList from "./practice/list"
import LightSwitch from "./practice/light_switch";
import Signup from "./practice/signup";
import Toolbar from "./practice/toolbar";
import Form from "./practice/form";
import FeedbackForm from "./practice/feedback";

function App() {
  return (
    <div className="App">
      <Profile />
      <Congratulations/>
      <TodoList />
      <PackingList/>
      <LightSwitch/>
      <Signup/>
      <Toolbar/>
      <Form/>
      <FeedbackForm/>
    </div>
  );
}

export default App;