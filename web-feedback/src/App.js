import './App.css';
import Dialogue from './dialogue.js';
import React, {useState} from 'react';
import Dialog2 from './dialog2.js';

function App() {
  const [showTaskDialog, setShowTaskDialog] = useState(false);
  const [showSecondDialog,setShowSecondDialog] = useState(true);

  const cancel = () => {
    setShowTaskDialog(false);
    setShowSecondDialog(false);
};

const confirm = () => {
  console.log('next');
};
  return (
    <>
    <div className = "mt-10 text-center">
      <button className = 'btn' onClick={() => {setShowSecondDialog(true)}}>Give Feedback</button>
     </div>
     <Dialog2
     show = {showSecondDialog}
     cancel = {cancel}
     confirm = {confirm}
     />
    </>
  );
}

export default App;
