/**
 * Created by Administrator on 2017/2/24 0024.
 */
import React, {Component, PropTypes} from 'react';
import './studentManager.css';
//import photo from './photo.jpg';
//import SelectName from './selectName'
//import Photo from './photo'

export default class addItem extends Component {
    constructor(props) {
        super(props);
        this.setColorTrue = this.setColorTrue.bind(this)
        this.setColorFalse = this.setColorFalse.bind(this)
        this.state = {
            color: false
        }
    }

    render() {

        return (
            <div>
                {
                    this.props.status == 1 ? <div className="item" onClick={this.props.addReduce}
                                                  style={{
                                                  borderBottomColor:this.props.color,
                                                         borderBottomWidth:"1px",
                                                         borderBottomStyle:"solid",
                                                         backgroundColor:this.state.color==true?this.props.color:""
                                                  }}
                                                  onMouseEnter={this.setColorTrue}
                                                  onMouseLeave={this.setColorFalse}
                    >
                        <div className="item_con">
                            <h4 style={{color:this.props.color}}>{this.props.data.name}</h4>
                        </div>
                        <div className="welfare">
                            <i className="plus" style={{color:this.props.color}}>+</i>
                            <i className="number" style={{color:this.props.color}}>{this.props.data.score}</i>
                            <i className="dollar" style={{color:this.props.color}}>$</i>
                        </div>
                    </div> : <div className="item-none">
                        <div className="item_con">
                            <h4>{this.props.data.name}</h4>
                        </div>
                        <div className="welfare">
                            <i className="plus">+</i>
                            <i className="number">{this.props.data.score}</i>
                            <i className="dollar">$</i>
                        </div>
                    </div>
                }
            </div>

        )
    }

    setColorTrue() {
        this.setState({
            color: true
        })
    }

    setColorFalse() {
        this.setState({
            color: false
        })
    }

}