const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=913763319f73757aaf9e39cada8885c3&query=New%20Delhi'
request({url :url ,json: true}, (error,response)=>{
    const out =` Temperature in ${response.body.request.query} is ${response.body.current.temperature} but if feelslike ${response.body.current.feelslike} .`
    console.log(out)
})