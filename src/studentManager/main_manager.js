/**
 * Created by Administrator on 2017/2/25 0025.
 */
/**
 * Created by Administrator on 2017/2/19 0019.
 */
import React, {Component, PropTypes} from 'react';
import './studentManager.css';
import hat from './hat.png';
import ManagerItem from './manager_item';
import {setMask} from './actions';



export default class content extends Component {
    constructor(props) {
        super(props);
        this.sendMask = this.sendMask.bind(this);
        //this.addReduce = this.addReduce.bind(this);

    }

    render() {
        // console.log("sec",this.props);

        return (
            <div >
                <div className="add-wages-title">
                    <div className="title-box">
                        <img src={hat}/>
                        <label className="title-word">学生管理</label>
                    </div>
                </div>
                {this.props.data.map(function(obj,index){
                    return <ManagerItem data={obj} key={index} index={index} dispatch={this.props.dispatch}/>
                },this)}
                <div className="small-box"
                     onClick={this.sendMask}
                     style={{backgroundColor:"#bbb",color:"#fff",fontSize:"25px"}}>
                    <span>+</span>
                </div>

            </div>


        )
    }
    sendMask(){
   
        this.props.dispatch(setMask({type:2, operation:"create",value:{}}))

    }
}
