function showMore() {

    const textButton = this.parentNode;
    const textContener = textButton.getElementsByClassName('text-contener')[0];
    const text = textButton.getElementsByClassName('text')[0];
    const fog = textButton.getElementsByClassName('fog')[0];

    textContener.setAttribute('affiche', 'false');    

    if (textContener.affiche === 'true') {
        textContener.style.height = '164px';
        fog.style.transition = 'background 1s ease';
        fog.style.background = 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))';

        textContener.affiche = 'false';
    } else {    
        textContener.style.height = text.clientHeight + 'px';
        fog.style.transition = 'background 1s ease';
        fog.style.background = 'rgba(255, 255, 255, 0)';

        textContener.affiche = 'true';
    }
}

const buttons = document.getElementsByClassName("show-more");

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", showMore);
}