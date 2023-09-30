# Web Development Project 2 - Percy Jackson Flashcards

Submitted by: Harshita Bhardwaj

This web app: This web app tests the knowledge of a Percy Jackson fan. Test your triva from basic knowledge of what Percy's weapon of choice turns into to more niche knowledge to see if you really are a Percy Jackson fan.

Time spent: 6 hours spent in total

## Required Features

The following **required** functionality is completed:

- [✅] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [✅] **A single card at a time is displayed, only showing one of the components of the information pair**
- [✅] **A list of card pairs is created**
- [✅] **Clicking on the card shows the corresponding component of the information pair**
- [✅] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [✅] Cards contains images in addition to or in place of text
- [✅] Cards have different visual styles such as color based on their category
  - [ ] *visual style implemented*

The following **additional** features are implemented:

* One thing that I added to my flashcards web app was making it so if the user clicks on the back button then the next button they are taken back to the card they were viewing to make the flashcards more practical. Once the use makes it to the last new card they saw a new random card will be drawn

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
