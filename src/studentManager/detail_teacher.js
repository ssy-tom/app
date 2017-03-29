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

export default class Teacher extends Component {
    render() {

        return (

            <div className="r-bigbox">
                <div className="r-one">
                    <div className="r-one-shang" style={{"backgroundColor":this.props.color}}>
                        <p>{this.props.type}</p>
                    </div>
                    <div className="r-one-xia">

                            <div className="r-one-xia-box">
                            <span>{this.props.name}</span>
                            <span> | </span>
                            <span>WEB</span>
                            <span> | </span>
                            <span>WEB</span>
                            </div>


                    </div>
                </div>
            </div>
        )
    }
}