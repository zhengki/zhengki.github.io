document.querySelector("#test").onclick=function () {
    this.style.color="red";
}
document.querySelector("#test2").onclick=function () {
    alert('被点了')
}
document.querySelector("#test3").addEventListener("click",function () {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
})
