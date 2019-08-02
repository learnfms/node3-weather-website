const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url = 'https://api.darksky.net/forecast/6353e5b0bca14ed60ad824dd5ba9833f/'+latitude+','+longitude+'?units=si'

    request({ url, json: true}, (error, {body})=>{
    
        if(error){
            callback('Unable to connect to weather service',undefined)
        } else if(body.error) {
            callback('Unable to find the location',undefined)
        }
        else {
             callback(undefined,body.daily.data[0].summary +'The current temperature is '+ body.currently.temperature+' degrees out there, So there is a '+ body.currently.precipProbability + '% chance to rain')
        }
    
        // console.log(error)
        // console.log(response.body.currently)
           
    })
}



module.exports = forecast