$(document).ready(setRunnerHeight);
$(document).ready(setRunnerWidth);
// $(document).scroll(setRunnerHeight);
window.onresize = setRunnerHeight;
window.onresize = setRunnerWidth;

function setRunnerHeight() {
    var distToFooter=$('#footer').offset().top;
    $('#runner').css('height',(distToFooter-100)+'px');
}

function setRunnerWidth() {
    if ($(document).width() < 650) {
        $('#runner').css('left','25px');
        $('body').css('padding-left','45px');
    }
}