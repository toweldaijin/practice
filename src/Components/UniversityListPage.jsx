import React from "react";
import { useState } from "react";

export const UniversityList = (props) =>{
    const { university } = props;
    return(
        <div>
            {
                university.map((singleUniversityData) => 
                    console.log(singleUniversityData)
                )
            }
        </div>
    )
    }
    
