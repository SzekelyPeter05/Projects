import socketIOClient from "socket.io-client";


var joinServerParameters = { token: "xxx"   };   
var socket   = socketIOClient("http://localhost:3000/",{transports: [ 'polling' ], timeout: 90000, query: 'joinServerParameters=' + JSON.stringify(joinServerParameters) });
socket.open();
socket.onerror = (err) => {

}

socket.onopen = ()=> {}

socket.onclose = function (event) {
  
  // Connection closed.
  // Firstly, check the reason.
  
  if (event.code !== 1000) {
     // Error code 1000 means that the connection was closed normally.
     // Try to reconnect.
 
    
     
  }
}
socket.onmessage = function (event) {
  alert(event.data);
}
 /*, 'polling'*/

 socket.on('disconnect', function(){
 
   
});
socket.on('connect_timeout', (timeout) => {
   
  });
  socket.on('reconnect_failed', (timeout) => {
       alert();
});
socket.on('pong', function(data) {});
   
  
// on reconnection, reset the transports option, as the Websocket
// connection may have failed (caused by proxy, firewall, browser, ...)
socket.on('reconnect_attempt', () => {
   

});
socket.on('reconnect_failed', () => {
   

});


socket.on('connect_failed', function() {
    
})


export default socket;