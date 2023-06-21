//las variables objetos, se deben declarar antes de ser inicializadas dentro de new Vue.
const datosContacto = {
    telefono:'+56 9 8451 6642',
    email:'felipe.munoz.caceres@outlook.com',
    github:'https://github.com/felipemunozca',
    direccion: 'Los Niches, sector Cordillerilla, población La Parroquia N°525, Curicó',
}

const historialTrabajos = [
    {
        empresa: 'Agromillora Sur',
        puesto: 'Analista de TI',
        descripcion:'Encargado de dar mantención y reparación de computadores. Configuración de dispositivos de red. Comprobación del funcionamiento de servidores y máquinas virtuales. Participación en la implementación de un software de trazabilidad',
        periodo: '2019 - 2021', 
    },
    {
        empresa: 'Frutasol S.A.',
        puesto: 'Soporte informático',
        descripcion: 'Encargado de dar mantención y reparación de computadores. Configuración de dispositivos de red. Mantenimiento de impresoras y scanner. Comprobación del funcionamiento de servidores y máquinas virtuales. Participación en la puesta en marcha de un ERP agrícola. ',
        periodo: '2018',
    }

]

const historialEstudios = [
    {
        institucion: 'Talento Digital junto a Desafió Latam',
        carrera: 'Desarrollo de Aplicaciones Front-end Trainee',
        periodo: '2023',
    },
    {
        institucion: 'Talento Digital junto a Desafió Latam',
        carrera: 'Desarrollo de Aplicaciones Full Stack JavaScript Trainee',
        periodo: '2022',
    },
    {
        institucion: 'Instituto Profesional AIEP',
        carrera: 'Ingeniería de ejecución en informática',
        periodo: '2017-2018',
    },
    {
        institucion: 'Instituto Profesional AIEP',
        carrera: 'Técnico en programación y análisis de sistemas',
        periodo: '2011-2014',
    },
]


var seccionIzquierda = new Vue({
    el:'#app',
    data:{
        titleContact: 'Contacto',
        profilePhoto: 'assets/img/perfil.png',
        contact: datosContacto,
        titleSkills: 'Habilidades',
        listSkills: [
            'HTML & CSS',
            'Bootstrap',
            'JavaScript',
            'Vue JS',
            'Node JS',
            'Express JS',
            'PostgreSQL',
            'Git & GitHub',
        ],
    }
});

var seccionDerecha = new Vue({
    el:'#app2',
    data:{
        fullName: 'Felipe Esteban Muñoz Cáceres',
        career: 'Ingeniero en Informática',
        aboutMe_text1: 'Soy una persona pro activa, capaz de trabajar en equipo, responsable, respetuoso, dispuesto a aprender el uso de nuevas tecnologías para seguir creciendo como profesional.',
        aboutMe_text2: 'La mayor parte de mi experiencia laboral la he desarrollado en áreas relacionadas al soporte informático, en empresas con diferentes giros, por lo que decidí fortalecer mis habilidades en programación participando en Bootcamps de Desafió Latam.',
        aboutMe_text3: 'Actualmente me encuentro participando en el curso Desarrollo de Aplicaciones Front-end Trainee para continuar puliendo mis habilidades en el ámbito de la programación.',
        experienceTitle: 'Experiencia en el area IT',
        experienceWork: historialTrabajos,
        studiesTitle: 'Educación',
        studies: historialEstudios,
    }
});