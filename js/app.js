const textArea = document.getElementById('word-box');
const countBtn = document.getElementById('count');
const totalWords = document.getElementById('wordAmount')
const totalCharecter = document.getElementById('charecterAmount');
const removebtn = document.getElementById('remove-Word');

countBtn.addEventListener('click', function () {
    const textAreaInnerText = textArea.value;
    const splitWord = textAreaInnerText.split(' ');
    const totalWord = splitWord.length;
    totalWords.innerText = totalWord;
    //
    const splitLetter = textAreaInnerText.split('');
    const totalCharecterCount = splitLetter.length;
    totalCharecter.innerText = totalCharecterCount;

})
removebtn.addEventListener('click', function () {
    textArea.value = '';
    totalCharecter.innerText = '00';
    totalWords.innerText = '00';
})