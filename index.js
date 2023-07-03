const jsonServer=require("json-server");
const cors=require("cors");

const server=jsonServer.create();
const router=jsonServer.router("db.json");

server.use(router);
server.use(cors())

server.listen(8080,()=>{
    console.log("server is running at 8080")
})