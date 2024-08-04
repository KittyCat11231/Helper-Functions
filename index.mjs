const helpers = {
    removeFromArray: (array, removeMe) => {
        return array.filter(value => JSON.stringify(value) !== JSON.stringify(removeMe));
    },
    mergeArrayIntoArray: (copiedArray, targetArray) => {
        return targetArray.concat(copiedArray);
        })
    },
    findCommonElements: (firstArray, secondArray) => {
        return firstArray.filter(element => secondArray.includes(element));
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
    getMonthNameFromNumber: (monthNumber, useFullName) => {
        if (monthNumber > 12 || monthNumber < 0) {
            return 'Invalid Month Number';
        }
        let months;
        if (useFullName === true) {
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        } else {
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        }
        return months[monthNumber - 1];
    },
    getMonthNumberFromName: monthName => {
        let monthsFull = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        let monthsAbbreviated = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        for (let i = 0; i < monthsFull.length; i++) {
            if (monthName.toLowerCase() === monthsFull[i]) {
                return i + 1;
            }
        }
        for (let i = 0; i < monthsAbbreviated.length; i++) {
            if (monthName.toLowerCase() === monthsAbbreviated[i]) {
                return i + 1;
            }
        }
        return 0;
    }
}

export default helpers;