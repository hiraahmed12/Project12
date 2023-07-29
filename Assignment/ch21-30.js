//Question Number 1
let FirstName = prompt("Enter Your First Name");
let LastName = prompt("Enter Your Last Name:");

let Name = ("Assalam u Alaikum"+" "+FirstName+" "+LastName);
document.write(Name,"<br>","<br>");

//Question No 2
let favoriteModel = prompt("What is Your Favorite Mobile Phone Model?");
let length =favoriteModel.length;
document.write("The Length Of Your Favorite Mobile Phone Model is ",length,"<br>","<br>")

//Question No 3
let string = "Pakistani";
document.write("Index of 'n': ",string.search("n"),"<br>","<br>");

//Question No 4
let word = "Hello World";
let Index = word.lastIndexOf("l");
document.write("The Last Index Of 'l' in ",word ," is ",Index,"<br>","<br>");

//Question No 5
let word1="Pakistan";
document.write("The third index in Pakistan name is "+word1[3],"<br>","<br>");

//Question No 6
let city = "Hyderabad";
document.write("City: ",city,"<br>","<br>");
let city2 = (city.replace,"Islamabad")
document.write("After Replacement: ",city2,"<br>","<br>")

//Question No 7
let message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message,"<br>","<br>",);
let message2 = message.replace(/and/gi,"&");
document.write(message2,"<br>","<br>",);

//Qustion No 8
let value = "472";
document.write("Value: ",value,"<br>","<br>",)
document.write("Type: ",typeof(value),"<br>","<br>",);
let convert = parseInt(value);
document.write("Value: ",convert,"<br>","<br>",);
document.write("Type: ",typeof(convert),"<br>","<br>",);

//Qustion no 9
let input = prompt("Enter Your Favorite fruit:")
let fruit = input.toUpperCase();
document.write(fruit,"<br>","<br>",);

//Question No 10


//Question No 11
let num = 35.36;
document.write(num,"<br>","<br>",);
let num1 = num.toString();
document.write(num1,"<br>","<br>",);