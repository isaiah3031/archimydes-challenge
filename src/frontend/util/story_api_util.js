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
    contentType: 'application/json',
    type: 'POST',
    url: 'http://localhost:3000/api/v1/stories',
    data: JSON.stringify(story),
    headers: authHeader()
  })

export const setStatus = (id, status) =>
  $.ajax({
    contentType: 'application/json',
    type: 'PUT',
    url: `http://localhost:3000/api/v1/stories/${id}/${status}`,
    headers: authHeader()
  })

export const getStory = (id) =>
  $.ajax({
    contentType: 'application/json',
    type: 'GET',
    url: `http://localhost:3000/api/v1/stories/${id}`,
    headers: authHeader()
  })