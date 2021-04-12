import $ from "jquery"


export const login = (user) =>
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/v1/signin',
    data: user
  })
