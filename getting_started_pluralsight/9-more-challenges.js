

//Challenge 1

const foo = (counter) => {
    console.log(`Hello World. ${counter}`);
    setTimeout(foo, ++counter * 1000, counter);
}

// setTimeout(foo, 1000, 1);

// Challenge 2

const f = (counter, wait) => {
    console.log(`Hello World. ${wait * 100}`);

    if (counter++ === 5) 
        setTimeout(f, ++wait * 100, 1, wait);
    else
        setTimeout(f, wait * 100, counter, wait);
}


// setTimeout(f, 100, 1, 1)

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk != null)
        process.stdout.write(chunk)
})

// process.stdout.write(chunk);