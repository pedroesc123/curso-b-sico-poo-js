class LearningPath {
    constructor({
        escuela,
        wannaCourses = [],
        daysToTakeCourses,
    }) {
        this.escuela = escuela;
        this.wannaCourses = wannaCourses;
        this.daysToTakeCourses = daysToTakeCourses;
    }
    agregarCurso (nuevoCurso) {
        this.wannaCourses.push(nuevoCurso);
    }
};

const escuelaWeb = new LearningPath({
    escuela: "Escuela de Dessarrollo Web",
    wannaCourses: [
        "CSS",
        "HTML",
        "JS",
    ],
    daysToTakeCourses: 15,
})

escuelaWeb.agregarCurso("Python");

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourse = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourse = approvedCourse;
        this.learningPaths = learningPaths;
    }
};

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: escuelaWeb,
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@juanito.com",
    twitter: "miguelito_feliz",
});