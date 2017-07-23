import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ImageClassifier from "./ImageClassifier/ImageClassifier";
import About from "./About/About";
import Home from "./Home/Home";
import SimpleMap from "./Map/SimpleMap";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/image-class' component={ImageClassifier}/>
      <Route path='/map' component={SimpleMap}/>
    </Switch>
  </main>
)

export default Main
