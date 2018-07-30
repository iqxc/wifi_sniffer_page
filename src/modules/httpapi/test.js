const api = require('./index.js')

api.querySite({
  PageSize: 1000
}, (res) => {
  console.log(res)
})
