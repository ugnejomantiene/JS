// CRUD

/* 
    C - create - Post metodas
    R - read - Get metodas
    U - update - 
    D - delete

*/
/* Fetch syntax

    fetch(link, {
        method: POST,
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

*/


/* 
Naudojant https://robust-safe-crafter.glitch.me/ API
Sukurti puslapį, kuriame būtų atvaizduojami visi butai.
  fetch(nuoroda).then()
Taip pat, turi būti galimybė pridėti naują butą.
  fetch(nuoroda, {method:"POST", headers:{}, body:naujasButasJSONpavdialu}).then()
  Naujo buto info paimama iš pateiktos formos.*/


  const apartments = document.querySelector('#apartments');

const addApartmentForm = document.querySelector('#addApartmentForm');

const url = "https://robust-safe-crafter.glitch.me/";



function getApartments() {

  fetch(url)

    .then(response => response.json())
    .then(data => {
      apartments.innerHTML = '';
      data.forEach(apartment => {
        apartments.innerHTML += `
          <div class="apartment">
            <img src="${apartment.image}" alt="${apartment.description}">
            <div class="info">
              <p>${apartment.city}</p>
              <p>${apartment.price}</p>
              <p>${apartment.description}</p>
            </div>
          </div>
        `;
      });
    });
}

getApartments();



addApartmentForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const city = document.querySelector('#city').value;
  const price = document.querySelector('#price').value;
  const description = document.querySelector('#description').value;
  const image = document.querySelector('#image').value;



  const newApartment = {
    city,
    price,
    description,
    image
  };



  fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newApartment)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      getApartments();
    });

});

