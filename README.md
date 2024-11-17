
# **Bananafier: A Chrome Extension**

Transform your browsing experience into something delightfully surreal with **Bananafier**, a fun and experimental Chrome extension. Bananafier replaces a website's logo with... you guessed it—bananas! 🍌 

---

## **Features**
- Replaces logos with random banana-themed images or gifs for a fun twist.
- Works automatically on websites with identifiable logo elements.
- Perfect as a gag, a toy, or just a reminder to take things a little less seriously.

---

## **How It Works**
1. **Detect the Logo**: The extension scans for specific logo elements in the DOM (like `.logo` or `#cs-logo`).
2. **Banana Replacement**: It swaps the detected logo with a randomly selected banana image or gif.
3. **Endless Fun**: Every reload has a chance to bring a new banana surprise!

---

## **Installation**
1. Clone this repository:
   ```bash
   git clone https://github.com/andrewkess/bananafier.git
   ```
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the folder where you cloned the repository.
5. The extension is now installed and ready to use!

---

## **Usage**
1. Navigate to any website with recognizable logo elements.
2. Watch as logos are replaced by banana images or gifs.
3. Enjoy the hilarity!

---

## **Code Highlights**
- **Random Banana Selection**: A random banana is chosen from a predefined array of banana images and gifs:
   ```javascript
   let bananaArr = ['https://media.giphy.com/media/Olb8GJy5cw17G/source.gif', 'https://pngimg.com/uploads/banana/banana_PNG823.png'];
   let bananaImg = bananaArr[Math.floor(Math.random() * bananaArr.length)];
   ```
- **Logo Detection and Replacement**: The extension detects logo elements and swaps them with the banana:
   ```javascript
   let contents1 = document.querySelector('.logo');
   let contents2 = document.querySelector('#cs-logo');
   var contentsParent = contents.parentNode;
   contentsParent.removeChild(contents);

   var img = document.createElement('img');
   img.src = bananaImg;
   contentsParent.prepend(img);
   ```
- **Event Listener**: Listens for the page to load before initiating the bananafying process:
   ```javascript
   window.addEventListener("load", ev => {
       // Replace logo with banana
   });
   ```

---

## **Contributing**
Feel free to open an issue or submit a pull request if you’d like to add more features or expand the banana collection! 🍌

---

## **License**
This project is open-source and available under the [MIT License](LICENSE).

---

## **Disclaimer**
This extension is purely for fun and experimentation. It might not work on all websites or with all logos. Use it to bring a smile (and bananas) to your day! 🍌

---

Enjoy making the web a little more surreal, one banana at a time! 🍌😄
