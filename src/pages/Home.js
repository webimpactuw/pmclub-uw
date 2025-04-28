import Cover from "../assets/cover.jpg";
import {HomeButton} from '../components/Buttons'
import './Home.css';

const Home = () => {
  return (
    <>
    <img src={Cover} alt="Photo of PM Club meeting at Founders Hall" id="image-section"/>
    <div className="container">
      <div className="container left">
        <p>EST. 2022</p>
        <h1>
          Product Management Club <span style={{color: "purple"}}>@</span> UW
        </h1>
      </div>
      <div className="container left">
        <p>is a workshop-style community that aims to provide invaluable resources, mentorship, and opportunities 
          to students interested in pursuing a career in product management. </p>
        <HomeButton onClick={() => window.open(`https://docs.google.com/forms/d/e/1FAIpQLSecmtTq3ATj5pJbcwhZY08GNb214LL4NoL3KA0m7hhQrqU3hg/viewform`, '_blank')}>
          Our Interest Form
        </HomeButton>
      </div>
    </div>
{/* 
    <div className="flex-container">
      <div className="item auto">auto</div>
      <div className="item auto">auto</div>
      <div className="item auto">auto</div>
    </div>

    <div className="flex-container">
      <div className="item auto">auto</div>
      <div className="item initial">initial</div>
      <div className="item initial">initial</div>
    </div>

    <div className="flex-container">
      <div className="item auto">auto</div>
      <div className="item auto">auto</div>
      <div className="item none">none</div>
    </div>

    <div className="flex-container">
      <div className="item initial">initial</div>
      <div className="item none">none</div>
      <div className="item none">none</div>
    </div>

    <div className="flex-container">
      <div className="item four">4</div>
      <div className="item two">2</div>
      <div className="item one">1</div>
    </div> */}

    </>
  );
};

export default Home;
