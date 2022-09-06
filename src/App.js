

import BtnIcon from './components/btn-icon/Btnicon';
import StepBox from './components/step-box/StepBox';

import Icon1 from './assets/images/steps/icon1.png';
import Icon2 from './assets/images/steps/icon2.png';
import Icon3 from './assets/images/steps/icon3.png';
import Icon4 from './assets/images/steps/icon4.png';


import './App.css';

function App() {
  return (
    <div className="App">

          <div className='container my-5'>
                <BtnIcon mode="secondary" small= {true}/>
          </div>

          <div className='container my-5'>
              <div className='d-flex' >
                <StepBox img={Icon1} title="Declarative" text="adios" className="text-info">
                  <p>React makes it painless to create interactive UIs.</p>
                </StepBox>
                <StepBox img={Icon2} title="Components" text="adios" className="text-info">
                  <p>Build encapsulated components that manage their state</p>
                </StepBox>
                <StepBox img={Icon3} title="Single-Way" text="adios" className="text-info">
                  <p>A set of immutable values are passed to the componenets</p>
                </StepBox>
                <StepBox img={Icon4} title="JSX" text="adios" className="text-info">
                  <p>Statically-typed, designed to run on modern browsers</p>
                </StepBox>
              </div>
          </div>
    </div>
  );
}



export default App;
