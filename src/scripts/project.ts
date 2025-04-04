
// Project Interface:
export interface Project {
    id: number;
    name: string;
    description: string;
    involvement: string[];
    instructions: string[];
    urlParam: string;
    link: string;
}


// Enter projects here:
export const chatCat: Project = {
    id: 1,
    name: "Cat Forum",
    description: "Chat forum to talk about cats.",
    involvement: [ "" ],
    instructions: [ "" ],
    urlParam: "cat",
    link: ""
};

export const eventsApp: Project = {
    id: 1,
    name: "Events App",
    description: "Event application made in a group project for a client.",
    involvement: [ "" ],
    instructions: [ "" ],
    urlParam: "events",
    link: ""
};

export const monsterMania: Project = {
    id: 3,
    name: "Monster Mania",
    description: "This is a Monster Mania.",
    involvement: [ "" ],
    instructions: [ "" ],
    urlParam: "monster",
    link: "https://3bulletmonstermania.itch.io/3-bullet-monster-mania"
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
