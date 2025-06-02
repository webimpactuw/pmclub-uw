import Cover from "../assets/cover.jpg";
import { HomeButton } from '../components/Buttons'
import './Home.css';
import EventsDisplay from "../components/EventsDisplay";
import PhotoGallery from "../components/PhotoGallery";

const Home = () => {
  return (
    <>
      <div className="home-white-section">
        <img src={Cover} alt="PM Club meeting at Founders Hall" id="image-section"/>
        <section className="container">
          <div className="title">
            <p>EST. 2022</p>
            <h1 style={{marginTop: "0px", fontSize: "40px"}}>
              Product Management Club <span style={{color: "#8082FF"}}>@</span> UW
            </h1>
          </div>
          <div className="description">
            <p>
              is a workshop-style community that aims to provide invaluable resources,
              mentorship, and opportunities to students interested in pursuing a career
              in product management.
            </p>
            <HomeButton onClick={() => window.open(`https://docs.google.com/forms/d/e/1FAIpQLSecmtTq3ATj5pJbcwhZY08GNb214LL4NoL3KA0m7hhQrqU3hg/viewform`, '_blank')}>
              Our Interest Form
            </HomeButton>
          </div>
        </section>
      </div>

      <div className="home-gradient-section">
        <EventsDisplay />
        <PhotoGallery />
      </div>
    </>
  );
};

export default Home;
