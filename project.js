window.alert("Hello, welcome to my webpage!")
const firstName = prompt("May I know your name?");
const country = prompt("Which country do you from?");
 
const user = {
   name: {
       first: firstName,
   },
   language: country
};
 
if (user.language === "England") {
   alert("Nice to meet you " + user.name.first +"!");
} else if (user.language === "French") {
   alert("Ravi de vous rencontrer " + user.name.first +"!");
} else if (user.language === "Japan") {
   alert("Hajimemashite, " + user.name.first +"!");
} else {
   alert("Senang bertemu dengan Anda " + user.name.first + "!");
}