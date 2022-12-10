import React from "react";
import './Pagination.css';

function Pagination(props) {
    // whenever we want to update from
    // Previous state -> Next state

    // const [pagenb,setpagenb] = React.useState(1);

    // const onIncrementPagenbHandler=()=>{
    //     setpagenb(function(prevState){
    //         props.setglobalPageNumberHandler(pagenb);
    //         return pagenb + 1;
    //     });
    // }

    // const onDecrementPagenbHandler=()=>{
    //     if(pagenb === 1){
    //         // setpagenb(pagenb);or
    //         setpagenb(function(prevState){
    //             return prevState;
    //         })
    //     }else{
    //         setpagenb(function(prevState){
    //             return pagenb - 1;
    //         });
    //     }
       
    // }


    // we are updating this page no from home component and passing it to movieList
    // to get updated movies in the movieList section of home component
  return (
    <div className="pagination">
      <div
        onClick={() =>
          props.setglobalPageNumberHandler(props.globalPageNumber - 1)
        }
        className="pagination_btn"
      >
        Prev
      </div>
      <div className="page-no">{props.globalPageNumber}</div>
      <div
        onClick={() =>
          props.setglobalPageNumberHandler(props.globalPageNumber + 1)
        }
        className="pagination_btn"
      >
        Next
      </div>
    </div>
  ); 
}
export default Pagination;
