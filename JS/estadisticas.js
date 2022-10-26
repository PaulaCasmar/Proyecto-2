// 0. Crear función que va calcular las estadísticas, recibiendo como param el array de partidos

// 1. Crear array vacía (será array de objetos)

// 2. Iterar por todos los partidos

// 3. Condición: si el partido no está acabado, no seguir y mirar siguiente partido

// 4. Buscar en la array estadisticas el objeto con el mismo id que el homeTeam del partido

// 5. Si el objeto buscado no existe, crearlo con estos keys: id, name, goals, matches.
// Rellenar cada key con el valor correspondiente

// 6. Si existe, actualizar los goles y los partidos

// 7. Hacer exactamente lo mismo a partir del punto 4, pero con awayTeam

// 8. Una vez fuera del loop de partidos, iterar por el array estadisticas

// 9. Añadir la key avg a cada objeto, con el valor goals/matches

// 10. Hacer console.log() para ver que todo está correcto.

// 0, 1, 2, 3
function Estadisticas(partidos) {
    let objetos = []

    for (let i = 0; i < partidos.length; i++) {

        let estadoPartidos = partidos[i].status
        if (estadoPartido !== "FINISHED") {
            continue
        }

        let nombre_V = partidos[i].homeTeam.name;
        let nombre_L = partidos[i].awayTeam.name;
        let id_V = partidos[i].homeTeam.id;
        let id_L = partidos[i].awayTeam.id;
        let goals_V = partidos[i].score.fullTime.homeTeam;
        let goals_L = partidos[i].score.fullTime.awayTeam;
        
    }


}
Estadisticas(datos_partidos)



// let realMadrid = {
//     id: 'Paula'
//     name: 
//     goals: 
//     matches: 
//   };

//   o 

//   let obejeto = ()
//   hometeam.id: 
//    hometeam.name: 
//    hometeam.goals: 
//     hometeam.matches: 