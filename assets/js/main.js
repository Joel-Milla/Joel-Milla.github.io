let submitButton = document.getElementById('submit_button');
let textareaButton = document.getElementsByTagName('textarea');
let doneButton = document.getElementById('done')

let removeTextArea = function() {
    textareaButton[0].style.display = 'none'
    doneButton.style.display = 'block'
}

submitButton.onclick = removeTextArea;