import { NavBar } from "./components/navbar/NavBar"
import './LoHanson.css';
import { ApplicationViews } from './components/views/ApplicationViews';

function LoHanson() {
  return (
    <div className="LoHanson">
      <NavBar />
      <ApplicationViews />
    </div>
  );
}

export default LoHanson;
