
/**
 * Created by Administrator on 2017/2/27 0027.
 */
import React, {Component, PropTypes} from 'react';
import './super.css';
import {changeOneReward,deleteOneReward} from '../containers/actions'
import {setMask} from '../superManager/actions'
export default class rewardAlert extends Component {
    constructor(props) {
        super(props);
            this.changeScore = this.changeScore.bind(this);
        this.cancel = this.cancel.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeS = this.changeS.bind(this);
        this.changeState = this.changeState.bind(this);
        this.state={
            name:this.props.mask.value.name||"",
            score:this.props.mask.value.score||"",
            //store如果是2删除
            store:1
        }
    }

    render() {

        return (
            <div className="popup" >
                <p>{this.props.title}</p>
                <form action="">

                    <label htmlFor="">
                        <div className="label_div">{this.props.item1}</div>
                        <input type="text" defaultValue={this.props.mask.value.name} onChange={this.changeName}/>
                    </label>
                    <label htmlFor="">
                        <div className="label_div">{this.props.item2}</div>
                        <input type="text" defaultValue={this.props.mask.value.score} onChange={this.changeS}/>
                    </label>
                    <label htmlFor="">
                        <div className="label_div">状态</div>
                        <select name="" id="" defaultValue="1" onChange={this.changeState}>
                            <option value="girl" value="1">保留</option>
                            <option value="boy" value="2">删除</option>
                        </select>
                    </label>
                    
                    <label htmlFor="">
                        <div className="close" onClick={this.cancel}>取消</div>
                        <input type="button" value="确定" onClick={this.changeScore}/>
                    </label>
                </form>
            </div>
        )
    }
    changeName(e){
        this.setState({name:e.target.value})
    }
    changeS(e){
        this.setState({score:e.target.value})
    }
    changeState(e){
        this.setState({store:e.target.value})
    }
    cancel(){
        this.props.dispatch(setMask(false))
    }
    changeScore() {
        // console.log(this.props.mask);

        if (this.state.store == 1) {
            if (this.props.type == 2) {

                if (this.props.addOrModify == 1) {

                    // 添加
                    fetch(`${this.props.url}/cms/reward/create.do`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: `name=${this.state.name}&type=1&score=${this.state.score}`
                    })
                        .then(response=>response.json())
                        .then(json=> {
                            //flag控制加减
                            this.props.dispatch(changeOneReward({
                                flag: 1,
                                name: this.state.name,
                                type: 1,
                                score: this.state.score
                            }));
                            this.props.dispatch(setMask(false))
                        })
                        .catch(err=>alert(err))
                } else if (this.props.addOrModify == 2) {
                    //修改

                    fetch(`${this.props.url}/cms/reward/update.do?id=${this.props.mask.value.id}&name=${this.state.name}&type=1&score=${this.state.score}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }

                    })
                        .then(response=>response.json())
                        .then(json=> {
                            // flag控制加减
                            //flag 1 添加 2 修改
                            this.props.dispatch(changeOneReward({
                                flag: 2,
                                name: this.state.name,
                                type: 1,
                                score: this.state.score,
                                id: this.props.mask.value.id
                            }));
                            this.props.dispatch(setMask(false))
                        })
                        .catch(err=>alert(err))
                }


            } else if (this.props.type == 3) {
                //flag 1 添加 2 修改
                // alert(this.props.addOrModify)
                if (this.props.addOrModify == 1) {
                    fetch(`${this.props.url}/cms/reward/create.do`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: `name=${this.state.name}&type=2&score=${this.state.score}`
                    })
                        .then(response=>response.json())
                        .then(json=> {
                            //flag控制加减
                            this.props.dispatch(changeOneReward({
                                flag: 1,
                                name: this.state.name,
                                type: 2,
                                score: this.state.score
                            }));
                            this.props.dispatch(setMask(false))
                        })
                        .catch(err=>alert(err))
                } else if (this.props.addOrModify == 2) {
                    // alert(123)
                    // console.log(`${this.props.url}/cms/reward/update.do?id=${this.props.mask.value.id}&name=${this.state.name}&type=2&score=${this.state.score}`);
                    fetch(`${this.props.url}/cms/reward/update.do?id=${this.props.mask.value.id}&name=${this.state.name}&type=2&score=${this.state.score}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    })
                        .then(response=>response.json())
                        .then(json=> {
                            // flag控制加减
                            //flag 1 添加 2 修改
                            this.props.dispatch(changeOneReward({
                                flag: 2,
                                name: this.state.name,
                                type: 2,
                                score: this.state.score,
                                id: this.props.mask.value.id
                            }));
                            this.props.dispatch(setMask(false))
                        })
                        .catch(err=>alert(err))
                }
            }
        } else if (this.state.store == 2) {
            // 删除操作
            fetch(`${this.props.url}/cms/reward/delete.do?id=${this.props.mask.value.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
                .then(response=>response.json())
                .then(json=> {
                    if(json.status==200){
                        this.props.dispatch(deleteOneReward(this.props.mask));
                        this.props.dispatch(setMask(false));
                    }else{
                        alert("删除奖惩失败");
                    }

                })
                .catch(err=>alert(err))

        }

    }
}