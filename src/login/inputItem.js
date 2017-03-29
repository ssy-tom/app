/**
 * Created by Administrator on 2017/2/21 0021.
 */
import React, {Component, PropTypes} from 'react';
import './login.css';

export default class inputItem extends Component {
    render() {
        if(this.props.color=="yellow"){
            return (
                <button className="button-item" onClick={this.props.login}>登录</button>
            )
        }else{
            return (
                <input type={this.props.type!="password"?"text":"password"} className="input-item" defaultValue={this.props.name} placeholder={this.props.prompt}/>
            )
        }

    }
}