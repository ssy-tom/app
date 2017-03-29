/**
 * Created by Administrator on 2017/2/25 0025.
 */
/**
 * Created by Administrator on 2017/2/24 0024.
 */
import React, {Component, PropTypes} from 'react';
import './studentManager.css';
import stopSmall from './stopSmall.png';
import {setMask} from './actions';


export default class addItem extends Component {
    constructor(props) {
        super(props);
        this.sendMask = this.sendMask.bind(this);
        //this.addReduce = this.addReduce.bind(this);
    }
    render() {

        if (this.props.data.status != 2) {
            return (
                <div className="small-box"
                     onClick={this.sendMask}>

                    <span>{this.props.data.sname}</span>
                </div>
            )
        } else {
            return (
                <div className="small-box-2">
                    <span>{this.props.data.sname}</span>
                    <img src={stopSmall} style={{
                    position:"absolute",
                    right:0,
                    top:"7px"
                    }}/>
                </div>
            )
        }

    }
    sendMask(){
    
        this.props.dispatch(setMask({type:2,operation:"update",index:this.props.index,value:this.props.data}))

    }
}