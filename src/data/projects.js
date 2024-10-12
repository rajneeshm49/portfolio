import image1 from "../assets/project1.jpg";
import image2 from "../assets/project2.png";
import image3 from "../assets/project3.png";
import music_master from "../assets/music-master.png";

const PROJECTS = [
  {
    id: "project1",
    title: "Liberty Costa Rica ",
    image: image1,
    description:
      "Offers telecommunications and technology solutions for businesses in Costa Rica.",
    // "The website 'LibertyCR Empresas' offers telecommunications and technology solutions for businesses in Costa Rica. It provides services like high-speed internet, mobile plans, cloud solutions, and managed IT services, tailored for companies to improve their connectivity and operational efficiency. They also offer specialized support for different industry sectors.",
    link: "https://libertycr.com/empresas",
  },
  {
    id: "project2",
    title: "My Liberty Puerto Rico",
    image: image2,
    description:
      "Designed for customers of Liberty Puerto Rico to manage their mobile and internet services",
    // "The 'My Liberty app' is designed for customers of Liberty Puerto Rico to manage their mobile and internet services. Users can pay bills, view account history, save payment methods for future use, and manage autopay options. It also offers features like reviewing service outages, managing multiple accounts, and even rebooting your modem directly from the app. It's a convenient tool for handling your Liberty services on the go​",
    link: "https://mi.libertypr.com",
  },
  {
    id: "project3",
    title: "My Flow App",
    image: image3,
    description:
      "An app for Caribbean customers of Flow to manage their mobile services, monitoring data",
    // "The 'My Flow' app is a self-care tool for customers of LIME (now Flow) in the Caribbean. It allows users to manage their mobile services, including buying add-ons, monitoring data usage, viewing call and text history, and paying bills. The app offers prepaid users control over their accounts, with features like tracking overages and direct communication with customer service. It's part of LIME's initiative to enhance customer service and provide more convenient access to mobile services​",
    link: "https://myflow.discoverflow.co",
  },
];

const SIDE_PROJECTS = [
  {
    id: "music-master",
    title: "Music Master",
    image: music_master,
    description:
      "Uncover the top hits from your favorite artists. Dive into their best tracks and play them instantly with a tap!",
    link: "https://music-master-yubk-9l0rfl0iq-rajneeshm49s-projects.vercel.app/",
  },
];

export { PROJECTS, SIDE_PROJECTS };
