import { DOMFixer, ShowImagePreview,LoadCities, SignupRedirect, CloseNav, ShowAllUsers, InputCheck,AddUser,AddProduct,addToCartHandler} from './functions.js';

function main() {
  let cityInput = document.querySelector('#s-city');
  if (cityInput) {
    cityInput.addEventListener('input', LoadCities);
  }

  let imageSelector = document.querySelector('#s-file');
  if (imageSelector && imageSelector !== null) {
    imageSelector.addEventListener('change', ShowImagePreview);
  }

  let dom = document.addEventListener('DOMContentLoaded', DOMFixer);
  

  // inputField.addEventListener('click', function() {
  //   if (description.style.display === 'none') {
  //     description.style.display = 'block'; // Show the description
  //   } else {
  //     description.style.display = 'none'; // Hide the description
  //   }
  // });

  // let ido = document.querySelector('#add_store');
  // ido.addEventListener('submit', AddStore);

  //  LoadStoresFromLocalStorage();
  // document.addEventListener('DOMContentLoaded', FuncDom);

  let closeIcon = document.querySelector('#x-icon');
  if (closeIcon) {
    closeIcon.addEventListener('click', CloseNav);
  }

  const formElements = document.querySelectorAll('.form-product input');

formElements.forEach((input) => {
    const description = input.nextElementSibling;

    input.addEventListener('focus', () => {
        description.style.display = 'block';
    });

    input.addEventListener('blur', () => {
        description.style.display = 'none';
    });
});

  // inputField.addEventListener('focus', FuncFocus);

  // inputField.addEventListener('blur', FuncBlur);

  // document.getElementById('signupForm').addEventListener('submit', function(event) {
  //   event.preventDefault(); // מניעת שליחת הטופס

  //   const username = document.getElementById('username').value;
  //   const password = document.getElementById('password').value;
  //   // ניתן להוסיף קבלת ערכים משאר השדות הדרושים לאימות

  //   // ביצוע האימות על ידי קריאה לפונקציות המתאימות מקובץ functions.js
  //   const isUsernameValid = validateUsername(username);
  //   const isPasswordValid = validatePassword(password);
  //   // ניתן להוסיף אימות נוספים על ידי קריאה לפונקציות המתאימות מקובץ functions.js

  //   // כאן תוכל לבדוק את התוצאות של האימות ולטפל בהן לפי הצורך
  //   if (isUsernameValid && isPasswordValid) {
  //     // האימות עבר בהצלחה - ניתן להמשיך לשלוח את הטופס או לבצע פעולות נוספות
  //   } else {
  //     alert(`the input erro`);
  //   }
  // });
  //תפיסת אלמנט 
  // let  username =document.querySelector(`#username`);
  //שיוך לחיצה על ידי פונקציה
  // if (username) {
  //   username.addEventListener('change', funcCheckUserName);
  // }


  //תפיסת אלמנט 
  //  let  password =document.querySelector(`#password`);
  //  //שיוך לחיצה על ידי פונקציה
  //  if (password) {
  //   password.addEventListener('change', funcCheckPassword);
  //  }


  //   //תפיסת אלמנט 
  // let  photo =document.querySelector(`#photo`);
  // //שיוך לחיצה על ידי פונקציה
  // if (photo) {
  //   photo.addEventListener('change', funcCheckPhoto);
  // }


  // //תפיסת אלמנט 
  // let  firstName =document.querySelector(`#firstName`);
  // //שיוך לחיצה על ידי פונקציה
  // if (firstName) {
  //   firstName.addEventListener('change', funcCheckFirstName);
  // }


  // //תפיסת אלמנט 
  // let  lastName =document.querySelector(`#lastName`);
  // //שיוך לחיצה על ידי פונקציה
  // if (lastName) {
  //   lastName.addEventListener('change', funcCheckLastName);
  // }


  // //תפיסת אלמנט 
  // let  email =document.querySelector(`#email`);
  // //שיוך לחיצה על ידי פונקציה
  // if (email) {
  //   email.addEventListener('change', funcCheckEmail);
  // }


  //   //תפיסת אלמנט 
  //   let  birthdate =document.querySelector(`#birthdate`);
  //   //שיוך לחיצה על ידי פונקציה
  //   if (birthdate) {
  //     birthdate.addEventListener('change', funcCheckBirthdate);
  //   }


  //     //תפיסת אלמנט 
  // let  city =document.querySelector(`#city`);
  // //שיוך לחיצה על ידי פונקציה
  // if (city) {
  //   city.addEventListener('change', funcCheckCity);
  // }


  // //תפיסת אלמנט 
  // let  address =document.querySelector(`#address`);
  // //שיוך לחיצה על ידי פונקציה
  // if (address) {
  //   address.addEventListener('change', funcCheckAddress);
  // }


  //  //תפיסת אלמנט 
  //  let  houseNumber =document.querySelector(`#houseNumber`);
  //  //שיוך לחיצה על ידי פונקציה
  //  if (houseNumber) {
  //    houseNumber.addEventListener('change', funcCheckHouseNumber);
  //  }


  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCartHandler);
});

  //  const addToCartButtons = document.querySelectorAll('.btn');
  //  addToCartButtons.forEach(button => {
  //    button.addEventListener('click', FuncCartBtn);
  //  });
  //  const cartIcon = document.querySelector('.cart-icon');
  //  cartIcon.addEventListener('click', displayCart);

  let signupButton = document.querySelector('#signupButton');
  if (signupButton) {
    signupButton.addEventListener('click', SignupRedirect);
  }
 
  //  LoadCities();
  // ShowAllUsers();
 //תפיסת אלמנט 
 let loginButton = document.querySelector('#loginButton');
  //שיוך לחיצה על ידי פונקציה
  if (loginButton) {
    loginButton.addEventListener('click', InputCheck);
  }

 //תפיסת אלמנט 
  let saveButton = document.querySelector('#save-button');
   //שיוך לחיצה על ידי פונקציה
  if (saveButton) {
    saveButton.addEventListener('click',AddUser);
  }

   //תפיסת אלמנט 
  let addProduct= document.querySelector(`#addProduct`);
   //שיוך לחיצה על ידי פונקציה
   if (addProduct) {
     addProduct.addEventListener(`click`,AddProduct);
   }

//  //תפיסת אלמנט 
//   let btnAddProducts= document.querySelector(`#btnAddProducts`);
//     //שיוך לחיצה על ידי פונקציה
//     btnAddProducts.addEventListener(`click`,FuncPageOfAddProducts);

}

main();
