import './App.css';
import AccordionEg from './components/AccordionEg';
import AxiosGet from './components/AxiosGet';
import Header from './components/Header';
import HooksEffect from './components/HooksEffect';
import HooksState from './components/HooksState';
import Lifecycle from './components/Lifecycle';
import List from './components/List';
import Navbar from './components/Navbar';
import Parent from './components/Parent';
import State from './components/State';
import StylingEg from './components/StylingEg';

function App() {



  return (
    <div>
      <Navbar />
      <Header name="kevin"/>
      <State />
      <Parent />
      <List />
      <StylingEg />
      <AccordionEg />
      <Lifecycle />
      <br />
      <HooksState />
      <br />
      {/* <HooksEffect /> */}
      <br />
      <AxiosGet />
      <br />
    </div>
  );
}

export default App;
