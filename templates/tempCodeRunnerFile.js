$(function(){
    var client = mqtt.connect('mqtt://raiot_123:raiot_lab@broker.shiftr.io', {
        clientId: 'javascript'
    });

client.on('connect', function(){
    console.log('client has connected!');
});

client.on('message', function(topic, message) {
  console.log('new message:', topic, message.toString());
});

$('#connect').click(function(){
    document.getElementById("not_connect").innerHTML = "Connected";
    document.getElementById("div1").style.backgroundImage = "url('img/Bulb.png')";
    client.subscribe('/connect_fan');
    client.subscribe('/connect_light');
   // window.location.href = "https://www.google.com";
})

$('#fanon').click(function(){
    client.publish('/connect_fan','f1');
    //client.subscribe('/connect_light');
})



})