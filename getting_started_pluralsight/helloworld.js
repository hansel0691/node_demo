let times = 0;

const foo = () => {
    times += 1;
    console.log('Hello World');

    if (times >= 5)
    {
        clearInterval(interval)
        console.log('Done');
    }
}

const interval = setInterval(foo, 1000);
