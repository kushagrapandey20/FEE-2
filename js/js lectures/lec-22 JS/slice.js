// slice

// let arr = [1,2,3,4]
// console.log(arr.slice(1,3))
// console.log(arr)

// arr[1] = 5
// console.log(arr)



// splice

// let arr = [1,2,3,4]

// console.log(arr.splice(1))
// console.log(arr)


// let arr = [1,2,3,4]

// console.log(arr.splice(1,3,5,6,4))
// console.log(arr)


// let arr = [1,2,3,4]

// console.log(arr.splice(1,3,5,6,4))
// console.log(arr)

// objects :-
// 1. constructor :- var obj = object(value)
//                 obj.name = "Yash"
//                 console.log(obj)
//                 => Yash

// there are two ways to declare an object : contructor / literals:

// // A) constructor
// const obj = new Object();
// obj.name = 'yash'
// console.log(typeof obj)
// console.log(obj)


// B) literals 
// const users = {
//     name: 'yash',
//     'roll number' : 234567890,
//     subject : 'FEE'
// }

// console.log(users.name)
// console.log(users['name'])
// // console.log(users('roll no.'))
// console.log(users['roll no'])

// (B) literalls :- 
// const users = {
//     name: 'yash',
//     'roll number ': 1234561234,
//     subject : 'fee'
// }

// change object value 
// users.name = "somaya singh";
// console.log(users)

// 1 . accessing the object value 
// console.log(users.name)
// console.log(users['name'])
// console.log(users['roll number'])

// 3. object inside an object :- 
// let users = {
//     user1 :{
//     name: 'devdutt',
//         age: 24
// },
// user2 :{
//     name: 'yash',
//     age: 24
// }}
// console.log(users.user2.age);

let users ={
    user1 :{
        Name: 'abc',
        age:{
            user2: {
                Name: 'cde',
                age:20
            }
        }
    }
}
console.log(users.user1.age.user2.age)

33
4. object inside an arraay;
let arr = [{
    Name : 'Manish' 
},
{
    Name : 'yash',
    'rollnumber': 1234567
}
]
console.log(arr[2].Name)