import Greetings from "../Greetings"
import QuickLook from "../QuickLook"
import Graph from "../Graph"
import Section4 from "../Section4"
import "./index.css"


const Dashboard=()=>(
    <div className="dashboard">
        <Greetings/>
        <QuickLook/>
        <Graph/>
        <Section4/>
    </div>
)

export default Dashboard