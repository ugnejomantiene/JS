let get = () => {
    fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
  }
  
  let post = () => {
    fetch('http://localhost:3000/posts', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: "Haris Poteris 5",
            author: "Rowling"
        })
    })
  };
  
  let remove = () => {
    fetch('http://localhost:3000/posts/4',{
      method: "DELETE"
    })
  }
  
  let update = () => {
    fetch('http://localhost:3000/posts/3', {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: "Pakeiciu data.json į elementa",
            author: "id isliks toks pats"
        })
    })
  };
  