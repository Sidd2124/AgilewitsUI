import Cookies from 'js-cookie'
const Jobs =()=>{
   

    const JobList = async () => {
        try {
            
            const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9. nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
            Cookies.set("jwt_token", Token);

            
            const jwtToken = Cookies.get('jwt_token')
            console.log(jwtToken)
            const URL = 'https://apis.ccbp.in/jobs';
            const options = {
                headers: {
                 
                  Authorization: `Bearer ${Token}`,
                },
                method: 'GET',
              }
    
            const response = await fetch(URL,options);
          
    
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    

    return(
        <div>
            <h1>Sidd</h1>
            <button onClick={JobList}>GetJobs</button>
            
        </div>
    )
}



export default Jobs