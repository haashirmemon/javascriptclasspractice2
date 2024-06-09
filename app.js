// var uservalue = +prompt("enter your value")
// if (uservalue > 10) {
//     document.write(uservalue)
// } else{
//     document.write('garaq ho')
// }
// var guess = prompt('enter bond number')
// guess = Number(guess)
// var secretnumber = 15
// var lowprize = {min:6 ,max:14, }
// var lownumber = 14
// var highnumber = 100
// var mediumnumber = 50
// if (guess<=14) {
//     document.write('cogragulation you won lowprize')
// }else if (guess<=50) {
//     document.write('cogragulation you midium prize')
// } else if(guess<=100) {
//     document.write('cogragulation you high prize')
// // } else {
// //     document.write('garaq hoja')
// // }
// // Password Generator
// function generatePassword() {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let password = '';
//     for (let i = 0; i < 10; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       password += characters.charAt(randomIndex);
//     }
//     console.log("Generated Password:", password);
//   }
  
//   // Word Reverser
//   function reverseWords(sentence) {
//     const words = sentence.split(' ');
//     const reversedSentence = words.reverse().join(' ');
//     console.log("Reversed Sentence:", reversedSentence);
//   }
  
//   // Word Capitalizer
//   function capitalizeWords(sentence) {
//     const words = sentence.split(' ');
//     const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     const capitalizedSentence = capitalizedWords.join(' ');
//     console.log("Capitalized Sentence:", capitalizedSentence);
//   }
  
//   // Word Finder
//   function findWord(sentence, word) {
//     if (sentence.includes(word)) {
//       console.log("Word found");
//     } else {
//       console.log("Word not found");
//     }
//   }
  
//   // String Concatenation
//   function concatenateNames(firstName, lastName) {
//     const fullName = `${firstName} ${lastName}`;
//     console.log("Full Name:", fullName);
//   }
  
//   // Test cases
//   generatePassword();
//   reverseWords("This is a sample sentence");
//   capitalizeWords("this is a capitalized sentence");
//   findWord("Hello world", "world");
//   concatenateNames("John", "Doe");
//   var input1 = document.getElementsByClassName('input')
//   var input2 = document.getElementsByClassName('input')
//   var input3 = document.getElementsByClassName('input')
//   var div = document.getElementById('div1')
// var div.style.backgroundcolor=
//   function applycolor(color) {
//     input1.style.backgroundcolor =("green")
//     input2.style.backgroundcolor =("red")
//     input3.style.backgroundcolor =("yellow")

//   }
//   changecolor(color)
// Apply the color to the div
// function applyColor(color) {
//   // event.preventDefault(); // Prevent form submission
//   var red = parseInt(document.getElementById("red").value);
//   var green = parseInt(document.getElementById("green").value);
//   var blue = parseInt(document.getElementById("blue").value);




//   var div1= document.getElementById("div1");
//   div1.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
// }
// var num = Math.floor(Math.random()*6)
// function matchnumber(val){
//   document.write(num)
// document.write(num)

// if (num=val) {
//   alert("you are won")
// }
// }
// var head = document.getElementById('divchild1')
// var tail = document.getElementById('divchild2')

// function toss(){
// var toss = Math.floor(Math.random()*7)
// // document.write(toss)
// if (toss <=3) {
//    alert('head') 
// // document.write(toss)
//    head.style.backgroundColor ="yellow"
// } else if(toss >=4) {
//     // document.write(toss)
// alert('tail')
//     tail.style.backgroundColor="brown"
// }else{
//     alert('tie')
// //    divparent.style.backgroundColor ="green"
// // document.write(toss)
// } 
// }
// var now = new Date()

// console.log("miliseconds=>",now.getTime());

// var birthdate= new Date(document.getElementById('birthdate'))

// var difference =(now.getTime - birthdate.valueOf.getTime())

// console.log(difference);
// function calculatetimefrombirth() {
//     console.log(birthdate.value);
//     var userbirthdate = new Date(birthdate.value)
//     var currentdate = new Date()
//     console.log(userbirthdate);}

// function greetuser() {
//     var userName = prompt("enter user name ")

//     document.write("hello" + `<h1> this is name</h1>${userName}` )
// }
//  var myinfo={
//     name:"haashir",
//     fathername:"shakeelahmed",
//     class:11,
//     buissnuiss:"mobile phone shop",
// }
// myinfo.buissnuiss="qasai hun mai"
// myinfo.student="developer ban rahahun"
// delete myinfo.buissnuiss
// console.log(myinfo);

// function Bakraeid(animal1,animal2,animal3,animal4) {
//     console.log(this);
//     this.animal1 =animal1
//     this.animal2 =animal2
//     this.animal3 =animal3
//     this.animal4 =animal4
// }

// var student = {
//     name:"haashir",
//     fathername:"shakeelahmed",
//     cnic:"4230168588793",
//     class:"1st year",
//     skills:"frontend developer",
//     childrens:0
// }
// student.status = "buhot acha aadmi hai"
// delete student.status
// student.dob = new Date("02-05-2006")
// student.calculateage=function () {

//     console.log(this.dob);
//     var now = new Date().getFullYear()
//     var userdobyear = new Date(this.dob).getFullYear();

//     var userage = now - userdobyear
//     return userage
// }

//     console.log("student=>",student);
// console.log("calculateage=>",student.calculateage());

// document.getElementById("name").innerHTML = student.name
// document.getElementById("fatherName").innerHTML = student.fathername
// document.getElementById("cnic").innerHTML = student.cnic
// document.getElementById("class").innerHTML = student.class
// document.getElementById("skills").innerHTML = student.skills
// document.getElementById("children").innerHTML = student.childrens
// document.getElementById("age").innerHTML = student.calculateage()

// var a = "haashir"
// var b = a
// a = "haashir shakeel ahmed"
// console.log("a=>",a);
// console.log("b=>",b);


// var haashir = 420
// var shakeel = 10
// haashir = shakeel
// console.log(haashir);
// console.log(shakeel);

// var hello = 'hello world';
// console.log(hello.toUpperCase())
// console.log(hello);
// hello[0] ='H'

// var arr= [ 'haashir', "shakeel",'ahmed','suleman']
// arr[0]='ghar walay'
// arr.push("haashir")
// // arr.shift("shakeel")
// var arr1 = arr
// var arr2 =['1','2','3','4']




// console.log(arr1);
// console.log(arr2);
// console.log(arr);

var logincontainer = document.getElementById("logincontainer")
var email = document.getElementById("email")
var password = document.getElementById("password")
var homecontainer = document.getElementById("homecontainer")
var useremail = document.getElementById("useremail");
 var inputtodo = document.getElementById("inputtodo")


function checkinuser() {
    var email = localStorage.getItem("email")
if (email) {
    logincontainer.style.display = "none"
    homecontainer.style.display = "block"
    useremail.innerHTML = email
} else {
    logincontainer.style.display = "block"
    homecontainer.style.display = "none"
}

}
checkinuser()
function loginuser() {
    if(!email.value || !password.value) return alert("please add info")
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        checkinuser()  
        email.value= ""
        password.value= ""
}

function logout() {
    localStorage.removeItem("email")
    checkinuser()
}

function addtodo() {
    if(!inputtodo.value?.trim()) return alert("please add todo")
var email = localStorage.getItem("email")

    var obj = {
        email: email,
        todo: inputtodo.value.trim()
    }
    var todos = localStorage.getItem("todos")
    // console.log(todos);
    if (todos) {
        todos = JSON.parse(todos)
        todos.push(obj)
        localStorage.setItem("todos", JSON.stringify(todos))
    } else {
        todos = [obj]
        localStorage.setItem("todos",JSON.stringify(todos))
    }
    showtodos()
}

function showtodos() {
    var todos = localStorage.getItem("todos")
    var list = document.getElementById("list")
    var email= localStorage.getItem("email")

    if (todos) {
        todos = JSON.parse(todos)
        list.innerHTML =""
        todos.forEach(function  (data ,index) {
            if (data.email === email) {
                var li = `<li>${data.todo}</li>`
                list.innerHTML += li
            }
        });
    }
}
showtodos()
