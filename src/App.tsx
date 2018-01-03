import './App.css';
import * as React from 'react';
import {Component} from 'react';
import Hero from './components/Hero/Hero';
import PowerStatement from "./components/PowerStatement/PowerStatement";
import SoftwareSkills from "./components/SoftwareSkills/SoftwareSkills";
import JobHistory from "./components/JobHistory/JobHistory";
import Languages from "./components/Languages/Languages";
import Education from "./components/Education/Education";
import Heap from 'react-heap'

const logo = require("./logo.svg") as string;

class App extends Component {
  render() {
    return (
      <div className="App">
        {process.env.NODE_ENV === 'production' && <Heap appId="113684961"/>}
        {process.env.NODE_ENV === 'development' && <Heap appId="3493464632"/>}
        <Hero />
        <PowerStatement />
        <SoftwareSkills/>
        <JobHistory/>
        <Languages/>
        <Education/>
      </div>
    );
  }
}

export default App;
