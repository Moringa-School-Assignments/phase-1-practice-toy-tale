let addToy = false;
let obj = {
  "name": "John Luther",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Kevin_Hart_2014_%28cropped_2%29.jpg/640px-Kevin_Hart_2014_%28cropped_2%29.jpg",
  "likes": 2000,
}

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  handleFetch();
});

// document.addEventListener("DOMContentLoaded", handleFetch);
function handleFetch() {
  // get request
  fetch("http://localhost:3000/toys")
    .then(res => res.json())
    .then(data => {
      data.map(toy => {
        const card = document.createElement("div");
        card.className = "card";
        const h2 = document.createElement("h2");
        h2.innerHTML = toy.name;
        const img = document.createElement("img");
        img.src = toy.image;
        img.className = "toy-avatar";
        const p = document.createElement("p");
        p.innerHTML = toy.likes;
        const button = document.createElement("button");
        button.innerHTML = "like";
        button.className = "like-btn";
        card.appendChild(h2);
        card.appendChild(img);
        card.appendChild(p);
        card.appendChild(button);
        document.querySelector("#toy-collection").append(card);
      })

    })

  // post request

  const form = document.querySelector("form");
  const nameData = document.querySelector("#nameData");
  const imageData = document.querySelector("#imageData");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let dataObj = {
      "name": nameData.value,
      "image": imageData.value
    }
    console.log(nameData.value);
    form.reset();
    return dataObj;
  })

  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(dataObj)
  })
    .then(res => res.json())
    .then(data => console.log(data))
}
// function createCard(){

// }

