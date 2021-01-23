# Interactive Frontend Development MS2 for Code Institute

## Disclaimer
This website is for educational purpose only and will not be deployed in any form other than for assessment. All rights belong to their respective owners. I do not claim to own any of the images on this website.   
See Media Credits section for media citations. All music and sound effects created by Kenan Wright. 

## About Me
My name is Kenan Wright, I am currently an enthusiast beginner web developer. I am currently studying software development through Code Institute. I have a passion for music, technology, nature and reptiles. I work 40 hours a week and study 20. 

##  Snake Hunt Javascript Memory Game
For my second project I have decided to merge a few of my passions Reptiles, music and programming. I decided to make a memory game using a snake theme paired with music and sound effects which I have created myself. I started by following a tutorial which I then customised and added custom functionality. A link to the tutorial can be found under the Code Credits section of this README.
Live Example [Here](https://www.kenanwright.online)

## User Experience Goals
The goal of my website is to entertain the user with a game whilst showcasing my design and programming skills. The user should be engaged and have fun playing the game. The user should also want to play multiple times and attempt a better score. 
!!!!ADD MORE HERE!!!!!!
Userstory
## Website Sections

#### Theme and style
For the theme I have used shades of orange and green as found on some of my favourite snakes and lizards and also match the background I have used. I have used 3 google fonts, Ranchers, Big Shoulders and Monda which I selected for their aesthetics and readibility. 

#### Top Bar
Instead of a Navbar which I feel would be pointless on a single page game, I instead made a button to mute the music which remembers your choice after victory, game over, restart or browser close. I have also added a restart button which reloads the page and starts the game all over again as well as removing 1 from the round number so that there wont be a blank spot on the last 5 rounds scoreboard.
![Top Bar](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611391244/images/albums/MS2/top-bar.png "Top Bar")
#### Time and flips
This area shows the user the remaining time, their highest or "best" score and the ammount of flips used.
![Time and Flips](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611392655/images/albums/MS2/time_and_flips.png "Tikme and Flips")

#### Welcome modal
The welcome modal opens when the page loads, explaining the rules to the user and prompting them to select a difficulty. Each difficulty will trigger its own overlay with an icon representing the difficulty and prompting the user to click to start the game.
![Modal](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611391347/images/albums/MS2/modal.png "Welcome-Modal")
#### Memory game
My game is a card flipping game where the user must click on a card to reveal a snake, then try to find the matching card. I have 3 difficulties, easy, medium and Jedi(hard). On easy the game will deal a grid of 2x6 cards and have an 80 second time limit. Medium is a 3x6 grid and a 120 second time limit. Hard is a 4x6 grid with a 180 second time limit. if the user runs out of time the game over screen will appear and the user will be prompted to try again. If the user finds all the matches the victory screen will appear and the user will be given a score and a star rating. 
![Game Area](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611391457/images/albums/MS2/game_area.png "Game Area")
#### Footer
I have chosen to keep the footer simple with only Font Awesome icons with animations which link to the main social media sites as well as Github.
![Footer](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611391536/images/albums/MS2/footer.png "Footer")
#### Overlays
The overlays will display when a difficulty has been selected, the user runs out of time or upon victory. The victory overlay will show the users score as well as show them how many stars they were awarded.
![Game Over](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611391586/images/albums/MS2/game-over.png "Game Over")
![Winner](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611391724/images/albums/MS2/winner.png "Winner")
![Easy Mode](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611391839/images/albums/MS2/easy_mode.png "Easy")
![Medium Mode](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611391838/images/albums/MS2/medium_mode.png "medium")
![Jedi Mode](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611391839/images/albums/MS2/jedi_mode.png "Jedi")
## functionality

#### Score
The user attempts to get all the matches within the time limit. They will be rewarded with 0 to 3 stars. I decided on a formula for scoring which takes the ramaining time and multiplies it by a base number of 200 minus the amount of used flips. I did this because the more flips a player uses the less the multiplyer would be. Stars are then awarded based on total points besed on difficulty level. 
![Score](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611391999/images/albums/MS2/score.png "score")
#### Scoreboard
The users best score will be shown between the time and flips sections after the first round has been completed. I used a function which checks if the current score is greater than the high score and replaces it if need be. The players last 5 attempts will be shown in the scoreboard to the left but only on devices with enough space to show this without covering the game area.  
![Score Board Before](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611392106/images/albums/MS2/scoreboard_before.png "Scoreboard before")
![Score Board After](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611392106/images/albums/MS2/scoreboard-after.png "Scoreboard After")
![Best Score](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611392470/images/albums/MS2/best.png "best")
#### Local Storage
I have used the local storage API to store the users highscore, round number and last 5 rounds which will display even after the user has refreshed the browser.  
![Local Storage Keys](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611392324/images/albums/MS2/local_storage_keys.png "Local Storage")
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
**Jquery** - Jquery was used to write certain functions however I tried to use vanilla JS for the most part.   
**Font Awesome** - Social Media icons from Font Awesome.  
**Google Chrome** - The website was built and tested in google Chrome.  
**Auto close tag** - self explanitory.  
**HTML hint** - for faster coding.  
**Bootstrap 4 CDN** - faster bootstrap boilerplate.  
**Cloudinary** - Hosting images to make the site load faster.  
**Presonus Studio One 5** - Used to make the sounds as well as background music.
**Apple Safari** - Used for testing.
**Mozilla Firefox** - Used for testing.
**Opera** - Used for testing.

## Code Credits
**PortEXE** - Memory game tutorial used and customised from [PortEXE on Youtube](https://www.youtube.com/watch?v=3uuQ3g92oPQ)  
**WebDevSimplified** - CS layout tutorial used then customised and changed [WebDevSimplified on Youtube](https://www.youtube.com/watch?v=28VfzEiJgy4)  
**Bootstrap Documentation** - Bootstrap documentation used for reference.  
**Mozilla Developer Network** - MDN documentation used for reference.  
**W3 Schools** - W3 Schools used for reference.  
**Stack Overflow** - I found multiple solutions for issues I ran into on stack overflow and have credited the post in a comment above the code.

## Sound Credits
All music and sound effects created by me using Presonus Studio One 5

### Photo Credits
   
**Background image** - https://wallpapercave.com/wp/wp4578398.jpg

**Card Background** - https://www.amazon.com/Journal-Green-dragon-scales-notebook/dp/1534828729#ace-g6002737843  
  
**Bush Viper card** - https://www.ndtv.com/offbeat/world-snake-day-2020-a-look-at-5-really-strange-snakes-2263726 
  
**Two headed snake** - https://media1.s-nbcnews.com/j/newscms/2020_43/3422181/201022-two-headed-reptile-2x1-se-235p_ee73360f2cbd8ecb69ad9696995717d8.nbcnews-fp-1200-630.jpg  
  
**Blue Pit Viper** - https://www.treehugger.com/thmb/5t2mDj3vilf5qexKV3G9v7sYxrg=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__02__blue-snake-563713d8718f4144a0ad450a2acef109.jpg    
  
**Coral Snake** - https://www.gannett-cdn.com/presto/2020/10/26/PWWF/7e6dfe27-932c-41b8-83ea-8c536377b07c-Milksnake.jpg?width=660&height=383&fit=crop&format=pjpg&auto=webp    
  
**White Cobra** - https://www.dw.com/image/50193312_101.jpg    
  
**Viper Bite** - https://www.sciencenews.org/wp-content/uploads/2020/09/092620_cw_snakebite_feat.jpg  
  
**Indian Cobra** - https://cms.qz.com/wp-content/uploads/2019/02/RTXLA3F-e1551362816993.jpg?quality=75&strip=all&w=1600&h=900&crop=1  
  
**Emerald Tree Boa** - https://commons.wikimedia.org/wiki/File:Emerald_Tree_Boas_NC.jpg  

**Cape Coral Cobra** - https://www.sciencemag.org/news/2020/01/tiny-organs-grown-snake-glands-produce-real-venom

**pastel Ball Python** - https://www.everythingreptiles.com/pastel-ball-python/

**Grey Ball Python** - https://www.reptilesmagazine.com/trademark-exotics-and-piebald-ball-pythons/

**Green Viper** - https://safety4sea.com/deadly-snake-found-on-african-ship/

## Testing
 To test this site I used multiple devices such as an iphone, ipad, macbook, windows 10 laptop, my desktop PC and a Huawei media pad. I also frequently asked my friends and family to play this game on their devices and provide me feedback. My friends dicovered the bugs with the score, the mute button and the media volume. My sister helped by testing on her Macbook and iphone as well as providing feedback on the responsiveness and layout. I used Google Chrome Devtools to debug code by logging certain stages and loops that I was testing to the console so I could see what was happenning when as well as see any issues that get thrown up by the console. I also discovered that by visiting chrome://inspect you can log the console of a website on mobile devices which proved very helpful. 

![Am I Responsive?](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610884303/images/albums/MS2/amiresponsiveMS2.png)
![Mobile Testing](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610554623/images/albums/MS2/phonetesting.png)
![1440p](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610556562/images/albums/MS2/1440p_hwvihl.png)
![1080p](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610556559/images/albums/MS2/1080p.png)
![mobile-landscape](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610556700/images/albums/MS2/mobile-landscape.jpg)
![Chrome://inspect](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610556902/images/albums/MS2/chrome-inspect.jpg)
![Welcome Modal](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610884140/images/albums/MS2/1440p_with_modal.png)
![More testing](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611393057/images/albums/MS2/testing.png)
![iPad](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611393151/images/albums/MS2/ipad.png)
![iPhone](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611393212/images/albums/MS2/iphone.png)
![Galaxy](https://res.cloudinary.com/dyxe4g62g/image/upload/v1611393313/images/albums/MS2/galaxy.png)
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
  
**Cards getting highlighted** - Its easy to accidentally drag the mouse and highlight cards - This was fixed by using the css user-select: none on the body.  

**Users were able to drag cards** - Fixed with code from https://stackoverflow.com/questions/704564/disable-drag-and-drop-on-html-elements#:~:text=You%20can%20disable%20dragging%20simply,draggable%3D%22false%22%20attribute.

**Clicking outside the modal on start** - Clicking outside the modal would load the page without the overlays and would not start the JS. Fixed with code from https://stackoverflow.com/questions/45607982/how-to-disable-background-when-modal-window-pops-up

**Setting Game time based on difficulty** - Innitially I struggled with this, at first I tried several functions which would define the game variable and pass a number to the class, however I couldnt seem to get this to work. I instead found a simpler more effective way of doing this by using a variable that is set to a number based on user difficulty choice and passing that variable to the class.

**Round number resetting on page reload** - fixed by storing round number to local storage instead of on the main.js file. This will remember the round after reload and not reset round number as hitting restart reloads the page, thus starting from round 1 again and will overwrite the first score on the scoreboard. 

**Music choice not being saved** - After extensive googling and tutor support I realised that the local storage was treating true and false as a string and not a boolean. Fixed by changing my if statement to check if variable is "false" instead of false.

## Features I would like to impliment

I would like to implament an input that stores the players name and displays it on the page somewhere however space is very limited especially on smaller displays and I didn't have time to implament this. I would also like to come up with a better equasion for scoring. I would also like to find a way to make this game better for mobile as it is responsive however there just isnt enough space on small devices to show all the cards on the screen without having to scroll. An online leaderboard that could show players names as well as highscores is something that I have looked into however I will not have time before the submission deadline. 

## Wireframes

As I was following a turorial I didn't really put much thought into my wireframes as after I was done with the tutorial I changed all the css and a lot of the layout through trial and error to see what I liked.

![Snake Hunt Memory Game](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610553297/images/albums/MS2/memory-game.png "Snake Hunt")
![Snake Hunt Memory Game Mobile](https://res.cloudinary.com/dyxe4g62g/image/upload/v1610884791/images/albums/MS2/memory-game-responsive.png "Snake Hunt Mobile")
## Deployment

## Conclusion

## Collabirations and Contact
For any questions reguarding the site, my work or collaborations please feel free to email me at kenanwright@gmail.com.