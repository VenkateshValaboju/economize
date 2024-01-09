import "./index.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { BiSolidConversation } from "react-icons/bi";
import { IoBarChartSharp } from "react-icons/io5";
import { LuPanelTopOpen } from "react-icons/lu";
import { BsChatDotsFill } from "react-icons/bs";
import { GrIntegration } from "react-icons/gr";
import { PiLineSegmentsFill } from "react-icons/pi";
import  { useRef ,useState} from 'react';
import {Link} from "react-router-dom"

const Sidebar=()=>{
    const [isMax,setIsMax]=useState(true)
    const sidebarRef = useRef(null);
    const makeSmall = () => {
        sidebarRef.current.style.width = '3vw';
        setIsMax(false)
      };
    const makeLarge = () => {
        sidebarRef.current.style.width = '20vw';
        setIsMax(true)
      };
    return(
    <div className="sidebar" ref={sidebarRef}>
        <div>
            {isMax?<button className="sidebutton" onClick={makeSmall}>
                <ImCross/>
                </button>:<button className="sidebutton" onClick={makeLarge}>
                <GiHamburgerMenu/></button>}
                <br/>

            {isMax?<img className="companyName mt" src="https://iili.io/J7vZPJs.png"/>:<img className="icon mt" src="https://iili.io/J7vDaZQ.png"/>}
            <br/>
            {isMax?<input placeholder="Search" className="mt"/>:<FaSearch className="icon mt"/>}

            <br/>
            <Link to="/">
            {isMax?<p className="mt"><IoMdHome/> Dashboard</p>:<IoMdHome className="icon mt"/>}
            </Link>
            
            <hr/>
            <Link to="/not-found">
            {isMax?<p className="mt"><BiSolidConversation /> Conversations</p>:<BiSolidConversation className="icon mt"/>}
            </Link>
            <br/>
            <Link to="/not-found">
            {isMax?<p className="mt"><IoMdHome/> Automations</p>:<IoMdHome className="icon mt"/>}
            </Link>
            <br/>
            <Link to="not-found">
            {isMax?<p className="mt"><IoBarChartSharp/> Campaigns</p>:<IoBarChartSharp className="icon mt"/>}
            </Link>
            <br/>
            <Link to="not-found">
            {isMax?<p className="mt"><LuPanelTopOpen/> Popup</p>:<LuPanelTopOpen className="icon mt"/>}
            </Link>
            <br/>
            <Link to="not-found">
            {isMax?<p className="mt"><BsChatDotsFill/> Live Chat</p>:<BsChatDotsFill className="icon mt"/>}
            </Link>
            <br/>
            <Link to="not-found">

            {isMax?<p className="mt"><PiLineSegmentsFill/> Segments</p>:<PiLineSegmentsFill className="icon mt"/>}
            </Link>
            <br/>
            <Link to="not-found">

            {isMax?<p className="mt"><GrIntegration/> Integrations</p>:<GrIntegration className="icon mt"/>} 
            </Link>
        </div>
        {isMax?
        <div className="navProfileContainer">
            <img className="navproImg" src="https://i.pinimg.com/564x/03/03/ad/0303ad655df2371ffa7c3699b012307b.jpg"/>      
            <div>
                <h5>Oğuz Yağiz Kara</h5>
                <p className="Title">Store Name</p>
            </div>
        </div>:<img className="navproImg" src="https://i.pinimg.com/564x/03/03/ad/0303ad655df2371ffa7c3699b012307b.jpg"/>      
}    
    </div>
)}

export default Sidebar