var app = {

    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    onDeviceReady: function () {
        this.receivedEvent('deviceready');

        document.getElementById("cordova").innerHTML = device.cordova;
        document.getElementById("model").innerHTML = device.model;
        document.getElementById("platform").innerHTML = device.cordova;
        document.getElementById("version").innerHTML = device.cordova;
        document.getElementById("manufacture").innerHTML = device.cordova;
        document.getElementById("isvirtual").innerHTML = device.cordova;


    },


    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },




    camera: function () {

        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType;Camera.DestinationType.FILe_URI,
            salvarToPhotoAlbum: true,
            cameraDirection: Camera.direction.FRONT,

        });

        Function onSuccess(imageURI) {
            var image = document.getElementById('minhaimagem');
            image.style.display = "block"
            image.src = imageURI;
        }

        function onFAil(message) {
            alert('failed because: ' + message)
        }
    }
};

















app.initialize();
