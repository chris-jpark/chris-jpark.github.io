
import SLM from '../assets/PathFinding.png'
import crud from '../assets/crud.png'
import study from '../assets/transparent-Studyspace.png'
import timesync from '../assets/Timesync.png'
import Techadvisor from '../assets/tech.png'
import gtfs from '../assets/gtfs.png'

export const data=[
    {
        id: 0,
        name: "Valhalla Transit Support",
        image: gtfs,
        github: "https://github.com/orgs/valhalla/projects/1/views/1",
        link: "https://www.openstreetmap.org/user/ChrisPark/diary",
        description: `The primary aim of this Google Summer of Code project is to re-introduce transit support in Valhalla, the OpenStreetMap based Routing Engine. Initially, Valhalla supported a mode to route transit, but due to a bottleneck from a third-party library, it became unviable to continue support transit routing. Therefore, the aim of the project is to directly parse raw General Transit Feed Specification (GTFS) data and remove the dependency.`
    },
    {
        id:1,
        name:"Student Life Map",
        image:SLM,
        github:"https://gitfront.io/r/dividividib/UkY4B3JybKy6/StudentLifeMap/",
        link:"https://gitfront.io/r/dividividib/UkY4B3JybKy6/StudentLifeMap/",
        description: "Student Life Map is a GTK Application designed for urban students to find their nearest studyspace and get their way around campus and the city that surrounds it. It pulls OpenStreetMap Data to draw the streets and features, creating a graph of the city with each intersection being a node. It also searches through the data to allow searching for cafes, studyspaces, and fast food restaurants. An A* pathfinding algorithm was implemented to allow for pathfinding between any two intersections of a given city.\n\n Written entirely in C++.",
    },
    {
        id:2,
        name:"Inventory Manager",
        image:crud,
        github:"https://github.com/chris-jpark/shopify-2022",
        link:"https://github.com/chris-jpark/shopify-2022",
        description: `A CRUD Application developed on Ruby on Rails to keep track of inventories in different
							locations.Implemented a filtering ability
							that allows the user to filter by inventory count and location`
    },
    {
        id:3,
        name:"Studyspace Finder",
        image:study,
        github:"https://github.com/seungjae02/study-location-app",
        link:"https://devpost.com/software/studyspace-finder",
        description:`Studyspace Finder displays the density of people per study location at the University of
							Toronto St. George campus on an interactive map.
							The density of people per location is tracked by a “check-in and check-out” system inputted
							by the users.
							The density of a study location is communicated to the user by the marker size, colour, and
							a label that ranges from “Empty” to “Extremely packed.”
							With the functionality that this application provides, the user can choose whether to study
							at a busier or a quieter location on campus by observing the map.`
    },
    {
        id:4,
        name:"Timesync",
        image:timesync,
        github:"https://github.com/seungjae02/TimeSync",
        link:"https://devpost.com/software/timesync-3tyfro",
        description: `Timesync is a web app that connects you with different people, so you don’t have to be alone
							in your work. Once you sign up with your social media information, you will be able to add a
							daily to-do list.
							Using the to-do list, Timesync can search its database for other users doing similar
							activities with you, and provide you with a list of potential work-buddies.
							The site can provide other users’ names and instagram handles so that maybe a work together
							party call can be made.`
    },
    {
        id: 5,
        name: "TechAdvisor",
        image: Techadvisor,
        github: "https://github.com/chris-jpark/Techadvisor",
        link: "https://devpost.com/software/techadvisor",
        description: `TechAdvisor is a savvy IoT Application for Amazon Alexa that recommends tech devices from
							voice commands.
							The application simplifies the process of buying laptops and other technology equipment, for
							it is a headache for a lot of people who find it difficult to accurately determine one's
							needs.
							After a series of voice activated questions, TechAdvisor will scrape the web for a
							recommendation and run its algorithm to provide the user with a product match.`
    },



]