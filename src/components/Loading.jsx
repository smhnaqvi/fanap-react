import React from 'react'
import LinearProgress  from "@material-ui/core/LinearProgress"

const  WithLoading = (Component,request) => {
    return function LoadingComponent (props){
        const [loading, setLoading] = React.useState(true);
        const [response,setResponse] = React.useState([]);

        if (request){
            request.then((response) => {
                setResponse(response);
                setLoading(false);
            }).catch(error => {
                console.log(error);
                setLoading(false);
            })
        }

        return loading ? <LinearProgress color="primary" /> : <Component response={response} {...props} />   
    }
}
export default WithLoading;