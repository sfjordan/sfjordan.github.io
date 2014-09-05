$(document).ready(setRunnerHeight);

function setRunnerHeight() {
    var distToFooter=$('#footer').offset().top;
    $('#runner').css('height',(distToFooter-100)+'px');
}