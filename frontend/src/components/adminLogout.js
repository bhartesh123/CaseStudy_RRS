
const Logout = () => { // export function from module 
    var session=sessionStorage.getItem('token')
//    const {state,dispatch} = useContext(UserContext)
   
    console.log(session)
    if(session!==null){
        
        //  dispatch({type:"USER", payload:false})
        sessionStorage.clear();
        // alert("Admin has been logged Out")
        // window.location.reload()
       
        
    }
    else{
        alert("Please Login First")
      
    }
    
  }
  export default Logout
  