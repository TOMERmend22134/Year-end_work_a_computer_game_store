export class Product {
    serialNumber;
    name;
    price;
    salePrice;
    image;
    desc;
    category;

    constructor(_serialNumber,_name, _price, _salePrice , _image, _desc,_category) {
        debugger;
        this.setSerialNumber(_serialNumber);
        this.setName(_name);
        this.setPrice(_price);
        this.setSalePrice(_salePrice);
        this.setImage(_image);
        this.setDesc(_desc);
        this.setCategory(_category);
    }

    setSerialNumber(value) { 
        //לולאה שרצה על הערך ובודקת תקינות שזה מספרים ותווים באנגלית בלבד
        for(let i=0;i<value.length;i++)
        {
            if(value[i]>='a'&&value[i]<='z'||value[i]>='A'&&value[i]<='Z'||value[i]>='0'&&value[i]<='9')
            {
                this.serialNumber = value;
            }
            else{
                alert("המספר הסידורי לא תקין");
            }
        }
    }
    getSerialNumber() { return this.serialNumber; }

    setName(value) {
        //לולאה שרצה על הערך ובודקת האם זה רק טקס בלבד
        for(let i=0;i<value.length;i++)
        {
            if(value[i]>='a'&&value[i]<='z'||value[i]>='A'&&value[i]<='Z'||value[i] === " ")
            {
                this.name = value; 
            }
            else
            {
                alert("השם לא תקין של המוצר");
            }
        }
        }
    getName() { return this.name; }

    
    setPrice(value) {
        if (!isNaN(value) && Number(value) % 1 !== 0) {
            // בדיקה אם הערך הוא מספר עשרוני
            this.price = parseFloat(value);
        } else {
            alert("המחיר לא תקין");
        }
    }
    getPrice() { return this.price; }
    
    setSalePrice(value) {
        if (!isNaN(value) && Number(value) % 1 !== 0) {
            // בדיקה אם הערך הוא מספר עשרוני
            const parsedValue = parseFloat(value);
    
            // בדיקה אם המחיר הוא נמוך מהמחיר הקודם (מחיר רגיל)
            const regularPrice = this.getPrice();
            if (parsedValue < regularPrice) {
                this.salePrice = parsedValue;
            } else {
                alert("מחיר המבצע צריך להיות נמוך מהמחיר הרגיל");
            }
        } else {
            alert("מחיר המבצע לא תקין");
        }
        }
    getSalePrice() { return this.salePrice; }
    
    setImage(value) {this.image = value; }
    getImage() { return this.image; }

    setDesc(value) { 
        for(let i=0;i<value.length;i++)
        {
            if(value[i]>='a'&&value[i]<='z'||value[i]>='A'&&value[i]<='Z'||value[i]===" ")
            {
                this.desc = value;  
            }
            else
            {
                alert("התיאור של המוצר לא תקין");
            }
        }
        }
    getDesc() { return this.desc; }

    setCategory(value) { this.category = value; }
    getCategory() { return this.category; }
}