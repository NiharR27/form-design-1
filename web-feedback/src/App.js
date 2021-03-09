import './App.css';
import Dialogue from './dialogue.js';
import React, {useState} from 'react';

function App() {
  const [showTaskDialog, setShowTaskDialog] = useState(false);
  const confirm = () => {
    console.log("Next clicked");
};
  return (
    <>
    <div className = "mt-10 text-center">
      <button className = 'btn' onClick={() => {setShowTaskDialog(true)}}>Give Feedback</button>
     </div>
     <Dialogue 
     show = {showTaskDialog}
     confirm = {confirm}
     />
    </>
  );
}

export default App;
