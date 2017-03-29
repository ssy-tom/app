/**
 * Created by Administrator on 2017/2/17 0017.
 */
import React, {Component, PropTypes} from 'react';
import '../studentManager/studentManager.css';
import photo from './photo.jpg';
import SelectName from './selectName'
import Photo from './photo'

export default class leftNav extends Component {

    render() {
     
        
        return (
            <div className="left-area">
                <Photo  officeType={this.props.data.officeType} 
                        classNum={this.props.data.grades.length}
                />
                <SelectName data={this.props.data.grades} 
                            set={this.props.data.set} 
                            dispatch={this.props.dispatch} 
                            selectId={this.props.selectId}
                            url={this.props.url}
                />
            </div>
        )
    }
}