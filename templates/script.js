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

$('#fan1').click(function(){
    client.publish('/connect_fan','f1');
    //client.subscribe('/connect_light');
    document.getElementById("fans1").src='img/fanon.png';

})
$('#fan1f').click(function(){
    client.publish('/connect_fan','f1#');
    //client.subscribe('/connect_light');
    document.getElementById("fans1").src='img/fanoff.png';

})
$('#fan2').click(function(){
    client.publish('/connect_fan','f2');
    //client.subscribe('/connect_light');
    document.getElementById("fans2").src='img/fanon.png';

})
$('#fan2f').click(function(){
    client.publish('/connect_fan','f2#');
    //client.subscribe('/connect_light');
    document.getElementById("fans2").src='img/fanoff.png';

})

$('#light1').click(function(){
    client.publish('/connect_light','l1');
    document.getElementById("bulb1").src='img/bulb-on.png';

})
$('#light1f').click(function(){
    client.publish('/connect_light','l1#');
    document.getElementById("bulb1").src='img/bulb-off.png';

})
$('#light2').click(function(){
    client.publish('/connect_light','l2');
    document.getElementById("bulb2").src='img/bulb-on.png';

})
$('#light2f').click(function(){
    client.publish('/connect_light','l2#');
    document.getElementById("bulb2").src='img/bulb-off.png';

})
$('#light3').click(function(){
    client.publish('/connect_light','l3');
    document.getElementById("bulb3").src='img/bulb-on.png';

})
$('#light3f').click(function(){
    client.publish('/connect_light','l3#');
    document.getElementById("bulb3").src='img/bulb-off.png';

})

})