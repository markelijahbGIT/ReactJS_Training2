import { useNavigate, useOutlet } from "react-router-dom";
function Users(){


    const navigate = useNavigate();
    
    

    const handleBack = ()=>{
        navigate(-1)
    }


    return(
        <div>
            <button 
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" 
               
                onClick={handleBack}>Back</button>

              <h1>Users</h1> 
              <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    First name
                </th>
                <th scope="col" className="px-6 py-3">
                    Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Birthday
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Fname 
                </th>
                <td className="px-6 py-4">
                    Lname
                </td>
                <td className="px-6 py-4">
                    Loc
                </td>
                <td className="px-6 py-4">
                    Bday
                </td>
            </tr>
            
          
        </tbody>
    </table>
</div>
 
                  
        </div>
    )
}
export default Users