
import Card from '../Shared/Card';
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({item,handleDelete}) {

 

    return(
    
   <Card>   

        <div className="num-display">{item.rating}</div>

        <button 
         onClick={()=>handleDelete(item.id)}
        className='close'>
<FaTimes color='purple'/>
        </button>
        <div className='text-displaay'>{item.text}</div>
        </Card>
      
    

    )
}
export default FeedbackItem;
