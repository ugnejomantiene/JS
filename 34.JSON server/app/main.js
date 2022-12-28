const course_C = document.querySelector('#course_C');
const addCourseForm = document.querySelector('#addCourseForm');
const title = document.querySelector('#title');
const topic = document.querySelector('#topic');
const duration = document.querySelector('#duration');
const image = document.querySelector('#image');

const url = 'http://localhost:3000/course_C';


const getCourse = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      course_C.innerHTML = '';
      data.forEach((course) => {
        course_C.innerHTML += `
                <div class="card">
                  <img src="${course.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">${course.topic}</p>
                    <p class="card-text">${course.duration}</p>
                    <button class="btn btn-danger" onclick="deleteCourse(${course.id})">Delete</button>
                    <button class="btn btn-warning" onclick="editCourse(${course.id})">Edit</button>
                  </div>
                </div>
              `;
      });
    });
};



const addCourse = (e) => {
  e.preventDefault();
  const course = {
    title: title.value,
    topic: topic.value,
    duration: duration.value,
    image: image.value,
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(course),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      getCourse();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

const deleteCourse = (id) => {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      getCourse();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

//edit 
const editCourse = (id) => {
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      course_C.innerHTML = `
        <div class="course">
          <img src="${data.image}" alt="${data.title}">
          <h3>${data.title}</h3>
          <p>${data.topic}</p>
          <p>${data.duration}</p>
          <form id="editCourseForm">
            <input type="text" id="editTitle" value="${data.title}">
            <input type="text" id="editTopic" value="${data.topic}">
            <input type="text" id="editDuration" value="${data.duration}">
            <input type="text" id="editImage" value="${data.image}">
            <button class="btnUpdate" data-id="${data.id}">Update</button>
          </form>
        </div>
      `;
    });
};

const updateCourse = (e) => {
  e.preventDefault();
  const id = e.target.dataset.id;
  const course = {
    title: document.querySelector('#editTitle').value,
    topic: document.querySelector('#editTopic').value,
    duration: document.querySelector('#editDuration').value,
    image: document.querySelector('#editImage').value,
  };

  fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(course),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      getCourse();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

addCourseForm.addEventListener('submit', addCourse);
course_C.addEventListener('click', (e) => {
  if (e.target.classList.contains('btnUpdate')) {
    updateCourse(e);
  }
});

getCourse();