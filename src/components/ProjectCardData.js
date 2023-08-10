import Project1 from "../assets/Project1.png"
import Project2 from "../assets/Project2.png"
import Project3 from "../assets/Project3.jpg"

import {FaBootstrap, FaPhp, FaHtml5, FaNodeJs} from "react-icons/fa";

const ProjectCardData = [
    {
        imgsrc: Project1,
        title: "Library Management System",
        text: "This project is being developed by QCU Student to assist members and library staff in maintaining the library in the best possible manner while also minimizing human effort. There will be no loss of book or member records with this computerized system, as is frequently the case with non-computerized systems.",
        logo: [
            <FaHtml5 size={30} style={{ marginRight: "1rem", color: "e34c26" }} />,
            <FaBootstrap size={30} style={{ marginRight: "1rem", color: "#563d7c" }} />,
            <FaPhp size={30} style={{ marginRight: "1rem", color: "#474A8A" }} />,
          ],
        view: "http://librarymanagementsystemsbit3j.epizy.com/login.php",
    },
    {
        imgsrc: Project2,
        title: "Barangay Managemanent System",
        logo: [
            <FaHtml5 size={30} style={{ marginRight: "1rem", color: "#e34c26" }} />,
            <FaBootstrap size={30} style={{ marginRight: "1rem", color: "#563d7c" }} />,
            <FaPhp size={30} style={{ marginRight: "1rem", color: "#474A8A" }} />,
          ],
        text: "Records Management for Barangay Culiat, Quezon City that helps the administrator manage records in the Barangay such as Resident Information,  Barangay Officials and Staff Information, Barangay Census, Graphical Reports, and Archive Management, for more efficient, reducing paper consumption and time-consuming file retrieval from bulky documents.",
        view: "",
    },
    {
        imgsrc: Project3,
        title: "The Gym Street Client Mobile App",
        logo: [
            <FaNodeJs size={30} style={{ marginRight: "1rem", color: "#68A063" }} />,
        ],
        text: "The Integrated Client Side for Gym Mobile Application is developed by Qcu Student this project aimed at providing health and fitness enthusiasts with a mobile app that can help them track their workouts, exercise routines, and meet their fitness goals. The app will have an easy-to-use interface and a workout library accessible for free.",
        view: "https://drive.google.com/file/d/13hR2X7uNZ7pVuRZ-Y7OWknS6I_DGtPkH/view?usp=sharing",
    }
]

export default ProjectCardData;