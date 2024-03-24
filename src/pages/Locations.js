import { useNavigate, useOutlet } from "react-router-dom";
function Locations(){


    const navigate = useNavigate();
    

    const handleBack = ()=>{
        navigate(-1)
    }


    return(
        <div>
              <h1>Locations</h1> 
              {/* <Outlet /> */}
 
              <button 
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" 
                type="submit"
                onClick={handleBack}>Back</button>    
        </div>
    )
}
export default Locations