/**
 * Created by Administrator on 2017/2/24 0024.
 */
import React, {Component, PropTypes} from 'react';
import './studentManager.css';
import cash from './cash.png'

export default class detialHead extends Component {
    render() {
    
        return (

//<div className="t-box">
            <ul className="t-box_ul">
                <li>
                    <div className="t-top">{this.props.data.sname}</div>
                    <div className="t-bottom">
                        <div className="t-inner-box">
                        <p>学号：{this.props.data.sno}</p>
                        <p>市场部：{this.props.data.market}</p>
                        <p>入学日期：{this.props.data.beginsDate}</p>
                        <p>学制：{this.props.data.term}</p>
                            </div>
                    </div>
                </li>

                <li>
                    <div className="t-inner">
                        <div className="t-money">
                            <img src={cash} alt=""/>
                            <div className="t-title">本教学周期薪酬</div>
                        </div>
                        <br/>
                        <h2 className="t-number"><span>$</span>{this.props.data.score}</h2>
                    </div>
                </li>
            </ul>
//</div>
        )
    }
}