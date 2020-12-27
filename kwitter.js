function login() {
    user=document.getElementById("user_input").value;
    localStorage.setItem("user",user)
    window.location="kwitter_room.html";
}