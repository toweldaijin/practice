import React from 'react'

const ListByCountry = ({fetchDataByCountry}) => {
  return (
    <div>
        <div className='unversity-wrapper'>
              {fetchDataByCountry.map((data) => (
                <div className="universty-name">
                  <h3>{data.name}</h3>
                </div>
              ))}
            
        </div>
    </div>
  )
}

export default ListByCountry