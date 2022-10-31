
function get_imgC() {
  const url = "https://api.football-data.org/v2/competitions/2014/teams";
  fetch(url, {
      method: "GET",
      headers: {
        "X-Auth-Token": "67aea19734a14543b5b76a95d900260d",
      },
    })
    .then((response) => {
      if (response.ok) return response.json();

    })
    .then((data) =>{
      let clubs_Img = data.teams;
      console.log(clubs_Img)
      imagenesC(clubs_Img);
    })
}
get_imgC();

function imagenesC(img) {
  let clubs_L = document.getElementById("clubsL");

  for (let i = 0; i < img.length; i++) {
  
    let logoEquipo = document.createElement("img");
    logoEquipo.classList.add("imgLocal2");
    logoEquipo.setAttribute("src", img[i].crestUrl
    );
    

    let enlace = document.createElement("a");
    enlace.setAttribute("href", img[i].website);
    enlace.setAttribute("target", "_blank")

    enlace.append(logoEquipo);
  clubs_L.append(enlace);
    
  }
}




function get_DataI() {
  document.getElementById("spinner").style.display = "block";

  const url = "https://api.football-data.org/v2/competitions/2014/teams";
  fetch(url, {
      method: "GET",
      headers: {
        "X-Auth-Token": "67aea19734a14543b5b76a95d900260d",
      },
    })
    .then((response) => {
      if (response.ok) return response.json();

    })
    .then((data) =>{
      document.getElementById("spinner").style.display = "none";
      let clubs_I = data.teams;
      console.log(clubs_I);
      crearTablaClub(clubs_I);
    })
}
get_DataI()

function crearTablaClub(info) {
  let cuerpo_tablaI = document.getElementById("cuerpo_tablaI");


  for (let i = 0; i < info.length; i++) {
    let tr1 = document.createElement("tr");

    let team = document.createElement("p");
    team.innerHTML = info[i].name;

    let logoEquipo = document.createElement("img");
    logoEquipo.classList.add("imgLocal2");
    logoEquipo.setAttribute("src", info[i].crestUrl);

    let origin = document.createElement("p");
    origin.innerHTML = info[i].founded;

    let colours = document.createElement("p");
    colours.innerHTML = info[i].clubColors;


    let venue = document.createElement("p");
    venue.innerHTML = info[i].venue;

    let datos_tablaC = [
      team,
      logoEquipo,
      origin,
      colours,
      venue,
    ];
    // console.log(datos_tablaC.length);
    for (let j = 0; j < datos_tablaC.length; j++) {
      let td1 = document.createElement("td");
      td1.append(datos_tablaC[j]);
      tr1.append(td1);

    }
    cuerpo_tablaI.append(tr1);
  }

}

// crearTablaClub(club);