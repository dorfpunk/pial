document.querySelector('.dialog-button').addEventListener( 'click', function() {
    var infoBoxClassList = document.querySelector('.info-box').classList;
    infoBoxClassList.toggle('move-up');
    infoBoxClassList.remove('invisible');
    document.querySelector('.dialog-button').classList.toggle('closed');
});