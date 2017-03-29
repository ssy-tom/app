/**
 * Created by Administrator on 2017/2/26 0026.
 */
import React, {Component, PropTypes} from 'react';
import './super.css';
import {addReduceScore} from '../containers/actions'
import {setMask} from '../studentManager/actions'


export default class confirm extends Component {
    constructor(props) {
        super(props);
        this.changeScore = this.changeScore.bind(this);
        this.cancel = this.cancel.bind(this);
        this.disabledButton = this.disabledButton.bind(this);
        this.state = {
            isdisabled: false
        }
    }

    render() {

        return (
            <div className="pop-up">
                <div className="shade-text">
                    <h2>奖励加薪项目</h2>
                </div>
                <div className="shade-line"></div>
                <div className="shade-middle">
                    <div className="shade-speech">
                        <span>{this.props.mask.value.name}</span>
                    </div>
                    <div className="shade-money">
                        <span>{this.props.mask.value.score > 0 ?
                        "+" + this.props.mask.value.score : this.props.mask.value.score}</span>
                        <span>$</span>
                    </div>
                </div>
                <div className="shade-btn">
                    <input type="button" disabled={this.state.isdisabled} value="取消" id="cancel" onClick={this.cancel}/>
                    <input type="button" disabled={this.state.isdisabled}
                           value="确定"
                           id="confirm"
                           onClick={this.changeScore}
                           style={
                               {cursor: "pointer",
                               backgroundColor:this.state.isdisabled?"#9796a0":""}
                               }
                    />
                </div>
            </div>
        )
    }

    cancel() {
        this.props.dispatch(setMask(false))
    }

    disabledButton(value) {
        this.setState({
            isdisabled: value
        })
    }

    changeScore() {
        // console.log(this.props.mask.class.id,this.props.mask.index.id,this.props.mask.index.id,this.props.mask.class.gscore,this.props.mask.index.score,this.props.mask.value.score,this.props.mask.value.name)
        this.disabledButton(true);

        fetch(`${this.props.url}/cms/student/manage.do`, {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `gradeId=${this.props.mask.class.id}&studentId=${this.props.mask.index.id}&gradeCurrentStore=${this.props.mask.class.gscore}&studentCurrentScore=${this.props.mask.index.score}&defen=${this.props.mask.value.score}&describe=${this.props.mask.value.name}`
        })
            .then(response => response.json())
            .then(json => {
                this.props.dispatch(addReduceScore({
                    index: this.props.mask.index.id,
                    value: this.props.mask.value.score
                }));
                this.props.dispatch(setMask(false))
            }).catch(response=>{
            alert("数据添加失败");
            this.props.dispatch(setMask(false));
        });
    }
}