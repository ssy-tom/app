/**
 * Created by Administrator on 2017/2/27 0027.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom'
// import 'antd/dist/antd.css';
import './super.css';
import { DatePicker } from 'antd';
import moment from 'moment';

import {setMask, addStudent,updateStudent} from '../studentManager/actions'
export default class confirm extends Component {
    constructor(props) {
        super(props);

        this.cancel = this.cancel.bind(this);
        this.changeScore = this.changeScore.bind(this);
        this.disabledButton = this.disabledButton.bind(this);

        this.state = {
            changeName: this.props.mask.value.sname,
            changeClass: this.props.class,
            changeStudentId: this.props.mask.value.sno,
            changeSex: this.props.mask.value.sex,
            changeId: this.props.mask.value.identity,
            changeBirth: this.props.mask.value.birthday,
            changeComeSchool: this.props.mask.value.beginsDate,
            changeTime: this.props.mask.value.term,
            changeMarket: this.props.mask.value.market,
            isdisabled:false
        }
    }
    render() {
        // console.log(moment(this.state.changeComeSchool, 'YYYY-MM-DD').dates())
        return (

            <div className="popup" style={{height:"650px"}}>
                <p>学生基本信息</p>
                <form action="">

                    <label htmlFor="">
                        <div className="label_div">姓名</div>
                        <input type="text"
                               defaultValue={this.props.mask.value.sname}
                               ref="param1"/>
                    </label>
                    <label htmlFor="">
                        <div className="label_div">班级</div>
                        <select name=""
                                defaultValue={this.state.changeClass} ref="param2">
                            {this.props.gradeList.map((obj, index)=>
                                <option value={obj.id} key={index}>{obj.gname}</option>)}
                            <option value="开除">开除</option>
                            <option value="休学">休学</option>
                            <option value="毕业">毕业</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        <div className="label_div">学号</div>
                        <input type="text"  defaultValue={this.props.mask.value.sno} ref="param3" onChange={this.check} id="sno"/>
                    </label>
                    <label htmlFor="">
                        <div className="label_div">性别</div>
                        <select name="" id="" defaultValue={this.props.mask.value.sex} ref="param4">
                            <option value="girl" value="1">女</option>
                            <option value="boy" value="2">男</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        <div className="label_div">身份证</div>
                        <input type="text" onChange={this.check} id="id_card" defaultValue={this.state.changeId} ref="param5"/>
                    </label>

                    <label htmlFor="">
                        <div className="label_div">出生日期</div>
                        <DatePicker defaultValue={moment(this.state.changeBirth, 'YYYY-MM-DD').dates()?moment(this.state.changeBirth, 'YYYY-MM-DD'):null}
                                    showToday={false}
                                    showTime={false}
                                    style={{height:"40px",backgroudColor:"#F3E275",width:"167px"}}
                                    size="large"
                                    ref="param6"/>

                        {/* <input type="text" defaultValue={this.state.changeBirth} ref="param6"/>*/}
                    </label>
                    {/*  <label htmlFor="">
                        <div className="label_div">入学日期</div>
                        <input type="text" defaultValue={this.state.changeComeSchool} ref="param7"/>
                    </label>*/}


                    <label >
                        <div className="label_div">入学日期</div>
                        <DatePicker defaultValue={moment(this.state.changeComeSchool, 'YYYY-MM-DD').dates()?moment(this.state.changeComeSchool, 'YYYY-MM-DD'):null}
                                    showToday={false}
                                    showTime={false}
                                    style={{height:"40px",backgroudColor:"#F3E275",width:"167px"}}
                                    size="large"
                                    ref="param7"/>
                    </label>

                    <label htmlFor="">
                        <div className="label_div">学制</div>
                        <select name="" id="" defaultValue={this.state.changeTime} ref="param8">
                            <option  value="一年">一年</option>
                            <option  value="两年">两年</option>
                            <option  value="三年">三年</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        <div className="label_div">市场部</div>
                        <select name="" id="" defaultValue={this.state.changeMarket} ref="param9">
                            <option  value="鲁东">鲁东</option>
                            <option  value="鲁西">鲁西</option>
                            <option  value="冀中">冀中</option>
                            <option  value="邢台">邢台</option>
                            <option  value="直一">直一</option>
                            <option  value="直二">直二</option>
                            <option  value="晋南">晋南</option>
                            <option  value="豫中">豫中</option>
                            <option  value="网络部">网络部</option>
                            <option  value="张院">张院</option>
                            <option  value="运营一部">运营一部</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        <div className="label_div">操作</div>
                        <select name="" id="" defaultValue={this.state.changeMarket} ref="param10">
                            <option value="girl" value="1">保留</option>
                            <option value="boy" value="2">休学</option>
                            <option value="boy" value="3">毕业</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        <div className="close"
                             onClick={this.cancel}
                             disabled={this.state.isdisabled}
                        >取消</div>
                        <input type="button"
                               style={
                               { paddingLeft:0,
                               cursor: "pointer",
                               backgroundColor:this.state.isdisabled?"#9796a0":""}
                               }
                               value="确定"
                               onClick={()=>this.changeScore(this.props.mask.operation)}
                               disabled={this.state.isdisabled}
                        />
                    </label>
                </form>
            </div>
     
        )
    }
    date(){
        alert(123)
    }
    cancel() {
        this.props.dispatch(setMask(false))
    }
   disabledButton(value){
       this.setState({
           isdisabled:value
       })
   }
    changeScore(type) {
        this.disabledButton(true);
        // console.log(ReactDOM.findDOMNode(this.refs.param7).children[0].children[0].value);
        let changeName = ReactDOM.findDOMNode(this.refs.param1).value;
        let changeClass = ReactDOM.findDOMNode(this.refs.param2).value;
        let changeStudentId = ReactDOM.findDOMNode(this.refs.param3).value;
        let changeSex = ReactDOM.findDOMNode(this.refs.param4).value;
        let changeId = ReactDOM.findDOMNode(this.refs.param5).value;
        let changeBirth = ReactDOM.findDOMNode(this.refs.param6).children[0].children[0].value;
        let changeComeSchool = ReactDOM.findDOMNode(this.refs.param7).children[0].children[0].value;
        let changeTime = ReactDOM.findDOMNode(this.refs.param8).value;
        let changeMarket = ReactDOM.findDOMNode(this.refs.param9).value;
        let status = ReactDOM.findDOMNode(this.refs.param10).value;
        //添加
        if(changeStudentId.length!=8){
            alert("请检查学号");
            return;
        }
        if(changeId.length!=18){
            alert("请确认身份证号");
            return;
        }
        
        if(type=="create") {

            if (changeName && changeClass && changeStudentId && changeSex && changeId && changeBirth && changeComeSchool && changeTime && changeMarket) {
                fetch(`${this.props.url}/cms/student/create.do?sname=${changeName}&pid=${changeClass}&sno=${changeStudentId}&identity=${changeId}&sex=${changeSex}&beginsDate=${changeComeSchool}&term=${changeTime}&market=${changeMarket}&birthday=${changeBirth}&status=${status}`)
                    .then(response=>response.json())
                    .then(json=> {
                        this.props.dispatch(addStudent({
                            id:json.id,
                            sname: changeName,
                            pid: changeClass,
                            sno: changeStudentId,
                            sex: changeSex,
                            identity: changeId,
                            birthday: changeBirth,
                            beginsDate: changeComeSchool,
                            term: changeTime,
                            market: changeMarket,
                            status: status,
                            score:10000
                        }));
                        this.props.dispatch(setMask(false));
                    },err=>{
                        alert("添加失败");
                        this.props.dispatch(setMask(false));
                    });

            } else {
                alert("添加信息不全，请检查添加信息")
            }
        }
        //更新
        else if(type=="update"){
            if (changeName && changeClass && changeStudentId && changeSex && changeId && changeBirth && changeComeSchool && changeTime && changeMarket) {
                fetch(`${this.props.url}/cms/student/update.do?`,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body:`id=${this.props.mask.value.id}&sname=${changeName}&pid=${changeClass}&sno=${changeStudentId}&identity=${changeId}&sex=${changeSex}&beginsDate=${changeComeSchool}&term=${changeTime}&market=${changeMarket}&birthday=${changeBirth}&status=${status}`
                })
                    .then(response=>response.json())
                    .then(json=> {
                        this.props.dispatch(updateStudent([this.props.mask.index,{
                            sname: changeName,
                            pid: changeClass,
                            sno: changeStudentId,
                            sex: changeSex,
                            identity: changeId,
                            birthday: changeBirth,
                            beginsDate: changeComeSchool,
                            term: changeTime,
                            market: changeMarket,
                            status: status
                        },(changeClass==this.props.class)]));
                        this.props.dispatch(setMask(false))
                    })
                    .catch(err=>{
                        alert("出错了");
                        this.props.dispatch(setMask(false));
                    });
            }
                else {
                alert("添加信息不全，请检查添加信息")
            }
        }
    }
    check(event){


            switch(event.target.id)
            {
            case "sno":
               if(event.target.value.length>8){
                   event.target.value=event.target.value.slice(0,8);
                   // event.target.style.border="1px solid red"
               }else if(event.target.value.length<8){
                   event.target.style.border="1px solid red"
               }else{
                   event.target.style.border=""
               }

                break;
            case "id_card":
                if(event.target.value.length>18){
                    event.target.value=event.target.value.slice(0,18);
                    // event.target.style.border="1px solid red"
                }else if(event.target.value.length<18){
                    event.target.style.border="1px solid red"
                }else{
                    event.target.style.border=""
                }
                break;
            default:

            }
    }
}