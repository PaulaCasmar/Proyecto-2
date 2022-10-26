// let proximosP = proximosp.matches
// console.log(proximosP)

// let equipol = proximosP[2].awayTeam.name;
// console.log(equipol)

// let equipov = proximosP[2].homeTeam.name;
// console.log(equipov);

// let date = proximosP[2].utcDate;
// console.log(date)

function get_DataP() {
    document.getElementById("spinner").style.display = "block";

    const url = "https://api.football-data.org/v2/matches";
    fetch(url, {
            method: "GET",
            headers: {
                "X-Auth-Token": "67aea19734a14543b5b76a95d900260d",
            },

        })
        .then((response) => {
            if (response.ok) return response.json();
        })
        .then((data) => {
            document.getElementById("spinner").style.display = "none";
            let proximosP = data.matches;
            console.log(proximosP);
            crearTablaP(proximosP);
        })
        .catch((error) => {
            console.log(error)
            alert("Ha ocurrido un problema al cargar la página");
        });
}
get_DataP();



function crearTablaP(proxp) {
    let cuerpo_tablap = document.getElementById("cuerpo_tablap")

    for (let i = 0; i < proxp.length; i++) {
        let tr = document.createElement("tr");

        let pais = document.createElement("p");
        pais.innerHTML = proxp[i].competition.area.name;
        console.log(pais)

        let equipo_local = document.createElement("p");
        equipo_local.innerHTML = proxp[i].homeTeam.name;


        let equipo_visitante = document.createElement("p");
        equipo_visitante.innerHTML = proxp[i].awayTeam.name;

        let liga = document.createElement("p");
        liga.innerHTML = proxp[i].competition.name;

        // let imgEL = document.createElement("img");
        // imgEL.setAttribute("src", proxp[i].homeTeam.crest);
        // imgEL.classList.add("escudos");

        // let imgEV = document.createElement("img");
        // imgEV.setAttribute("src", proxp[i].awayTeam.crest);
        // imgEV

        let bandera = document.createElement("img");
        bandera.setAttribute("src", proxp[i].competition.area.ensignUrl);
        bandera.classList.add("escudos");

        let fecha = new Date(proxp[i].utcDate);

        let datos_tabla = [
            bandera,
            pais,
            liga,
            equipo_local,
            equipo_visitante,
            fecha.toLocaleString(),
        ];

        for (let j = 0; j < datos_tabla.length; j++) {
            let td = document.createElement("td");
            td.append(datos_tabla[j]);
            tr.append(td);
        }
        cuerpo_tablap.append(tr);
    }

}

// crearTablaP(proximosP);