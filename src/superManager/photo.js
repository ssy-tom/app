/**
 * Created by Administrator on 2017/2/17 0017.
 */
import React, { Component, PropTypes } from 'react';
import '../studentManager/studentManager.css';
import '../components/super.css';
import {hashHistory} from 'react-router';
export default class photo extends Component {
    constructor(props){
        super(props);
        this.exitThisPage=this.exitThisPage.bind(this);
    }
    render() {
        let time=new Date();
        return (
            <div className="left-photo-size">
                <div className="head-portrait"></div>
                <div className="massage-box">
                    <p className="exit" onClick={this.exitThisPage}>{ this.props.officeType==1?"web教研室":"ui教研室"}</p>
                    <p>班级总数:{this.props.classNum}</p>
                    <p style={{fontSize:"12px"}}>{`${time.getYear()+1900}年${time.getMonth()+1}月${time.getDate()}日`}</p>

                </div>

            </div>
        )
    }
    exitThisPage(){

        localStorage.clear();
        hashHistory.push("/");
    }
}