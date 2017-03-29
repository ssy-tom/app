// /**
//  * Created by Administrator on 2017/2/17 0017.
//  */
import React, { Component, PropTypes } from 'react';
import './studentManager.css';
import set from './set.png';
import back from './back.png';
import {change_set} from './actions.js';
export default class title extends Component {
    constructor(props) {
        super(props);
        // this.clickButton = this.clickButton.bind(this);
        this.state = {
            "years": this.props.data.updateTime.slice(0,4),
            "cycle": this.props.data.name,
            "class": this.props.data.gname,
            "teacher1": this.props.data.teacher,
            "teacher2": this.props.data.header
        };
    }
    changeSet(text){
        // alert(123);
        this.props.dispatch(change_set(text))
    }
    render() {
        return (
            <div className="head">
                <label className="logo">数字媒体学院</label>
                <label className="year-circle">{this.state.years+"年"}
                    <span style={{marginLeft:"17px"}}>{this.state.cycle}</span>
                    <span style={{margin:"auto 25px",color:"#6d6221"}}>|</span>
                    {this.state.class}
                </label>
                <label className="teacher-label">任课老师：{this.state.teacher1}
                    <span style={{margin:"auto 25px",color:"#6d6221"}}>|</span>
                    班主任：{this.state.teacher2}
                    {
                        (!this.props.isStudent)?(this.props.data.set==1?<img src={set} onClick={()=>this.changeSet(2)} style={{marginRight:"23px",marginLeft:"80px",
                    marginTop:"25px",float:"right",cursor:"pointer"}}/>:<img onClick={()=>this.changeSet(1)} src={back} style={{marginRight:"23px",marginLeft:"80px",
                    marginTop:"25px",float:"right",cursor:"pointer"}}/>):<div style={{marginRight:"23px",marginLeft:"80px",
                    marginTop:"25px",float:"right",cursor:"pointer",display:"inline"}}></div>

                    }

                </label>

            </div>
        )
    }
}

