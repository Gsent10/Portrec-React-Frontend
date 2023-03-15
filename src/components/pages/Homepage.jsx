import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../reuseable/Navbar'
import { useGetPollingUnitsQuery } from '../../features/api/apiSlice'

const Homepage = () => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPollingUnitsQuery()

  console.log(data)

  let content;
  if (isLoading) {
    content = <h1 className='mt-5 text-center'>Loading...</h1>
  } else if (isSuccess) {
    content = (
      <div class="card mt-5">
        <div class="card-header">
          Polling Units
        </div>
        <div class="card-body">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Unit Number</th>
                <th scope="col">Name</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {
                data.pollingunits.map((unit, index) => {
                  return (
                    <tr key={unit.uniqueid}>
                      <td>{index + 1}</td>
                      <td>{unit.polling_unit_number}</td>
                      <td>{unit.polling_unit_name}</td>
                      <td><Link to={`/pollingunit/${unit.uniqueid}`} className="btn btn-primary">View Result</Link></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        {content}
      </div>
    </>
  )
}

export default Homepage