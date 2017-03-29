/**
 * Created by Administrator on 2017/2/25 0025.
 */
/**
 * Created by Administrator on 2017/2/24 0024.
 */
import React, {Component, PropTypes} from 'react';
import './studentManager.css';
//import photo from './photo.jpg';
//import SelectName from './selectName'
//import Photo from './photo'

export default class banner extends Component {
    render() {

        return (

            <div className="add-wages-title">
                <div className="title-box">
                    <img src={this.props.img}/>
                    <label className="title-word">{this.props.title}</label>
                </div>
            </div>

        )
    }
}