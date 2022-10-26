console.log(clubs.teams);
let club = clubs.teams;

function imagenesC(img) {
  let clubs_L = document.getElementById("clubsL");

  for (let i = 0; i < img.length; i++) {
    let div = document.createElement("div");

    let logoEquipo = document.createElement("img");
    logoEquipo.classList.add("imgLocal2");
    logoEquipo.setAttribute("src", img[i].crest);

    let enlace = document.createElement("a");
    enlace.setAttribute("href", img[i].website);

    enlace.append(logoEquipo);
    div.append(enlace);
    clubs_L.append(div);
  }
}

imagenesC(club);

function crearTablaClub(info) {
  let cuerpo_tablaI = document.getElementById("cuerpo_tablaI");


  for (let i = 0; i < info.length; i++) {
    let tr1 = document.createElement("tr");

    let team = document.createElement("p");
    team.innerHTML = info[i].name;

    let logoEquipo = document.createElement("img");
    logoEquipo.classList.add("imgLocal2");
    logoEquipo.setAttribute("src", info[i].crest);

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
console.log(datos_tablaC.length);
    for (let j = 0; j < datos_tablaC.length; j++) {
      let td1 = document.createElement("td");
      td1.append(datos_tablaC[j]);
      tr1.append(td1);

    }
    cuerpo_tablaI.append(tr1);
  }

}

crearTablaClub(club);

