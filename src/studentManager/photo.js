/**
 * Created by Administrator on 2017/2/17 0017.
 */
import React, { Component, PropTypes } from 'react';
import './studentManager.css';
import '../components/super.css';
import {hashHistory} from 'react-router';
export default class photo extends Component {
    constructor(props){
        super(props);
        this.exitThisPage=this.exitThisPage.bind(this);
    }
    render() {
        let time=this.props.data.updateTime;
        return (
            <div className="left-photo-size">
                <div className="head-portrait"></div>
                <div className="massage-box">
                    <p className="exit" onClick={this.exitThisPage}>{ this.props.data.officeType==1?"web"+this.props.data.gname:"ui"+this.props.data.gname}</p>
                    <p>人数:{this.props.data.gcount}</p>
                    <p>总额:{this.props.data.gscore}元</p>
                    <p style={{fontSize:"12px"}}>{`${time.slice(0,4)}年${time.slice(5,7)}月${time.slice(8,10)}日`}</p>

                </div>

            </div>
        )
    }
    exitThisPage(){

        

        localStorage.clear();
        hashHistory.push("/");
    }
}