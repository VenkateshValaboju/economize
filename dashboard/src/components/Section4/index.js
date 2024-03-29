import "./index.css"
import {useState} from "react"

const Section4=()=>{
    const [bool,setBool]=useState(true)
    return(
    <div className="section4Container">
        <div className="sec4-1">
            <div className="sec-4Btn-Cont">
                <button className="section4Btn" onClick={()=>setBool(true)}>Automations</button>
                <button className="section4Btn" onClick={()=>setBool(false)}>Campaigns</button>
                <button className="section4Btn" onClick={()=>setBool(false)}>Segments</button>
            </div>
            <div className="Sec4Con1">
                {bool?
                <div className="Sec4Con">
                    <div className="cartItem">
                        <div>
                            <h4>Abandoned Cart 7 days</h4>
                            <p className="Title">4024 Sent | 124 Clicks</p>
                        </div>

                        <div>
                            <h4 style={{textAlign:"right"}}>$5,231</h4>
                            <p className="Title">41 Orders | $150 AOV</p>
                        </div>
                    </div>
                    <div className="cartItem">
                        <div>
                            <h4>Abandoned Cart 15 Min</h4>
                            <p className="Title">4024 Sent | 124 Clicks</p>
                        </div>

                        <div>
                            <h4 style={{textAlign:"right"}}>$24,521</h4>
                            <p className="Title">41 Orders | $150 AOV</p>
                        </div>
                    </div>
                    <div className="cartItem">
                        <div>
                            <h4>Abandoned Cart 15 Min</h4>
                            <p className="Title">4024 Sent | 124 Clicks</p>
                        </div>

                        <div>
                            <h4 style={{textAlign:"right"}}>$24,521</h4>
                            <p className="Title">41 Orders | $150 AOV</p>
                        </div>
                    </div>
                </div>:<div className="NoDataDiv">
                    <h3>No Data</h3></div>}
            </div>
        </div>
        <div className="gaugeCont">
            <h1>Gauge</h1>
        </div>
    </div>
)}

export default Section4