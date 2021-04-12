import $ from 'jquery'
import { authHeader } from '../../_helpers/auth_header'

export const fetchStoryList = () =>
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/v1/stories',
    headers: authHeader()
  })

export const createStory = (story) =>
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/v1/stories',
    data: story,
    headers: authHeader()
  })