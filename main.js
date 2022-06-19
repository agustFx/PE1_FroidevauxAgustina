class Usuario{
    constructor(nombre, mail){
        this.nombre = nombre;
        this.mail = mail;
    }

    saludarUsuario(){
        alert("Nos alegramos de verte por acá, " + this.nombre + "!");
    } 
}

let nombre = prompt("Bienvenido a la maratón de Marvel Studios, ¿cuál es tu nombre?");
let mail = prompt("¿Y tu mail?");

const usuario1 = new Usuario(nombre, mail);
usuario1.saludarUsuario();

class Pelicula{
    constructor(id, nombre, duracion, sala, horario){
        this.id = id;
        this.nombre = nombre;
        this.duracion = duracion;
        this.sala = sala;
        this.horario = horario;
    }
}

const pelicula1 = new Pelicula("1", "Thor", "115 minutos", 2,"21.30hs");
const pelicula2 = new Pelicula("2", "Iron Man", "126 minutos", 4,"22hs");
const pelicula3 = new Pelicula("3", "Capitán América: El soldado de invierno", "136 minutos", 3, "19.40hs");
const pelicula4 = new Pelicula("4", "El increíble Hulk", "112 minutos", 1, "23.15hs");

const usuarios = [usuario1];
const peliculas = [pelicula1, pelicula2, pelicula3, pelicula4];

function mostrarPeliculas(){
    for(Pelicula of peliculas){
        let peliculasDisponibles = alert("Estas son las funciones disponibles para hoy: \n \n"
        + Pelicula.id + ") " + Pelicula.nombre + " a las " + Pelicula.horario);
    }
}

function verPelicula(){
    let entrada = prompt("¿Te quedas a ver alguna peli? \n 1. SI \n 2. NO");
    if(entrada == "1"){
        return true;
    } else if((entrada == "si") || (entrada == "SI") || (entrada == "Si")){
        return true;
    } else{
        return false;
    }
}

function elegirPelicula(){
    while(verPelicula()){
        mostrarPeliculas();

        let respuesta = prompt("¿Qué opción te gustaría ver?");
        switch(respuesta){
            case "1":
                alert("La función de " + pelicula1.nombre + " va a estar reproduciéndose a las " + pelicula1.horario + " en la sala " + pelicula1.sala);
                break;
            case "2":
                alert("La función de " + pelicula2.nombre + " va a estar reproduciéndose a las " + pelicula2.horario + " en la sala " + pelicula2.sala);
                break;
            case "3":
                alert("La función de " + pelicula3.nombre + " va a estar reproduciéndose a las " + pelicula3.horario + " en la sala " + pelicula3.sala);
                break;
            case "4":
                alert("La función de " + pelicula4.nombre + " va a estar reproduciéndose a las " + pelicula4.horario + " en la sala " + pelicula4.sala);
                break;
            default:
                alert("La función que elegiste no está disponible");
                break;
        }   
        break;
    }
    alert("Gracias por la visita, esperamos que disfrutes las maratones de Marvel Studios tanto como nosotros!");
}

elegirPelicula();

class Quiz{
    constructor(pregunta, respuesta){
        this.pregunta = pregunta;
        this.respuesta = respuesta;
    }

    mostrarRespuestas(){
        alert(quizs.forEach(quiz => {
            "Te mostramos las respuestas para que veas que no te mentimos:" +
            quiz.pregunta + "\n Respuesta: " + quiz.respuesta;
        }));
    }
}

const quiz1 = new Quiz("¿Cuál es el nombre del hacha forjada por el calor de una estrella de neutrones moribunda para Thor?", "Rompedor de Tormenta");
const quiz2 = new Quiz("¿Cuál es la única película de Marvel que no tiene una escena posterior al crédito?", "Avengers Endgame");
const quiz3 = new Quiz("¿Quién mató a los padres de Tony Stark?", "El soldado de invierno");

const quizs = [quiz1, quiz2, quiz3];

function participarQuiz(){
    let entrada = prompt("¿Te gustaría participar de este Quiz Marvel? \n Si acertas te espera un premio!");
    if((entrada == "si") || (entrada == "Si") || (entrada == aceptar)){
        return true;
    } else{
        return false;
    }
}

while(participarQuiz()){
    for(Quiz of quizs){
        let pregunta = prompt(Quiz.pregunta);
        if(pregunta != Quiz.respuesta){
            alert("Fallaste! Suerte la próxima")
        } else {
            alert("No había premio, solo estábamos probando tu sabiduría!")
        }
    }
    
    mostrarRespuestas();
}