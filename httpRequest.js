const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=913763319f73757aaf9e39cada8885c3&query=New%20Delhi'
// request({url :url ,json: true}, (error,response)=>{
//     const out =`Temperature in ${response.body.request.query} is ${response.body.current.temperature} but it feelslike ${response.body.current.feelslike} .`
//     console.log(out)
// })
/********** Handlding Errors ***********/
//const url = 'http://api.weatherstack.com/current?access_key=913763319f73757aaf9e39cada8885c3&query=New%20Delhi'
// Handling no internet error by manually turning off  WiFi
// request({url :url ,json: true}, (error,response)=>{
//     if(error){
//         console.log("Unable to Connect To the Weather Service !!!")
//     }else{
//     const out =`Temperature in ${response.body.request.query} is ${response.body.current.temperature} but it feelslike ${response.body.current.feelslike} .`
//     console.log(out)}
// })

// Handling Boroken URL
const url1 = 'http://api.weatherstack.com/current?access_key=913763319f73757aaf9e39cada8885c3&query='
request({url :url1 ,json: true}, (error,response)=>{
    if(error){
        console.log("Unable to Connect To the Weather Service !!!")
    }
    else if(response.body.error){
        console.log("Unable to Process Your request RightNow")
        console.log(response.body.error.info)
    }else{
    const out =`Temperature in ${response.body.request.query} is ${response.body.current.temperature} but it feelslike ${response.body.current.feelslike} .`
    console.log(out)}
})