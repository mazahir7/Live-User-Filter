"use strict";

const usersList = document.getElementById("user-list");
const usersSearchList = [];

const searchInput = document.getElementById("search-query");


async function getUsersData() {
  const URL = "https://randomuser.me/api/?results=50";
  const res = await fetch(URL);
  const { results } = await res.json();

  usersList.innerHTML = "";

  inputUsersInTheList(results);
}

function inputUsersInTheList(usersData) {

  usersData.forEach(user => {

    const newUser = document.createElement("li");


    const fullName = `${user.name.first} ${user.name.last}`;
    newUser.innerHTML = `
    <img src="${user.picture.large}" alt="${fullName}">
    <div class="user-info">
      <h4>${fullName}</h4>
      <p>${user.location.city}, ${user.location.country}</p>
      </div>`;

    usersSearchList.push(newUser);
    usersList.appendChild(newUser);
  });
}

getUsersData();

searchInput.addEventListener("input", function (e) {
  // console.log(e.target.value);
  displaySearchResults(e.target.value);
});




function displaySearchResults(input) {

  usersSearchList.forEach(user => {
    if (user.innerText.toLowerCase().includes(input.toLowerCase())) {
      user.classList.remove("hide");
    }
    else {
      user.classList.add("hide");
    }
  });

}