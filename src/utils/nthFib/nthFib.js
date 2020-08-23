// const array = [ 0, 1,1,2,3,5,8,13,21];

const nthFib = (n) => {
    let lastTwo = [0, 1];
    let counter = 3;
    while (counter <= n ) {
        const nextFib = lastTwo[1] + lastTwo[0];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] =  nextFib;
        
        counter++
    }
    return n > 1 ? lastTwo[1] : lastTwo[0] ;
}

exports.nthFib = nthFib;