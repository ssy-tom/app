/**
 * Created by Administrator on 2017/2/25 0025.
 */
/**
 * Created by Administrator on 2017/2/24 0024.
 */
import React, {Component, PropTypes} from 'react';
import './studentManager.css';
import icon3 from './3.png';
//import SelectName from './selectName'
import icon2 from './2.png';

export default class detailClass extends Component {
    render() {
        return (
            <div className="e-box">
                <div className="e-innerbox e-left">
                    <div>
                        <div className="e-icon">
                            <img src={icon3} alt=""/>
                            <span>学期</span>
                        </div>
                    </div>
                    <div>
                        <p>第一教学周期</p>
                    </div>
                </div>
                <div className="e-innerbox e-right">
                    <div>
                        <div className="e-icon">
                            <img src={icon3} alt=""/>
                            <span>课程</span>
                        </div>
                    </div>
                    <div>
                        <p>第三门课程《HTML/CSS》</p>
                    </div>
                </div>
            </div>





        )
    }
}
