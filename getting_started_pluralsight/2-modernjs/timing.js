const rocks = who => {
    console.log(who + ' rocks!');
}


const chalenge = (visited = false) => {
    if (!visited) {
        console.log('Hello after 4 seconds')
        setTimeout(chalenge, 4 * 1000, true);
    }
    else
        console.log('Hello after 8 seconds')
}

const theOneFunction = (delay) => {
    console.log(`Hello after ${delay} seconds`);
}


setTimeout(theOneFunction, 4 * 1000, 4);
setTimeout(theOneFunction, 8 * 1000, 8);