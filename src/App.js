import Header from "./components/Header";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStates from "./components/FeedbackStates";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from "uuid";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AboutPage from './components/pages/AboutPage';
import AboutLinkIcon from "./components/AboutLinkIcon";

function App(){
    
const [feedback,setFeedback] =useState(FeedbackData);

const deleteFeedBack =(id)=>{
    if(window.confirm('Are You Sure You Want to delete?')){
        setFeedback(feedback.filter((item)=>item.id!==id))
    }
}

const addFeedback =(newFeedback) => {
 newFeedback.id = uuidv4();
 setFeedback([newFeedback,...feedback]);



}

return (

    <Router>  
<Header/>
<div className="container">
<Routes> 
<Route path="/" element={
    <> 
    <FeedbackForm  handleAdd={addFeedback}/>

<FeedbackStates
    feedback={feedback}
/>
<FeedbackList
    feedback ={feedback}
    handleDelete ={deleteFeedBack }
  

/>
<AboutLinkIcon/>

</>

}> 

</Route>

<Route path="/about" element={<AboutPage/>}> </Route>3

</Routes>

</div>


</Router>
)




}
export default App;



