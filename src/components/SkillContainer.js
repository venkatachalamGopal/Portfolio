import "../styles/skillContainer.css";
import { LinearProgress } from "@mui/material";

const SkillContainer = () => {
  return (
    <div className="skillContainer">
        <div className="skillContainer-image">
            <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        </div>
       
        <div className="skillContainer-text">
            <h2>SKILLSET</h2>
            <div className="skillContainer-skillset">
                <h5>HTML & CSS</h5>
                <div className="skillContainer-bar">
                    <LinearProgress variant="determinate" value={10}/>
                </div>
            </div>
            <div className="skillContainer-skillset">
                <h5>BOOTSTARP</h5>
                <div className="skillContainer-bar">
                    <LinearProgress variant="determinate" value={30}/>
                </div>
            </div>
            <div className="skillContainer-skillset">
                <h5>JAVASCRIPT</h5>
                <div className="skillContainer-bar">
                    <LinearProgress variant="determinate" value={50}/>
                </div>
            </div>
            <div className="skillContainer-skillset">
                <h5>REACT & REDUX</h5>
                <div className="skillContainer-bar">
                    <LinearProgress variant="determinate" value={65}/>
                </div>
            </div>
            <div className="skillContainer-skillset">
                <h5>MONGODB</h5>
                <div className="skillContainer-bar">
                    <LinearProgress variant="determinate" value={75}/>
                </div>
            </div>
            <div className="skillContainer-skillset">
                <h5>NODE JS</h5>
                <div className="skillContainer-bar">
                    <LinearProgress variant="determinate" value={85}/>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default SkillContainer
