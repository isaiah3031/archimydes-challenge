import $ from 'jquery'

export const fetchStoryList = () =>
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/v1/stories'
  })

export const createStory = (story) =>
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/v1/stories',
    data: story
  })