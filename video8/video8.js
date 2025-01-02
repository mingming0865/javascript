console.log('Hello world from HTML')

//key: value
let obj = {
    name: 'Eric', 
    address: 'Ha Noi', 
    email: '',
    gender: '',
    // a: function(){
    //     console.log('Hello world inside function')
    //     return ''
    // }
};
JSON
"{name: 'Eric', address: 'Ha Noi'}"

let b = 'address';

// obj[b] = 'Hary'
obj.name = 'HCM'
let c = ''
// console.log('Type of a: ', typeof a, ' type of b: ', typeof b)
// console.log('What is your name?', `My name 's: `, obj.name)
// console.log('Where are you from?', `I'm from: `, obj.address)
// console.log('call function: ', obj.a())
console.log('What is your name?', `My name 's: `, obj['name'], obj)
console.log('Where are you from?', `I'm from: `, obj['address'])