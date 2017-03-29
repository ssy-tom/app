/**
 * Created by Administrator on 2017/2/24 0024.
 */
/**
 * Created by Administrator on 2017/2/24 0024.
 */
import React, {Component, PropTypes} from 'react';
import '../studentManager/studentManager.css';
//import photo from './photo.jpg';
import {setMask} from './actions'
//import Photo from './photo'


export default class reduceSetItem extends Component {
    constructor(props) {
        super(props);
        this.setPunishment=this.setPunishment.bind(this)
    }
    render() {
        return (


            <div>
                {
                    <div className="punish_list-none"
                         onClick={()=>this.setPunishment(this.props.data)}>
                        <div className="arc">
                            <div className="progress">
                                <i>{this.props.data.score}</i>
                                <i>$</i>
                            </div>
                        </div>
                        <div className="reason">
                            <h2>{this.props.data.name}</h2>
                            <p>Be late for class</p>
                        </div>
                    </div>
                }
            </div>
        )
    }

    setPunishment(obj){
        this.props.dispatch(setMask({type:3,addOrModify:2,value:obj}))
    }
    
}