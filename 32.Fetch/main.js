//          Fetch
/* 
syntax

fetch('url)

*/







// movies.json
fetch('movies.json')
  .then(res => res.json())
  .then(data => {
    console.log(data[0].actors.map(actor => `<li>${actor}</li>`).toString().replaceAll(',',''));
    data.forEach(movie => {
      document.querySelector('#filmai').innerHTML += `
        <div class="movie">
          <h1>${movie.name}</h1>
          <img src="${movie.poster}" alt="${movie.name} movie poster">
          <span>Movie length: ${Math.floor(movie.length/60)} hours ${movie.length%60} minutes</span>
          <ul>
            ${
              movie.actors
                .map(actor => `<li>${actor}</li>`)
                .toString()
                .replaceAll(',', '')
            }
          <ul>
        </div>
      `
    });
  });

  //randomUser

  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
     console.log(data.results[0])
     document.querySelector("#randomUser").innerHTML=`
     <div class="box">
        <img src="${data.results[0].picture.large}">
        <div class="info">
           <p> ${data.results[0].name.first} ${data.results[0].name.last}</p>
           <p>Age: ${data.results[0].dob.age}</p>
           <p>City: ${data.results[0].location.city}</p>
           <p>Address: ${data.results[0].location.street.name} ${data.results[0].location.street.number}</p>
           <p>Email: ${data.results[0].email}</p>
        </div>
     </div>`
  })




  //////////////////
function searchMealsByIngredient(ingredient) {
    const apiUrl = `https://www.themealdb.com/api.php?i=${ingredient}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // process the data and display the results
      })
      .catch(error => {
        // handle any errors
      });
} 

  const form = document.getElementById('meal-search-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const ingredient = document.getElementById('ingredient-input').value;
  searchMealsByIngredient(ingredient);
});
