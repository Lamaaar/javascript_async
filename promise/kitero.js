/**
 * 
 * @param {number} num
 * @returns {Promise<number>} 
 */
const buyApple1 = num => {
    if (num < 5) {
        return Promise.resolve(num);
    } else {
        return Promise.reject(num);
    }
}

console.log('indul a program');
const res1 = buyApple1(3);
console.log(res1);
res1.then(value => {
    console.log(`Vásárolt alma: ${value}`);
});
console.log("vége a programnak");

/**
 * 
 * @param {number} num
 * @returns {Promise<number>} 
 */
const buyApple2 = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num < 5) {
                resolve(num);
            } else {
                reject(num);
            }
        }, 3000);
    });
}

console.log('buyapple2 progi indul');
const res2 = buyApple2(2);
console.log(res2);
res2.then(value => {
    console.log("buyapple2 vasarolt alma: " + value);
})
console.log("vége");

const res3 = buyApple2(4);
res3.then(value => {
    console.log("almát vettél: " + value);
}).catch(value => {
    console.log("nem vettél almát mer nem volt: " + value);
}).finally(() => {
    console.log("vásárlás vége");
})