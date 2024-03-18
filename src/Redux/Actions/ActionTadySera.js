import  axios  from "axios"


export const TadySera = (nameSera , price ,description ,contact , category ,nameFacebook ,image )=>(async(dispatch)=>{
    try{
        dispatch({ type : 'HITADY_SERA' })
        
        const {data} = await axios.post('/api/hitadySera/hitadySera' , {nameSera , price ,description ,contact , category ,nameFacebook ,image} , {headers: {'Content-Type': 'multipart/form-data'}})
       
        dispatch({type : 'ADD_SERATADIAVINA_SUCCES' , payload : data})
   
    }catch(error){
        const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      
      dispatch({
        type: "ADD_SERATADIAVIANA_FAIL",
        payload: message,
      });
    }
})


//afficher tous le sera
export const  SeraMisyMitady = () => async(dispatch)=>{
    try{

        dispatch({Loading : true ,type : 'ALL_SERATADIAVINA'})

        const {data} = await axios.get('/api/hitadySera')
        
          dispatch({type : "ALL_SERATADIAVINA_SUCCES" , payload : data})
    }catch(error){
        const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
     
      dispatch({
        type: "ALL_SERATADIAVINA_FAIL",
        payload: message,
      });
    }
}
