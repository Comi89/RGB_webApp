var pubnub = new PubNub({
  subscribeKey: 'sub-c-ab01e856-bfbb-11e7-9d68-9ad7add0a6e8',
  publishKey: 'pub-c-eefe9787-ad53-4e7c-b6cf-267a2b78c06d',
});



var red = document.getElementById('red');
// var socket = io.connect('http://localhost:8321');

red.addEventListener('change', function () {
    pubnub.publish({
        channel: 'arduinoLED',
        message: { color: 'red', brightness: +this.value }
    });
    console.log(this.value);
    // socket.emit('rgb', { color: 'red', brightness: +this.value });
}, false);

var green = document.getElementById('green');

green.addEventListener('change', function () {
    pubnub.publish({
        channel: 'arduinoLED',
        message: { color: 'green', brightness: +this.value }
    });
    // socket.emit('rgb', { color: 'green', brightness: +this.value });
    // console.log(this.value);
}, false);

var blue = document.getElementById('blue');

blue.addEventListener('change', function () {
    pubnub.publish({
        channel: 'arduinoLED',
        message: { color: 'blue', brightness: +this.value }
    });
    console.log(this.value);
    // socket.emit('rgb', { color: 'blue', brightness: +this.value });
}, false);

var stopBtn = document.getElementById("stopBtn");

stopBtn.addEventListener('click', function () {
    pubnub.publish({
        channel: 'arduinoLED',
        message: { color: 'blue', brightness: +this.value, stop: true }
    });
    // socket.emit('rgb', { color: 'blue', brightness: +this.value, stop: true });

    console.log("Stop");
});

// subscribe to distance change
pubnub.subscribe({
  channels: ['arduinoSubscribe', 'arduinoLED']
});

pubnub.addListener({
message: function (message) {
console.log('message came in: ', message)
if(message.message === "red"){
    document.getElementById("distance").className = "redDistance";

}else{
    document.getElementById("distance").className = "greenDistance";

}
}
});
