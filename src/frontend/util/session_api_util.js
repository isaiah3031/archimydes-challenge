import $ from "jquery"

export const login = (user) => {
  debugger
  return $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/v1/signin',
    data: user
  })
}