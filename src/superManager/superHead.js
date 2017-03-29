// /**
//  * Created by Administrator on 2017/2/17 0017.
//  */
import React, { Component, PropTypes } from 'react';
import '../studentManager/studentManager.css';
import '../superManager/super.css';
import set from '../studentManager/set.png';
import back from '../studentManager/back.png';
 import {super_change} from './actions.js';
export default class superHead extends Component {
    constructor(props) {
        super(props);
       
    }
    changeSet(text){
         this.props.dispatch(super_change(text))
    }
    render() {
    
        return (
            <div className="head">
                <label className="logo">数字媒体学院</label>
                <label className="year-circle">数字媒体学院：
                    <span style={{marginLeft:"17px"}}>{this.props.data.gname}</span>
                    <span style={{margin:"auto 25px",color:"#6d6221"}}>|</span>

                    <select className="super-teaching-circle" defaultValue={this.props.data.name}>
                        <option value="第一教学周期">第一教学周期</option>
                        <option value="第二教学周期">第二教学周期</option>
                        <option value="第三教学周期">第三教学周期</option>
                        <option value="第四教学周期">第四教学周期</option>
                        <option value="第五教学周期">第五教学周期</option>
                        <option value="第六教学周期">第六教学周期</option>
                        <option value="第七教学周期">第七教学周期</option>
                        <option value="第八教学周期">第八教学周期</option>
                        <option value="第九教学周期">第九教学周期</option>
                        <option value="第十教学周期">第十教学周期</option>
                    </select>
                </label>
                <label className="teacher-label">
                    {
                        this.props.data.set==1?<img src={set} onClick={()=>this.changeSet(3)} style={{marginRight:"23px",marginLeft:"80px",
                    marginTop:"25px",float:"right",cursor:"pointer"}}/>:<img onClick={()=>this.changeSet(1)} src={back} style={{marginRight:"23px",marginLeft:"80px",
                    marginTop:"25px",float:"right",cursor:"pointer"}}/>
                    }

                </label>
            </div>
        )
    }
}
