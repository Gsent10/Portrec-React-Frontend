import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../reuseable/Navbar'
import { useGetPollingUnitResultQuery } from '../../features/api/apiSlice'

const Unit = () => {
    const { unitId } = useParams()
    console.log(unitId)

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPollingUnitResultQuery(unitId)

    console.log(data)

    let content;
  if (isLoading) {
    content = <h1 className='mt-5 text-center'>Loading...</h1>
  } else if (isSuccess && data.result.length === 0) {
    content = <h1 className='mt-5 text-center'>Not Uploaded</h1>
  } else if (isSuccess) {
    content = (
        <div class="card mt-5">
            <div class="card-header">
                Result
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            {
                                data.result.map(party => {
                                    return (
                                        <th key={party.result_id}>{party.party_abbreviation}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                data.result.map(party => {
                                    return (
                                        <td key={party.result_id}>{party.party_score}</td>
                                    )
                                })
                            }
                        </tr>
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

export default Unit