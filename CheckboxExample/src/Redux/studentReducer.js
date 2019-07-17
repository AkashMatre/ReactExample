 const studentReducer = (state = {} , action) => {

    console.log("inn stud reducer")

    const stuarry =[{id:1,name:"pinu"},{id:2,name:"ishu"},{id:3,name:"itansha"}]

    if(action.type === 'STUD_DATA')
    {
        return{
            ...state,
            studdata:stuarry
        }
    }

    return state;

}
export default studentReducer;