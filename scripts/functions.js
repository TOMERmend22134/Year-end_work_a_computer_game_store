import { User } from "./models/user.js";
import { UsersArray, UsersImageArray ,ProductsArray,ProductImageArray} from './global_vars.js';
import { Product } from "./models/product.js";
const cartItems = [];
let totalPrice = 0;

function redirectToSignUpPage() {
    window.location.href = 'signup.html';
  }
  
  
  export function CloseNav(event) {
    window.location.href = 'index.html';
  }
  export function addToCart(game, price) {
    cartItems.push(game);
    totalPrice += price;
    updateCartCounter();
  }

  // export function updateCartCounter() {
  //   const cartCounter = document.querySelector('.cart-counter');
  //   cartCounter.textContent = cartItems.length;
  // }

  export function displayCart() {
    const cartContent = cartItems.join(', '); // Modify this to suit your desired cart representation
    alert(`Cart items: ${cartContent}\nTotal price: $${totalPrice.toFixed(2)}`);
  }

  function updateCartCounter() {
   const cartCounter = document.querySelector('.cart-counter');
   cartCounter.textContent = cartItems.length;
 }
  //  export function addToCartHandler(event) {
  //    event.preventDefault();
  //   // קבל את שם המשחק והמחיר מה-attribute של הכפתור
  //   const gameName = event.target.dataset.game;
  //   const gamePrice = parseFloat(event.target.dataset.price);
  
  //   // בדוק אם המשחק כבר נמצא בעגלה
  //   const existingGame = cartItems.find(item => item.name === gameName);
  
  //   if (existingGame) {
  //     // אם המשחק כבר נמצא בעגלה, הוסף לו 1 לכמות
  //     existingGame.quantity++;
  //   } else {
  //     // אם המשחק לא נמצא בעגלה, הוסף אותו למערך המוצרים בעגלה
  //     cartItems.push({ name: gameName, price: gamePrice, quantity: 1 });
  //   }
  
  //   // עדכן את המחיר הכולל של העגלה
  //   totalPrice += gamePrice;
  
  //   // עדכן את תצוגת הספירה של המוצרים בעגלה בממשק המשתמש
  //   updateCartCounter();
  // }
  export function addToCartHandler(event) {
    event.preventDefault();
    // Get the necessary product data from the clicked button
    const gameName = event.target.dataset.game;
    const gamePrice = parseFloat(event.target.dataset.price);
  
    // Check if the product is already in the cart
    const existingGame = cartItems.find(item => item.name === gameName);
  
    if (existingGame) {
      // If the product is in the cart, update its quantity
      existingGame.quantity++;
    } else {
      // If the product is not in the cart, add it to the cart
      cartItems.push({ name: gameName, price: gamePrice, quantity: 1 });
    }
  
    // Update the cart items in local storage
    updateCartInLocalStorage();
  
    // Update the cart counter in the user interface
    updateCartCounter();
  }
  
  // Function to update the cart items in local storage
  function updateCartInLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  // export function DOMFixer() {
  //   // Retrieve the cart items from local storage
  //   const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  
  //   if (storedCartItems) {
  //     // Display the cart items with their details on the cart.html page
  //     const cartContainer = document.querySelector('.cart');
  //     let cartContent = '';
  
  //     storedCartItems.forEach(item => {
  //       const { name, price, quantity } = item;
  //       const totalPrice = price * quantity;
  //       cartContent += `
  //         <div class="cart-item">
  //           <span>${name}</span>
  //           <span>Price: $${price.toFixed(2)}</span>
  //           <span>Quantity: ${quantity}</span>
  //           <span>Total: $${totalPrice.toFixed(2)}</span>
  //         </div>
  //       `;
  //     });
  //     cartContainer.innerHTML = cartContent;
  //   } 
  //   else {
  //     cartContent = '<p>Your cart is empty.</p>';
  //   }
  
  //   return cartContent;
  //   }

  export function DOMFixer() {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    let cartContent = '';
  
    if (storedCartItems && storedCartItems.length > 0) {
      storedCartItems.forEach(item => {
        const { name, price, quantity } = item;
  
        // Check if the price is not null before performing calculations
        if (price !== null) {
          const totalPrice = price * quantity;
          cartContent += `
            <div class="cart-item">
              <span>${name}</span>
              <span>Price: $${price.toFixed(2)}</span>
              <span>Quantity: ${quantity}</span>
              <span>Total: $${totalPrice.toFixed(2)}</span>
            </div>
          `;
        }
      });
    } else {
      cartContent = '<p>Your cart is empty.</p>';
    }
  
    return cartContent;
  }
  
  

  

  export function SignupRedirect(event) {
    window.location = 'signup.html';
  event.preventDefault(); // מניעת שליחת הטופס (אם קיים)
  }

  // export function FuncDom() {
  //   let formGroup = document.querySelectorAll('.form-group');
  //   for (let i = 0; i < formGroup.length; i++) {
  //     let inputField = formGroup[i].querySelector('input');
  //     let description = formGroup[i].querySelector('.field-description');
  //     if (description) {
  //       description.style.display = 'none';
  //       inputField.addEventListener('focus', () => {
  //         description.style.display = 'block';
  //       });

  //       inputField.addEventListener('blur', () => {
  //         description.style.display = 'none';
  //       });
  //     }
  // }
  // }
  // export function FuncFocus() {
  //   this.parentNode.querySelector('.field-description').style.display = 'block';
  // }

  // export function FuncBlur() {
  //   this.parentNode.querySelector('.field-description').style.display = 'none';
  // }

  // export function FuncCartBtn() {
  //   const game = this.getAttribute('data-game');
  //   const price = parseFloat(this.getAttribute('data-price'));
  //   addToCart(game, price);
  // }

   export function ShowImagePreview(event) {
    //input שליפת קובץ מתוך ה 
    let file = event.target.files[0];
    if (!file) return;

    let fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = (event) => {
        //בחירת אלמנט בו תוצג התמונה
        let userImage = document.querySelector('#s-image');
        //יצירת יו-אר-אל לתמונה
        userImage.src = event.target.result;
        userImage.style.display='block';
    }

}

export function AddUser(event) {
  event.preventDefault();
  //פונה לשדות הטופס ולוקח את הערך הקיים בתוכם
  let username = document.querySelector('#username').value;
  let password = document.querySelector('#password').value;
  let confirmPassword = document.querySelector('#confirmPassword').value;
  let photo = document.querySelector('#s-image').src;
  let firstName = document.querySelector('#firstName').value;
  let lastName = document.querySelector('#lastName').value;
  let email = document.querySelector('#email').value;
  let birthDate = document.querySelector('#birthDate').value;
  let city = document.querySelector('#s-city').value;
  let address = document.querySelector('#address').value;
  let houseNumber = document.querySelector('#houseNumber').value;
  // let desc = document.querySelector('#s-desc').value;
  
 // debugger;
  //יצירת אובייקט של חנות
  let user = new User(username,password,confirmPassword, photo, firstName, lastName, email, birthDate,city, address, houseNumber);

  console.log(user);
// בדיקה האם המשתמש תקין
if (user.getUsername() && user.getPassword() && user.getFirstName() && user.getLastName() && user.getEmail() && user.getBirthDate() && user.getCity() && user.getAddress() && user.getHouseNumber()) {
  // בדיקה האם המשתמש קיים בדאטהבייס
  if (UsersArray.some(existingUser => existingUser.getUsername() === user.getUsername())) {
    alert('User already exists in the database.');
  } else {
    // הוספת המשתמש למערך גלובלי ושמירת הנתונים באחסון מקומי
    UsersArray.push(user);
    UsersImageArray.push(photo);
    localStorage.setItem('users', JSON.stringify(UsersArray));
    localStorage.setItem('usersImages', JSON.stringify(UsersImageArray));

    // שמירת אובייקט המשתמש ב-Session Storage
    sessionStorage.setItem('currentUser', JSON.stringify(user));

    // הפניית המשתמש לדף פרופיל
    window.location.href = 'profile.html';
  }
} else {
  alert('Invalid input. Please fill all the required fields.');
}  
}
export function LoadUsersFromLocalStorage() {
  let users = localStorage.getItem('users');
  let usersImages = localStorage.getItem('usersImages');
  if (!users) return;

  users = JSON.parse(users);
  usersImages = JSON.parse(usersImages);

  users.map(user => UsersArray.push(user));
  usersImages.map(img => UsersImageArray.push(img));

  
}

// export function LoginRedirect(event) {
  
//   // Get the input values from the login form
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;
  
//   // Check if the username and password match the criteria
//   if (username === 'admin' && password === 'admin1234admin') {
//     // Redirect to admin.html if the criteria are met
//     window.location.href = 'admin.html';
//   } else {
//     // Display an error message if the criteria are not met
//     alert('Invalid username or password.');
//   }
// }

export function InputCheck(event) {
  debugger;
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  let foundUser = null; // משתנה לשמירת המשתמש הנמצא במערך

  // חיפוש המשתמש במערך על פי שם המשתמש והסיסמה
  for (let i = 0; i < UsersArray.length; i++) {
    const user = UsersArray[i];
    console.log(`Checking user ${i}: ${user.getUsername()}, ${user.getPassword()}`);
    console.log(`Provided data: ${username}, ${password}`);
    if (user.getUsername() === username && user.getPassword() === password) {
      foundUser = user;
      sessionStorage.setItem('currentUserIndex', i);
      break;
    }
  }
  

  if (foundUser) {
    // אם המשתמש נמצא במערך
    sessionStorage.setItem('currentUser', JSON.stringify(foundUser)); // שמירת האובייקט של המשתמש ב-Session Storage
    window.location.href = 'profile.html'; // פנייה לדף הפרופיל
  } else {
    // אם המשתמש לא נמצא במערך
    sessionStorage.setItem('currentUserType', 'guest'); // סוג המשתמש - אורח (guest)
    alert('Invalid username or password.'); // הודעת שגיאה
  }
}



export function ShowAllUsers() {
  const table = document.createElement('table');
  table.classList.add('user-table');

  const headerRow = document.createElement('tr');
  const headerNames = ['Username', 'First Name', 'Last Name', 'Email', 'Birth Date', 'City', 'Address', 'House Number'];
  for (const name of headerNames) {
    const th = document.createElement('th');
    th.textContent = name;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  for (let i = 0; i < UsersArray.length; i++) {
    let user = UsersArray[i];

    let row = document.createElement('tr');

    let usernameCell = document.createElement('td');
    usernameCell.textContent = user.getUsername();
    row.appendChild(usernameCell);

    let firstNameCell = document.createElement('td');
    firstNameCell.textContent = user.getFirstName();
    row.appendChild(firstNameCell);

    let lastNameCell = document.createElement('td');
    lastNameCell.textContent = user.getLastName();
    row.appendChild(lastNameCell);

    let emailCell = document.createElement('td');
    emailCell.textContent = user.getEmail();
    row.appendChild(emailCell);

    let birthDateCell = document.createElement('td');
    birthDateCell.textContent = user.getBirthDate();
    row.appendChild(birthDateCell);

    let cityCell = document.createElement('td');
    cityCell.textContent = user.getCity();
    row.appendChild(cityCell);

    let addressCell = document.createElement('td');
    addressCell.textContent = user.getAddress();
    row.appendChild(addressCell);

    let houseNumberCell = document.createElement('td');
    houseNumberCell.textContent = user.getHouseNumber();
    row.appendChild(houseNumberCell);

    table.appendChild(row);
  }

  const container = document.querySelector('.user-table-container');
  container.innerHTML = '';
  container.appendChild(table);
}

 export function AddProduct(event) {
  event.preventDefault();

  //פונה לשדות הטופס ולוקח את הערך הקיים בתוכם
  let serialNumber = document.querySelector('#serialNumber').value;
  let name = document.querySelector('#name').value;
  let price = document.querySelector('#price').value;
  let salePrice = document.querySelector('#salePrice').value;
  let photo = document.querySelector('#s-image').src;
  let desc = document.querySelector('#desc').value;
  let category = document.querySelector('#category').value;

  //יצרה של אוביקט מוצר
  let product = new Product(serialNumber,name,price,salePrice,photo,desc,category);

  console.log(product);
  //בדיקה האם כל השדות תקינות והוא רשם הכל 
  if (product.getSerialNumber() && product.getName() && product.getPrice() && product.getSalePrice() && product.getImage() && product.getDesc() && product.getCategory()) {
    //בדיקה האם המוצר קיים במערך
    if (ProductsArray.some(existingProduct => existingProduct.getSerialNumber() === product.getSerialNumber())) {
      alert('Product already exists in the array.');
    } else {
  //הוספת מוצר חדש למערך הגלובלי
  ProductsArray.push(product);
  ProductImageArray.push(photo);

  //שמירת הנתונים במאגר 
  localStorage.setItem('products', JSON.stringify(ProductsArray));
  localStorage.setItem('productsImages', JSON.stringify(ProductImageArray));

    //הודעה האם הכל תקין זה ירשום המוצר התווסף
    alert("המוצר התווסף בהצלחה");
 
    }
  }
   else {
    alert("יש טעות בשדות תנסה למלא שוב");
  }  
 }
 export function ShowAllProducts() {

 }
 export function LoadProductsFromLocalStorage() {
  let products = localStorage.getItem('products');
  let productsImages = localStorage.getItem('productsImages');
  if (!products) return;

  products = JSON.parse(products);
  productsImages = JSON.parse(productsImages);

  products.map(product => ProductsArray.push(product));
  productsImages.map(img => ProductImageArray.push(img));

  
}


   export async function LoadCities(event) {
    let text = event.target.value;
    //שליחת בקשה למאכר הנתונים עבור שליפת מידע
    let res = await fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=351d4347-8ee0-4906-8e5b-9533aef13595&q=${text}`);
    //קבלת המידע מהתשובה בפורמט ג'ייסון
    let data = await res.json();
    //שמירת המערך של הערים
    let cities = data.result.records;
    //html שליפת האובייקט מתוך ה 
    let datalist = document.querySelector(`#cities`);
    //איפוס הרשימה
    datalist.innerHTML = '';
    //html מעבר על רשימת הערים והוספת ל
    cities.map((city) => {
        datalist.innerHTML += `<option>${city['שם יישוב']}</option>`
    });
}
