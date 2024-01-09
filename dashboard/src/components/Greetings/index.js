import "./index.css"

const Greetings=()=>{
    const Today=new Date()
    const date=Today.getDate()
    const month=Today.toLocaleString("default", {month:'short'})
    const year=Today.getFullYear()
    return (
    <div className="greetingsContainer">
        <div className="greetBox1">
            <img className="profileImage" src="https://i.pinimg.com/564x/03/03/ad/0303ad655df2371ffa7c3699b012307b.jpg"/>
            <div>
                <h1 className="greetings">Good Morning Oguz</h1>
                <p className="Title">Here are your stats for Today, {date} {month} {year}</p>
            </div>
        </div>
    </div>
)}

export default Greetings