/**
 * Created by Administrator on 2017/2/19 0019.
 */
import React, {Component, PropTypes} from 'react';
import '../studentManager/studentManager.css';
import TwoBanner from '../components/twoBanner';
import Banner from '../components/banners';
import man from './man.png';
import Teacher from '../components/teacher'
import WagesTitle from '../components/wages-title'
// import {addReduceScore} from '../containers/actions'
// import {setMask} from '../studentManager/actions'

export default class content extends Component {
    constructor(props) {
        super(props);
        //this.login = this.login.bind(this);
       
        this.state = {
            "colorArr": ['#e5b868', '#e56868', '#84d4cc', '#84a6d4', '#a684d4']
        }
    }
    
    render() {
            // console.log("班级",this.props.data.list.length);
        return (
            <div>
                <TwoBanner firstName="课程"
                            secondName="班级人数"
                           firstContent={this.props.data.course}
                           secondContent={this.props.data.list!=undefined?
                           this.props.data.list.length:0
                           }
                />
                <Banner img={man} title="班级教师"/>
                <div className="teacher">
                    <Teacher name={this.props.data.teacher} type="任课教师" color="#5ac66c"/>
                    <Teacher name={this.props.data.header} type="班主任" color="#dea033"/>
                    <Teacher name="边云风" type="web主任" color="#de3333"/>
                </div>
                <WagesTitle name="本教学周期薪酬"
                            score={this.props.data.gscore}
                            bgColor="#eed63b"/>
            </div>
        )

    }
}

