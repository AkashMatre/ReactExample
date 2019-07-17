const initialState = {
    username:'akash',
    password:'matre'
}
const arr = [{name:"akash", lastname:"matre"},{name:"anup", lastname:"tiwari"},{name:"hemant", lastname:"wedpathak"}];
const stuarry =[{id:1,name:"pinu"},{id:2,name:"ishu"},{id:3,name:"itansha"}];
const actorarr = [{id:1 , name:"Salman"},{id:2 , name:"Amir"},{id:3 , name:"Shahrukh"}]
//const arr = ["akash" , "matre"];
const loginreducer = (state = {} , action) => {

    if(action.type === 'LOGIN'){
        console.log(action.val , 'reducer')
        return {
            ...state,
           name : arr
        }
    }
    else if(action.type === 'GET_EMP_DTA')
    {
        console.log("in reducer")
        return{
            ...state,
            empdta : arr
        }
      
    } 
    else if(action.type === 'STUD_DATA')
    {
        return{
            ...state,
            studdata:stuarry
        }
    }
    else if(action.type === 'ACTOR_DATA')
    {
        return{
            ...state,
            actorarr:actorarr
        }
    }
    else if(action.type === 'SAVE_EMP')
    {
        arr.push(action.payload);
        console.log(action.payload , 'payload');
        return{
            ...state,
           
            empdta:arr
        }
    }
    else if(action.type === 'UPDT_EMP')
    {
        console.log(action.payload , 'payload update' , action.key);
         arr[action.key].name = "Rupali";
        console.log(arr[action.key].name , 'test')
        return{
            ...state,
            
           
            empdta:arr
        }
    }
    else if(action.type === 'DEL_EMP')
    {
        console.log(action.payload , 'payload update' , action.key);
         arr.splice(action.key,1)
        console.log(arr[action.key].name , 'test')
        return{
            ...state,
            
           
            empdta:arr
        }
    }
    else if(action.type === 'UPDT_ON_CHK')
    {
        console.log(action.payload , 'payload update' , action.key);
        //  arr.splice(action.key,1)
        // console.log(arr[action.key].name , 'test')
        return{
            ...state,
            
           
            empdta:arr
        }
    }
    
    else{
        return state;
    }
}

export default loginreducer;