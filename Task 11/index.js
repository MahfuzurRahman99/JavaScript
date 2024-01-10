var myButton = document.querySelectorAll('.myButton');
var stopButton = document.querySelector('.stopButton');
var audioElement;

for (var i = 0; i < myButton.length; i++) {
    myButton[i].addEventListener('click', function () {
        var text = this.innerHTML;
        stopAudio();
        switch(text) {
            case 'a':
                audioElement = new Audio('a.mp3');
                break;
            case 'b':
                audioElement = new Audio('b.mp3');
                break;
            case 'c':
                audioElement = new Audio('c.mp3');
                break;
        }
        audioElement.play();
    });
}

stopButton.addEventListener('click', stopAudio);

function stopAudio() {
    if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }
}

