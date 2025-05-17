import logo from './logo.svg';
import Navbar from './Navbar';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <div className="main-content">
        <h1 className = "greeting">Hi, There!</h1>
        <p className="greeting-paragraph">Hello! My name is Imani Gomez. I am a computer engineering graduate <br></br>
        student at NYU. My background in computer engineering and film <br></br>
        production allows me to use my skills in machine learning, full stack<br></br> 
        development, and digital media workflows to drive innovation in the<br></br> 
        entertainment industry. This gives me a unique perspective on how <br></br>
        technology shapes the future of storytelling and I am constantly<br></br> 
        looking for new opportunities to learn and advance the industry forward.<br></br>
        <br></br>
        Additionally, I have a passion for the art form of photography. I have <br></br>
        been shooting for 10 years and while I mostly focus on sports, I also<br></br> 
        love anything from portraits to fashion to street photography. </p>
    </div>

    <div className="work-content">
        <span className="work-title">MY WORK</span>

        <div className="work-block-pages">
          <div className="work-block">Photography</div>
          <div className="work-block">Software Projects</div>
          <div className="work-block">Films</div>
        </div>
    </div>

    <Contact />

    </>
  );
}

export default App;
