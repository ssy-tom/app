/**
 * Created by Administrator on 2017/2/17 0017.
 */
import React, {Component, PropTypes} from 'react';
import './studentManager.css';
import {clickOperationContent,change_set} from './actions'
export default class leftNav extends Component {
    constructor(props) {
        super(props);
        this.contentChange = this.contentChange.bind(this);
        this.state = {
            clickedDiv: this.props.selectId||0,
            studentData: this.props.data,
        };
    }
    

    render() {
 
        return (
        <div className="left-select-name">
                {this.props.set!=2? this.state.studentData.map((obj, index)=> {
                    if(obj.status!=3||this.props.isStudent)
                        return <div className="every-name-item"
                             style={this.state.clickedDiv==obj.id?{
                            backgroundColor:"#eed63b",
                            color:"#000"
                         }:{}
                         }
                             onClick={() => this.contentChange(obj)}
                             key={index}>{obj.sname}</div>

                    }
                )

                    :<div className="every-name-item"style={{
                            backgroundColor:"#eed63b",
                            color:"#000"
                         }}>学生管理</div>
                }
            </div>
        )
    }

    contentChange(obj) {
        this.setState({
            clickedDiv: obj.id
        });
        this.props.dispatch(change_set(1));
        this.props.dispatch(clickOperationContent(obj));
    }

    componentDidMount() {
        if(this.props.data.length!=0){
            this.setState({
                clickedDiv: this.props.data[0].id
            });
        }

        this.props.dispatch(clickOperationContent(this.props.data[0]))
    }
}

