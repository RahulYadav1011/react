import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Todos } from "./components/Todos";
import About from "./components/About";
import Contact from "./components/Contact";
import AddContact from './components/AddContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";


function App() {

  let initTodo;
  if (localStorage.getItem("todoslist") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todoslist"));
  }

  const onDelete = (todo) => {
    console.log("im delted", todo);
    setTodo(todoslist.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todoslist", JSON.stringify(todoslist));
  }




  const addcontact = (Name, mobile_no) => {
    console.log("im adding this todo", Name, mobile_no)

    let sno;
    if (todoslist.length === 0) {
      sno = 1;
    }
    else {
      sno = todoslist[todoslist.length - 1].sno + 1;
    }
    const mycontact = {
      sno: sno,
      name: Name,
      mobile_no: mobile_no,
    }
    setTodo([...todoslist, mycontact]);
    console.log(mycontact);
  }


  const [todoslist, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todoslist", JSON.stringify(todoslist));
  }, [todoslist])

  return (
    <div>
      <Router>

        <Header title="Rahul Yadav React Ka project" />

        <Switch>
          <Route exact path="/" render={() => {
            return (
              <div>
                <AddContact addcontact={addcontact} />
                <Todos todos={todoslist} onDelete={onDelete} />
              </div>
            )
          }}>
          </Route>
          <Route exact path="/about"><About />  </Route>

          <Route exact path="/contact"><Contact /></Route>


        </Switch>

        <Footer />

      </Router>
    </div>

  );
}

export default App;
