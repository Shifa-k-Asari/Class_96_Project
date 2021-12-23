function addUser()
{
    Name_of_user = document.getElementById("user_name").value;

    localStorage.setItem("Name of user", Name_of_user);

    window.location = "Kwitter_room.html";
}