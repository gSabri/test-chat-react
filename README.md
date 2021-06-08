# Reactjs Code Challenge - Chat

v1.0

## Description

This is a test to assess your React and JavaScript skills.

You are allowed to use npm to install modules to build your application if you think it will help you. The focus will be on your coding skills, build tools are just details.

Please create a branch starting from master, commit your changes, and when ready make a PR (Merge request/Pull request) to master with the install and run instructions. If something is not clear, please ask.
## 1 Coding exercise

Implement, using React, a very simple CHAT web application that runs exclusively in the browser.
UI will be composed by a Messages'List and 2 TextInput that simulates 2 users that send messages each others.

Here are the main use cases:

- Each TextInput must be assigned to a fake user, who has got a fixed username (use your imagination)
- User can fill one of the TextInput, and pressing "Enter" the message will be sent to the Messages'List together with username and datetime, these will appear in the Messages'List in a well-styled way (some CSS required).
- If TextInput is empty when "Enter" is pressed an error will appear.
- User can delete a Message by pressing some icon that appear only on mouseover, contained in the Message element.
- Messages will appear from bottom to top in the Messages'List.

_Bonus 1_: Use modern browser capabilities to persist the state of the application, allowing refresh page without losing data.

_Bonus 2_: When the ArrowUp is pressed in a TextInput, that input will be filled with the last message sent by that user (if exists), and when is pressed Enter again, that last message is replaced with the edited message.

_Bonus 3_: Using CSS3 transitions, animate the text-color of every message added to the list, starting from a "Color 1" when created and ending with a "Color 2" using a transition with a duration of 10 seconds.

```
|-------- MessagesList -------|
|                             |
|                             |
|                             |
|                             |
|16:07 zelda                  |
| Hey, how you doing?         |
|                             |
|                   goku 16:10|
|     Shh!, Doing a challenge |
|-----------------------------|

zelda        [________________]

goku         [________________]
```

## 2 Testing exercise

Please set up a testing solution that allows to test the code you have created during step 2.

## Tips

This application might be sent as a "usability test" to someone inside our Company without explaining its functionalities at all, so build a UI easy to understand.

Take into account that every Merge Request will be processed and reviewed like any other Merge Request inside Company, so expect that, after requesting a review, there might be some change requests ;)
