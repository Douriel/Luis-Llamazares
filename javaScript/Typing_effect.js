const introduction = document.getElementById('introduction');

var i = 0;
var txt = "I'm Luis Llamazares, originally from Cuenca, Spain, and currently based in Dublin, Ireland. I'm a Software Engineer specialized in Artificial Intelligence.<On this website, you'll find a selection of projects I've worked on — showcasing my skills, interests, and what I’m passionate about building.";
var speed = 15;

console.log(introduction.textContent)

function typeWriter() {
    if(!introduction) return;
    if (i < txt.length) {
        if(txt.charAt(i) == '<'){ 
            introduction.innerHTML += "<br>";
            i++;
            setTimeout(typeWriter, speed);
        }
        introduction.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();

/* Sustituir todo esto por el siguiente razonamiento:

El texto inicialmente tendra opacidad 0. Se situra en un un grid, a este texto se superpondrá el mismo con opacidad 100%

Asi nos ahorramos calcular las medias.*/