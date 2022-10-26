// let clasificacionT = clasificacion.standings[0].table
// console.log(clasificacionT)


function get_Data() {
    document.getElementById("spinner").style.display = "block";

    const url = "https://api.football-data.org/v2/competitions/2014/standings";
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
            let clasificacionT = data.standings[0].table;
            crearTablaC(clasificacionT);
            console.log(clasificacionT)
        })
        .catch((error) => {
            console.log(error)
            alert("Ha ocurrido un problema al cargar la página");
        });


}
get_Data();

function crearTablaC(clas) {
    let cuerpo_tablaC = document.getElementById("cuerpo_tablaClas")

    for (let i = 0; i < clas.length; i++) {
        let tr = document.createElement("tr");

        let teamName = document.createElement("p");
        teamName.innerHTML = clas[i].team.name;

        let position = document.createElement("p");
        position.innerHTML = clas[i].position;

        let playedGames = document.createElement("p");
        playedGames.innerHTML = clas[i].playedGames;

        let won = document.createElement("p");
        won.innerHTML = clas[i].won;

        let draw = document.createElement("p");
        draw.innerHTML = clas[i].draw;

        let lost = document.createElement("p");
        lost.innerHTML = clas[i].lost;

        let points = document.createElement("p");
        points.innerHTML = clas[i].points;

        let goalsFor = document.createElement("p");
        goalsFor.innerHTML = clas[i].goalsFor;

        let goalsAgainst = document.createElement("p");
        goalsAgainst.innerHTML = clas[i].goalsAgainst;

        let goalDifference = document.createElement("p");
        goalDifference.innerHTML = clas[i].goalDifference;

        let imagen = document.createElement("img");
        imagen.setAttribute("src", clas[i].team.crestUrl);
        imagen.classList.add("escudos");

        let datos_tabla = [
            position,
            imagen,
            teamName,
            points,
            playedGames,
            won,
            draw,
            lost,
            goalsFor,
            goalsAgainst,
            goalDifference,
        ];

        for (let j = 0; j < datos_tabla.length; j++) {
            let td = document.createElement("td");
            td.append(datos_tabla[j]);
            tr.append(td);

        }

        cuerpo_tablaC.append(tr);

    }
}





// for (let i = 0; i < clasificacionT.length; i++) {

//     let teamName = clasificacionT[i].team.name;
//     console.log(teamName);

//     let position = clasificacionT[i].position;
//     console.log(position);

//     let playedGames = clasificacionT[i].playedGames;
//     console.log(playedGames);

//     let won = clasificacionT[i].won;
//     console.log(won);

//     let draw = clasificacionT[i].draw;
//     console.log(draw);

//     let lost = clasificacionT[i].lost;
//     console.log(lost);

//     let points = clasificacionT[i].points;
//     console.log(points);

//     let goalsFor = clasificacionT[i].goalsFor;
//     console.log(goalsFor);

//     let goalsAgainst = clasificacionT[i].goalsAgainst;
//     console.log(goalsAgainst);

//     let goalDifference = clasificacionT[i].goalDifference;
//     console.log(goalDifference)
// }





// let points = clasificacion.standings[0].table[0].points;
// console.log(points);

// let goalsFor = clasificacion.standings[0].table[0].goalsFor;
// console.log(goalsFor);

// let goalsAgainst = clasificacion.standings[0].table[0].goalsAgainst;
// console.log(goalsAgainst);

// let goalDifference = clasificacion.standings[0].table[0].goalDifference;
// console.log(goalDifference);