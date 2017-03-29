/**
 * Created by Administrator on 2017/3/3 0003.
 */

import React, {Component, PropTypes} from 'react';
import './super.css';
import {addReduceScore} from '../containers/actions'
import {setMask} from '../studentManager/actions'
export default class confirm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.changeScore = this.changeScore.bind(this);
    //     this.cancel = this.cancel.bind(this);
    // }

    render() {

        console.log(this.props.mask);
        return (
            <div className="popup">
                <p>学生基本信息</p>
                <form action="">
                    <label htmlFor="">
                        <div className="label_div">姓名</div>
                        <input type="text" />
                    </label>
                    <label htmlFor="">
                        <div className="label_div">班级</div>
                        <select name="" >
                            {this.props.gradeList.map((obj,index)=>
                                <option value="" key={index}>{obj.gname}</option>)}
                            <option value="">开除</option>
                            <option value="">休学</option>
                            <option value="">毕业</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        <div className="label_div">学号</div>
                        <input type="text" />
                    </label>
                    <label htmlFor="">
                        <div className="label_div">性别</div>
                        <select name="" id="" >
                            <option value="girl" value="1">女</option>
                            <option value="boy" value="2">男</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        <div className="label_div">身份证</div>
                        <input type="text" defaultValue={this.props.mask.value.sno}/>
                    </label>
                    <label htmlFor="">
                        <div className="close">取消</div>
                        <input type="button" value="确定"/>
                    </label>
                </form>
            </div>
        )
    }

    // cancel(){
    //     this.props.dispatch(setMask(false))
    // }
    // changeScore(){
    //     // console.log(this.props);
    //     this.props.dispatch(addReduceScore({index: this.props.mask.index,value: this.props.mask.value.score}));
    //     this.props.dispatch(setMask(false))
    // }
}