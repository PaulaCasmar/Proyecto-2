let datosP = partidos.matches;
console.log(datosP);
quitarAlert1();
quitarAlert2();
quitarAlert3();
quitarAlert4();
quitarAlert5();
quitarAlert6();

function crearTabla(resultados) {
    let cuerpo_tabla = document.getElementById("cuerpo_tabla");
    cuerpo_tabla.innerHTML = "";
    for (let i = 0; i < resultados.length; i++) {
        let tr = document.createElement("tr");

        let jornada = document.createElement("p");
        jornada.innerHTML = resultados[i].matchday;

        let equipo_local = document.createElement("p");
        equipo_local.innerHTML = resultados[i].homeTeam.name;

        let equipo_visitante = document.createElement("p");
        equipo_visitante.innerHTML = resultados[i].awayTeam.name;

        let resultadoP =
            resultados[i].score.fullTime.homeTeam +
            "-" +
            resultados[i].score.fullTime.awayTeam;
        if (resultadoP === "null-null") {
            resultadoP = "Por jugar";
        }

        let fecha = new Date(resultados[i].utcDate);

        let imgEL = document.createElement("img");
        imgEL.setAttribute(
            "src",
            "https://crests.football-data.org/" + resultados[i].homeTeam.id + ".svg"
        );
        imgEL.classList.add("escudos");

        let imgEV = document.createElement("img");
        imgEV.setAttribute(
            "src",
            "https://crests.football-data.org/" + resultados[i].awayTeam.id + ".svg"
        );
        imgEV.classList.add("escudos");

        let datos_tabla = [
            jornada,
            imgEL,
            equipo_local,
            resultadoP,
            imgEV,
            equipo_visitante,
            fecha.toLocaleString(),
        ];

        for (let j = 0; j < datos_tabla.length; j++) {
            let td = document.createElement("td");
            td.append(datos_tabla[j]);
            tr.append(td);
        }
        cuerpo_tabla.append(tr);
    }
}
crearTabla(datosP);

function filtrarEquipos(matches) {
    let input_text = document.querySelector("input[type=text]").value;
    let filtroBotones = document.querySelector("input[type=radio]:checked");

    let alerta1 = document.getElementById("alerta1");
    if (input_text == "") {
        return (alerta1.style.display = "block");
    }
    let alerta2 = document.getElementById("alerta2");
    // let alerta3 = document.getElementById("alerta3");
    // let alerta4 = document.getElementById("alerta4");

    let filtroE = matches.filter((partido) => {
        if (
            partido.homeTeam.name.toLowerCase().includes(input_text.toLowerCase()) ||
            partido.awayTeam.name.toLowerCase().includes(input_text.toLowerCase())
        ) {
            return true;
        } else {
            return false;
        }
    });

    if (filtroE.length === 0) {
        alerta2.style.display = "block";
        return crearTabla(datosP);
    }

    if (filtroBotones === null) {
        return crearTabla(filtroE);
    }

    let filterButtons = filtroE.filter((partidos) => {


        if (filtroBotones.value === "Ganados") {
            if (
                (partidos.homeTeam.name
                    .toLowerCase()
                    .includes(input_text.toLowerCase()) &&
                    partidos.score.winner == "HOME_TEAM") ||
                (partidos.awayTeam.name
                    .toLowerCase()
                    .includes(input_text.toLowerCase()) &&
                    partidos.score.winner == "AWAY_TEAM")
            ) {
                return true;
            } else {
                return false;
            }
        }

        if (filtroBotones.value === "Perdidos") {
            if (
                (partidos.homeTeam.name
                    .toLowerCase()
                    .includes(input_text.toLowerCase()) &&
                    partidos.score.winner == "AWAY_TEAM") ||
                (partidos.awayTeam.name
                    .toLowerCase()
                    .includes(input_text.toLowerCase()) &&
                    partidos.score.winner == "HOME_TEAM")
            ) {
                return true;
            } else {
                return false;
            }
        }

        if (
            partidos.score.winner === "DRAW" &&
            filtroBotones.value === "Empatados"
        ) {
            return true;
        }

        if (partidos.status === "SCHEDULED" && filtroBotones.value === "Proximos") {
            return true;
        }
    });

    let alerta3 = document.getElementById("alerta3");
    let alerta4 = document.getElementById("alerta4");
    let alerta5 = document.getElementById("alerta5");
    let alerta6 = document.getElementById("alerta6");

    if (filtroBotones.value === "Ganados" && filterButtons.length === 0) {
        alerta5.style.display = "block";
        // quitarAlert3();
        // quitarAlert4();
        return crearTabla(filtroE)
    } else {
        alerta5.style.display = "none"
    }

    if (filtroBotones.value === "Perdidos" && filterButtons.length === 0) {
        alerta4.style.display = "block";
        return crearTabla(filtroE)
    } else {
        alerta4.style.display = "none"
    }

    if (filtroBotones.value === "Empatados" && filterButtons.length === 0) {
        alerta3.style.display = "block";
        return crearTabla(filtroE)
    } else {
        alerta3.style.display = "none"
    }

    if (filtroBotones.value === "Proximos" && filterButtons.length === 0) {
        alerta6.style.display = "block";
        return crearTabla(filtroE)
    } else {
        alerta6.style.display = "none"
    }


    crearTabla(filterButtons);
    console.log(crearTabla(filterButtons))
}

function resetFilter(partidos) {
    document.querySelector("input[type=text").value = "";
    let radioButton = document.getElementsByName("partidosb");

    for (let i = 0; i < radioButton.length; i++) {
        radioButton[i].checked = false;
    }
    crearTabla(datosP);
}

let borrar = document.getElementById("reset");
borrar.addEventListener("click", () => {
    resetFilter(partidos);
    quitarAlert1();
    quitarAlert2();
    quitarAlert3();
    quitarAlert4();
    quitarAlert5();
    quitarAlert6();
});

let buscar = document.getElementById("buscar_b");
buscar.addEventListener("click", () => {
    filtrarEquipos(datosP);
});

function quitarAlert1() {
    let alerta1 = document.getElementById("alerta1");
    alerta1.style.display = "none";
}

function quitarAlert2() {
    let alerta2 = document.getElementById("alerta2");
    alerta2.style.display = "none";
}

function quitarAlert3() {
    let alerta3 = document.getElementById("alerta3");
    alerta3.style.display = "none";
}

function quitarAlert4() {
    let alerta4 = document.getElementById("alerta4");
    alerta4.style.display = "none";
}

function quitarAlert5() {
    let alerta5 = document.getElementById("alerta5");
    alerta5.style.display = "none";
}

function quitarAlert6() {
    let alerta6 = document.getElementById("alerta6");
    alerta6.style.display = "none";
}