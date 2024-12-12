export class User {
    username;
    password;
    confirmPassword;
    photo;
    firstName;
    lastName;
    email;
    birthDate;
    city;
    address;
    houseNumber;

    constructor(_username, _password,_confirmPassword, _photo, _firstName, _lastName, _email, _birthDate, _city, _address, _houseNumber) {
      debugger;
       this.setUsername(_username);
        this.setPassword(_password);
        this.setConfirmPassword(_confirmPassword);
        this.setPhoto(_photo);
        this.setFirstName(_firstName);
        this.setLastName(_lastName);
        this.setEmail(_email);
        this.setBirthDate(_birthDate);
        this.setCity(_city);
        this.setAddress(_address);
        this.setHouseNumber(_houseNumber);
    }

    setUsername(value) { 
        //לולאה שרצה על המחרוזת שמקליד המשתמש ובודק תקינות הקלט
          for (let i = 0; i < value.length; i++) {
              if (!(value[i] >= 'a' && value[i] <= 'z' || value[i] >= 'A' && value[i] <= 'Z' || value[i] >= '0' && value[i] <= '9' || value[i] === '!' || value[i] === '@' || value[i] === '#' || value[i] === '%')) {
                  alert("השם משתמש לא תקין");
                  return;
              }
          }
          this.username = value;
     }
    getUsername() { return this.username; }

    setPassword(value) {
        let countSpecial = 0;
        let countBigLetters = 0;
        let countNumbers = 0;
      
        // בודק את תקינות הקלט ומעדכן את המשתנים המתאימים
        for (let i = 0; i < value.length; i++) {
          if (value[i] === '!' || value[i] === '@' || value[i] === '#' || value[i] === '%') {
            countSpecial++;
          } else if (value[i] >= 'A' && value[i] <= 'Z') {
            countBigLetters++;
          } else if (value[i] >= '0' && value[i] <= '9') {
            countNumbers++;
          }
        }
      
        // מעביר לתוך הלולאה תנאי תקינות של הסיסמה
        if (value.length >= 7 && value.length <= 12 && countSpecial >= 1 && countNumbers >= 1 && countBigLetters >= 1) {
          this.password = value;
        } else {
          alert("הסיסמא שגויה");
        }
      }
      

    
    getPassword() { return this.password; }

    setConfirmPassword(value){
        if(value === this.password)
               this.confirmPassword = value; 
           
           else
           {
              alert("הסיסמה לא תואמת");
           }
       }

    getConfirmPassword() { return this.confirmPassword; }

    setPhoto(value) {  this.photo = value;  }
    getPhoto() { return this.photo; }

    setFirstName(value) { 
         //לולאה שרצה על המחרוזת שמקליד המשתמש ובודק תקינות הקלט
          for (let i = 0; i < value.length; i++) {
              if (!(value[i] >= 'a' && value[i] <= 'z' || value[i] >= 'A' && value[i] <= 'Z')) {
                  alert("שם הפרטי לא תקין");
                  return;
              }
          }
          this.firstName = value;
     }
    getFirstName() { return this.firstName; }

    setLastName(value) { 
              //לולאה שרצה על המחרוזת שמקליד המשתמש ובודק תקינות הקלט
for(let i=0;i<value.length;i++)
{
    if(value[i]>='a'&&value[i]<='z'||value[i]>='A'&&value[i]<='Z')
    {

        this.lastName = value;
    }
    else
    alert("השם משפחה לא תקין");
}     
    }
    getLastName() { return this.lastName; }

    setEmail(value) { this.email = value; }
    getEmail() { return this.email; }

    setBirthDate(value) {
        const inputDate = Date.parse(value); // המרת התאריך שהמשתמש הזין לתאריך ממשי
      
        if (isNaN(inputDate)) { // בדיקה אם התאריך שהמשתמש הזין אינו חוקי
          alert("התאריך לא נכון");
        } else {
          const currentDate = new Date(); // התאריך הנוכחי
          const ageInMilliseconds = currentDate - inputDate;
          const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // חישוב הגיל בשנים
      
          if (ageInYears >= 0 && ageInYears <= 120) {
            this.birthDate = value; // הגדרת התאריך כתאריך התקני
          } else {
            alert("התאריך לא נכון");
          }
        }
      }
      
    getBirthDate() { return this.birthDate; }

    setCity(value) { this.city = value; }
    getCity() { return this.city; }

    setAddress(value) { 
        
            if(value>='א'&&value<='ת')
            {
                this.address = value; 
            }
            else
            {
              alert("הכתובת לא נכונה");
            }
        }
    
    getAddress() { return this.address; }

    
    setHouseNumber(value) {
        value=Number(value);
       if(value>0)
       {
        this.houseNumber = value;
       }
       else
       {
         alert("מספר הבית לא תקין");
       }
        }
    getHouseNumber() { return this.houseNumber; }
}