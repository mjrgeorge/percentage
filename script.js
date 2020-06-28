function calcPerc() {
    var input = document.getElementById('inputBox').value;
    var myPercent = document.getElementById('percent').value;
    document.getElementById('outputBox').value = (input / 100) * myPercent;
}
