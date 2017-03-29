/**
 * Created by Administrator on 2017/2/25 0025.
 */
/**
 * Created by Administrator on 2017/2/25 0025.
 */
/**
 * Created by Administrator on 2017/2/19 0019.
 */
import React, {Component, PropTypes} from 'react';
import './studentManager.css';
import DetialHead from './detail_head'
import record from './record.png'
import DetailDelete from './detail_delete_item'
import WagesTitle from './wages_title'
import DetailClass from './detail_class'
import Teacher from './detail_teacher'
import Banner from './banners'
import people from './people.png'
import history from './history.png'
import {getBeforeRecord, getRecord} from './actions'
export default class detail extends Component {
    constructor(props) {
        super(props);
        this.todayRecord = this.todayRecord.bind(this);
        this.state = {
            id:this.props.stu_message.id
        }
    }

    render() {

        return (
            <div>
                <DetialHead data={this.props.stu_message}/>
                <Banner img={record} title="今日奖罚记录"/>
                <div className="detail-frame"
                     style={{marginBottom:"20px",height:"auto"}}>

                    <div className="detail-title">{new Date().getYear() +
                    1900 + "年" + (new Date().getMonth() + 1) + "月" + new Date().getDate() + "日"}</div>
                    {this.todayRecord()}

                </div>

                <WagesTitle data="0" dispatch={false} flag={true} name={"历史平均薪资"} bgColor="#fff"/>
                <DetailClass />
                <Banner img={people} title="班级教师"/>
                <div className="teacher">
                    <Teacher name={this.props.classMessage.teacher} type="任课教师" color="#5ac66c"/>
                    <Teacher name={this.props.classMessage.header} type="班主任" color="#dea033"/>
                    <Teacher name="边云风" type="web主任" color="#de3333"/>
                </div>
                <Banner img={history} title="历史奖罚记录"/>

                {
                    this.historyRecord()
                }


            </div>
        )
    }


    todayRecord() {

        if (this.props.data.status == 2) {
            if (this.props.data.todayData.length != 0) {
                return this.props.data.todayData.map(function (obj, index) {
                    return <DetailDelete data={obj}
                                         index={index}
                                         key={index}
                                         dispatch={this.props.dispatch}
                                         delete={this.props.isStudent?"d-item-2":"d-item"}
                                         url={this.props.url}
                                         stu_message={this.props.stu_message}
                                         

                    />
                }, this)
            } else {
                return <div>今天没有记录</div>
            }
        } else {
            return <div>{this.props.data.data}</div>
        }

    }

    historyRecord() {

        if (this.props.data.status == 2) {
            if (Object.keys(this.props.data.historyData).length != 0) {
                let num = 2 + this.props.scroll * 2;
                let order = [...this.props.data.order];
                order = order.splice(0, num);
                return order.map(function (date, index) {
                    return (
                        <div className="detail-frame" key={date}>
                            <div className="detail-title">
                                {`${date.slice(0, 4)}年${date.slice(4, 6)}月${date.slice(6, 8)}日`}
                            </div>
                            {
                                this.props.data.historyData[date].map(function (obj, index) {
                                    return <DetailDelete data={obj}
                                                         delete="d-item-2"
                                                         key={index}/>
                                }, this)
                            }
                        </div>
                    );
                }, this);
            }
            else {
                return <div>历史没有记录</div>
            }
        } else {
            return <div>{this.props.data.data}</div>
        }
    }

    componentWillUnmount() {
        this.props.reset()
    }

    componentDidMount() {

        // this.props.dispatch(change_set(text));
        if (this.props.isStudent) {
            this.props.dispatch(getBeforeRecord("请等待..."));
            fetch(`${this.props.url}/cms/student/detail.do?sid=${this.props.id}`)
                .then(response => response.json())
                .then(json => {
                    this.props.dispatch(getRecord(json));
                });
        }

    }

}

