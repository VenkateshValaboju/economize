import "./index.css"

const QuickLookBox=(props)=>{
    const {boxDetails}=props
    const {title,percent,body,last}=boxDetails
    return(
    <div className="QuickBox">
        <div className="QuickBoxRow">
            <p className="Title">{title}</p>
            {percent==="-3.4%"?<div className="percentBox red">
                <p>{percent}</p>
            </div>:<div className="percentBox green">
                <p>{percent}</p>
            </div>}
            
        </div>
        <h1 className="body">{body}</h1>
        <p className="Title">{last}</p>
    </div>
)}

export default QuickLookBox