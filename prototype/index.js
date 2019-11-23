function showMore() {
    let textContener = this.parentNode;
    textContener.setAttribute('affiche','false');
    let fog = textContener.getElementsByClassName('fog')[0];
    let text = textContener.getElementsByClassName('text')[0];

    if (textContener.affiche === 'true') {
        this.style.marginTop = '0';
        this.innerHTML = 'afficher moin';
        //text.style.transition = 'height 1s ease';
        text.style.height = '152px';
        // text.style.animationName = 'hide';
        fog.style.display = 'block';
        textContener.affiche = 'false';
    } else {
        this.style.marginTop = '20px';
        this.innerHTML = 'afficher moin';
        //text.style.transition = 'height 1s ease';
        text.style.height = 'auto';
        // text.style.animationName = 'show';
        fog.style.display = 'none';
        textContener.affiche = 'true';
    }
}

const buttons = document.getElementsByClassName("show-more");
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", showMore);
}