/**
 * Created by Administrator on 2017/2/19 0019.
 */
import React, {Component, PropTypes} from 'react';
import './studentManager.css';
import WagesTitle from './wages_title';
import add from './add.png';
import reduce from './reduce.png';
import AddItem from './add-item';
import ReduceItem from './reduce-item';
import {addReduceScore} from '../containers/actions'
import {setMask} from '../studentManager/actions'

export default class content extends Component {
    constructor(props) {
        super(props);
        //this.login = this.login.bind(this);
        this.addReduce = this.addReduce.bind(this);
        this.state = {
            "colorArr": ['#e5b868', '#e56868', '#84d4cc', '#84a6d4', '#a684d4']
        }
    }

    addReduce(rewards) {
       
        this.props.dispatch(setMask({index: this.props.data,class:this.props.class,value: rewards}));
        //this.props.dispatch(addReduceScore({index: this.props.data.id, value: num}))
    }

    render() {

        return (
            <div >
                <WagesTitle data={this.props.data} dispatch={this.props.dispatch}
                            flag={false}
                            name={"本周期平均薪资"}
                            bgColor="#eed63b"
                            url={this.props.url}
                />
                <div className="wages-item">
                    <div className="add-wages-title">
                        <div className="title-box">
                            <img src={add}/>
                            <label className="title-word">奖励加薪项目</label>
                        </div>
                    </div>
                    <div className="add-wages-content">
                        {this.props.rewards.map(function (obj, index) {

                            if (obj.type == 1) {
                                // console.log(this.state.colorArr[(index%5)]);
                                return <AddItem addReduce={()=>this.addReduce(obj)}
                                                key={index}
                                                data={obj}
                                                status={this.props.data.status}
                                                color={this.state.colorArr[(index%5)]}
                                />
                            }
                        }, this)
                        }


                    </div>
                </div>


                <div className="wages-item">
                    <div className="reduce-wages-title">

                        <div className="title-box">
                            <img src={reduce}/>
                            <label className="title-word">惩罚减薪项目</label>
                        </div>
                    </div>
                    <div className="add-wages-content">

                        {this.props.rewards.map(function (obj, index) {
                            if (obj.type == 2) {
                                return <ReduceItem addReduce={()=>this.addReduce(obj)}
                                                   key={index}
                                                   data={obj}
                                                   status={this.props.data.status}
                                />
                            }
                        }, this)
                        }
                    </div>
                </div>

            </div>

        )

    }
}
//<div className="add-wages-item" onClick={this.addReduce}></div>
//<div className="add-wages-item"></div>
//<div className="add-wages-item"></div>
//<div className="add-wages-item"></div>