import React from 'react'
import './App.css'
import { Route, Redirect, Switch } from 'react-router-dom'
import HomePage from './pages/home-page/home-page'
import AboutPage from './pages/about-page/about-page'
import Layout from './hoc/layout/layout'
import TodoPage from './pages/todo-page/todo-page'

function App() {


  return (
    <Layout>

      <Switch>
        <Route path={'/'} component={HomePage} exact={true} />
        <Route path={'/about'} component={AboutPage} />
        <Route path={'/todo/:id'} component={TodoPage} />

        <Redirect to={'/'} />
      </Switch>

    </Layout>
  )
}



export default App