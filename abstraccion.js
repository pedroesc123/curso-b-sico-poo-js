// class Course {
//     constructor ({
//         name,
//         classes = [],
//     }){
//         this.name = name;
//         this.classes = classes;
//     }
// };

// class Classes {
//     constructor ({
//         name,
//         comentarios,
//     }){
//         this.name = name;
//         this.comentarios = comentarios;
//     }
// };

// class Comentarios {
//     constructor({
//         comentario = "",
//         usuario,
//     }){
//         this.comentario = comentario;
//         this.usuario = usuario;
//     }
// }

// const comentario1 = new Comentarios({
//     comentario: "Es una excelente clase",
//     usuario: "pedroesc",
// })

// const class1 = new Classes({
//     name: "Clase de Introducción",
//     comentarios: comentario1,
// });

// const cursoProgBasica = new Course({
//     name: "Curso Gratuito de Programación Básica",
//     classes: [class1], 
// });

// const cursoDefinitivoHTML = new Course({
//     name: "Curso Definitivo de HTML y CSS",
//     classes: [class1], 
// });

// const cursoPracticoHTML = new Course({
//     name: "Curso Práctico de HTML y CSS",
//     classes: [class1], 
// });



// class LearningPath {
//     constructor({
//         name,
//         courses = [],
//     }) {
//         this.name = name;
//         this.courses = courses;
//     }
// }

// const escuelaWeb = new LearningPath({
//     name: "Escuela de Desarrollo Web",
//     courses: [
//         cursoProgBasica,
//         cursoDefinitivoHTML,
//         cursoPracticoHTML,
//     ]
// })

// const escuelaData = new LearningPath({
//     name: "Escuela de Data Science",
//     courses: [
//         cursoProgBasica,
//         "Curso DataBusiness",
//         "Curso Dataviz",
//     ]
// })

// const escuelaVgs = new LearningPath({
//     name: "Escuela de Videojuegos",
//     courses: [
//         cursoProgBasica,
//         "Curso de Unity",
//         "Curso de Unreal",
//     ]
// })

// class Student {
//     constructor({
//         name,
//         email,
//         username,
//         twitter = undefined,
//         instagram = undefined,
//         facebook = undefined,
//         approvedCourse = [],
//         learningPaths = [],
//     }) {
//         this.name = name;
//         this.email = email;
//         this.username = username;
//         this.socialMedia = {
//             twitter,
//             instagram,
//             facebook,
//         };
//         this.approvedCourse = approvedCourse;
//         this.learningPaths = learningPaths;
//     }
// };

// const juan2 = new Student({
//     name: "JuanDC",
//     username: "juandc",
//     email: "juanito@juanito.com",
//     twitter: "fjuandc",
//     learningPaths: [
//         escuelaWeb,
//         escuelaVgs,
//     ],
// });

// const miguelito2 = new Student({
//     name: "Miguelito",
//     username: "miguelitofeliz",
//     email: "miguelito@juanito.com",
//     twitter: "miguelito_feliz",
//     learningPaths: [
//         escuelaWeb,
//         escuelaData,
//     ],
// });