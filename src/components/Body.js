import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import {useState} from "react";

const Body =()=>{
  const[ListOfRestaurants, setListOfRestaurants]=useState(resList);
    return(
        <div className="body">
            <div className="search">
              <button className ="filter-btn"
              onClick={()=>{
                const filteredList =ListOfRestaurants.filter(
                  (res)=>res.info.avgRating>4
                );
                setListOfRestaurants(filteredList);

              }}
              >

                Top Rated restaurent
              </button>
            </div>
            <div className="res-container">
            
            {
              ListOfRestaurants.map((restaurant)=>(
                <RestaurantCard key ={restaurant.info.id} ResData ={restaurant}/>

              )) 
              

            }

            </div>

        </div>
    );
};
export default Body;