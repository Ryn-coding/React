import React from 'react'
import useFetch from './UseFetch'
import './FetchData.css'

const FetchYogaData = () => {
  const [data] = useFetch('https://api.npoint.io/4459a9a10e43812e1152')
  console.log(data)

  return (
    <>
      <h1 className='useFetch_heading'>Yoga Benefits</h1>
      <ul className='list_data_main'>
        {data && data.map((item, index) => (
          <li key={index} className='list_data'>
            <h3>{item.name}</h3>
            <p><strong>Benefits: </strong>{item.benefits}</p>
            <p><strong>Time Duration: </strong>{item.time_duration}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default FetchYogaData
