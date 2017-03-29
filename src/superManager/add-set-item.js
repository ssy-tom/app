/**
 * Created by Administrator on 2017/3/1 0001.
 */

import React, {Component, PropTypes} from 'react';
import './super.css';
//import photo from './photo.jpg';
import {setMask} from './actions'
//import Photo from './photo'

export default class addSetItem extends Component {
    constructor(props) {
        super(props);
        this.set=this.set.bind(this)
        this.setColor=this.setColor.bind(this)
        this.leaveColor=this.leaveColor.bind(this)
        this.state={
            color:false
        }
    }

    render() {
    
        
        return (
                <ul className="rigbotoom" style={{
                color:this.props.color
                }}
                    onMouseEnter={this.setColor}
                    onMouseLeave={this.leaveColor}
                    onClick={this.set}
                >
                    <li
                    style={{
                    backgroundColor:this.state.color==true?this.props.color:""
                    }}>
                        <div className="shangtop" style={{color:this.props.color,borderBottomColor:this.props.color}}>
                            <p>{this.props.reward.name}</p>
                            <div className="rqian">
                                <span className="jia">+</span>
                                <span className="shu" >{this.props.reward.score}</span>
                                <span className="fuhao" >$</span>
                            </div>
                        </div>
                        <div className="xiabotm" >
                            <p>设置</p>
                        </div>
                    </li>
                </ul>
        )
    }
    set(){
        //type控制加分项减分项，addOrModify 1增加 2修改
        this.props.dispatch(setMask({type:2,addOrModify:2,value:this.props.reward}))
    }
    setColor(){
        this.setState({color:true})
    }
    leaveColor(){
    
        this.setState({color:false})
    }
}