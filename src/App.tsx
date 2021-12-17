import DrumMachine from 'components/DrumMachine';
import useStore from 'hooks/use-store';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';

function App() {

  const [soundbank, dispatch] = useStore('soundbank', true)
  
  return (
    <div className="App">
      <header className="absolute top-0 text-white z-1 basis-full text-center pt-20">
        <h1 className="font-bold text-5xl pb-5">DRUM MACHINE</h1>
      </header>
      <div className="drums-container">
        <DrumMachine soundbank={soundbank.left} suffix=""/>
        <DrumMachine soundbank={soundbank.right} suffix="-right"/>
      </div>
      <footer className="absolute text-white z-1 bottom-0 pb-10">
        <div className="text-center py-3">
          <p>Sample project by Evren BAL</p>
        </div>
        <div className="flex justify-center text-3xl">
          <a title="Contact me on twitter!"
            href="https://www.twitter.com/benevrenbal"
            target="_blank"
            rel="noreferrer"
            className="mx-5"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a title="Contact me on LinkedIn!"
            href="https://www.linkedin.com/in/benevrenbal"
            target="_blank"
            rel="noreferrer"
            className="mx-5"
            >
            <i className="fa fa-linkedin"></i>
          </a>
          <a title="Check my Github Account!"
            href="https://www.github.com/evrenbal"
            target="_blank"
            rel="noreferrer"
            className="mx-5"
            >
            <i className="fa fa-github"></i>
          </a>
        </div>        
      </footer>
    </div>
  );
}

export default App;
