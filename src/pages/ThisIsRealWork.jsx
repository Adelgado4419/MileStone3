import workmode from "../assets/workmode.png"
import '../css/workmode.css'


function ThisIsRealWork() {

return (
    <div className="work_mode">
        <a href ="/">
            <img src={workmode}/>
        </a>
    </div>
);
}

export default ThisIsRealWork;