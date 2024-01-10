var myButton = document.querySelectorAll('.myButton');
var outPut = document.querySelector('.demo');

for (var i = 0; i < myButton.length; i++) {
    myButton[i].addEventListener('click', function () {
        var text = this.innerHTML;
        outPut.innerHTML = text + ' is clicked';
    });
}
