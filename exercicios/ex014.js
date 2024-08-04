let num = [4, 5, 6, 4, 6, 3]

/*
for (let pos = 0; pos < num.length; pos++) {
    if (num.length == pos) {
        console.log('Fim')
    }
    else {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
    }
} */

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}