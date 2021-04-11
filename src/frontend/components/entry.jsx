import React from "react";
import { Route, Switch } from 'react-router-dom'
import LoginFormContainer from './login/login_form_container'
// import StoryList from './stories/story_list_container'

const Entry = () => {
  return <div>
    <Route exact path='/login'><LoginFormContainer /></Route>
    {/* <Route exact path='/dashboard'><StoryListConatainer /></Route> */}
  </div>
}

export default Entry;