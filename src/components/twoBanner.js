/**
 * Created by Administrator on 2017/2/25 0025.
 */
/**
 * Created by Administrator on 2017/2/24 0024.
 */
import React, {Component, PropTypes} from 'react';
import '../studentManager/studentManager.css';
import icon3 from '../superManager/3.png';
//import SelectName from './selectName'
import icon2 from '../superManager/2.png';

export default class twoBanner extends Component {
    render() {
        return (
            <div className="e-box">
                <div className="e-innerbox e-left">
                    <div>
                        <div className="e-icon">
                            <img src={icon3} alt=""/>
                            <span>{this.props.firstName}</span>
                        </div>
                    </div>
                    <div>
                        <p>{this.props.firstContent}</p>
                    </div>
                </div>
                <div className="e-innerbox e-right">
                    <div>
                        <div className="e-icon">
                            <img src={icon2} alt=""/>
                            <span>{this.props.secondName}</span>
                        </div>
                    </div>
                    <div>
                        <p>{this.props.secondContent}</p>
                    </div>
                </div>
            </div>





        )
    }
}

