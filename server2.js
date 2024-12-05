import { createServer } from 'http'

const PORT = process.env.PORT;
const users = [
    { id: 1, name: 'LEO', email: 'leo@example.com' },
    { id: 2, name: 'sim', email: 'sims@example.com' },
    { id: 3, name: 'Simson', email: 'simson@example.com' }
]

const logger = (req,res,next)=>{
    console.log(`Method: ${req.method} Url: ${req.url}`);
    next();    
}

// json middleware handler
const jsonMiddleWareHandler = (req,res,next)=>{
    res.setHeader('Content-type','application/json')
    next();
}

// all user handle
const userHandler = (res,req)=>{
    res.write(JSON.stringify(users));
    res.end();
}
const getUserByIdHandler = (res,req)=>{
    const id = req.url.split('/')[3];
    const user = users.find(u=>u.id===parseInt(id))
    if(user){
        res.write(JSON.stringify(user))
        res.end()
    }else{
        noDatahandler(res,req);
    }
}
// no data
const noDatahandler = (res,req)=>{
    res.statusCode = 404;
    res.write(JSON.stringify({'message':'no data found'}))
    res.end()
}
const server = createServer((req, res) => {
    logger(req,res,()=>{
        jsonMiddleWareHandler(req,res,()=>{
            if( req.url==='/api/users' && req.method==='GET'){
                userHandler(res,req)
            }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                getUserByIdHandler(res,req)
            }else{
                noDatahandler(res,req)
            }
        })
    })
})

server.listen(9003, () => {
    console.log(`server is running on port ${PORT}`);
})