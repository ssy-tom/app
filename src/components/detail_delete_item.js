/**
 * Created by Administrator on 2017/2/25 0025.
 */
/**
 * Created by Administrator on 2017/2/24 0024.
 */
import React, {Component, PropTypes} from 'react';
import '../studentManager/studentManager.css';
import {changeTodayReward,superDeleteChangeTotalScore} from '../superManager/actions'
//import photo from './photo.jpg';
//import SelectName from './selectName'
import dele from './dele.png'

export default class detailDelete extends Component {
    render() {
        return (
           <div className={this.props.delete}>
               <div className="delete-icon"
                    onClick={()=>this.deleteItem(this.props.index)}
               ><p style={{cursor: "pointer"}}>&times;</p></div>
           <div className="d-item-word">
               <div>{this.props.data.des}</div>
               {
                   Math.sign(this.props.data.operate)>0?
                       <div><span style={{fontSize:"50px"}}>+</span><span style={{fontSize:"50px"}}>{this.props.data.operate}</span><span>$</span></div>:
                       <div><span style={{fontSize:"50px"}}>-</span><span style={{fontSize:"50px"}}>{Math.abs(this.props.data.operate)}</span><span>$</span></div>
               }
           </div>
           </div>
        )
    }
    deleteItem(index){
        // console.log(this.props.studentLinkData.id,
        //     this.props.studentLinkData.pid,
        //     0-this.props.data.operate);
        //
        // this.props.dispatch(superDeleteChangeTotalScore({
        //     studentId:this.props.studentLinkData.id,
        //     classId:this.props.studentLinkData.pid,
        //     value:0-this.props.data.operate}));

        fetch(`${this.props.url}/cms/detail/delete.do?id=${this.props.data.id}`)
            .then(response=>response.json())
            .then(json=>{
                this.props.dispatch(changeTodayReward(index));
                this.props.dispatch(superDeleteChangeTotalScore({
                    studentId:this.props.studentLinkData.id,
                    classId:this.props.studentLinkData.pid,
                    value:0-this.props.data.operate}));
            }).catch(err=>{
            alert("删除失败")

        })



    }
}