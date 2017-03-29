/**
 * Created by Administrator on 2017/2/17 0017.
 */
import React, {Component, PropTypes} from 'react';
import '../studentManager/studentManager.css';
import './super.css';
import {superLink, super_change,pageRewrds,getBefore,getStu,setClassOrRewards} from './actions'
export default class leftNav extends Component {
    constructor(props) {
        super(props);
        this.contentChange = this.contentChange.bind(this);
        this.switch_detail = this.switch_detail.bind(this);
        this.setFalse = this.setFalse.bind(this);
        this.setTrue = this.setTrue.bind(this);
        this.state = {
            clickedDiv: this.props.selectId || 0,
            studentData: this.props.data,
            clickedSonDiv:-1,
            flag:true
        };
    }

    //changeSet(text){
    //    this.props.dispatch(change_set(text))
    //}
    render() {
        // console.log(this.props.set)
        return (
            <div className="select-container">
                {this.props.set != 3 ? this.state.studentData.map((obj, index)=>
                  {
                      if(obj.gstatus==1) {
                          return <div key={index}>
                              <div className="select-name-parent"
                                   style={this.state.clickedDiv==obj.id?{
                             backgroundColor:"#eed63b",
                             color:"#000"
                         }:{}
                         }
                                   onClick={() => this.contentChange(obj)}
                                   key={index}>{obj.gname}</div>


                              {
                                  obj.list.map((value, index)=>

                                      <div key={index}
                                           className="every-item"
                                          // style={this.state.clickedDiv==obj.id?{}:{height:0}}
                                           style={{height:this.state.clickedDiv==obj.id?"":0,
                                     borderBottom:this.state.clickedDiv==obj.id?"1px solid #1c1b21":"",
                                     backgroundColor:this.state.clickedSonDiv==value.id?"#611c23":""
                                     }}
                                          // style={{backgroundColor:"red"}}
                                           onClick={()=>this.switch_detail(value)}
                                      >{value.sname}</div>
                                  )
                              }

                          </div>
                      }


                }
                ) : <div>
                    <div className="every-name-item" style={this.state.flag==true?{
                            backgroundColor:"#eed63b",
                            color:"#000"
                         }:{}} onClick={this.setTrue}>班级设置</div>
                    <div className="every-name-item" style={this.state.flag==false?{
                            backgroundColor:"#eed63b",
                            color:"#000"
                         }:{}} onClick={this.setFalse}>奖罚设置</div>
                    </div>
                }
            </div>
        )
    }
    setTrue(){
        this.setState({
            flag:true
        })
        this.props.dispatch(setClassOrRewards(true))
    }
    setFalse(){
        this.setState({
            flag:false
        })
        this.props.dispatch(setClassOrRewards(false))
    }
    contentChange(obj) {

        this.setState({
            clickedDiv: obj.id,
            clickedSonDiv:-1
        });
        this.props.dispatch(super_change(1));
        this.props.dispatch(superLink(obj))
    }

    switch_detail(obj) {
// console.log(obj.id);
        this.setState({
           clickedSonDiv: obj.id
        });


        this.props.dispatch(super_change(2));
        this.props.dispatch(pageRewrds(obj));
        this.props.dispatch(getBefore("请稍后..."));
        // fetch(`http://localhost:8080/about`)
         fetch(`${this.props.url}/cms/student/detail.do?sid=${obj.id}`)
            .then(response => response.json())
            .then(json => {
                this.props.dispatch(getStu(json));

            });
    }

    componentDidMount() {
        this.setState({
            clickedDiv: this.props.data.length!=0?this.props.data[0].id:false
        });
        this.props.dispatch(super_change(1));
        this.props.dispatch(superLink(this.props.data[0]))
    }
}

