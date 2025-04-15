
// Project Interface:
export interface Project {
    id: number;
    name: string;
    description: string;
    involvement: string[];
    instructions: string[];
    urlParam: string;
    link: string;
    images: string[]
}


// Enter projects here:
export const chatCat: Project = {
    id: 1,
    name: "Cat Forum",
    description: "Chat forum to talk about cats, built for a final project in a web development class.",
    involvement: [ "Morgan Rusk" ],
    instructions: [ "" ],
    urlParam: "cat",
    link: "",
    images: []
};

export const eventsApp: Project = {
    id: 1,
    name: "Events App",
    description: "Event application made in a group project for a client. The web application is designed to give people the ability to find events happening locally.",
    involvement: [ "Morgan Rusk", "Zac", "Chau Cao", "Kim", "Rayne", "Hayden", "Cedric" ],
    instructions: [ "" ],
    urlParam: "events",
    link: "",
    images: []
};

export const monsterMania: Project = {
    id: 3,
    name: "4-Bullet Monster Mania",
    description: "This is a Monster Mania, a game made for the Saskatoon Game Jam held in September of 2024.",
    involvement: [ "Morgan Rusk", "Andrea", "Gia", "Zac" ],
    instructions: [ "" ],
    urlParam: "monster",
    link: "https://3bulletmonstermania.itch.io/3-bullet-monster-mania",
    images: []
};

// Exporting all projects
export const projects: Project[] = [
    chatCat,
    eventsApp,
    monsterMania,
]

/**
 * Gets the given project from its name.
 * @param projectName The project with that name, or null
 */
export function getProject(projectName: string): Project {
    for (let project of projects) {
        if (project.name === projectName) {
            return project;
        }
    }
    return null;
}

/**
 * Gets the given project from its url parameter.
 * @param projectName The project with that url parameter, or null
 */
export function getProjectFromURL(projectName: string): Project {
    for (let project of projects) {
        if (project.urlParam == projectName) {
            return project;
        }
    }

    return null;
}
