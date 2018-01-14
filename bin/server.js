var testindex = 0;
var loadInProgress = false;
var webPage = require('webpage');
var page = webPage.create();
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36';
page.settings.javascriptEnabled = true;
page.settings.loadImages = false;
phantom.cookiesEnabled = true;
phantom.javascriptEnabled = true;
 
console.log('AutoLogin Integra System');
console.log('------------------------\n');
page.onConsoleMessage = function(msg) {
    console.log(msg);
};

steps = [
    function(){
        console.log('Membuka Integra...');
        page.open("https://integra.its.ac.id/index.php?n=internet", function(status){
        });
        console.log('---> Sukses');
    },
    function(){
        console.log('Generate Form...');
        console.log('---> Sukses');
        page.evaluate(function(){
            console.log('Mengisi Form...');
            document.getElementById("userid").value = "(MASUKAN NRP)";
            document.getElementById("password").value = "(MASUKAN PASSWORD)";
            console.log('---> Sukses');
            console.log('Submit Form...');
            document.getElementById("login_form").submit();
            console.log('---> Sukses');
        });
    },
    function(){
        console.log("Logging in.....");
         var result = page.evaluate(function() {
            return document.querySelectorAll("html")[0].outerHTML;
        });
    },
];

interval = setInterval(jalankanJS, 50);

function jalankanJS(){
    if (loadInProgress == false && typeof steps[testindex] == "function") {
        steps[testindex]();
        testindex++;
    }
    if (typeof steps[testindex] != "function") {
        console.log("\n================");
        console.log("= LOGIN SUKSES =");
        console.log("================");
        phantom.exit();
    }
}

page.onLoadStarted = function() {
    loadInProgress = true;
    //console.log('Loading started');
};
page.onLoadFinished = function() {
    loadInProgress = false;
    //console.log('Loading finished');
};
page.onConsoleMessage = function(msg) {
    console.log(msg);
};
