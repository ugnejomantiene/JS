// Bendra uzduotis
{
document
  .querySelector('#card > form')
  .addEventListener("submit", e => {
    e.preventDefault();
    console.dir(e);
    const [photo, title, description, date, location] = [
      e.target.elements.photo.value,
      e.target.elements.title.value,
      e.target.elements.description.value,
      e.target.elements.date.value,
      e.target.elements.location.value
    ];
    console.log(photo, title, description, date, location);

    document.querySelector('#generatedCards').innerHTML += `
    <div class="card">
      <div>
        <img src="${photo}" alt="cardImage">
        ${date && `<p>${date}</p>`}
        ${location && `<p>${location}</p>`}
      </div>
      <div>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
    </div>
    `;
  });
}

// 2
const form = document.querySelector('form');
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  document.body.appendChild(table);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const rows = form.elements.rows.value;
    const columns = form.elements.columns.value;
    tbody.innerHTML = '';
    for (let i = 0; i < rows; i++) {
      const tr = document.createElement('tr');
      for (let j = 0; j < columns; j++) {
        const td = document.createElement('td');
        td.textContent = `${i + 1} - ${j + 1}`;
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  });