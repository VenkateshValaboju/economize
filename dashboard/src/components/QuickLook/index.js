import QuickLookBox from "../QuickLookBox"
import "./index.css"

const QuickLook=()=>{
    const QuickLookList=[{
        id:1,
        title:"Total Revenue",
        percent:"+12.5%",
        body:"$32,621.72",
        last:"433 Orders"
    },{
        id:2,
        title:"Subscribers",
        percent:"+32.5%",
        body:"404,205",
        last:"$56 Average Order"
    },{
        id:3,
        title:"Conversations",
        percent:"-3.4%",
        body:"552,553",
        last:"5min Average Response Time"
    },{
        id:4,
        title:"Popup Conversation Rate",
        percent:"+32.5%",
        body:"25%",
        last:"5% Sales Conversion Rate"
    }]
    return (
    <div className="QuickLookContainer">
        {QuickLookList.map((eachItem)=>(
            <QuickLookBox key={eachItem.id} boxDetails={eachItem}/>
        ))
}
    </div>
)}

export default QuickLook