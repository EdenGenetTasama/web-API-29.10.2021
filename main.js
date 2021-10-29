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
      .then((res) => res.json())
      .then((res2) => (res2.id ? resolve(res2) : reject({ message: "ERROR" })));
  });
}

async function printToDomUser22() {
  try {
    return await printNotExistUser(
      "https://jsonplaceholder.typicode.com/users",
      1
    );
  } catch (error) {
    console.log(error);
  }
}

//   printToDomUser22().then(res=> showInfo.innerHTML += `error`).catch(rej=>{prompt(`${rej}User Not Exist`)})

//!10

const userOne = {
  id: 11,
  name: "Gamal",
  lastN: "abuSome",
  age: 35,
};

const option = {
  method: "POST",
  body: JSON.stringify(userOne),
};

async function addUserFun() {
  try {
    return await fetch(
      "https://jsonplaceholder.typicode.com/todos",
      option
    ).then((res) => res.json());
  } catch (error) {
    return "error";
  }
}

// addUserFun().then(res=>console.log(res))

//!11:

const userTwo = {
  id: 200,
  name: "Eden",
  lName: "Tasama",
  age: 40,
};

const optionTwo = {
  method: "POST",
  body: JSON.stringify(userTwo),
};

async function addUserTwo() {
  try {
    return await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      optionTwo
    ).then((res) => res.json());
  } catch (error) {
    return error;
  }
}

// addUserTwo().then(res=>console.log(res))

//! 12:צרו פונקציה אסיכרונית ששולחת בקשת POST עם אובייקט ל API של albums.

const USER_THREE = {
  id: 200,
  name: "Eden",
  lName: "Tasama",
  age: 23,
};

const optionThree = {
  method: "POST",
  body: JSON.stringify(USER_THREE),
};

async function addAlbumThree(api, option) {
  try {
    return await fetch(api, option).then((res) => res.json());
  } catch (error) {
    return { message: "ERROR" };
  }
}

// addAlbumThree().then(res=>console.log(res));

//!13צרו פונקציה אסיכרונית ששולחת בקשת POST עם אובייקט ל API של users.

const USER_FOUR = {
  id: 200,
  name: "Eden",
  lName: "Tasama",
  age: 23,
};

const optionFour = {
  method: "POST",
  body: JSON.stringify(USER_FOUR),
};

async function addUserFour(api, option) {
  try {
    return await fetch(api, option).then((res) => res.json());
  } catch (error) {
    return { message: "ERROR" };
  }
}

// addUserFour().then(res=>console.log(res))

//!14צרו פונקציה אסיכרונית גנרית ששולחת בקשת POST עם אובייקט ל API.

const USER_FIV = {
  id: 200,
  name: "Eden",
  lName: "Tasama",
  age: 23,
};

const optionFiv = {
  method: "POST",
  body: JSON.stringify(USER_FIV),
};

async function addPostFiv(API, option) {
  try {
    return await fetch(API, option).then((res) => res.json());
  } catch (error) {
    return { message: "ERROR" };
  }
}

// addPostFiv().then(res=>console.log(res));

//!ADD to all, genera function  ;

async function addALL(api , optint) {
    try {
        return await fetch(api, optint).then((res) => res.json());
      } catch (error) {
        return { message: "ERROR" };
      }
    }


//! 15+16

btnId.onclick = () => {
  const addNewInfo = {
    _id: idID.value,
    firstName: fNameID.value,
    lastName: lNameID.value,
    age: ageID.value,
  };
  const option = {
    method: "POST",
    body: JSON.stringify(addNewInfo),
  };

  const userSelect = selectID.value;
  switch (userSelect) {
    case "postAPI":
        addALL("https://jsonplaceholder.typicode.com/posts", option).then(
        (res) => console.log(res)
      );
      break;

    case "albumAPI":
        addALL("https://jsonplaceholder.typicode.com/albums", option).then(
        (res) => console.log(res)
      );
      break;

    case "userAPI":
        addALL("https://jsonplaceholder.typicode.com/users", option).then((res) => console.log(res));
      break;

    case "todosAPI":
        addALL("https://jsonplaceholder.typicode.com/todos",option).then((res) => console.log(res));
      break;

      case "commentsAPI":
        addALL("https://jsonplaceholder.typicode.com/comments",option).then((res) => console.log(res));
      break;

    default:
      break;
  }
};
