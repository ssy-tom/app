/**
 * Created by Administrator on 2017/2/19 0019.
 */
import React, {Component, PropTypes} from 'react';
import './studentManager.css';
import cash from './cash.png'
import stop from './stop.png'
import {change_set,getBeforeRecord,getRecord} from './actions'


export default class wagesTitle extends Component {
    render() {
      
        return (
            <div className="wages-title" style={{backgroundColor:this.props.bgColor}}>
                <div className="wages-title-word">
                     <img src={cash} />
                     <label className="wages-word">{this.props.name}</label>
                     <label className="num">$ <span style={{fontSize:"65px"}}>{this.props.data.score||0}</span></label>
                </div>
                {
                    this.props.flag!=true? <label className="detail" onClick={()=>this.changeSet(3)}>查看详情>></label>
               :false
                }
                <img src={stop} style={{display:this.props.data.status==2?"block":"none"}}/>

            </div>
        )
    }
    changeSet(text){
      
        this.props.dispatch(change_set(text));
        this.props.dispatch(getBeforeRecord("请等待..."));
        console.log(`${this.props.url}/cms/student/detail.do?sid=${this.props.data.id}`);
        fetch(`${this.props.url}/cms/student/detail.do?sid=${this.props.data.id}`)
            .then(response => response.json())
            .then(json => {
            // console.log(json);
                this.props.dispatch(getRecord(json));
            });
    }
}