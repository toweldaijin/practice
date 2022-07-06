import React from "react";
import TextField from '@mui/material/TextField';
import HomeImageUrl from './HomeImageUrl.png';
import Button from '@mui/material/Button';
import ListByCountry from "./ListByCountry";


export const Home = (props) => {

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
      <form>
        <input type="text" placeholder="国名を入力"></input>
      </form>
      
      <p>大学名で検索</p>
      <TextField id="SearchByUniversity" />
      <Button variant="contained" type="submit">検索</Button>
    </div>

    <ListByCountry></ListByCountry>
   </>

     
    );
    
}