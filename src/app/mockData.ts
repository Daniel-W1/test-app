export const mockTasks = [
    {
        id: 1,
        title: "Implementing a Real-Time Chat System",
        description: "We need a skilled developer to implement a real-time chat system using WebSockets and Node.js.",
        budget: "$30/hour",
        category: "Backend Development",
        location: "Remote",
        posted: "1 hour ago",
        duration: "1 week",
        requiredSkills: ["Node.js", "WebSockets", "JavaScript"],
        clientName: "John Doe",
        clientRating: 4.5
    },
    {
        id: 2,
        title: "Building a Responsive UI Component Library",
        description: "Seeking a frontend developer to build a responsive UI component library using React and CSS.",
        budget: "$25/hour",
        category: "Frontend Development",
        location: "Remote",
        posted: "2 hours ago",
        duration: "2 weeks",
        requiredSkills: ["React", "CSS", "JavaScript"],
        clientName: "Jane Smith",
        clientRating: 4.2
    },
    {
        id: 3,
        title: "Optimizing Database Performance",
        description: "We require a database administrator to optimize the performance of our MySQL database.",
        budget: "$40/hour",
        category: "Database Administration",
        location: "Remote",
        posted: "3 hours ago",
        duration: "3 weeks",
        requiredSkills: ["MySQL", "Database Optimization", "SQL"],
        clientName: "Alice Johnson",
        clientRating: 4.7
    },
    {
        id: 4,
        title: "Developing a Machine Learning Model",
        description: "Looking for a data scientist to develop a machine learning model using Python and TensorFlow.",
        budget: "$50/hour",
        category: "Machine Learning",
        location: "Remote",
        posted: "4 hours ago",
        duration: "4 weeks",
        requiredSkills: ["Python", "TensorFlow", "Machine Learning"],
        clientName: "Bob Brown",
        clientRating: 4.3
    }
];

export type Task = {
    id: number;
    title: string;
    description: string;
    budget: string;
    category: string;
    location: string;
    posted: string;
    duration: string;
    requiredSkills: string[];
    clientName: string;
    clientRating: number;
}