import React from 'react'

const  WithLoading = (Component,request) => {
    return function LoadingComponent (props){
        const [loading, setLoading] = React.useState(true);
        const [response,setResponse] = React.useState([]);

        request.then((response) => {
            setResponse(response);
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setLoading(false);

        })

        return loading ? <div>Loading ...</div> : <Component response={response} {...props} />   
    }
}
export default WithLoading;