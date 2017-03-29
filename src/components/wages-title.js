/**
 * Created by Administrator on 2017/2/19 0019.
 */
import React, {Component, PropTypes} from 'react';
import '../studentManager/studentManager.css';
import cash from './cash.png'

export default class wagesTitle extends Component {
    render() {
        return (
            <div className="wages-title" style={{backgroundColor:this.props.bgColor}}>
                <div className="wages-title-word">
                    <img src={cash} />
                    <label className="wages-word">{this.props.name}</label>
                    <label className="num">$ <span style={{fontSize:"65px"}}>{this.props.score}</span></label>
                </div>
            </div>
        )
    }
    
}