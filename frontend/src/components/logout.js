import React, { useContext} from 'react'
import { Redirect } from 'react-router-dom'
import {UserContext} from '../App'
import DialogueLgo from './DialogueLgo'
// import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/alert'
// import { Box } from '@chakra-ui/react'
const Logout = () => { // export function from module 
    var session=sessionStorage.getItem('token')
//    const {state,dispatch} = useContext(UserContext)

    console.log(session)
   
    if(session!==null){
        
        // return(
        //     <div>
        //     <DialogueLgo>
        //         You have been Logged Out
        //      </DialogueLgo>
        sessionStorage.clear();
        window.location.reload()
        //  </div>
        // )
        //  dispatch({type:"USER", payload:false})
       
        // alert("You have been logged Out")
        // <Box>
       
        
        // <Alert
        //     status='warning'
        //     variant='subtle'
        //     flexDirection='column'
        //     alignItems='center'
        //     justifyContent='center'
        //     textAlign='center'
        //     height='200px'
        //     >
        //     <AlertIcon boxSize='40px' mr={0} />
        //     <AlertTitle mt={4} mb={1} fontSize='lg'>
        //         Application submitted!
        //     </AlertTitle>
        //     <AlertDescription maxWidth='sm'>
        //         Thanks for submitting your application. Our team will get back to you soon.
        //     </AlertDescription>
        // </Alert>
        // </Box>
        
       
        
    }
    else{
        alert("Please Login First")
      
    }
    
  }
  export default Logout
  