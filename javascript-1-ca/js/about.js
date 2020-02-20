setTimeout(replaceText, 2000);

function replaceText() {
    let text = document.querySelector(".content")
    text.innerHTML = text.innerHTML.replace(/ the /g, " replaced ");
    text.innerHTML = text.innerHTML.replace(/The /g, " Replaced ");
};