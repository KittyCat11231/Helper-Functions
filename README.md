# Some basic helper functions

These are just some small helper functions for my projects.

## Install

`npm install @kyle11231/helper-functions`

## Usage

`import helpers from '@kyle11231/helper-functions';`

or

`const { helpers } = require('@kyle11231/helper-functions');`

## Functions

### removeFromArray

Removes an element from an array.

Usage:
`let newArray = helpers.removeFromArray(targetArray, elementToRemove);`

### mergeArrayIntoArray

Takes all the elements of one array and copies them into a target array.

Usage:
`helpers.mergeArrayIntoArray(arrayToCopy, targetArray);`

### findCommonElements

Returns an array of just the common elements of two arrays.

Usage:
`let commonElements = helpers.findCommonElements(firstArray, secondArray);`

### deepEqual

Can be used to tell if two elements (such as arrays) passed by reference are equal by value.

Returns true or false.

Usage:
`let trueOrFalse = helpers.deepEqual(firstArray, secondArray);`

### deepCopy

Creates a deep copy of an element.

Usage:
`let newElement = helpers.deepCopy(elementToCopy);`

### getRandomInteger

Returns a random integer from 1 to a specified maximum value.

Usage:
`let randomInteger = helpers.getRandomInteger(<insert a number here>);`

### getMonthNameFromNumber

Returns the name of a month given its number. For example: passing in "5" would return "May".

Set the second parameter, useFullName, to true to return full month names (ie: "January", "February", "March", etc...), or false to return abbreviated month names (ie: "Jan", "Feb", "Mar", etc...).

Usage:
`let monthName = helpers.getMonthNameFromNumber(monthNumber, useFullName)`

### getMonthNumberFromName

Returns the number of a month given either its full name (ie: "January", "February", "March", etc...), or three letter abbreviation (ie: "Jan", "Feb", "Mar", etc...).

The monthName parameter is not case sensitive.

Usage:
`let monthNumber = helpers.getMonthNumberFromName(monthName)`