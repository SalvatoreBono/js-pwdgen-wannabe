const FirstName = prompt("Il tuo nome");
const LastName = prompt("Il tuo cognome");
const Age = parseInt(prompt("La tua età"));
const Bonus = Age + 21;
const FavoriteColor= prompt("Il tuo colore preferito");
const Password = FirstName + LastName + FavoriteColor + Bonus;
document.getElementById("password").innerHTML = Password;
