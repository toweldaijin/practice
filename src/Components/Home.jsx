import React, { useRef, useState } from "react";
import HomeImageUrl from './HomeImageUrl.png';
import ListByCountry from "./ListByCountry";
import { ListByUniversity } from "./ListByUniversity";

export const Home = (props) => {

  /* const [fetchDataByCountry, setFetchDataByCountry] = useState([]); */
  const [fetchDataByUniversity, setFetchDataByUniversity] = useState([]);
  const ref = useRef();

  /* inputに文字入力後、エンターしたとき */
  /* const handleSubmitBycountry = (event) => {
    event.preventDefault();
    console.log(ref.current.value);

  /* APIのURL */
  /* const endpointUrlByCountry = `http://universities.hipolabs.com/search?country=${ref.current.value}` */

  /* APIを叩く */
  /* fetch(endpointUrlByCountry)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setFetchDataByCountry(data);
    })
  } */ 

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
    
    <div>
      <h2>留学ペディアは、海外大学合格体験記をシェアすることで、留学を志す皆さんをお助けするサイトです。</h2>
      <img 
          src={HomeImageUrl} 
          alt="人々が地球の周りで手を繋いでいる" 
          style={{height:"300px", width:"300px"}}
      />
    </div>

    <div 
      className='searchArea' 
      style={{
              backgroundColor:"#92B4EC",
              color:"white"
            }}
    >
      <p>国で検索</p>
      {/* <form onSubmit={(event) => handleSubmitBycountry(event)}>
        <input type="text" placeholder="国名を入力" ref={ref}></input>
      </form> */}
      
      <p>大学名で検索</p>
      <form onSubmit={(event) => handleSubmitByUniversity(event)}>
        <input type="text" placeholder="大学名を入力" ref={ref}></input>
      </form>
    </div>

    {/* <ListByCountry fetchDataByCountry={fetchDataByCountry}></ListByCountry> */}
    <ListByUniversity fetchDataByUniversity={fetchDataByUniversity}></ListByUniversity>
   </>

     
    );
    
}