$(document).on("click", "#codigo", function(){
  cordova.plugins.barcodeScanner.scan(
    function (result) {
      var cancelado = result.cancelled;

      if(cancelado === false){
        navigator.notification.alert("Resultado: " + result.text + "\n" + "Formato: " + result.format, null, "Habēmus Cōdicem Barrae");
      }
    },
    function (error) {
      alert("O escaneamento falhou: " + error);
    },
    {
      preferFrontCamera : false,
      showFlipCameraButton : true,
      showTorchButton : true,
      torchOn: false,
      saveHistory: true,
      prompt : "Aponte a um Código de barras ou QR Code",
      resultDisplayDuration: 500,
      formats : "default",
      orientation : "default",
      disableAnimations : true,
      disableSuccessBeep: false 
    }
  );
});