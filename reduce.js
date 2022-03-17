function reduce(elements, cb, startingValue) {
    if (elements) {
        
        if(startingValue ) {
           
        

        for (let counter = 0; counter < elements.length; counter++) {
            startingValue = cb(startingValue, elements[counter],counter,elements);

        }
        return startingValue;
    }
    else {
           startingValue =elements[0];
        for (let counter = 1; counter < elements.length; counter++) {
            startingValue = cb(startingValue, elements[counter],counter,elements);

        }
        return startingValue;
    }
    }
    else {
        return 0;
    }
}

function sumofAllElement(sum, eachItem,index,array) {

    return sum + eachItem;
}

function displayValue(sumResult) {

    !sumResult ? console.log("Invalid Input") : console.log("Sum of all the element of array : " , sumResult);

}

module.exports = {
    reduce,
    sumofAllElement,
    displayValue
}