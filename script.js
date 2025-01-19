document.addEventListener("DOMContentLoaded", function() {
    const url = 'https://jmbrownkid.github.io/Brown-/brown.json'; // Replace with your API URL

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            const cardContainer = document.getElementById('card-container');
            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
    <img class="card-img-top" tyle="width: 200px; height200px" src="${item.img}" alt="Card image cap">
<div class="card-body">
    <p class="card-title">${item.name}</p>
        <span><i class="fa-solid fa-dollar-sign"></i>${item.amount}</span><br>
    <div class="btncon">
        <a href="addto.html" class="btn btn-info" id="cbt"><span>Details</span></a>
        <a href="addto.html" class="btn btn-outline-success " id="cbtb"><i class="fa-solid fa-cart-shopping"></i></a>
    `;
                cardContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});