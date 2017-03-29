/**
 * Created by Administrator on 2017/2/24 0024.
 */
import React, {Component, PropTypes} from 'react';
import './super.css';
//import photo from './photo.jpg';
import {setMask} from './actions'
//import Photo from './photo'

export default class classItem extends Component {
    constructor(props) {
        super(props);
        this.setMaskData = this.setMaskData.bind(this);
    }

    render() {

        return (
                <ul className="boxc">
                    {
                        this.props.flag!=1? <li style={{background:`linear-gradient(to left top,transparent 50%,${this.props.color} 0) no-repeat 100% 100%/ 1.6em 1.6em, linear-gradient( 315deg,transparent 1.07em,${this.props.color} 0)`}}
                                                onClick={this.setMaskData}>
                            <a>{this.props.class.gname}</a>
                        </li>: <li style={{background:`linear-gradient(to left top,transparent 50%,${this.props.color} 0) no-repeat 100% 100%/ 1.6em 1.6em, linear-gradient( 315deg,transparent 1.07em,${this.props.color} 0)`}}
                                   onClick={this.setMaskData}>
                            <a>{this.props.class}</a>
                        </li>
                    }
                </ul>
        )
    }
    setMaskData(){

        this.props.dispatch(setMask({type:1,value:this.props.class||this.props.class}))
    }
}
