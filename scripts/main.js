// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
// const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
// const userRegisterURL = `${baseServerURL}/register`;
// const userLoginURL = `${baseServerURL}/login`;

// login
let loginUserUsername = document.getElementById("username");
let loginUserPassword = document.getElementById("password");
let loginUserButton = document.querySelector("form");

// getTodo
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("Token") || null;
let userId = +localStorage.getItem("userId") || null;
// const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
// const urlTodosBase = `${baseServerURL}/todos/`;

// cats
// let empNameInput = document.getElementById("employee-name");
// let empImgInput = document.getElementById("employee-image");
// let empDeptInput = document.getElementById("employee-dept");
// let empSalaryInput = document.getElementById("employee-salary");
// let empCreateBtn = document.getElementById("add-employee");
// let sortAtoZBtn = document.getElementById("sort-low-to-high");
// let sortZtoABtn = document.getElementById("sort-high-to-low");
// let catsData = [];


let employeesData = [];

// ***** Event listeners ***** //
// window.addEventListener("load", () => {
//   fetchAndRenderEmployees();
// });



loginUserButton.addEventListener("submit", async (e) => {
  e.preventDefault()

  let loginObj = {
    username: loginUserUsername.value,
    password: loginUserPassword.value
  }

  try {
    let res = await fetch(`http://127.0.0.1:9090/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(loginObj)
    })

    if (res.ok) {
      let data = await res.json()
      console.log(data)

      userAuthToken = data.accessToken
      userId = data.user.id
      localStorage.setItem("Token", userAuthToken);
      window.location.href = 'employee.html';
    }
    else{
      alert("Invalid Credentials!")
    }
  } catch (error) {
     console.log(error, "something went wrong")
     alert("Invalid Credentials!")
  }

  // fetch(`${baseServerURL}/login`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   body: JSON.stringify(loginObj)
  // })
  //   .then((res) => {
  //     console.log(res)

  //     if(res.ok){
  //       console.log("hello")
  //     }

  //   })

});



// ***** Utilities ***** //
// array of objects
// id, title, desc, linkText, linkUrl, imageUrl
// function renderCardList(cardData) {
//   let cardList = `
//     <div class="card-list">
//       ${cardData
//         .map((item) =>
//           getCard(
//             item.id,
//             item.title,
//             item.description,
//             item.linkText,
//             item.linkUrl,
//             item.imageUrl
//           )
//         )
//         .join("")}
//     </div>
//   `;

//   mainSection.innerHTML = cardList;

//   // let editLinks = document.querySelectorAll(".card__link");
//   // for (let editLink of editLinks) {
//   //   editLink.addEventListener("click", (e) => {
//   //     e.preventDefault();
//   //     let currentId = e.target.dataset.id;
//   //     populateEditForms(currentId);
//   //   });
//   // }
// }

// function getCard(id, title, desc, linkText, linkUrl, imageUrl) {
//   let card = `
//       <div class="card" data-id=${id} >
//         <div class="card__img">
//         <img src=${imageUrl} alt="food" />
//         </div>
//         <div class="card__body">
//           <h3 class="card__item card__title">${title}</h3>
//           <div class="card__item card__description">
//             ${desc}
//           </div>
//           <a href=${linkUrl} data-id=${id} class="card__item card__link">${linkText}</a>
//         </div>
//       </div>
//   `;
//   return card;
// }

