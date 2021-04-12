import React from "react";
import { Route, Switch } from 'react-router-dom'
import LoginFormContainer from './login/login_form_container'
import StoryListContainer from './story_list/story_list_container'
import StoryFormContainer from './story_form/story_form_container'
import { PrivateRoute } from '../util/route_util'
import StoryDetailContainer from './story_detail/story_detail_container'

const Entry = () => {
  return <div>
    <Route exact path='/login' component={LoginFormContainer} />
    <PrivateRoute exact path='/createStory' component={StoryFormContainer} />
    <PrivateRoute exact path='/' component={StoryListContainer} />
    <PrivateRoute path='/story/:id' component={StoryDetailContainer} />
  </div>
}

export default Entry;