const request = require('request')

const forecast = (latitude, longitude,callback )=>{
    const weatherStackAcessToken = '913763319f73757aaf9e39cada8885c3'
    const url = 'http://api.weatherstack.com/current?access_key='+weatherStackAcessToken+'&query='+latitude+','+longitude+'&units=f'

    request({url:url, json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to the WeatherStack Services',undefined)
        }else if(response.body.error ){
            callback('Unable to get Forcast for the current location  Right Now',undefined)
        }else{
            const forecast =`Temperature is ${response.body.current.temperature} but it feelslike ${response.body.current.feelslike} .`
            callback(undefined,{
               data : forecast
            })
        }
    })
}

module.exports =  forecast
 