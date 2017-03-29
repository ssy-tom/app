/**
 * Created by Administrator on 2017/3/1 0001.
 */

import React, {Component, PropTypes} from 'react';
import '../studentManager/studentManager.css';
import DetialHead from '../components/detail_head'
import Banner from '../components/banners'
import DetailDelete from '../components/detail_delete_item'
import WagesTitle from '../components/wages-title'
import TwoBanner from '../components/twoBanner'
import Teacher from '../components/teacher'
import record from './record.png'
import people from './people.jpg'
import history from './history.png'


export default class detail extends Component {
    constructor(props) {
        super(props);
        this.todayRecord = this.todayRecord.bind(this);

    }

    render() {

        return (
            <div>
                <DetialHead data={this.props.data}/>
                <Banner img={record} title="今日奖罚记录"/>
                <div className="detail-frame"
                     style={{height:"auto",marginBottom:"20px"}}>
                    <div className="detail-title">{new Date().getYear() +
                    1900 + "年" + (new Date().getMonth() + 1) + "月" + new Date().getDate() + "日"}</div>
                    {this.todayRecord()}
                </div>
                <WagesTitle data="0"  name={"历史平均薪资"} bgColor="#fff" score="0"/>
                <TwoBanner firstName="学期"
                           secondName="课程"
                           firstContent={this.props.studentData.name}
                           secondContent={this.props.studentData.course
                           }
                />
                <Banner img={people} title="今日奖罚记录"/>
                <div className="teacher">
                    <Teacher name={this.props.studentData.teacher} type="任课教师" color="#5ac66c"/>
                    <Teacher name={this.props.studentData.header} type="班主任" color="#dea033"/>
                    <Teacher name="边云风" type="web主任" color="#de3333"/>
                </div>
                <Banner img={history} title="历史奖罚记录"/>
                {
                    this.historyRecord()
                }

            </div>
        )
    }
    componentWillUnmount() {
        this.props.reset()
    }
    todayRecord() {
       //console.log(this.props.data)
        if (this.props.studentData.status == 2) {
            if (this.props.studentData.todayData.length != 0) {
                
                return this.props.studentData.todayData.map(function (obj, index) {
                    return <DetailDelete data={obj}
                                         key={index}
                                         delete="d-item"
                                         dispatch={this.props.dispatch}
                                         url={this.props.url}
                                         studentLinkData={this.props.data}
                                         studentData={this.props.studentData}
                    />

                },this)
            } else {

                return <div >今天没有记录</div>
            }
        } else {
            return <div>{this.props.studentData.data}</div>
        }

    }
    historyRecord() {

        if (this.props.studentData.status == 2) {

            if (Object.keys(this.props.studentData.historyData).length != 0) {
                let num = 2 + this.props.scroll * 2;
                let order = [...this.props.studentData.order];
                order = order.splice(0, num);
                return order.map(function (date, index) {
                    return (
                        <div className="detail-frame"

                             key={date}>
                            <div className="detail-title">
                                {`${date.slice(0, 4)}年${date.slice(4, 6)}月${date.slice(6, 8)}日`}
                            </div>
                            {
                                this.props.studentData.historyData[date].map(function (obj, index) {
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
            return <div>{this.props.studentData.data}</div>
        }

    }
}

