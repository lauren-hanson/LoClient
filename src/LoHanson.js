import { NavBar } from "./components/navbar/NavBar"
import './LoHanson.css';
import { ApplicationViews } from './components/views/ApplicationViews';

function LoHanson() {
  return (
    <div className="LoHanson">
      <h3>Lo Hanson Portfolio</h3>
      <NavBar />
      <ApplicationViews />
    </div>
  );
}

export default LoHanson;
