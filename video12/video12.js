console.log('Hello world from HTML')

let arrTop4 = ['ManCity', 'Liverpool', 'Mu', 'Chelsea'];

for(let i = 0; i < arrTop4.length; i++){
    console.log('Top: ', i + 1, arrTop4[i])
}

let i = 0
// while(i < arrTop4.length){
//     console.log('Top: ', i + 1, arrTop4[i])
//     i++;
// }

let flag = false;

while(!flag){
    console.log('check value i: ', i)
    i++
    if(i === 10) flag = true;
}

// do{
//     console.log('Top: ', i + 1, arrTop4[i])
//     i++;
// } while(i < 4)
