/**
 * Created by Administrator on 2017/2/21 0021.
 */
import React, {Component, PropTypes} from 'react'
import Title from '../studentManager/title'
import LeftNav from '../studentManager/left_nav'
import './containers.css';
import {connect} from 'react-redux'
import Content from '../studentManager/main_content'
import Manager from '../studentManager/main_manager'
import Detail from '../studentManager/stu_detail'
import Mask from '../components/mask'
import Confirm from '../components/confirm'
import MaskForm from '../components/maskForm'
import {hashHistory} from 'react-router';
class studentManager extends Component {
    constructor(props) {
        super(props);
        this.selectSet = this.selectSet.bind(this);
        this.scrollListener = this.scrollListener.bind(this);
        this.resetScroll = this.resetScroll.bind(this);
        this.selectMask = this.selectMask.bind(this);
        this.state = {
            scroll: 0
        };
    }

    resetScroll() {
        this.setState({
            scroll: 0
        })
    }

    selectSet() {

        if (!this.props.isStudent) {
            if (this.props.set === 1) {
                return <Content class={this.props.classMessage} 
                                data={this.props.mainPage} 
                                rewards={this.props.rewards}
                                dispatch={this.props.dispatch}
                                url={this.props.url}
                />
            } else if (this.props.set === 2) {
                return <Manager data={this.props.manager_stu} dispatch={this.props.dispatch}/>
            } else if (this.props.set === 3) {
                return <Detail data={this.props.student_record} 
                               stu_message={this.props.mainPage}
                               scroll={this.state.scroll}
                               reset={this.resetScroll}
                               dispatch={this.props.dispatch}
                               url={this.props.url}
                               classMessage={this.props.classMessage}
                />
            }
        } else {
            return <Detail data={this.props.student_record}
                           stu_message={this.props.mainPage}
                           id={this.props.studentId}
                           scroll={this.state.scroll}
                           reset={this.resetScroll}
                           dispatch={this.props.dispatch}
                           isStudent={this.props.isStudent}
                           classMessage={this.props.classMessage}
            />
        }

    }

    scrollListener() {

        if (this.props.set === 3) {

            if (this.refs.container.clientHeight + this.refs.container.scrollTop === this.refs.container.scrollHeight) {
           
                this.setState({
                    scroll: this.state.scroll + 1
                })
            }
        }
    }

    selectMask() {
        if (this.props.mask === false) {
            return false
        } else {
            if (this.props.mask.type === 2) {
                // return <div>123</div>
                return <MaskForm mask={this.props.mask}
                                 gradeList={this.props.gradeList}
                                 dispatch={this.props.dispatch}
                                 class={this.props.classMessage.id}
                                 url={this.props.url}
                />
            } else if (this.props.mask.type === 3) {

            } else {
                return <Confirm mask={this.props.mask}
                                dispatch={this.props.dispatch}
                                url={this.props.url}
                />
            }
        }

    }

    render() {
        const {dispatch} =this.props;
        return (
            <div>
                {
                    this.props.reflesh ?<div></div>: <div className="inner-container" onScroll={this.scrollListener} ref="container">
                        <Mask mask={this.props.mask}>
                            {
                                this.selectMask()
                            }
                        </Mask>
                        <Title data={this.props.head} isStudent={this.props.isStudent} dispatch={dispatch}/>
                        <div className="auto-adapt">
                            <div className="main_content_box">
                                <div className="content-inner">
                                    {this.selectSet()}
                                </div>
                            </div>
                            <LeftNav data={this.props.students} isStudent={this.props.isStudent} dispatch={dispatch}/>
                        </div>
                    </div>
                }
            </div>
        );
    }

    // componentDidMount(){
    //     hashHistory.push(`/test`);
    //     alert(123);
    // }
    componentWillMount() {
        
        if (this.props.reflesh) {
        
            hashHistory.push(`/`);
           
        }
    }


}

function select(state) {
// console.log(state.superloginData,state.loginData);

    
    
    if (state.loginData.length !== 0) {
        return {
            classMessage: state.loginData.grade,
            head: {...state.loginData.grade, ...state.loginData.period},
            students: [state.loginData.grade, state.loginData.students, state.selectId],
            mainPage: state.studentManager.clickLinkage,
            rewards: state.loginData.rewards,
            set: state.loginData.grade.set,
            manager_stu: state.loginData.students,
            student_record: state.studentManager.getStudentRecord,
            mask: state.studentManager.setMask,
            gradeList: state.loginData.gradeList,
            isStudent: state.loginData.isStudent,
            studentId: state.loginData.students[0] ? state.loginData.students[0].id : "",
            url: state.serverUrl
        }
    } else {
        return {
            reflesh: true
        }
    }

}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(studentManager)