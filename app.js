const fetchCelebritiesBtn = document.getElementById("fetchCelebritiesBtn");
const celebrityList = document.getElementById("celebrityList");
const apiURL = "https://randomuser.me/api/?results=5&nat=bd";

function fetchCelebrities() {
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => displayCelebrities(data.results))
    .catch((error) => {
      celebrityList.innerHTML = `<p>Error fetching celebrity data. Please try again later.</p>`;
      console.error("Error:", error);
    });
}

function displayCelebrities(celebrities) {
  celebrityList.innerHTML = "";
  celebrities.forEach((celebrity) => {
    const celebrityDiv = document.createElement("div");
    celebrityDiv.classList.add("celebrity");
    celebrityDiv.innerHTML = `
            <img src="${celebrity.picture.large}" alt="${celebrity.name.first} ${celebrity.name.last}">
            <h3>${celebrity.name.first} ${celebrity.name.last}</h3>
            <p><strong>Email:</strong> ${celebrity.email}</p>
            <p><strong>Location:</strong> ${celebrity.location.city}, ${celebrity.location.country}</p>
        `;
    celebrityList.appendChild(celebrityDiv);
  });
}

fetchCelebritiesBtn.addEventListener("click", fetchCelebrities);