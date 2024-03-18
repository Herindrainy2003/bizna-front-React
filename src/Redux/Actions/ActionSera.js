import  axios  from "axios"
export const createSera = (nameSera , price ,description ,contact , category ,nameFacebook ,image )=>(async(dispatch)=>{
    try{
        dispatch({ type : 'ADD_SERA' })
        
        const {data} = await axios.post('/api/sera/addsera' , {nameSera , price ,description ,contact , category ,nameFacebook ,image} , {headers: {'Content-Type': 'multipart/form-data'}})
       
        dispatch({type : 'ADD_SERA_SUCCES' , payload : data})
   
    }catch(error){
        const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      
      dispatch({
        type: "ADD_SERA_FAIL",
        payload: message,
      });
    }
})


//afficher tous le sera
export const  allSera = () => async(dispatch)=>{
    try{

        dispatch({Loading : true ,type : 'ALL_SERA'})

        const {data} = await axios.get('/api/sera')
          dispatch({type : "ALL_SERA_SUCCES" , payload : data})
    }catch(error){
        const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
     
      dispatch({
        type: "ALL_SERA_FAIL",
        payload: message,
      });
    }
}