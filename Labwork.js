// // CLASS LAB-01

// class calculator {
//   constructor(number = 10) {
//     this.value = number
//   }
//   add(num) {
//     this.value += num
//     return this.value
//   }
//   subtract(num) {
//     this.value -= num
//     return this.value
//   }
//   multiply(num) {
//     this.value *=num
//     return this.value
//   }
//   divide(num) {
//     this.value /= num
//     return this.value
//   }
//   show() {
//     console.log(`value = ${this.value}`)
//   }

// }

// let result = new calculator(10)
// result.show()
// console.log(result.add(10))
// console.log(result.multiply(10))
// console.log(result.subtract(10))
// console.log(result.divide(10))


// // CLASS LAB-02
// class Sale {
//   constructor(_name,_amount,_price){
//     this.name = _name
//     this.amount = _amount
//     this.price = _price
//   }
//   calcPrice(){
//    return this.amount * this.price
//   }
// }
//   class Beverage extends Sale{
//     // constructor(){

//     // }
//   }

//   let result = new Beverage("kitkat",20,5)
// console.log(result.calcPrice())

//--------------------------------------------------------------------------------------------//

// isArray Lab - 01
// let arr = [1,2,3,4,5]
// let obj = {
//   name : 'bobby'
// }
// let checkedArr = (arr) => {
//   return Array.isArray(arr)
//   }
//  let result = checkedArr(arr)
//  let result2 = checkedArr(obj)
//  console.log(result)
//  console.log(result2)


// isArray Lab - 02
// const myEmptyObj = {key:"value",
//     key2:"value2"
// };

// // Works best with new browsers
// function checkEmptyObj(Obj){
// if(Object.keys(Obj).length === 0)
// {console.log("it's empty")}
// else{console.log("it's not empty")}
// }

// checkEmptyObj(myEmptyObj)
//--------------------------------------------------------------------------------------------//


// // Object,Keys,Object.values LAb-01

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let keys = Object.keys(salaries)
// console.log(keys)
// let sumSalaries = keys.reduce((prev,curr) => {
//   return prev += salaries[curr]
// },0 )

// console.log(sumSalaries)


// let values = Object.values(salaries)
// console.log(values)
// let sum = values.reduce((prev, curr) => {
//   return prev += salaries[curr]
// }, 0)

// console.log(sum)


//--------------------------------------------------------------------------------------------//

// Rest PARAMETER

// #Lab-01

// function sum(...args) { // args is the name for the array
//   let result = 1;
//   for (let key of args) result *= key;
//   return result;
// }
// console.log(sum(1)); // 1
// console.log(sum(1, 2)); // 3
// console.log(sum(1, 2, 3)); // 6
// console.log(sum(1, 2, 3, 4)); // 6




// #Lab-02
// function filterOutOdds(...numbers) {
//   return numbers.filter(num => num % 2 === 0);
// }

// let result = filterOutOdds(1,2,3,4,5,6,7,8,9,10);
// console.log(result)


// #Lab-03
// Lab 3
// let mergeObj = (...obj) => {
//   let empty = {}
//   for (let i = 0; i < obj.length; i++) {
//     Object.assign(empty, obj[i])
//   }
//   return empty
// }
// let obj1 = {
//   fname: 'VIrat',
//   lname: 'shahi'
// }
// let obj2 = {
//   nickName: 'bobby'
// }
// let result = mergeObj(obj1, obj2)
// console.log('----------- Lab 3 ------------')
// console.log(result)

// #Lab-04
// let nums1 = [1, -2, 3, 4];
// let nums2 = [8, 3, -8, 1];

// let num3 = [5,...nums1,-6,-1,...nums2]
// console.log(num3)

// let result = num3.reduce((prev,curr) => {
//   return prev+=curr},0)

// console.log(result)

// // #Lab-05
// let arrconverter = (array1)=> {
//     array2 = [...array1]
//     array2[3] = array2[3]**2
//     return array2
// }

// console.log(arrconverter([1,2,3,4,5,6]))


// #Lab-06
// lab6
// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ spread parameter

// let profile = (fname,lname,...hobby)=> {
//     console.log(`${fname} ${lname} ${[...hobby]} ${hobby.length} `)
// }


// profile("faris","cuteboy","football","Badminton","Basketball")


// // #Lab-07
// let doubleArr = (arr, ...num) => {
//   console.log(arr)
//   console.log(num)
//   let doubleArr = num.map((item) => item * 2)
//   console.log(doubleArr)
//   return arr.concat(...doubleArr)
// }

// let result = doubleArr([1, 2, 3], 4, 4, 5, 6, 7)
// console.log(result)


// #Lab-09
// let cloneArray = (arr)=> newarr = [...arr]

// arr = ["A","B","C","D"]

// console.log(cloneArray(arr))


// #Lab-10
// let cloneArray = (obj) => newobj = { ...obj }
// obj = { key: "A", key1: "B", key2: "C", key3: "D" }
// console.log(cloneArray(obj))



//--------------------------------------------------------------------------------------------//

// DESTRUCTURING
// // LAB-11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // *Maya
// console.log(second); // **Marisa
// console.log(third); // ***Chi


// // LAB-12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // *Raindrops on roses
// console.log(whiskers); // **whiskers on kittens
// console.log(aFewOfMyFavoriteThings); // *** [Bright copper kettles,warm woolen mittens]

// // LAB-13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // *(3)[ 10,30,20 ]

// // LAB-14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // *8
// console.log(yearNeptuneDiscovered); // **1846

// // LAB-15

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // *yearNeptuneDiscovered:
// 1846


// // LAB-16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // *Your name is Alejandro and you like purple
// console.log(getUserData({ firstName: 'Melissa' })); // **Your name is Melissa and you like green
// console.log(getUserData({})); // ***Your name is undefined and you like green


// // LAB-17
// let guest = 'Jane';
// let admin = 'Pete';
// [guest,admin] = [admin,guest]

// console.log(guest)
// console.log(admin);


// //LAB-18
// let ageValidation = ({ fname, lname, age }) => age > 18 ? console.log(`greeting ${fname} ${lname}`) : age <= 18 ? console.log("invalid access") : null

// ageValidation({ fname: "Faris", lname: "CC", age: 18 })
// ageValidation({ fname: "Bobby", lname: "CC", age: 19 })
// ageValidation({ fname: "Alok", lname: "CC", age: 15 })

// //LAB-19
// let user = {
//     name: 'John',
//     years: 27
//   };


// let {
//     name,
//     years:age,
//     isadmin = false
// } = user

// console.log(name);
// console.log(age);
// console.log(isadmin)

// //LAB-21
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [a, [b, [[[c, d], e], f]]]=arr

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(arr)


// //LAB-22
// const obj = { prop: 5, prop2: 10 };

// let { prop: a, prop2: b } = obj

// console.log(a);
// console.log(b);

// // //LAB-23
// let { a, b } = { a: 1, b: 2 };

// // //LAB-24
// const [, , , a, b] = [1, 2, 3];

// console.log(a)
// console.log(b)


// //LAB-25
// const q = { prop: 5, prop2: [10, 100] };


// let { prop: x, prop2: [, y] } = q

// console.log(x);
// console.log(y);


// //LAB-26
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// let {
//   prop: x,
//   prop2: {
//     prop2: {
//       nested: [, y ,]
//     }
//   }
// } = q
// console.log(x)
// console.log(y)

// //LAB-27

// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];

// for (let i of names){
//   let {firstName , lastName} = i
//   fullname = (`${firstName} ${lastName}`)
//   console.log(fullname)
// }


// //LAB-28
// const users = [
//     { user: "Name1" },
//     { user: "Name2", age: 2 },
//     { user: "Name2" },
//     { user: "Name3", age: 4 }
//   ];


//   for (let i of users){
//     let {user,age="unknown"} = i
//     console.log(user,age);

//   }

