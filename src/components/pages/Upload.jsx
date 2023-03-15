import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../reuseable/Navbar'
import { useGetPollingUnitsQuery, useSubmitResultMutation } from '../../features/api/apiSlice'

const Upload = () => {
    const navigate = useNavigate()
    const [err, setErr] = useState("");
    const [puId, setPuId] = useState(0);
    const [ACN, setACN] = useState("");
    const [ANPP, setANPP] = useState("");
    const [CDC, setCDC] = useState("");
    const [CPP, setCPP] = useState("");
    const [DPP, setDPP] = useState("");
    const [JP, setJP] = useState("");
    const [LABOUR, setLABOUR] = useState("");
    const [PDP, setPDP] = useState("");
    const [PPA, setPPA] = useState("");
    const [submitResult] = useSubmitResultMutation();



    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPollingUnitsQuery()

    useEffect(() => {
        setErr("")
    }, [puId, ACN, ANPP, CDC, CPP, DPP, JP, LABOUR, PDP, PPA]);


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const result = await submitResult({ puId, ACN, ANPP, CDC, CPP, DPP, JP, LABOUR, PDP, PPA }).unwrap()
            console.log("result")
            navigate("/")
        }catch (e) {
            console.log(e)
            
            if (e.status === 402) {
                setErr("Error occurred, Result already uploaded")
            } else {
                setErr("Error occurred, Pick Polling Unit and Fill all results")
            }
        }
    }



    let content;
    if (isLoading) {
        content = <h1 className='mt-5 text-center'>Loading...</h1>
    } else if (isSuccess) {
        return (
            <div className="container-fluid">
                {
                    err ?
                        <div class="alert alert-danger mt-5" role="alert">
                            {err}
                        </div> : <div></div>
                }
                <div className="row mt-5">
                    <div class="input-group mb-3 d-flex justify-content-center">
                        <select 
                            class="custom-select col-6 col-lg-9" 
                            id="inputGroupSelect02"
                            onChange={(e) => setPuId(e.target.value)}
                        >
                            <option>Polling Unit...</option>
                            {
                                data?.pollingunits.map(unit => {
                                    return (
                                        <option key={unit.uniqueid} value={unit.uniqueid}>{unit.polling_unit_name}</option>
                                    )
                                })
                            }
                        </select>
                        <div class="input-group-append">
                            <label class="input-group-text" for="inputGroupSelect02">Options</label>
                        </div>
                    </div>
                </div>

                <form className='d-flex flex-column justify-content-center align-items-center mt-5' onSubmit={handleSubmit}>
                    <div class="form-group mt-2 col-5 d-flex justify-content-center align-items-center">
                        <label for="ACN">ACN:</label>
                        <input type="number" class="form-control ml-3" id="ACN"  placeholder="ACN" onChange={(e) => setACN(e.target.value)}/>
                    </div>

                    <div class="form-group mt-2 col-5 d-flex justify-content-center align-items-center">
                        <label for="ANPP">ANPP:</label>
                        <input type="number" class="form-control ml-3" id="ANPP"  placeholder="ANPP" onChange={(e) => setANPP(e.target.value)}/>
                    </div>

                    <div class="form-group mt-2 col-5 d-flex justify-content-center align-items-center">
                        <label for="CDC">CDC:</label>
                        <input type="number" class="form-control ml-3" id="CDC"  placeholder="CDC" onChange={(e) => setCDC(e.target.value)}/>
                    </div>

                    <div class="form-group mt-2 col-5 d-flex justify-content-center align-items-center">
                        <label for="CPP">CPP:</label>
                        <input type="number" class="form-control ml-3" id="CPP"  placeholder="CPP" onChange={(e) => setCPP(e.target.value)}/>
                    </div>

                    <div class="form-group mt-2 col-5 d-flex justify-content-center align-items-center">
                        <label for="DPP">DPP:</label>
                        <input type="number" class="form-control ml-3" id="DPP"  placeholder="DPP" onChange={(e) => setDPP(e.target.value)}/>
                    </div>

                    <div class="form-group mt-2 col-5 d-flex justify-content-center align-items-center">
                        <label for="JP">JP:</label>
                        <input type="number" class="form-control ml-3" id="JP"  placeholder="JP" onChange={(e) => setJP(e.target.value)}/>
                    </div>

                    <div class="form-group mt-2 col-5 d-flex justify-content-center align-items-center">
                        <label for="LABOUR">LABOUR:</label>
                        <input type="number" class="form-control ml-3" id="LABOUR"  placeholder="LABOUR" onChange={(e) => setLABOUR(e.target.value)}/>
                    </div>

                    <div class="form-group mt-2 col-5 d-flex justify-content-center align-items-center">
                        <label for="PDP">PDP:</label>
                        <input type="number" class="form-control ml-3" id="PDP"  placeholder="PDP" onChange={(e) => setPDP(e.target.value)}/>
                    </div>

                    <div class="form-group mt-2 col-5 d-flex justify-content-center align-items-center">
                        <label for="PPA">PPA:</label>
                        <input type="number" class="form-control ml-3" id="PPA"  placeholder="PPA" onChange={(e) => setPPA(e.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-primary mt-4">Submit</button>
                </form>
            </div>
        )
    } else if (isError) {
        content = <p>{error}</p>
      }

  return (
    <>
        <Navbar />
        {content}
    </>
  )
}

export default Upload