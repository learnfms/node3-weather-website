const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address) +'.json?limit=2&access_token=pk.eyJ1IjoibGVhcm5mbXMiLCJhIjoiY2p5MWdydjcxMGR0bzNpcDJ1c3V1dDZjbyJ9.OvL3FivnQx9ol8cYbak-MQ&limit=1'

    request({ url, json: true},(error, {body})=>{
        if(error){
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode