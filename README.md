# Web Development Project 2 - Percy Jackson Flashcards

Submitted by: Harshita Bhardwaj

This web app: This web app tests the knowledge of a Percy Jackson fan. Test your triva from basic knowledge of what Percy's weapon of choice turns into to more niche knowledge to see if you really are a Percy Jackson fan.

Time spent: 6 hours spent in total

## Required Features

The following **required** functionality is completed:

- [ ] **The user can enter their guess in a box before seeing the flipside of the card**
- [ ] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [ ] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [ ] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [ ] A shuffle button is used to randomize the order of the cards
- [ ] A user's answer may be counted as correct even when it is slightly different from the target answer
- [ ] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

## Video Walkthrough

Here's a walkthrough of implemented required features:

<a href='https://imgur.com/a/1sj6h52.gif'>Video Walkthrough</a>

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif

## Notes

One challenge I had while creating this web app was figuring how to pass a function as a prop to a custom component. Initally I thought there was a special method of doing this, but it turned out I was simply spelling the name of the prop incorrectly when I was calling the custom component. Another challenge I ran into was determining how to randomize the order of the cards. Instead of making the cards purely random when the next button was clicked I wanted to allow the user to go back through their previous cards, and then review the cards they had already seen by hitting the next button. This added some complexity to my code, but I was able to figure it out.
## License

    Copyright 2023 Harshita Bhardwaj

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
