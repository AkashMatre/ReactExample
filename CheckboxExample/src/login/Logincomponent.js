import React , {Component} from 'react'; 
import {Link} from 'react-router-dom';
import loginreducer from './../Redux/loginReducer';
import { connect } from 'react-redux';
import { type , data , data1 , onloadEmpDta} from './../Redux/loginAction';
import studentReducer from './../Redux/studentReducer';
import StudentComponent from './studentComponent';
import ActorComponent from './actorComponent';

class Login extends Component{
    
    constructor(props) {
        console.log("in constructore")
        super(props);
        this.state = {
            empfinalarr:[],
            svearr:[],
            empid:'',
            empname:'',
            checkboxdta:[],
            oncheck:false,
            ischecked:"",
            allchkarr:[],
        };    
    }
componentDidMount(){
     this.props.getEmpDta();
     }
getdta = () =>{
}
getempdtaonclick = (e) =>{
    this.props.getEmpDta();
    this.setState({
        empfinalarr : this.props.empdta
    });
}
getstudata = () =>{
    this.props.getstudata();
}
getempid = (e) =>
{
this.setState({
    empid:e.target.value
})
}
getempname = (e) =>
{
this.setState({
    empname:e.target.value
})
}
saveEmpdta = () =>{
    this.state.svearr.push({"name":this.state.empname});
    return this.props.saveEmpdta({"name":this.state.empname});
}
updateEmp = (data , index) => {
}
checkchange = (e ,data , index) =>{

    console.log(document.getElementById("chk" + index).checked ,' done ')
    this.setState({
        ischecked: !this.state.ischecked
    })
        console.log(e.target.checked);
        if(e.target.checked){
            this.state.checkboxdta.push(data);
        }
        else{
            for(let i=0 ; i<this.state.checkboxdta.length; i++)
                {
                    if(this.state.checkboxdta[i].name===data.name)
                    this.state.checkboxdta.splice(i,1);
                }
           }
     console.log(this.state.checkboxdta , 'chk dta');
}
allchecked (e,data)
{
    console.log(e.target.checked , '!@#');
    this.state.checkboxdta = [];
    data.map((data,key) => {
        if(e.target.checked)
        {
            document.getElementById("chk" + key).checked = true;
            if(document.getElementById("chk" + key).checked){
                this.state.checkboxdta.push(data)
            }
        }
        else{
            document.getElementById("chk" + key).checked = false;
        }
        
    })
}
    render(){
        return(
            <div className="col-md-6 col-md-offset-3">
                <h2>Data Page </h2>
                <div>
                {this.state.empfinalarr.map((category, key) =>(
                    <span key={key}>{category.name}</span>
                ))}
                </div>
                    <div>
                        <button  onClick={(e) => this.getempdtaonclick(e)}>Employee Data</button>
                        <button onClick={this.getstudata}>Student Data</button>
                        <button onClick={this.props.getActrDta}>Actors Data</button>
                    </div>
                    <div>
                        <table className="">
                            <thead>
                                <th><input type="checkbox" id="myCheck"  onChange={(e) => this.allchecked(e, this.props.empdta)} /></th>
                                <th>Sr No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th></th>
                                <th></th>
                            </thead>
                            <tbody>
                                {this.props.empdta.map((items, key) =>(
                                    <tr>
                                        <td><input   type="checkbox" id={"chk" + key} onChange ={(e) => this.checkchange(e,items , key)}></input></td>
                                        <td>{key}</td>
                                        <td>{items.name}</td>
                                        <td>{items.lastname}</td>
                                        <td><button id={ "btn" + key } onClick={this.props.updateEmp.bind(this,items , key)}>update</button></td>
                                        <td><button id={"dltbut" + key}  onClick={this.props.deleteEmp.bind(this, items , key)}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div>
                            Enter Id : <input type="text" onChange={(e) => this.getempid(e)}></input> 
                            Enter Name :<input type="text" onChange={(e)=> this.getempname(e)}></input>
                            <button onClick={this.saveEmpdta}>Save Data</button>
                        </div>
                    </div>
                    {this.props.studta.length !== 0 ? <StudentComponent studta = {this.props.studta}/> : ''}
                    {this.props.actorarr.length !== 0 ? <ActorComponent actorarr = {this.props.actorarr}/> : ''}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    empdta : state.empdta || [],
    studta :state.studdata || [],
    actorarr : state.actorarr || []
});

const mapDispatchToProps = dispatch => {
    return{
        login:(obj) => dispatch({type:'LOGIN' , val:obj}),
       getEmpDta : () => dispatch({type:"GET_EMP_DTA"}),
       getstudata:() => dispatch({type:"STUD_DATA"}),
       getActrDta: () => dispatch({type:"ACTOR_DATA"}),
       saveEmpdta: (arrobj) => dispatch({type:"SAVE_EMP" , payload :arrobj}),
       updateEmp: (data , key) => dispatch({type:"UPDT_EMP" , payload:data , key:key}),
       deleteEmp : (data , key) => dispatch({type:"DEL_EMP" , payload:data , key:key}),
       updtoncheckbox: (data) => dispatch({type:"UPDT_ON_CHK" ,payload:data})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);