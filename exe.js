function rimuoviTwitter() {

    const twitterLink = document.querySelector('.blog-sidebar .p-4:nth-of-type(3) ol.list-unstyled:last-of-type li:nth-of-type(2)');
    twitterLink.remove();
}
rimuoviTwitter()


const esercizioDue = document.querySelectorAll('.stretched-link');

for (let i = 0; i < esercizioDue.length; i++) {
    esercizioDue[i].addEventListener('click', removePost);
}

function removePost(event) {
    event.target.parentNode.parentNode.remove();
}

const autori = document.querySelectorAll('.blog-post-meta a')
for (let i = 0; i < autori.length; i++) {
    autori[i].addEventListener('mouseover', richiamoAlert);
}
function richiamoAlert(event) {
    alert(event.target.textContent)
}