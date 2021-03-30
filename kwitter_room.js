var firebaseConfig = {
      apiKey: "AIzaSyB9IqaF_JZl1Xgmxh5tuuY4PQCJbHerkFY",
      authDomain: "kwitter-da47f.firebaseapp.com",
      databaseURL:"https://kwitter-da47f-default-rtdb.firebaseio.com/",
      projectId: "kwitter-da47f",
      storageBucket: "kwitter-da47f.appspot.com",
      messagingSenderId: "187313842398",
      appId: "1:187313842398:web:d3dfffd191eff81f413a4f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

    function addRoom(){
          room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Roomname-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });
});
}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}