import React from "react";
import { Route, Switch } from 'react-router-dom'
import LoginFormContainer from './login/login_form_container'
import StoryListContainer from './story_list/story_list_container'

const Entry = () => {
  return <div>
    <Route exact path='/login'><LoginFormContainer /></Route>
    <Route exact path='/dashboard'><StoryListContainer /></Route>
  </div>
}

export default Entry;