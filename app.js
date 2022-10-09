console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
    return function (plusNumber) {
        return plusNumber + number
    }
}

let plus15 = plus(15)
console.log(plus15(10))

// Exercise 2
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach(user => {
    console.log(user.name)
  })

  // Exercise 3
  let newUser = users.map(user => {
    let obj = {}
    obj.name = user.name
    obj.score = user.score
    return obj
  })

  console.log(newUser)

  //Exercise 4
  let newFilter = users.filter(el => {
    if(el.isActive === true) {
        return el
    }
  })

  console.log(newFilter)

  // Exercise 5
  let descend = users.sort(function (a, b) {return b.score - a.score})
  console.log(descend)

  // Exercise 6
  let sum = users.reduce((sum, user) => sum + user.score, 0) / users.length
  console.log(sum)