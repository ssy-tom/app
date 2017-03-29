/**
 * Created by Administrator on 2017/3/1 0001.
 */

import React, {Component, PropTypes} from 'react';
import '../studentManager/studentManager.css';
//import TwoBanner from '../components/twoBanner';
//import Banner from '../components/banners';
//import man from './man.png';
//import Teacher from '../components/teacher'
import ClassItem from './class-item'
import AddSetItem from './add-set-item'
import ReduceSetItem from './reduce-set-item'
// import {addReduceScore} from '../containers/actions'
// import {setMask} from '../studentManager/actions'
import Banner from '../components/banners'
import add from '../components/add.png'
import reduce from '../components/reduce.png'
import {setMask} from './actions'

export default class ClassOrReward extends Component {
    constructor(props) {
        super(props);
        this.set = this.set.bind(this);
        this.setPunishment = this.setPunishment.bind(this);

        this.state = {
            "colorArr": ['#e5b868', '#e56868', '#84d4cc', '#84a6d4', '#a684d4']
        }
    }

    render() {
      
        return (
            <div>
                {
                    this.props.switchClassOrReward == true ?
                        <div>
                            {
                                this.props.allClass.map((val, index)=>{
                                if(val.gstatus==1){
                                return <ClassItem class={val} key={index} color={this.state.colorArr[index % 5]} dispatch={this.props.dispatch}/>
                            }
                            })

                            }
                            <ClassItem class="+" color="#bbbbbb" flag={true} dispatch={this.props.dispatch}/>
                        </div>

                        : <div>
                        <Banner img={add} title="奖励加薪项目"/>
                        <div className="add-container">
                            {this.props.rewards.map((obj, index)=>(
                                obj.type == 1 ?
                                    <AddSetItem reward={obj} key={index} color={this.state.colorArr[index%5]}
                                                dispatch={this.props.dispatch}/> : false
                            ))}
                            <ul className="rigbotoom-2" onClick={this.set}>
                                <li style={{backGroundColor:"#bbb"}}>+</li>
                            </ul>
                        </div>
                        <Banner img={reduce} title="惩罚减薪项目" color="#544b14"/>
                        <div className="add-container">
                            {this.props.rewards.map((obj, index)=>(
                                obj.type == 2 ?
                                    <ReduceSetItem data={obj} key={index} dispatch={this.props.dispatch}/> : false
                            ))}
                            <div className="punish_list-none-2" onClick={this.setPunishment}>+</div>

                        </div>
                    </div>
                }


            </div>
        )

    }
//type 2奖励 3惩罚 addOrModify 1增加 2修改
    set() {

        this.props.dispatch(setMask({type: 2, addOrModify:1,value: {}}))

    }

    setPunishment() {
        this.props.dispatch(setMask({type: 3,addOrModify:1, value: {}}))
    }
}

