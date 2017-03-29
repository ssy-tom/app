/**
 * Created by Administrator on 2017/2/16 0016.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import fetch from 'isomorphic-fetch'
import ReactDOM from 'react-dom'
import InputItem from '../login/inputItem'
import Identifying from '../login/identifying'
import SelectItem from '../login/selectItem'
import '../login/login.css';
import {beforeGetTeacherAllData, GetTeacherAllData, getSuper, beforeSuperData, studentType, fixedUrl} from './actions'

import  {Router, Route, hashHistory}  from 'react-router';
class login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.getTrueCollege = this.getTrueCollege.bind(this);
        this.saveLoginMessage = this.saveLoginMessage.bind(this);
        this.getIden = this.getIden.bind(this);
        this.saveLocation = this.saveLocation.bind(this);
        this.keyLogin = this.keyLogin.bind(this);
        this.state = {
            college: "数字媒体web",
            authority: "教师",
            username: "admin",
            password: "admin",
            id: "",
            url: "http://192.168.60.110:8080",
            laissezPasser: false
        };
    }

    getTrueCollege(value) {
        this.setState({
            college: value
        })
    }

    saveLocation(username, password, authority, college) {
        localStorage.username = username;
        localStorage.password = password;
        localStorage.authority = authority;
        localStorage.college = college;
    }

    login(college, authority, username, password, identify, laissezPasser) {
        const {dispatch} = this.props;
        if ((identify.toLowerCase() == this.state.id.toLowerCase()) || laissezPasser) {
            if (authority == 1) {

                dispatch(beforeGetTeacherAllData());
                // console.log(`${this.state.url}/cms/login/login.do?roleName=${username}&password=${password}&roleType=1&officeType=${college}`)
                fetch(`${this.state.url}/cms/login/login.do?roleName=${username}&password=${password}&roleType=1&officeType=${college}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }

                    })
                    .then(response => response.json())
                    .then(json => {

                        if (json.status == 201) {
                            localStorage.clear();
                            alert("用户名或密码错误")
                        } else {

                            dispatch(GetTeacherAllData(json));
                            // if(authority==3){
                            //     dispatch(studentType("学生入口"))
                            // }
                            this.saveLocation(username, password, authority, college);
                            hashHistory.push("/classManager");
                        }
                    })
                    .catch(err=> {
                        localStorage.clear();
                        alert("服务器异常")
                    });


            } else if (authority == 2) {


                dispatch(beforeSuperData());
                fetch(`${this.state.url}/cms/login/login.do`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: `roleName=${username}&password=${password}&roleType=2&officeType=${college}`
                    })
                    .then(response => response.json())
                    .then(json => {
                        // console.log(json)
                        if (json.status == 201) {
                            localStorage.clear();
                            alert("用户名或密码错误")
                        } else {
                            this.saveLocation(username, password, authority, college);
                            dispatch(getSuper(json));
                            hashHistory.push("/superManager");

                        }

                    },(err)=> {
                        localStorage.clear();
                        console.log(err);
                        alert("请检查用户名密码")
                    })
            } else if (authority == 0) {

                //     }

                //学生权限
                dispatch(beforeGetTeacherAllData());
                // // http://192.168.60.100:8080/cms/login/login.do?roleName=admin&password=root&roleType=1&officeType=1
                // http://192.168.60.100:8080/cms/login/login.do?roleName=160202&roleType=0
                fetch(`${this.state.url}/cms/login/login.do`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: `roleType=0&roleName=${username}`
                    })
                    .then(response => response.json())
                    .then(json => {

                        if (json.status == 201) {
                            localStorage.clear();
                            alert("用户名或密码错误")
                        } else {
                            alert(json);
                            this.saveLocation(username, password, authority, college);
                            dispatch(GetTeacherAllData(json));
                            hashHistory.push("/classManager");
                        }

                    }, (err)=> {
                        localStorage.clear();
                        alert("连接失败")
                    });

            }
        }
        else {
            alert("验证码不正确")
        }

    }

    componentWillMount() {
        this.props.dispatch(fixedUrl(this.state.url));
        if (localStorage.username && localStorage.password && localStorage.authority && localStorage.college) {
            let college = localStorage.college;
            let authority = localStorage.authority;
            let username = localStorage.username;
            let password = localStorage.password;
            let identify = "";
            let laissezPasser = true;
            this.setState({
                laissezPasser: true
            });
            this.login(college, authority, username, password, identify, laissezPasser);
        }
    }

    saveLoginMessage() {
        let college = parseInt(ReactDOM.findDOMNode(this.refs.college).value) + 1;
        let authority = ReactDOM.findDOMNode(this.refs.authority).value;
        let username = ReactDOM.findDOMNode(this.refs.username).value;
        let password = ReactDOM.findDOMNode(this.refs.password).value;
        let identify = ReactDOM.findDOMNode(this.refs.identify).children[0].value;
        let laissezPasser = false;
        this.login(college, authority, username, password, identify, laissezPasser);
    }

    render() {
        return (
            <div style={{height:"100%"}}>{
                this.state.laissezPasser ? <div></div> : <div className="login-bg">
                    <div className="login-box" onKeyDown={this.keyLogin}>
                        <SelectItem prompt={['数字媒体web','数字媒体ui']}
                                    ref="college"
                        />
                        <SelectItem prompt={['学生','教师','超级管理员']}
                                    ref="authority"
                        />
                        <InputItem prompt="用户名" ref="username" name=""/>
                        <InputItem prompt="密码" type="password" ref="password" name=""/>
                        <Identifying ref="identify" getId={this.getIden}/>
                        <InputItem prompt="登陆" login={this.saveLoginMessage} color="yellow"/>
                    </div>
                </div>
            }</div>


        );
    }

    keyLogin(event) {
        if (event.keyCode == 13) {
            this.saveLoginMessage();
        }
    }

    getIden(value) {
        this.setState({
            id: value
        })
    }

}


function select(state) {
    return {loginData: state.loginData}
}


export default connect(select)(login);