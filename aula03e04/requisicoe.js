
const axios = require('axios')

//  GET
axios.get('http://localhost:3001/usuraios').then(
    response => { console.log(response.data) }
).catch(error => { console.error(error) })

// POST
// axios.post('http://localhost:3001/usuraios',{
//     nome:"Carla"
// }).then(
//     response => { console.log(response.data) }
// ).catch(error => { console.error(error) })

axios.put('http://localhost:3001/usuraios/2', {
    nome:"Lucas"
}).then(
    response => { console.log(response.data) }
).catch(error => { console.error(error) })

axios.delete('http://localhost:3001/usuraios/f9da').then(
    response => { console.log(response.data) }
).catch(error => { console.error(error) })