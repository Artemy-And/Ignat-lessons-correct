import React, { useState } from "react";
import "./App.css";
import Hello from "./Components/Hello";
import ThingsToDo from "./Components/ThingsToDo";

import ControlledInputSpanEmptyArray from "./Components/ControlledInputSpanEmptyArray";
import ControlledInputSpanEmptyArrayMy from "./Components/ControlledInputSpanEmptyArrayMy";
import UncontrolledRating from "../../../react-kabzda-kak-prosto/8-typescript-callbacks/src/components/Rating/UncontrolledRating";
import UnControlledInputSpanEmptyArray from "./Components/UnControlledInputSpanEmptyArray";
import { v1 } from "uuid";
import InputNyaNew from "./Components/InputNyaNew"
import ButtonNyaNew from "./Components/ButtonNyaNew ";
import Junior from "./Components/5lesson/Junior";
import JuniorPlus from "./Components/5lesson/JuniorPlus";
import PreJunior from "./Components/5lesson/PreJunior";
import { Link, Router, BrowserRouter, Route, HashRouter } from "react-router-dom";


export type exampleType = {
  id: number;
  key: number;
  n: string;
  p: string;
};

export type filterValueType = "all" | "hight" | "middle" | "low";

const App = () => {
  let [title, setTitle] = useState<string>("");







  let [example, setExample] = useState([
    { id: 1, key: 55, n: "Work", p: "Hight" },
    { id: 2, key: 55, n: "Chill", p: "Middle" },
    { id: 3, key: 55, n: "Games", p: "Low" },
    { id: 4, key: 55, n: "React", p: "Hight" },
    { id: 5, key: 55, n: "HTML", p: "low" },
  ]);

  let [filter, setFilter] = useState<filterValueType>("all");

  function removeExample(id: number) {
    let filtredExample = example.filter((t) => t.id !== id);
    setExample(filtredExample);
  }
  function changeFilter(value: filterValueType) {
    setFilter(value);
  }

  let filterValue = example;
  if (filter === "hight") {
    filterValue = example.filter((thing) => thing.p === "Hight");
  }
  if (filter === "middle") {
    filterValue = example.filter((thing) => thing.p === "Middle");
  }
  if (filter === "low") {
    filterValue = example.filter((thing) => thing.p === "Low");
  }

  return (
      <HashRouter>
    <div>

      <Hello name="Artemy" surname="Andruschak" />
      <div>
        <ThingsToDo
          example={filterValue}
          removeExample={removeExample}
          changeFilter={changeFilter}
        />
      </div>
      <br />
      <br />
      <div>
        {/*<ControlledInputSpanEmptyArray value={title} setTitle={setTitle} />*/}
        <ControlledInputSpanEmptyArrayMy value={title} setTitle={setTitle} />
        {/*<UnControlledInputSpanEmptyArray />*/}

      </div>
      <div><br /><br /><br />

      </div>
<Route path={"/juniorPlus"} render={() => <JuniorPlus message={"JuniorPlus"}  />}/>
<Route path={"/junior"} render={() => <Junior message={"Junior"} />}/>
<Route path={"/preJunior"} render={() =>  <PreJunior message={"PreJunior"} />}/>

    </div>
      </HashRouter>
  );
};

export default App;
