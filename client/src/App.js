import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './styles/App.css';
import './styles/Dashboard.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './components/MainPage/Main';
import Login from './components/Widgets/Login';
import Register from './components/Widgets/CreateAccount';
import MyRecipes from './components/MyRecipes/MyRecipes';
import NewRecipe from './components/MyRecipes/NewRecipe';
import MyProfile from './components/MyProfile/MyProfile';
import Category from './components/Category/Category';
import ResetPassForm from './components/Reset/ResetPassForm';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/register'>
            <Register />
          </Route>

          <Route path='/myrecipes'>
            <MyRecipes />
          </Route>

          <Route path='/newrecipe'>
            <NewRecipe />
          </Route>

          <Route exact path='/myprofile'>
            <MyProfile />
          </Route>
          
          <Route exact path='/reset-password'>
            <ResetPassForm />
          </Route>

          <Route exact path='/'>
            <Main />
          </Route>

          <Route exact path='/:category'>
            <Category />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>
      </Switch>
    </BrowserRouter>
  )
}

const NotFound = () => {
return <div>Error 404!</div>
}

export default App;