# Final Project

## Trivia Race

Trivia game race against an opponent.

### Minimum Viable Product (MVP) Definition

- Main Page
  - Greeting window prompting user to enter their name and select a racer
  - Visual representation of the racetrack and racers.
  - Quiz area with buttons for each possible answer.
- Leaderboard
  - Table with top three contestants, their scores, and the date/time
- ‘About Us’ Page

- JavaScript
  - Question object constructor
    - Question, answer, possible answers
  - Racer object constructor
    - Image, name, racer, score
  - Local storage for leaderboard
  - Random questions with even spread of difficulty.
  - Multiple-choice input from user
  - Representation of participants on racetrack.


### Authors: Brady Camp, Micha Davis, Nicholas Mercado, Matthew Rangel

-----------------

### Links and Resources

- [Wireframe](resources/wireframe.png)
- [Domain Model](resources/domain-model.png)
- [User Stories](https://github.com/orgs/The-Go-Gitters/projects/1)
- [public repo](https://github.com/The-Go-Gitters/turbo-octo-tribble)
- [Mozilla MDN Web Docs](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide)

### Reflections and Comments

#### Morning Standup Monday, January 31, 2022

Led by Matt Rangel

- First steps - Build out skeleton of project
- Everyone add  head shot or picture to img folder
- collect questions for trivia - 20
  - 5 questions per race
- settle on theme , animal racer
- settle on question theme, animal facts
- build race track
- add animal images

#### Evening Standup Monday, January 31, 2022

- Complete logic for trivia quesitons
- Stylized main index page, about us, leaderboard
  - Header and footer
  - background colors, fonts,
- Started racetrack

-----------------

#### Morning Standup Tuesday, February 1, 2022

## Review

- Complete logic for trivia questions

- Need to do leaderboard and about us

To be completed today

### HTML

- Complete Racetrack
  - racetrack images

- Animal Images to index

### JavaScript

- Functionality for accepting the players information and storing somewhere, local storages

- Creating the player object so we can manipulate

- Be able to hide and reveal panels gather information panels from the beginning, as well as the question panels.
  - Create content 'You guessed correctly!' or 'You guessed poorly'

- how to give the right instructions to the racers to move about the board

### CSS

- Adjust the header and footer sizing for 1920 by 1080 resolutions

- Finish racetrack

- Style the questions and inputs

#### Evening Standup Tuesday, February 1, 2022

- **wrap up**
  - Implemented splash toggle
  - Leader board render function
  - We have created local storage

- **To do**
  - Notification for correct guesses
  - Notification for win or loss
    - Css touch up to questions
- Figure out how to push array to leader board
  - Create image icon on character selections
    - Input that icon for race
  - Select image for opponent
  - Add to player coordinates array face images

-----------------

#### Morning Standup Wednesday, February 2, 2022

- **Finish MVP**
  - Finish layout of questions and leaderboard
    - Stack answers as a list
  - Add content to About page and add individual bios
  - Add more trivia questions to pool

  - **JavaScript**
    - Add league rating / add more meaning to leaderboard score
    - Add sort function

  - **CSS**
    - Update some images
    - Leaderboard styling
    - Quiz styling
    - About page styling
    - Reformat sizing for text, ect...

#### Evening Standup Wednesday, February 2, 2022

- **JavaScript**
  - Added some JS Logic that added difficulty scale to players score
  - Added logic to prompt the user with "correct" or "incorrect"
    - Added prompts for after the game to add links to play again or to leaderboard
  - Sorted Table scores and made them appear
  - Added time stamp
  - Encoded rounding factor for scores
- **CSS**
  - Entered and Styled about us
  - Styled leaderboard page
  - Fixed racer images to face direction
- **General**
  - Merged to main
    - Hit MVP!!!
    - Troubleshooted upload to live web

-----------------

#### Morning Standup Thursday, February 3, 2022

- **What we did yesterday**
- COMPLETED MVP
- Added alerts whetherer it was right or wrong
- Leaderboard and About us page COMPLETE
- Added play again or see results
- Alert the user to where they won or loss
  - **Lesson Learned** events blocks hyperlinks

- **What are we planning for today**
  - Style pop us
  - Clean up JS code
  - Take a look at resizing window
  - Fix the size of the questions so they don't resize for each question
  - Change out images to header
    - **TO USE** Image - render, will sharpen the pixelated images
  - Present to Audrey
    - Populate slides and practice presentation
  - Nic - Footers
    - Style CSS
  - Micha - Questions, to be fixed
    - Racetrack CSS
  - Brady - Pair with Nic
  - Matt - Pair with Micha

- **Blockers?**
  - NO BLOCKERS TODAY
