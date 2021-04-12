import $ from "jquery"


export const login = (user) =>
  $.ajax({
    contentType: 'application/json',
    type: 'POST',
    url: 'http://localhost:3000/api/v1/signin',
    data: JSON.stringify(user)
  })
