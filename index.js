const json_server= require('json-server')
const cors=require('cors')

// create json server
const jobPortal=json_server.create()

//create a middleware for json0js data conversion
const middleware=json_server.defaults()

// create a route for connect json filw with main file (index.js)
const route=json_server.router('jobs.json')

// apply cors
jobPortal.use(cors())

// apply middleware as aplication specific middleware
jobPortal.use(middleware)

// apply route
jobPortal.use(route)


const PORT=8000
jobPortal.listen(PORT,()=>{
    console.log(`____job portal app Server Started at ${PORT}____`);
})