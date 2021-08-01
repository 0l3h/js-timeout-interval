'use strict';

printNumbersInterval(1, 100, 10);

/**
 * Displays a number of a given range after fixed amount of time using setInterval method.
 * 
 * @param {Number} from       First number in range.
 * @param {Number} to         Last number in range.
 * @param {Number} interval   Time interval in milliseconds beetween function calls. 
 */
function printNumbersInterval(from, to, interval) {
    const timerId = setInterval(() => {
        console.log(from++);
        if(from > to) {
            clearInterval(timerId);
        }
    }, interval);
}

printNumbersTimeout(1, 100, 10);

/**
 * Displays a number of a given range after fixed amount of time using recursive setTimeout method.
 * 
 * @param {Number} from       First number in range.
 * @param {Number} to         Last number in range.
 * @param {Number} interval   Time interval in milliseconds beetween function calls. 
 */
function printNumbersTimeout(from, to, interval) {
    console.log(from++);
    
    const timerId = setTimeout(printNumbersTimeout, interval, from, to, interval);
    
    if(from > to) {
        clearTimeout(timerId);
    }
}