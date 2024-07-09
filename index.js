const helpers = {
    removeFromArray: (array, removeMe) => {
        return array.filter(value => value !== removeMe);
    },
    mergeArrayIntoArray: (copiedArray, targetArray) => {
        copiedArray.forEach(element => {
            targetArray.push(JSON.parse(JSON.stringify(element)));
        })
    },
    findCommonElements: (arr1, arr2) => {
        return arr1.filter(element => arr2.includes(element));
    },
    deepEqual: (a, b) => {
        return JSON.stringify(a) === JSON.stringify(b);
    },
    deepCopy: target => {
        return JSON.parse(JSON.stringify(target));
    },
    getRandomInteger: max => {
        return Math.floor(Math.random() * max) + 1;
    },
    getMonthNameFromNumber: (num, useFullName) => {
        if (num > 12 || num < 0) {
            return 'Invalid Month Number';
        }
        let months;
        if (useFullName === true) {
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        } else {
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        }
        return months[num - 1];
    },
    getMonthNumberFromName: name => {
        let monthsFull = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        let monthsAbbreviated = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        for (let i = 0; i < monthsFull.length; i++) {
            if (name.toLowerCase() === monthsFull[i]) {
                return i + 1;
            }
        }
        for (let i = 0; i < monthsAbbreviated.length; i++) {
            if (name.toLowerCase() === monthsAbbreviated[i]) {
                return i + 1;
            }
        }
        return 0;
    }
}

export default helpers;