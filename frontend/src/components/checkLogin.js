const Logout = (userToken) => { // export function from module 
    var session=sessionStorage.getItem(userData.token)
    if(session!==null){
        
        alert("You have are logged in")
        this.history.push('/')
    }
    else{
        alert("Please Login First")
    }
    
  }
  export default Logout