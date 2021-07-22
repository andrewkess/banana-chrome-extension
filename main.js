// let counter = 1;
// console.log("Script ran: " + counter++);


//PLACE buttone event handler in popup.js which is pulled into popup.html
//LOOK UP chrome storage to reference variable

//https://stackoverflow.com/questions/38561136/chrome-extension-to-change-dom-with-a-button-in-extension-popup


let bananaArr = ['https://media.giphy.com/media/Olb8GJy5cw17G/source.gif', 'https://media.giphy.com/media/UQ7Vt3WgZAvHPP4y52/source.gif', 'https://media.giphy.com/media/3o752fWObLKfc5tWqA/source.gif', 'https://media.giphy.com/media/gocNxcNwuadNu/source.gif', 'https://pngimg.com/uploads/banana/banana_PNG823.png'];
//find a random number that is between 0 and the arr.length of our bananaArr
//let bananaImg = 'https://pngimg.com/uploads/banana/banana_PNG823.png';
let bananaImg = bananaArr[Math.floor(Math.random()* bananaArr.length)];



bananaImg = 'https://pngimg.com/uploads/banana/banana_PNG823.png';

//console.log(Math.floor((Math.random() * bananaArr.length-1)));



//let bananaImg = '';
//console.log("current banana 0 : " + bananaImg);


// chrome.storage.onChanged.addListener(function(changes) {
//      var action = changes['action'];
//      if(action.newValue === 'executeCode') {
//          // YOUR CODE HERE
//     //     bananaImg = 'https://pngimg.com/uploads/banana/banana_PNG823.png';
   
//     bananaImg = chrome.storage.local.bananaImg;
//     console.log("current banana 3 : " + bananaImg);
    
//     bananaImg = chrome.storage.bananaImg;
//     console.log("current banana 4 : " + bananaImg);

// }


// });


//let bananaImg = 'https://pngimg.com/uploads/banana/banana_PNG823.png';
//console.log("current banana: " + bananaImg);

// const firstBananaGif = document.querySelector('first-button');
// console.log("button element: " + firstBananaGif);


window.addEventListener("load", ev => {
    
    // firstBananaGif.addEventListener('click', () => {
    //     bananaImg = 'https://media.giphy.com/media/5eFvnDEUJGh3mKPVjz/source.gif';
    //     console.log("current banana: " + bananaImg);

//select the DOM element with the class of "logo"
let contents;
let contents1 = document.querySelector('.logo');
let contents2 = document.querySelector('#cs-logo');

console.log('contents1: ' + contents1);
console.log('contents2: ' + contents2);

if (contents1){ contents = contents1; }
else if (contents2) { contents = contents2; }

//save the reference to the element's parent
var contentsParent = contents.parentNode;

// if (contents.parentNode !== null) {
// console.log("contents.parentNode.nodeName: " + contents.parentNode.nodeName);
// }


//console.log("contents new: " + contents);
contentsParent.removeChild(contents);


var img = document.createElement('img');
//img.src = 'https://media.giphy.com/media/VhuP4V9KkV26GNQUih/source.gif'
//img.src = 'https://media.giphy.com/media/5eFvnDEUJGh3mKPVjz/source.gif';

img.src = bananaImg;
//img.width = "80";
//img.height = '140';
img.style.width = "80px"
img.style.height = "140px" // not the same syntax as CSS



//adds new image element to DOM
contentsParent.prepend(img);

console.log("Bananafied");


})


