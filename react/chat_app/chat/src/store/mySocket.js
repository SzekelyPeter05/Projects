import socketIOClient from "socket.io-client";

var socket   = socketIOClient("http://localhost:3000/",{timeout: 90000});
socket.onerror = (err) => {

}
 /*, 'polling'*/

 socket.on('disconnect', function(){
   
});
socket.on('connect_timeout', (timeout) => {
   
  });
  socket.on('reconnect_failed', (timeout) => {
       
});
socket.on('pong', function(data) {
    console.log('Received Pong: ', data)});
  
// on reconnection, reset the transports option, as the Websocket
// connection may have failed (caused by proxy, firewall, browser, ...)
socket.on('reconnect_attempt', () => {
   

});
socket.on('reconnect_failed', () => {
   

});


socket.on('connect_failed', function() {
    
})


export default socket;