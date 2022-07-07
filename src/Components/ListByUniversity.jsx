import React from "react";

export const ListByUniversity = ({fetchDataByUniversity}) => {
    return (
        <div>
            <div className='unversity-wrapper'>
                  {fetchDataByUniversity.map((data) => (
                    <div className="universty-name">
                      <h3>{data.name}</h3>
                    </div>
                  ))}
                
            </div>
        </div>
      )
}