/**
 * Created by Administrator on 2017/2/27 0027.
 */
import React, {Component, PropTypes} from 'react';
import './super.css';
import ReactDOM from 'react-dom'
import {addReduceScore} from '../containers/actions'
import {setMask, addClass, updateClass} from '../superManager/actions'
export default class formMask extends Component {
    constructor(props) {
        super(props);
        this.changeScore = this.changeScore.bind(this);
        this.cancel = this.cancel.bind(this);
        this.disabledButton = this.disabledButton.bind(this);
        this.state={
            value:false
        }
    }
    render() {
        return (
            <div className="popup" style={{height:"400px"}}>
                <p>班级基本信息</p>
                <form action="">
                    <label htmlFor="">
                        <div className="label_div">班级</div>
                        <input type="text" defaultValue={this.props.mask.value.gname} ref="param1"/>
                    </label>

                    <label htmlFor="">
                        <div className="label_div">课程</div>
                        <select name="" id="" defaultValue={this.props.mask.value.course} ref="param2">
                            {this.props.data[0].map((obj, index)=>
                                <option value="boy" key={index} value={obj.cname}>{obj.cname}</option>
                            )}

                        </select>
                    </label>
                    <label htmlFor="">
                        <div className="label_div">任课老师</div>
                        <select name="" id="" defaultValue={this.props.mask.value.teacher} ref="param3">
                            {this.props.data[1].map((obj, index)=> {
                                    if (obj.type == 1) {
                                        return <option value="boy" key={index} value={obj.tname}>{obj.tname}</option>
                                    }
                                }
                            )}
                        </select>
                    </label>
                    <label htmlFor="">
                        <div className="label_div">班主任</div>
                        <select name="" id="" defaultValue={this.props.mask.value.header} ref="param4">
                            {this.props.data[1].map((obj, index)=> {
                                    if (obj.type == 2) {
                                        return <option value="boy" key={index} value={obj.tname}>{obj.tname}</option>
                                    }
                                }
                            )}
                        </select>
                    </label>
                    <label htmlFor="">
                        <div className="label_div">班级状态</div>
                        <select name="" id="" defaultValue={this.props.mask.gstatus} ref="param5">
                            <option value="1">正常</option>
                            <option value="2">毕业</option>
                        </select>
                    </label>

                    <label htmlFor="">
                        <div className="close"
                             onClick={this.cancel}
                             style={
                               {
                               cursor: "pointer",
                               backgroundColor:this.state.isdisabled?"#9796a0":""}
                               }
                        >取消</div>
                        <input type="button"
                               value="确定"
                               onClick={this.changeScore}
                               style={
                               {
                               paddingLeft:0,
                               cursor: "pointer",
                               backgroundColor:this.state.isdisabled?"#9796a0":""}
                               }
                        />
                    </label>
                </form>
            </div>
        )
    }
    disabledButton(value){
        this.setState({
            isdisabled:value
        })
    }
    cancel() {
        this.props.dispatch(setMask(false))
    }

    changeScore() {
        this.disabledButton(true);
        let className = ReactDOM.findDOMNode(this.refs.param1).value;
        let course = ReactDOM.findDOMNode(this.refs.param2).value;
        let teacher = ReactDOM.findDOMNode(this.refs.param3).value;
        let Headmaster = ReactDOM.findDOMNode(this.refs.param4).value;
        let classStatus = ReactDOM.findDOMNode(this.refs.param5).value;
        if (this.props.mask.value=="+") {
            //添加
            fetch(`${this.props.url}/cms/grade/create.do?`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `gname=${className}&course=${course}&teacher=${teacher}&header=${Headmaster}&gstatus=${classStatus}&officeType=${this.props.officeType}`
            }).then(response=>response.json())
                .then(json=> {
                   
                    this.props.dispatch(addClass({
                        gname: className,
                        course: course,
                        teacher: teacher,
                        header: Headmaster,
                        gstatus: classStatus,
                        id:json.id,
                        list: []
                    }));
                    this.props.dispatch(setMask(false))
                }).catch(err=>{
                alert("添加班级失败");
                this.props.dispatch(setMask(false))
            });

        } else {
            //更新
           
            fetch(`${this.props.url}/cms/grade/update.do`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `id=${this.props.mask.value.id}&gname=${className}&course=${course}&teacher=${teacher}&header=${Headmaster}&gstatus=${classStatus}&officeType=${this.props.officeType}`
            }).then(response=>response.json())
                .then(json=> {
                    this.props.dispatch(updateClass({
                        id:this.props.mask.value.id,
                        gname: className,
                        course: course,
                        teacher: teacher,
                        header: Headmaster,
                        gstatus: classStatus
                    }));
                    
                    this.props.dispatch(setMask(false))
                }).catch(err=>{
                alert("更新班级失败");
                this.props.dispatch(setMask(false))
            });
        }

        //     // this.props.dispatch(addReduceScore({index: this.props.mask.index,value: this.props.mask.value.score}));
        //     // this.props.dispatch(setMask(false))
    }
}

// <option value="3">危险</option>