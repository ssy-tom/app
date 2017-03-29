/**
 * Created by Administrator on 2017/2/17 0017.
 */
import React, {Component, PropTypes} from 'react';
import './studentManager.css';
import photo from './photo.jpg';
import SelectName from './selectName'
import Photo from './photo'

export default class leftNav extends Component {

    render() {
     
        return (
            <div className="left-area">
                <Photo  data={this.props.data[0]}/>
                <SelectName data={this.props.data[1]} isStudent={this.props.isStudent} set={this.props.data[0].set} dispatch={this.props.dispatch} selectId={this.props.selectId}/>
            </div>
        )
    }
}