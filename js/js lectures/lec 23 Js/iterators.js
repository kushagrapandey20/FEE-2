let str = 'yash';
let obj = {name :'yash'};
// console.log(obj[Symbol.iterator]);
// console.log(str[Symbol.iterator]);
// for(let i of str){
//     let iterator = str[Symbol.iterator]();
//     // console.log(iterator);
//     console.log(iterator.next());
//     console.log(iterator.next());
// }
for(let i of str){
    console.log(i);
}