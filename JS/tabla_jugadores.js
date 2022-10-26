console.log(clubs.teams);
let clubJ = clubs.teams;

function crearTablaJ(players) {
    let cuerpo_tablaJ = document.getElementById("cuerpo_tablaJ");
  
    for (let i = 0; i < players.length; i++) {
      let tr = document.createElement("tr");
  
      let team = document.createElement("p");
      team.innerHTML = players[i].name;
  
      let logoEquipo = document.createElement("img");
      logoEquipo.classList.add("imgLocal2");
      logoEquipo.setAttribute("src", players[i].crest);
      console.log(logoEquipo)
      
      let name = document.createElement("p");
      name.innerHTML = players[i].squad[0].name;
      console.log(name)

      let position = document.createElement("p");
      position.innerHTML = players[i].squad[0].position;

      let dateOfBirth = document.createElement("p");
      dateOfBirth.innerHTML = players[i].squad[0].dateOfBirth;

      let nationality = document.createElement("p");
      nationality.innerHTML = players[i].squad[0].nationality;

      let datos_tablaJ = [
        team,
        logoEquipo,
        name,
        nationality,
        dateOfBirth,
        position,
      ];
  
      for (let j = 0; j < datos_tablaJ.length; j++) {
        let td = document.createElement("td");
        td.append(datos_tablaJ[j]);
        tr.append(td);
  
      }
      cuerpo_tablaJ.append(tr);
    }
  }
  crearTablaJ(clubJ);