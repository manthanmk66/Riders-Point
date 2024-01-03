import {react} from "react";
import { useNavigate } from "react-router-dom";


const Riders=()=>{
    const navigate=useNavigate();


    function changehandler(){
        navigate("/about");
    
    }
    
    return(
        <div>
        <div>
            This is Riders Page
        </div>

        <button onClick={changehandler}>Redirect to About Page</button>
        </div>

    )
}

export default Riders;