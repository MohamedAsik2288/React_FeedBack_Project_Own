// function FeedbackStates ({feedback}) {

// let sum =feedback.reduce ((acc,cur)=>{
//   return  acc +cur.rating
// },0)

// let average =sum/feedback.length;
// average=average.toFixed(1);

//     return (
//         <div className="feedback-status">

// <h4>{feedback.length} Reviews</h4>
// <h4>Average Rating:{isNaN(average)?0:average}</h4>


//         </div>
//     )
// }

// export default FeedbackStates;

function FeedbackStats({ feedback }){

  let sum = feedback.reduce((acc, cur)=> {
      return acc + cur.rating
  }, 0)

  let average = sum/feedback.length;
  average = average.toFixed(1);

  return (
      <div className="feedback-stats">
          <h4>{feedback.length} Reviews</h4>
          <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
      </div>
  )
}

export default FeedbackStats;