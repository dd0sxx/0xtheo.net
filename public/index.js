let zero, x, theo

zero = document.getElementsByClassName('zero')
x = document.getElementsByClassName('x')
theo = document.getElementsByClassName('theo')

let logoClasses = [zero, x, theo]
let colors = ['black', 'blue', 'white']

let randColor = () => {
    let ref = [...logoClasses]
    let col = [...colors]
    for (let i = 0; i < ref.length; i++) {
        let rand = Math.floor(Math.random() * ref.length);
        let rand2 = Math.floor(Math.random() * ref.length);
        ref[rand][0].style.color = col[rand2]
        ref.splice(rand, 1)
    }
}

setInterval(() => {
    randColor()
    Math.random() > 0.25 ? setTimeout(randColor, 1000) 
    :
    Math.random() > 0.5 ? setTimeout(randColor, 5000)
    : null
}, 1500)

console.log('hello world')