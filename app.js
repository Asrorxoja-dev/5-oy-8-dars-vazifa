

// // 1-topshiriq

// Aytaylik, sizda bir qator mahsulot narxlari bor:
// JavaScript
// const narxlari [10.99, 5.45, 23.00, 7.86];
// Koddan ehtiyotkorlik bilan foydalaning. Ko'proq o'qish....
// 1. Narxlar massivining birinchi va oxirgi elementini ajratib oling.
// 2. Destrukturizatsiya yordamida narxlar massivining birinchi va ikkinchi elementlarini almashtiring.
// 3. Ikkinchi va uchinchi elementlarni yangi massivga ajratib oling va keyin har bir elementni 2 ga ko'paytiring


// 1.

//  const  narxlari = [10.99, 5.45, 23.00, 7.86];
// let [a,,,d] = narxlari;
// console.log(a,d);



// 2.

// const narxlari = [10.99, 5.45, 23.00, 7.86];

// [narxlari[0], narxlari[1]] = [narxlari[1], narxlari[0]];

// console.log(narxlari);


// 3.

// const narxlari = [10.99, 5.45, 23.00, 7.86];
//  let [a, b, c, d] = narxlari;
// let res = narxlari[1] * 2;
// let res1 = narxlari[2] * 2;
// console.log(res,  res1);
 




// 2-toqshiriq


// Birinchi ob'ektni e'lon qilamiz
// const movie1 = {
//     title: "Matritsa",
//     director: "Vachovskilar",
//     year: 1999
//   };
  
 
//   const movie2 = {
//     genre: "Ilmiy fantastika",
//     actors: ["Kianu Rivz", "Lorens Fishbern", "Korri-Ann Moss"]
//   };
  
//   function mergeMovies(movie1, movie2) {
//     const {title, director, year} = movie1;
//     const {genre, actors} = movie2;
  
//     return {title, director, year, genre, actors};
//   }
  
//   const movie = mergeMovies(movie1, movie2);
  
//   console.log(movie); 
  






// 3-topshiriq


// 2-mashq: Spread va Object Literals yordamida ma'lumotlarni manipulyatsiya qilish
// 1. Sizda retsept uchun bir qator ingredientlar mavjud. Ingredientlar bilan yangi massiv yaratish uchun tarqalish operatoridan foydalaning, lekin boshida oldindan belgilash yordamida yangi ingredient qo'shing.
// 2. Sizda foydalanuvchi ma'lumotlariga ega ob'ekt mavjud. Xuddi shu ma'lumotga ega yangi ob'ekt yaratish uchun tarqalish operatoridan foydalaning, lekin isActive: true va lastlogin: new Date() kabi qo'shimcha xususiyatlarni ham o'z ichiga oladi.
// 3. Sizda foydalanuvchi profili ma'lumotlarini o'z ichiga olgan ikkita ob'ekt mavjud. Qolgan va tarqalish operatorlari yordamida ularning ma'lumotlarini bitta ob'ektga birlashtiring. Birinchi ob'ektdan qo'shimcha xususiyatlarni olish uchun rest operatoridan foydalaning va keyin ularni ikkinchi ob'ektning xususiyatlari bilan birga yangi ob'ektga tarqating.




// 1-masala: Retsept uchun bir qator ingredientlar mavjud. Ingredientlar bilan yangi massiv yaratish uchun tarqalish operatoridan foydalaning, lekin boshida oldindan belgilash yordamida yangi ingredient qo'shing.

// const ingredients = ["un", "suv", "maye", "tuz"];

// const newIngredient = "yog'";

// const newIngredients = [newIngredient, ...ingredients];

// console.log(newIngredients); 




// 2-masala: Sizda foydalanuvchi ma'lumotlariga ega ob'ekt mavjud. Xuddi shu ma'lumotga ega yangi ob'ekt yaratish uchun tarqalish operatoridan foydalaning, lekin isActive: true va lastlogin: new Date() kabi qo'shimcha xususiyatlarni ham o'z ichiga oladi.

// const user = {
//     name: "Ali",
//     email: "ali@gmail.com",
//     password: "123456"
//   };
  
//   const newUser = {...user, isActive: true, lastLogin: new Date()};
  
//   console.log(newUser); 
  


// 3-masala: Sizda foydalanuvchi profili ma'lumotlarini o'z ichiga olgan ikkita ob'ekt mavjud. Qolgan va tarqalish operatorlari yordamida ularning ma'lumotlarini bitta ob'ektga birlashtiring. Birinchi ob'ektdan qo'shimcha xususiyatlarni olish uchun rest operatoridan foydalaning va keyin ularni ikkinchi ob'ektning xususiyatlari bilan birga yangi ob'ektga tarqating.

// const profile1 = {
//     name: "Ali",
//     age: 25,
//     city: "Toshkent",
//     country: "O'zbekiston",
//     hobbies: ["kod yozish", "kitob o'qish", "sayohat qilish"]
//   };
  
//   const profile2 = {
//     email: "ali@gmail.com",
//     password: "123456",
//     isActive: true,
//     lastLogin: new Date()
//   };
  
//   const {name, age, ...rest} = profile1;
  
//   const profile = {...rest, ...profile2};
  
//   console.log(profile);
  







// 4-topshiriq


// const title = document.getElementById('h1');

// window.getComputedStyle(title);


// console.log(title);



// let fragment = document.createDocumentFragment(title);

// console.log(title);


