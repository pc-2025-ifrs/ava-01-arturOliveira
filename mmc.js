console.log("ola")

n = 12
n1 = 20
console.log(++n)
console.log(n++)
console.log(++n)

function repeat(c, n) {
    if (typeof(c) !== "string") return null
    if (typeof(n) !== "number") return null
    let s = ''
    for (let i = 0; i < n; ++i) {
        s += c
        s
    }
    return s
}

let x = null

console.log(repeat(' c ', 10))

function mmc(x, y) {
    let n = y;
    if (x > y) {n = x};
    for (let i = n; i <= (x*y); i++) {
        if (i % x == 0 && i % y == 0) {mmc = i;break}
    }
    return mmc
}

console.log(mmc(100,100,6))

console.log('9' / 3)