# TODO Example

TODO example app using CSS Grid Layout. Based on my another project: [React GridBox](https://github.com/ku8ar/react-gridbox).

Entire code is in the '/src' directory. Boilerplate has only slightly changed. I do not use react-create-app because our great savior Dan still has not added decorators.

Project is based on a blueprint with which I had not previously dealt (last year I worked only on SLDS). I did not want to use Bootstrap because it is too mainstream.

Tested only on **Chrome Canary**!

[**[Demo](https://ku8ar.github.io/todo)**]

## Manual
* Adding a new list: double click on the wallpaper.
* Dragging: Mouse left-click to free space (without inputs and buttons) on the list.

## Features
* Draggable lists and notes with two states (undone, done).
* Search field.
* Automatic saving to localStorage.
* Import and export to file.

## Known Issues
##### Overlapping of cards, no min / max dimensions, crazy cursor on drag, poor performance
These are deficiencies in the react-gridbox library that I created in only one day a two months ago. I will improve this library in the future.
##### Only Chrome support
This is React framework error. Seriously. This problem occurs because react inline styles with the value 'repeat()' are unnecessarily parsed by the framework. I already have a solution, but I need to change some lines in the react-gridbox to fix this bug.

## FAQ
##### "Something" does not work after some time (a few hours, days after first use)?
I probably improved or added "something" and store in localStorage does not match the new configuration.
I will try to add a store validation mechanism in the future. Meanwhile:
```js
localStorage.clear()
```

## TODO (I mean "to do") List
- [ ] Clean project, remove redux hacks (Elm antiparadigms)
- [ ] Intro
- [ ] DnD to files
- [ ] Beautify CSS (similar to tr..lo)
- [ ] Grid size options
- [ ] Second view (show react-router support)
- [ ] OAuth demo
- [ ] react-gridbox issues
