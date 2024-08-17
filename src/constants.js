import Learn from "./containers/Learn";
import Home from "./containers/Home";
import Jobs from "./containers/Jobs";
import Roadmap from "./containers/Roadmap";
import News from "./containers/News";
import Features from "./containers/Features";
import icon from "./assets/technology.png"

export const navigation = [
    {
      component: <Home/>,
      id: "0",
      title: "Home",
      url: "home",
    },
    {
      component: <Features/>,
      id: "1",
      title: "Features",
      url: "features",
    },
    {
      component: <Roadmap/>,
      id: "2",
      title: "Roadmap",
      url: "roadmap",
    },
    {
      component: <Learn/>,
      id: "4",
      title: "Why Learn AI",
      url: "learn",
    },
    {
      component: <News/>,
      id: "5",
      title: "Newsroom",
      url: "news",
    },
    {
        component: <Jobs/>,
        id: "6",
        title: "Connect",
        url: "jobs",
      },
  ];
export const featuresList = [
    {
        image: icon,
        title: "Doubt Support",
        text: "24x7 unlimited doubt resolution support, absolutely free!",
    },
    {
        image: icon,
        title: "Doubt Support",
        text: "24x7 unlimited doubt resolution support, absolutely free!",
    },
    {
        image: icon,
        title: "Doubt Support",
        text: "24x7 unlimited doubt resolution support, absolutely free!",
    },
    {
        image: icon,
        title: "Competitions",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    },
    {
        image: icon,
        title: "Competitions",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    },
    {
        image: icon,
        title: "Competitions",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    },
    {
        image: icon,
        title: "Competitions",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    },
    {
        image: icon,
        title: "Competitions",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    },
]

export const whyLearnAI = [
    {
        title: "Dive into the AI Revolution",
        text: "AI is not just a buzzword—it’s reshaping the world. By learning AI, kids step into a frontier of technology that is driving the future. They gain early insights into how AI powers everything from smart devices to groundbreaking innovations."
    },
    {
        title: "Gain a Unique Competitive Edge",
        text: "Starting AI education early gives kids a significant advantage. As AI becomes a fundamental skill across industries, mastering it now prepares them to excel in future careers and stand out in a competitive job market."
    },
    {
        title: "Develop Essential Coding Skills",
        text: "AI education involves hands-on coding experiences that build critical programming skills. Kids become proficient in coding languages and tools, laying a strong foundation for future tech projects and problem-solving."
    },
    {
        title: "Strengthen Mathematical Skills",
        text: "Machine learning and AI are rooted in mathematics. Learning AI helps kids understand and apply mathematical concepts like algebra, statistics, and probability in engaging, practical ways."
    },
    {
        title: "Enhance Problem-Solving Abilities",
        text: "AI challenges kids to tackle complex problems with creative solutions. By working on real-world problems, they enhance their analytical skills and learn to approach issues with a strategic mindset."
    },
    {
        title: "Boost Confidence through Achievements",
        text: "Completing AI projects gives kids a sense of accomplishment. As they see their ideas come to life, they gain confidence in their abilities and develop a positive attitude toward learning and challenges."
    },
    {
        title: "Ignite Creativity Across Diverse Fields",
        text: "AI brings together technology, mathematics, design, engineering, and psychology, creating a rich tapestry of interdisciplinary learning. By studying AI, kids explore its impact on art, where it aids in creative projects"
    },
]