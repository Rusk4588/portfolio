
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
    description: "A chat forum to talk about cats, built for a final project in a web development class (CWEB 280).",
    involvement: [ "Morgan Rusk" ],
    instructions: [
        "The main page of the chat forum allows people to browse through posts.",
        "Each post has a title and some content, and optionally an image. Users also have the option to comment on posts.",
        "Comments are optional, and while anyone can see a post's comments, only logged on users can comment.",
        "Logged on users can also create their own posts.",
        "Users can see a preview of their uploaded image before post submission.",
        "Anyone can search through posts by using the search bar at the top of the page.",
        "You can also search for other users, and check out their accounts!",
        "Each user has a profile page, where they can edit their profile information and see some statistics about themselves!",
        "Anyone can see a person's profile page, and from there you can see a user's posts and comments.",
        "From the comments on a person's profile page, you can go to the individual post that they commented on.",
        "Moderators have the option to mute users who post unsavory content.",
        "Account creation is easy, so that users can start posting right away!"
    ],
    urlParam: "cat",
    link: "",
    images: [
        "MainPage.PNG",
        "Post.PNG",
        "Commentless.PNG",
        "CreatePost.PNG",
        "ImageUpload.PNG",
        "PostSearch.PNG",
        "UserSearch.PNG",
        "OwnProfile.PNG",
        "ProfilePage.PNG",
        "ProfileComments.PNG",
        "Moderation.PNG"
    ]
};

export const eventsApp: Project = {
    id: 1,
    name: "Events App",
    description: "Event application made in a group project for a client. The web application is designed to give people the ability to find events happening locally.",
    involvement: [ "Morgan Rusk", "Zac Linzmeyer", "Chau Cao", "Kim Jin", "Rayne Perry", "Hayden Thomson", "Cedric Losantas" ],
    instructions: [ "" ],
    urlParam: "events",
    link: "https://effulgent-dolphin-09ec55.netlify.app/",
    images: []
};

export const monsterMania: Project = {
    id: 3,
    name: "4-Bullet Monster Mania",
    description: "This is a Monster Mania, a game made for the Saskatoon Game Jam held in September of 2024.",
    involvement: [ "Morgan Rusk", "Andrea Mareschal?", "Gia Diep", "Zac Wieler" ],
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
