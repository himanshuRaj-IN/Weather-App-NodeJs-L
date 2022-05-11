const request = require('request')

const geocode = (address, callback) =>{
    const mapBoxAcessToken = 'pk.eyJ1IjoiaGltYW5zaHVyYWo5MTk0IiwiYSI6ImNsMzE1NWV2ejAxd3gzZHJubXU0MzBsZGoifQ.R7jLgHFtVkq52yuHOQymxQ'
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token='+mapBoxAcessToken

    request({url:url, json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to the Geocoding Services',undefined)
        }else if(response.body.features.length === 0 ){
            callback('Unable to find the location try with different key words',undefined)
        }else{
            callback(undefined,{
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}
module.exports = geocode 