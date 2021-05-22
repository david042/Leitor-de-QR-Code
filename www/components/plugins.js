$(document).on("click", "#camera", function(){
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation: true,
    saveToPhotoAlbum: true
  });

  function onSuccess(imageURI) {
    var image = document.getElementById('imagem');
    image.src = imageURI;
  }

  function onFail(message) {
    alert('Falhou porque: ' + message);
  }
});

$(document).on("click", "#codigo", function(){
  cordova.plugins.barcodeScanner.scan(
    function (result) {
      alert("Habēmus Cōdicem Barrae \n" +
            "Resultado: " + result.text + "\n" +
            "Formato: " + result.format + "\n" +
            "Cancelado: " + result.cancelled);
    },
    function (error) {
      alert("O escaneamento falhou: " + error);
    },
    {
      preferFrontCamera : false, // iOS and Android
      showFlipCameraButton : true, // iOS and Android
      showTorchButton : true, // iOS and Android
      torchOn: true, // Android, launch with the torch switched on (if available)
      saveHistory: true, // Android, save scan history (default false)
      prompt : "Aponte a um Código de barras ou QR Code", // Android
      resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
      orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
      disableAnimations : true, // iOS
      disableSuccessBeep: false // iOS and Android
    }
  );
});

function testarConexao() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Conexão Indefinida';
    states[Connection.ETHERNET] = 'Conexão Ethernet';
    states[Connection.WIFI]     = 'Conexão WiFi';
    states[Connection.CELL_2G]  = 'Conexão 2G';
    states[Connection.CELL_3G]  = 'Conexão 3G';
    states[Connection.CELL_4G]  = 'Conexão 4G';
    states[Connection.CELL]     = 'Conexão Genérica';
    states[Connection.NONE]     = 'Sem Conexão';

    alert('Tipo de conexão: ' + states[networkState]);
}

$(document).on("click", "#conexao", function(){
  testarConexao();
})