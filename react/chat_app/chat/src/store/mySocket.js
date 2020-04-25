
import socketIOClient from "socket.io-client";



var connectionOptions =  {
 /*"force new connection" : true,
  "reconnectionAttempts": "Infinity",*/ //avoid having user reconnect manually in order to prevent dead clients after a server restart
  "timeout" : 10000, //before connect_error and connect_timeout are emitted.
  "transports" : ["websocket"]
};

/*var joinServerParameters = { token: "xxx"   };   */
var socket   = socketIOClient("http://szekelypeter.com", connectionOptions); /*"szekelypeter.com",{transports: [ 'polling' ], timeout: 90000, query: 'joinServerParameters=' + JSON.stringify(joinServerParameters) } */


socket.onerror = (err) => {
    
}

socket.onopen = ()=> {console.log("open")}

socket.onclose = function (event) {
  
  // Connection closed.
  // Firstly, check the reason.
  
  if (event.code !== 1000) {
     // Error code 1000 means that the connection was closed normally.
     // Try to reconnect.
     
    
     
  }
}
socket.onmessage = function (event) {
  
}

 /*, 'polling'*/

 socket.on('disconnect', function(){
 
   
});
socket.on('connect_timeout', (timeout) => {
   
  });
  socket.on('reconnect_failed', (timeout) => {
      
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