

const process = require('process')
const url ='https://api.publicapis.org/entries';
// GET Request.

var arg = process.argv.slice(2,3)
var limit = process.argv.slice(3,4)

fetch(`${url}?category=${arg}`)
    // Handle success
    .then(response => response.json())  // convert to json
    .then(
            (json) => {
                json.entries? json.entries.slice(0,limit).forEach(element => {
                    console.log(element)
                }
                ):console.log('no result')
            }
    )    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors