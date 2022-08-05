import React, { useRef, useState } from "react";
import { ListByUniversity } from "./ListByUniversity";

export const SearchByUniversity = () => {

  const [fetchDataByUniversity, setFetchDataByUniversity] = useState([]);
  const ref = useRef();

 

  /* inputに文字入力後、エンターしたとき */
  const handleSubmitByUniversity = (event) => {
    event.preventDefault();
    console.log(ref.current.value);

  /* APIのURL */
  const endpointUrlByUniversity = `http://universities.hipolabs.com/search?name=${ref.current.value}`

  /* APIを叩く */
  fetch(endpointUrlByUniversity)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setFetchDataByUniversity(data);
  })
  }

  return(
    <>
        <div 
             className='searchArea' 
            style={{
                backgroundColor:"#92B4EC",
                color:"white"
                }}
            >
        <p>大学名で検索</p>
        <form onSubmit={(event) => handleSubmitByUniversity(event)}>
            <input type="text" placeholder="大学名を入力" ref={ref}></input>
        </form>
        <ListByUniversity fetchDataByUniversity={fetchDataByUniversity}></ListByUniversity>
        </div>
    </>
  )
}