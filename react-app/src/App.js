import { Route, Routes } from "react-router-dom";

import Nav from "./Nav";
import Header from "./Header";

import Issue from "./pages/issue.js";
import CreateIssue from "./pages/CreateIssue";
import Projects from "./pages/Projects";
import PullRequest from "./pages/PullRequest";
import Code from "./pages/Code";
import Security from "./pages/Security";
import Actions from "./pages/Actions";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { GITHUB_API } from "./api";
import { UserContext } from "./context/UserContext";

function App() {
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   getUserInfo();
  // }, []);

  // async function getUserInfo() {
  //   const data = await axios.get(`${GITHUB_API}/user`, {
  //     headers: {
  //       Authorization: process.env.REACT_APP_GITHUB_TOKEN,
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   setUser(data.data);
  // }
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/new" element={<CreateIssue />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pulls" element={<PullRequest />} />
        <Route path="/code" element={<Code />} />
        <Route path="/security" element={<Security />} />
        <Route path="/actions" element={<Actions />} />
      </Routes>
    </>
  );
}

export default App;
