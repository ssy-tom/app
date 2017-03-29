/**
 * Created by Administrator on 2017/2/27 0027.
 */

import React, {Component, PropTypes} from 'react'
import './containers.css';
import '../studentManager/studentManager.css'

import {connect} from 'react-redux'
import ClassItem from '../superManager/class-item'
import SuperHead from '../superManager/superHead'
import LeftNav from '../superManager/left_nav'
import ClassContent from '../superManager/classContent'
import Detail from '../superManager/detail_super'
import ClassOrReward from '../superManager/ClassOrReward'
import Mask from '../components/mask'
import FormMask from '../superManager/superMaskForm'
import RewardAlert from '../superManager/rewardAlert'
import {hashHistory} from 'react-router';

class superManager extends Component {
    constructor(props) {
        super(props);
        // this.selectSet = this.selectSet.bind(this);
         this.scrollListener = this.scrollListener.bind(this);
         this.resetScroll = this.resetScroll.bind(this);
         this.selectMask = this.selectMask.bind(this);
         this.state = {
             scroll:0
         };
    }
    resetScroll(){
        this.setState({
            scroll:0
        })
    }
    scrollListener(){

        if(this.props.set===2){
            //console.log(this.refs.container.clientHeight+this.refs.container.scrollTop==this.refs.container.scrollHeight);
            if(this.refs.container.clientHeight+this.refs.container.scrollTop===this.refs.container.scrollHeight){
                this.setState({
                    scroll:this.state.scroll+1
                })
            }
        }
    }
    selectMask(){
        if(this.props.mask===false){
            return false
        }else{
            if(this.props.mask.type===1){
                // return <div>123</div>
                return <FormMask mask={this.props.mask}
                                 gradeList={this.props.gradeList}
                                 dispatch={this.props.dispatch}
                                 data={this.props.formRequre}
                                 officeType={this.props.officeType}
                                 url={this.props.url}
                />
            }
            //     //减薪加薪项目
            else if(this.props.mask.type===2){

                return <RewardAlert title="奖励加薪项目" 
                                    type={this.props.mask.type}
                                    item1="奖项" item2="金额"
                                    dispatch={this.props.dispatch} 
                                    mask={this.props.mask}
                                    url={this.props.url}
                                    addOrModify={this.props.mask.addOrModify}
                />
                
            }
            else if(this.props.mask.type===3){
              
                return <RewardAlert title="惩罚减薪项目"
                                    type={this.props.mask.type}
                                    item1="惩罚项"
                                    item2="金额"
                                    dispatch={this.props.dispatch}
                                    mask={this.props.mask}
                                    addOrModify={this.props.mask.addOrModify}
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
                    this.props.reflesh?<div></div>:<div className="inner-container"  onScroll={this.scrollListener} ref="container">
                        <Mask mask={this.props.mask}>
                            {
                                this.selectMask()
                            }
                        </Mask>
                        <SuperHead data={this.props.head} dispatch={dispatch}/>
                        <div className="auto-adapt">
                            <div className="main_content_box">
                                <div className="content-inner">
                                        <div>
                                            {
                                                this.selectSet()
                                            }
                                        </div>
                                </div>
                            </div>
                            <LeftNav data={this.props.mainData}
                                     set={this.props.set}
                                     dispatch={dispatch}
                                     url={this.props.url}
                            />

                        </div>
                    </div>
                }
            </div>


        );
    }
    selectSet() {

        if (this.props.set == 1) {
            return <ClassContent data={this.props.content}  dispatch={this.props.dispatch}/>
        }else if(this.props.set==2){
            return <Detail data={this.props.onlyStudent} 
                           scroll={this.state.scroll} 
                           reset={this.resetScroll} 
                           studentData={this.props.studentContent} 
                           dispatch={this.props.dispatch}
                           url={this.props.url}

            />
        }else if(this.props.set==3){
            return <ClassOrReward  dispatch={this.props.dispatch}
                                   allClass={this.props.allClass}
                                   rewards={this.props.rewards}
                                   switchClassOrReward={this.props.switchClassOrReward}/>

        }
    }
    componentWillMount() {
    
        if (this.props.reflesh) {
            
            hashHistory.push(`/`);
        }
    }
    
}
function select(state) {

    if (state.superloginData.length != 0) {
        return {
            set: state.superloginData.set,
            mainData: state.superloginData,
            head: {...state.superloginData.period, ...state.superManager.clickLinkage, set: state.superloginData.set},
            content: state.superManager.clickLinkage,
            onlyStudent: state.superManager.pageRewrds,
            allClass: state.superloginData.grades,
            switchClassOrReward: state.superManager.setClassOrRewards,
            rewards: state.superloginData.rewards,
            mask: state.superManager.setMask,
            studentContent: {...state.superManager.getStudentRecord, ...state.superloginData.period, ...state.superManager.clickLinkage},
            formRequre: [state.superloginData.courseList, state.superloginData.teacherList],
            officeType: state.superloginData.officeType,
            url: state.serverUrl
        }
    } else {
        return {
            reflesh: true
        }
    }
}
export default connect(select)(superManager)
