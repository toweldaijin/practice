import React, { useRef, useState } from "react";
import ListByCountry from "./ListByCountry";

export const SearchByCountry = () => {


    const [fetchDataByCountry, setFetchDataByCountry] = useState([]);
    const ref = useRef();

    /* inputに文字入力後、エンターしたとき */
    const handleSubmitByCountry = (event) => {
    event.preventDefault();
    console.log(ref.current.value);

    /* APIのURL */
    const endpointUrlByCountry = `http://universities.hipolabs.com/search?country=${ref.current.value}` 

    /* APIを叩く */
    fetch(endpointUrlByCountry)
        .then((res) => {
        return res.json();
        })
        .then((data) => {
        console.log(data);
        setFetchDataByCountry(data);
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
                <p>国で検索</p>
                <form onSubmit={(event) => handleSubmitByCountry(event)}>
                <input type="text" placeholder="国名を入力" ref={ref}></input>
                </form>

                <ListByCountry fetchDataByCountry={fetchDataByCountry}></ListByCountry>
            </div>
        </>
    )
}