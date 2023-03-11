//ADD YOUR FIREBASE LINKS HERE
const config = {
    apiKey: "AIzaSyAKrm85fPydiFE3scqVoZZoKV4iTCkrC_k",
    authDomain: "practice-62a78.firebaseapp.com",
    databaseURL: "https://practice-62a78-default-rtdb.firebaseio.com",
    projectId: "practice-62a78",
    storageBucket: "practice-62a78.appspot.com",
    messagingSenderId: "111083250982",
    appId: "1:111083250982:web:7610ef4fcef0f830e04de7",
};

// Initialize Firebase
firebase.initializeApp(config);

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name)
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
           snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room Name -"+ Room_names);
                row="<div class='room name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
                document.getElementById("output").innerHTML += row;

                //End code
          });
    });
}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}