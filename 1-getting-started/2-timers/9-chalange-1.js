const helloFn = timeout => {
    setTimeout(()=>{
        console.log(`Hello World: ${timeout}`)
        helloFn(timeout+1)
    }, timeout * 1000)
}

helloFn(1)