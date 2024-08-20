import Learn from "./containers/Learn";
import Home from "./containers/Home";
import Instructors from "./containers/Instructors";
import Roadmap from "./containers/Roadmap";
import Pricing from "./containers/Pricing";
import Features from "./containers/Features";
import Projects from "./containers/Projects";
import FAQ from "./containers/FAQ";
import CourseDetails from "./containers/CourseDetails";
import Contact from "./containers/Contact";

export const navigation = [
    {
      component: <Home/>,
      id: "0",
      title: "Home",
      url: "home",
    },
    {
        component: <CourseDetails/>,
        id: "7",
        title: "Course Details",
        url: "coursedetails",
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
      title: "Curriculum",
      url: "curriculum",
    },
    {
        component: <Pricing/>,
        id: "5",
        title: "Pricing",
        url: "pricing",
    },
    {
      component: <Learn/>,
      id: "4",
      title: "Why Learn AI",
      url: "learn",
    },
    
  ];