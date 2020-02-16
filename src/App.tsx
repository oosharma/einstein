import React, { useState, useEffect } from "react";
import { answeredQuestions } from "../src/shared/mockData";
import Navbar from "./components/Navbar/Navbar";
import ListDisplay from "./components/ListDisplay/ListDisplay";
import axios from "axios";
import { Question } from "./components/ListDisplay/types";
import OrganizePage from "./components/OrganizePage/OrganizePage";

const App = () => {
  const [value, setValue] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    axios
      .get("https://warm-crag-35873.herokuapp.com/api/items/")
      .then(({ data }) => setQuestions(data));
  }, []);

  return (
    <>
      <Navbar setValue={setValue} value={value} />
      {value === 0 && (
        <ListDisplay items={questions.filter(({ answer }) => answer)} />
      )}
      {value === 1 && (
        <ListDisplay
          clickable
          items={questions.filter(({ answer }) => !answer)}
        />
      )}
      {value === 2 && <OrganizePage>Get Out</OrganizePage>}
    </>
  );
};

export default App;
