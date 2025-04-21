
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
    name: "Motodo",
    description: "This is an event application made in a group project for a client. The web application is designed to give people the ability to find events happening locally.",
    involvement: [ "Morgan Rusk", "Zac Linzmeyer", "Chau Cao", "Kim Jin", "Rayne Perry", "Hayden Thomson", "Cedric Losantas" ],
    instructions: [
        "This is the front page of the application. Users may find events from here, or sign in and create their own events.",
        "An event can be expanded to show more information about the event, like the event's description, any links associated with the event, and any optional images. If a user clicks on specific event information, like the location or audience type, it swill apply a filter for those types of events.",
        "I implemented the filtering system. Upon a user clicking the 'Filter' button, a modal will pop up. In the modal, users can select different filters to apply to the search. Filters include: Categories, audience type, locations, and start and end date.",
        "Once the filters are applied, the events are filtered and the current filter in affect is displayed to the user. Filtering works with both sorting and searching.",
        "If a user likes another user's post, they may go to their profile page and follow them to receive notifications when they post a new event. Both the following functionality and the email notifications were designed by me.",
        "Moderators have special functionality that is not available to other users. I created the moderator's users view, which allows moderators to see and search registered users easily.",
        "Moderators can easily sort and search users based on their username or email.",
        "The type of user (such as regular, premium, or moderator) is displayed to the moderator beside each user with an icon that can be hovered over for more details.",
        "This is just some of the functionality implemented into the website, as my group members and I have worked on this project for over seven months."
    ],
    urlParam: "events",
    link: "https://effulgent-dolphin-09ec55.netlify.app/",
    images: [
        "MotodoFrontPage.png",
        "MotodoEvent.png",
        "MotodoAdvancedFilters.png",
        "MotodoAppliedFilters.png",
        "MotodoFollowing.png",
        "MotodoModUsers.png",
        "MotodoModSearchUsers.png",
        "MotodoUserType.png"
    ]
};

export const monsterMania: Project = {
    id: 3,
    name: "4-Bullet Monster Mania",
    description: "This is Monster Mania, a game made for the Saskatoon Game Jam held in September of 2024.",
    involvement: [ "Morgan Rusk", "Andrea", "Gia Diep", "Zac Wieler" ],
    instructions: [
        "The point of 4-Bullet Monster Mania is to escape the cave you are trapped in! Blocking the exit is a large monster, but you have a gun you can use to defeat it.",
        "By using the arrow keys and the space bar to hit the targets, you can weaken the monster.",
        "The monster has psychic powers that can effect your aim and shooting skills, resulting in modes such as 'Drunk', 'Reverse', and more.",
        "Artwork created by me."
    ],
    urlParam: "monster",
    link: "https://3bulletmonstermania.itch.io/3-bullet-monster-mania",
    images: [
        "MonsterStart.png",
        "MonsterGame.png",
        "MonsterMode.png"
    ]
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
