//! 1
async function asyncFunction() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/todos").then(
      (response) => response.json()
    );
  } catch (error) {
    return error;
  }
}

// asyncFunction().then(json => console.log(json));

//! 2

async function getPostsAPI() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (res) => res.json()
    );
  } catch (error) {
    console.log("error");
  }
}

// getPostsAPI().then((res)=>{
//     console.log(res);
// });

//!3

async function getComments() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/comments").then(
      (res) => res.json()
    );
  } catch (error) {
    console.log("error");
  }
}

// getComments().then(res=>{console.log(res)});

//!4
async function getFifthPost() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/posts/5").then(
      (res) => res.json()
    );
  } catch (error) {
    return "error";
  }
}
// getFifthPost().then(res =>{console.log(res);})

async function getNineComment() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/comments/9").then(
      (res) => res.json()
    );
  } catch (error) {
    return "error";
  }
}

// getFifthPost().then(res=>{console.log(res);})

//!5

async function getAlbums() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/albums").then(
      (res) => res.json()
    );
  } catch (error) {
    return "error";
  }
}

// getAlbums().then(res=>console.log(res))

//!6

async function printingToDomObj() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/albums/2").then(
      (res) => res.json()
    );
  } catch (error) {
    return "error";
  }
}

// printingToDomObj().then(res=> {for (const key in res) {
//     showInfo.innerHTML += `<br>${key} : ${res[key]}`;
//     }});

//!7

async function printAllUsersToDom() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json()
    );
  } catch (error) {
    return "Error";
  }
}

// printAllUsersToDom().then(res=>{for (const item of res) {
//     for (const key in item) {
//         showInfo.innerHTML += `<br>${key} : ${item[key]}`
//     }
// }})

//! 8+9


function printNotExistUser(api, userId) {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${userId}`)
      .then(res => res.json())
      .then(res2 => res2.id ? resolve(res2) : reject({message : "ERROR"}));
  });
}

async function printToDomUser22() {
  try {
    return await printNotExistUser("https://jsonplaceholder.typicode.com/users" , 1)
  }
  catch (error) {
   console.log(error);
  }};



//   printToDomUser22().then(res=> showInfo.innerHTML += `error`).catch(rej=>{prompt(`${rej}User Not Exist`)})


//!10

const userOne = {
    id:11,
    name:"Gamal",
    lastN : "abuSome",
    age:35
}

const option = {
    method: "POST",
    body: JSON.stringify(userOne)
};

async function addUserFun() {
    try {
        return await fetch("https://jsonplaceholder.typicode.com/todos" , option).then(res=> res.json());
    } catch (error) {
        return "error"
    }
}


// addUserFun().then(res=>console.log(res))

//!11:

const userTwo = {
    id: 200,
    name: "Eden",
    lName: "Tasama",
    age: 40,
}

const optionTwo={
    method:"POST",
    body: JSON.stringify(userTwo)
}

async function addUserTwo() {
    try {
        // return await fetch("https://jsonplaceholder.typicode.com/posts").then(res=>)
    } catch (error) {
        return error
    }
}


