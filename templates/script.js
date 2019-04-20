$(function(){
    var client = mqtt.connect('mqtt://raiot_123:raiot_lab@broker.shiftr.io', {
        clientId: 'javascript'
    });

/*client.on('connect', function(){
    console.log('client has connected!');
});

client.on('message', function(topic, message) {
  console.log('new message:', topic, message.toString());
});

function alt()
{ 
    alert("Connected"); 
}
var myvar;*/
$('#connect').click(function(){
    document.getElementById("not_connect").innerHTML = "Connected";
    document.getElementById("div1").style.backgroundImage = "url('img/Bulb.png')";
    document.body.style.overflow = "scroll";
    client.subscribe('/connect_fan');
    client.subscribe('/connect_light');
    window.location.href = "#div2";
})

$('#fanon').click(function(){
    client.publish('/connect_fan','f1');
    //client.subscribe('/connect_light');
})

$('#light1').click(function(){
    client.publish('/connect_light','l1');
    document.getElementById("bulb1").src='img/bulb-on.png';

})



})