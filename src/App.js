import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchPizza } from './redux/async/fetchPizza'

import { Home } from './pages/Home'
import Cart from './pages/Cart.jsx'
import Header from './Components/Header'

import './App.css'

const App = () => {
  const dispatch = useDispatch()
  React.useEffect(
    () => {
      dispatch(fetchPizza())
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  )
}
export default App
