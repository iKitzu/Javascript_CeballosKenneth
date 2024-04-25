function fetchStar() {
    let xhr = new XMLHttpRequest();
    let starID = document.getElementById('starID').value;
    console.log(starID);
    let url = `https://swapi.py4e.com/api/people/${starID}`;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            console.log(response)
            displayStar(response);
        }else if(this.readyState===4) {
          console.log('Error! >:c',this.statusText);
        }
    };
    xhr.send();
}

function displayStar(data) {
  let starinfo = document.getElementById('losdatos');
  if (data.response === "error") {
      starinfo.innerHTML = '<p> ERROR </p>'
  } else {
      console.log(data);
      starinfo.innerHTML= `
      <table class="table table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair Color</th>
          <th>Skin Color</th>
          <th>Birth Year</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${data.name}</td>
          <td>${data.height}</td>
          <td>${data.mass}</td>
          <td>${data.hair_color}</td>
          <td>${data.skin_color}</td>
          <td>${data.birth_year}</td>
          <td>${data.gender}</td>
        </tr>
      </tbody>
    </table>
    `
  }

}

fetchStar();