const http=require("http");
const host ='localhost'
const port =5000;
const requestListener =function(req,res){
res.WriteHead(200);
res.end("my first server")
};
const server =http.createServer(requestListener);
server.listen(port,host ,()=>{
    console.log(`server is running on port ${port}`);
});