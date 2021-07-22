//Use Storage. You could call chrome.storage.local.set in popup.js and 
//listen to storage change in content.js via chrome.storage.onChanged.

document.console.log('inside popup.js');

document.getElementById('button').addEventListener('click', function() {

//    console.log("current banana 1 : " + chrome.storage.local.bananaImg);


    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {

//        chrome.storage.local.set({ action: 'executeCode' });

//        chrome.storage.local.set({ bananaImg: 'https://pngimg.com/uploads/banana/banana_PNG823.png' });

        document.console.log("current banana 1 : " + chrome.storage.local.bananaImg);



    });
});

