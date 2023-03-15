import React from 'react'
import Navbar from '../reuseable/Navbar'
import { useGetLgasQueryQuery, useLazyGetLgaResultQuery } from '../../features/api/apiSlice'

const Lga = () => {
  const [getResult, { data, isLoading, isSuccess, isError }] = useLazyGetLgaResultQuery()
  const {
    data: lgas,
  } = useGetLgasQueryQuery()

  const handleChange = (e) => {
        
    getResult(e.target.value)
    console.log(data)
  }

  let content;
  if (isLoading) {
    content = <h1 className='mt-5 text-center'>Loading...</h1>
  } else if (isSuccess) {
    content = (
      <div class="card mt-5">
          <div class="card-header">
              {data.lga.lga_name} LGA
          </div>
          <div class="card-body">
              <table class="table">
                  <thead>
                      <tr>
                          <th>ACN</th>
                          <th>ANPP</th>
                          <th>CDC</th>
                          <th>CPP</th>
                          <th>DPP</th>
                          <th>JP</th>
                          <th>LABOUR</th>
                          <th>PDP</th>
                          <th>PPA</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>{data.result.ACN.result}</td>
                          <td>{data.result.ANPP.result}</td>
                          <td>{data.result.CDC.result}</td>
                          <td>{data.result.CPP.result}</td>
                          <td>{data.result.DPP.result}</td>
                          <td>{data.result.JP.result}</td>
                          <td>{data.result.LABOUR.result}</td>
                          <td>{data.result.PDP.result}</td>
                          <td>{data.result.PPA.result}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  )
  } else if (isError) {
    content = <p>error</p>
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row mt-5">
          <div class="input-group mb-3 d-flex justify-content-center">
            <select 
              class="custom-select col-6 col-lg-9" 
              id="inputGroupSelect02"
              onChange={handleChange}
            >
              <option>Choose...</option>
              {
                lgas?.lgas.map(lga => {
                  return (
                    <option key={lga.uniqueid} value={lga.lga_id}>{lga.lga_name}</option>
                  )
                })
              }
            </select>

            <div class="input-group-append">
              <label class="input-group-text" for="inputGroupSelect02">Options</label>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          {content}
        </div>
      </div>
    </>
  )
}

export default Lga