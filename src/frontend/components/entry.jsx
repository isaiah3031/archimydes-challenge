import React from "react";
import { Route, Switch } from 'react-router-dom'
import LoginFormContainer from './login/login_form_container'

const Entry = () => {
  return <div>
    <Route exact path='/login'><LoginFormContainer /></Route>
  </div>
}

export default Entry;