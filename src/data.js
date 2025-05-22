
import chatgpt from './assets/images/Chatgpt.png'
import dashboard from './assets/images/Dashboard.png'
import forkify from './assets/images/Forkify Website.png'
import landing from './assets/images/Landing Page.png'
import youtube from './assets/images/Youtube.png'
import IMDB from './assets/images/IMDB.png'
import NetFlix from './assets/images/Netlfix.png'
import Talk from './assets/images/Talk.png'
import Shop from './assets/images/ecommerce.png'
import Inventory from './assets/images/Inventory.png'
import Billing from './assets/images/Billing.png'
// in progress projects

// import Servista from './assets/portfolioImages/servista.PNG'
// import landingPage from './assets/portfolioImages/url.jpg'

const ProjectsData = [
  {
    id: "Inventory",
    img: Inventory,
    name: "Custom Inventory System for Manufacturing Optimization",
    stack: ["< React.js /> ", " < JavaScript /> ", " < MERN /> ", " < MongoDb /> ", " < Tailwind CSS />",],
    live: "https://sritex-inventory.netlify.app/",
    source: "https://github.com/Pavithrank02/sritextweb",
    description:
      "React.js project featuring Redux store integration and API-based custom inventory management system. Designed and implemented intuitive user interfaces with React.js and Tailwind CSS to ensure a seamless and responsive user experience across devices.",
  },
  {
    id: "Billing",
    img: Billing,
    name: "Billing System and Industry Website",
    stack: ["< React.js /> ", " < JavaScript /> ", " < MERN /> ", " < MongoDb /> ", " < Tailwind CSS />",],
    live: "https://srirangalaser.com/",
    source: "https://github.com/Pavithrank02/srirangaweb",
    description:
      "React-based application enabling personalized user access to a billing system with automated, user-specific document generation capabilities.Implemented user authentication to grant access based on login credentials tailored to different billing tiers, ensuring secure and personalized billing experiences.Automated user-specific document generation, leading to a 35% improvement in operational efficiency.",
  },
  {
    id: "E-Commerce",
    img: Shop,
    name: "ShopInOut App",
    stack: ["< React.js /> ", "< JavaScript /> ", "< Redux /> ", "< Tailwind CSS />",],
    live: "https://shopinout.netlify.app/",
    source: "https://github.com/Pavithrank02/shopping-cart",
    description:
      "React and Redux based E-Commerse website from which online shoping can be performed with easy steps.",
  },
  {
    id: "talk-chat",
    img: Talk,
    name: "Talk-Chat App",
    stack: ["< React.js /> ", " < JavaScript /> ", " < MERN /> ", " < MongoDb /> ", " < Tailwind CSS />",],
    live: "https://talk-chat-nvpa.onrender.com",
    source: "https://github.com/Pavithrank02/talk-chat",
    description:
      "MERN Stack based chat application which is used by user for chatting and once the user are registered they can able to chat with other registered users. All user information and chats will be handled in Mongodb. User interaction will be made through Socket.io.",
  },
  {
    id: "NetFlix_GPT",
    img: NetFlix,
    name: "NetFlix_GPT",
    stack: ["< React.js /> ", "< JavaScript /> ", "< Redux /> ", "< Tailwind CSS />", "< Open API />", "< Firebase />"],
    live: "https://netflix-gpt-website.netlify.app",
    source: "https://github.com/Pavithrank02/netflix_gpt",
    description:
      "React and Redux based Movie Searching web application with integration of openAi API to suggests movie based on keywords.",
  },
  {
    id: "IMDB_website",
    img: IMDB,
    name: "IMDB Website",
    stack: ["< React.js /> ", "< JavaScript /> ", "< Redux /> ", "< Tailwind CSS />"],
    live: "https://imdb-website.netlify.app",
    source: "https://github.com/Pavithrank02/omdb_website",
    description:
      "React based Project to get to know about recent movies rating, description and review. I worked with a team of designers and developers to implement the new design and functionality using React, Redux, and Sass",
  },

  {
    id: "forkify",
    img: forkify,
    name: "forkify website",
    stack: ["< JavaScript /> ", "< CSS3 />"],
    live: "https://forkify-pavi.netlify.app",
    source: "https://github.com/Pavithrank02/JS-contents/tree/main",
    description:
      "Forkify website will provide Recipe Details. Display detailed information about each recipe, including ingredients, preparation steps, cooking time, serving size, nutritional information, and user reviews",
  },
  {
    id: "chat",
    img: chatgpt,
    name: "Chat GPT Website",
    stack: ["< Bootstrap v5 />", "< React.js />"],
    live: "https://cgpt-website.netlify.app",
    source: "https://github.com/Pavithrank02/chat-gpt",
    description:
      "This challenge from frontendmentor tested my skills to create websites, a common pattern on larger sites. It also has some nice basic layout challenge. Use the API integration to handle chat interactions. When the user sends a message, make an API request to send their input to the ChatGPT API. Receive the response and display it in the chat interface",
  },

  {
    id: "Dashboard",
    img: dashboard,
    name: "Worker Dashboard",
    stack: ["< React.js />", "< Material Ui />", "< RestAPI />"],
    live: "https://workerdashboard.netlify.app",
    source: "https://github.com/Pavithrank02/prj-dashboard",
    description:
      "Multi-page space dashboard provides relevent information for users. It's a Figma design conversion to react. Goal was to get it looking as close to the design as possible.Include a form builder tool that allows users to create customized forms to collect user data, such as email addresses or feedback. Provide options to integrate with popular email marketing services or CRM platforms",
  },

  {
    id: "landing",
    img: landing,
    name: "Landing Page",
    stack: ["< ReactJs />", "< Material UI />", "< JavaScript />"],
    live: "https://pavi-react-landing-page.netlify.app",
    source: "https://github.com/Pavithrank02/landing_page",
    description:
      "Customizable Templates: Provide a variety of professionally designed templates for users to choose from. These templates can serve as a starting point for creating their landing pages",
  },

  {
    id: "youtube",
    img: youtube,
    name: "Youtube Clone",
    stack: ["< Reactjs />", "< tailwind CSS />", "< RESTAPI />"],
    live: "https://react-youtube-prj.netlify.app",
    source: "https://github.com/Pavithrank02/react-youtube",
    description:
      "Begin by setting up a new React application using a tool like Create React App. This will provide you with the basic project structure and configuration. Use a routing library like React Router to handle navigation within your YouTube clone. Define routes for different pages, such as the home page, video page, user profile, and search results",
  },

];

const InprogressProjectsData = [

  {
    id: "youtube",
    img: youtube,
    name: "Youtube Clone",
    stack: ["< Reactjs />", "< tailwind CSS />", "< RESTAPI />"],
    live: "https://react-youtube-prj.netlify.app",
    source: "https://github.com/Pavithrank02/react-youtube",
    description:
      "Begin by setting up a new React application using a tool like Create React App. This will provide you with the basic project structure and configuration. Use a routing library like React Router to handle navigation within your YouTube clone. Define routes for different pages, such as the home page, video page, user profile, and search results",
  },


];

export default { ProjectsData, InprogressProjectsData }
