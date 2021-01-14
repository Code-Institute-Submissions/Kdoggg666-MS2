# Interactive Frontend Development MS2 for Code Institute

## Disclaimer
This website is for educational purpose only and will not be deployed in any form other than for assessment. All rights belong to their respective owners. I do not claim to own any of the images on this website.   
See Media Credits section for media citations. All music and sound effects created by Kenan Wright. 

## About Me
My name is Kenan Wright, I am currently an enthusiast beginner web developer. I am currently studying software development through Code Institute. I have a passion for music, technology, nature and reptiles. I work 40 hours a week and study 20. 

##  Snake Hunt Javascript Memory Game
For my second project I have decided to merge a few of my passions Reptiles, music and programming. I decided to make a memory game using a snake theme and music and sound effects which I have created myself.    
Live Example [Here](https://www.kenanwright.online)

## User Experience Goals
The goal of my website is to entertain the user with a game whilst showcasing my design and programming skills. The user should be engaged and have fun playing the game. The user should also want to play multiple times and attempt a better score. 
!!!!ADD MORE HERE!!!!!!
Userstory
## Website Sections

#### Theme and style
For the theme I have used shades of orange and green as found on some of my favourite snakes and lizards as well as match the background I have used well. I have used 2 google fonts, Ranchers and Monda which I selected for their aesthetics and readibility. 

#### Top Bar
Instead of a Navbar which I feel would be pointless on a single page game, I instead made a button to mute the music which remembers your choice after victory or game over. I have also added a restart button which reloads the page and starts the game all over again.

#### Memory game
My memory game comprises of a 2x6 grid of cards, I originally had a 4x4 grid however I found that on most devices and screens this requires scrolling to view all the cards. The cards are all face down when the game starts, the user selects a card and tries to find the matching card and repeats till all the cards are matched or the timer runs out. When the user loads the page they will have a pop up overlay welcoming them as well as explaining the rules. Upon victory an overlay will pop up and show the user how many seconds and card flips they took to achieve this. The user will also be awarded a rating out of 3 stars. I have also created an overlay for a game over screen which displays when the user has run out of time. 
#### Score
The user attempts to get all the matches within 100 seconds. They will be rewarded with 0 to 3 stars. To acheive 3 stars the user must find all the matches with no less than 80 seconds remaining on the clock, 2 stars the user needs to find all the matches in no less than 60 seconds remaining and for 1 star they will need to find all the matches with no less than 40 seconds remaining. I have written a custom function which checks time remaining and prints your results as well as star rating to the victory overlay. 
#### Footer
I have chosen to keep the footer simple with only Font Awesome icons with animations which link to the main social media sites as well as Github.


## Technologies Used
**One Hosting** - I have registered my own domain and am using it to deploy my live site. [One.com Hosting](http://www.one.com)  
**Github** - Github was used for storing my code and version control.  
**Gitpod** - I used Gitpod to code the site as well as push updates to Github.  
**Python** - Python 3 was used via terminal to run a local webserver to preview the site while coding.  
**Prettier** Code - I used Beautify to keep my code properly indented and easily readable.  
**HTML5** - The core of the site was built with HTML version 5.  
**CSS** - CSS was used to style the website and define fonts and layout.  
**Bootstrap** - Bootsrap was used to align items..  
**JavaScript** - JavaScript was used to provide logic and funtionality to the game as well as play audio.  
**Jquery** - Jquery was included with the bootstrap CDN however my code is in vanilla JS.   
**Font Awesome** - Social Media icons from Font Awesome.  
**Google Chrome** - The website was built and tested in google Chrome.  
**Auto close tag** - self explanitory.  
**HTML hint** - for faster coding.  
**Bootstrap 4 CDN** - faster bootstrap boilerplate.  
**Cloudinary** - Hosting images to make the site load faster.  
**Presonus Studio One 5** - Used to make the sounds as well as background music.

## Code Credits
**PortEXE** - Memory game tutorial used and customised from [PortEXE on Youtube](https://www.youtube.com/watch?v=3uuQ3g92oPQ)  
**WebDevSimplified** - CS layout tutorial used then customised and changed [WebDevSimplified on Youtube](https://www.youtube.com/watch?v=28VfzEiJgy4)  
**Bootstrap Documentation** - Bootstrap documentation used for reference.  
**Mozilla Developer Network** - MDN documentation used for reference.  
**W3 Schools** - W3 Schools used for reference

## Sound Credits
All music and sound effects created by me using Presonus Studio One 5

### Photo Credits
**Card Background** - https://www.amazon.com/Journal-Green-dragon-scales-notebook/dp/1534828729#ace-g6002737843  
  
**Bush Viper card** - https://www.ndtv.com/offbeat/world-snake-day-2020-a-look-at-5-really-strange-snakes-2263726 
   
**Background image** - https://wallpapercave.com/wp/wp4578398.jpg  
  
**Two headed snake** - https://media1.s-nbcnews.com/j/newscms/2020_43/3422181/201022-two-headed-reptile-2x1-se-235p_ee73360f2cbd8ecb69ad9696995717d8.nbcnews-fp-1200-630.jpg  
  
**Blue Pit Viper** - https://www.treehugger.com/thmb/5t2mDj3vilf5qexKV3G9v7sYxrg=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__02__blue-snake-563713d8718f4144a0ad450a2acef109.jpg    
  
**Coral Snake** - https://www.gannett-cdn.com/presto/2020/10/26/PWWF/7e6dfe27-932c-41b8-83ea-8c536377b07c-Milksnake.jpg?width=660&height=383&fit=crop&format=pjpg&auto=webp    
  
**White Cobra** - https://www.dw.com/image/50193312_101.jpg    
  
**Viper Bite** - https://www.sciencenews.org/wp-content/uploads/2020/09/092620_cw_snakebite_feat.jpg  
  
**Indian Cobra** - https://cms.qz.com/wp-content/uploads/2019/02/RTXLA3F-e1551362816993.jpg?quality=75&strip=all&w=1600&h=900&crop=1  
  
**Emerald Tree Boa** - https://commons.wikimedia.org/wiki/File:Emerald_Tree_Boas_NC.jpg  

**Cape Coral Cobra** - https://www.sciencemag.org/news/2020/01/tiny-organs-grown-snake-glands-produce-real-venom

**Norma Ball Python** - https://senecaparkzoo.org/animal-pages/ball-python/

**Grey Ball Python** - https://www.reptilesmagazine.com/trademark-exotics-and-piebald-ball-pythons/

**Green Annaconda** - https://www.wildrepublic.com/product/anaconda/

## Testing
 To test this site I used multiple devices such as an iphone, ipad, macbook, windows 10 laptop, my desktop PC and a Huawei media pad. I also frequently asked my friends and family to play this game on their devices and provide me feedback. My friends dicovered the bugs with the score, the mute button and the media volume. My sister helped by testing on her Macbook and iphone as well as providing feedback on the responsiveness and layout. I used Google Chrome Devtools to debug code by logging certain stages and loops that I was testing to the console so I could see what was happenning when as well as see any issues that get thrown up by the console. I also discovered that by visiting chrome://inspect to log the console of a website on mobile devices which proved very helpful. 

![Am I Responsive?](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610553530/images/albums/MS2/amiresponsiveMS2.png)
![Mobile Testing](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610554623/images/albums/MS2/phonetesting.png)
![1440p](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610556562/images/albums/MS2/1440p_hwvihl.png)
![1080p](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610556559/images/albums/MS2/1080p.png)
![mobile-landscape](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610556700/images/albums/MS2/mobile-landscape.jpg)
![Chrome://inspect](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610556902/images/albums/MS2/chrome-inspect.jpg)
## Validation
**CSS** - CSS validated at CSS Level 3+ SVG with only some warnings about using -moz- and -webkit- prefixes.   
![CSS Validation](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610555618/images/albums/MS2/validation/css-validation.png)  
**HTML** - HTML Validated with no errors or warnings.  
![HTML Validation](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610555618/images/albums/MS2/validation/html-validator.png)  
**Jshint Validation** - Jshint shows no errors and only some warnings about certain code only being available in JS ES6.  
![JS Validation](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610555618/images/albums/MS2/validation/jshint.png)  

## Issues and Troubleshooting
**Images and audio not always loading with the page** the background images for divs were showing in python server preview but not in github live page or gitpod preview, this was fixed fixed by using the relative path.  
  
**Overlays were too big on smaller screens** this was fixed using media queries.  
  
**Score not clearing after restarting game** - Every time the user would win then play again the score would be displayed underneath the previous score. I fixed this with a loop that checks if there is inner html in the victory text and removes it on game start.   
  
**if statement to check remaining time and assign stars** - The code block I wrote was always appeding the test from the first if option no matter what the users time remaining was.I tried logging current time to console to see what im checking against. I also tried googling loops. I fixed this by double checking syntax and rewriting the code and testing.  
  
**Match sound not playing after match in short succession** - This issue was mostly fixed by shortening the audio file and removing silence at the end, however this still occurs when two pairs are matched in before the sound stops playing, I was not able to resolve this in time.  
  
**Mute button** - I couldnt get the event listener on the mute button to both change the FA icon AND pay/pause the background music. I fixed this by making the icon toggle function call the music toggle function after changing the FA class.  
  
**Mute button triggering twice after victory** The mute button would work fine the first game but after victory or game over it would trigger the if statement twice. This was fixed by moving my click function into the right constructor and writing a custom function that remembers if music was muted or not.   
  
**Cards always showing face up on IOS and Safari** - On all browsers on an IOS device including chrome as well as on Safari on Mac devices the cards would deal face up. This was solved by adding -webkit- prefix to all animations and transform effects.  
  
**Cards getting highlighted** Its easy to accidentally drag the mouse and highlight cards - This was fixed by using the css user-select: none on the body.  
  


## Features I would like to impliment

I would like to implament a better scoring system as well as a difficulty selector which adds more cards when you select a difficulty level. However I am struggling with javasript and feel I wouldnt be able to implament this in time for my deadline. I would also like to implament an input that stores the players name and displays it on the page somewhere.

## Wireframe
![Snake Hunt Memory Game](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610553297/images/albums/MS2/memory-game.png "Snake Hunt")
 
## Deployment

## Conclusion

## Collabirations and Contact
For any questions reguarding the site, my work or collaborations please feel free to email me at kenanwright@gmail.com.