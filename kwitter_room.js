const firebaseConfig = { 
    apiKey: "AIzaSyAF5dGkG1_6ViWvrM9ZfZMiSnqUKJkcpV4", 
    authDomain: "kwitter-33db5.firebaseapp.com", 
    databaseURL: "https://kwitter-33db5-default-rtdb.firebaseio.com", 
    projectId: "kwitter-33db5", 
    storageBucket: "kwitter-33db5.appspot.com", 
    messagingSenderId: "60100212745",
    appId: "1:60100212745:web:82df154aba03792df9e0d8" 
};
// Initialize
firebase.initializeApp(firebaseConfig); 
//ADD YOUR FIREBASE LINKS HERE 
user_name = localStorage.getItem("User_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() 
{ 
    Room_name = document.getElementById("room_name").value; 
    firebase.database().ref("/").child(Room_name).update({ 
        purpose : "adding room name" 
    }); 
    localStorage.setItem("room_name", Room_name); 
    window.location = "kwitter_page.html"; 
} 

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
     Room_names = childKey; 
     //Start code 
     console.log("Room Name -" + Room_names); 
     row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"; 
     document.getElementById("output") =+ row; 
     //End code 
    });});} 
    getData(); 
    
function redirectToRoomName(name) 
{ 
    console.log(name); 
    localStorage.setItem("room_name", name); 
    window.location= "kwitter_page.html"; 
}

function logout()
{
      localStorage.removeItem("User_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}