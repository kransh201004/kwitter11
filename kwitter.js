var firebaseConfig = {
    apiKey: "AIzaSyC1xZu0iIcxsZ4PXaq81PCthoShKb3X-gg",
    authDomain: "kwitter-381f6.firebaseapp.com",
    databaseURL: "https://kwitter-381f6-default-rtdb.firebaseio.com",
    projectId: "kwitter-381f6",
    storageBucket: "kwitter-381f6.appspot.com",
    messagingSenderId: "308866001660",
    appId: "1:308866001660:web:130eff560e00fa01a54579",
    measurementId: "G-63BTGZNWR8"
  };
  firebase.initializeApp(firebaseConfig);
  
function addUser()
{
user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);
window.location = "kwitter_room.html";
}