/**
 * Created by Administrator on 2017/2/24 0024.
 */
/**
 * Created by Administrator on 2017/2/24 0024.
 */
import React, {Component, PropTypes} from 'react';
import './studentManager.css';
//import photo from './photo.jpg';
//import SelectName from './selectName'
//import Photo from './photo'


export default class reduceItem extends Component {
    render() {
        return (


            <div>
                {
                    this.props.status == 1 ? <div className="punish_list" onClick={this.props.addReduce}>
                        <div className="arc">
                            <div className="progress">

                                <i>{this.props.data.score}</i>
                                <i>$</i>
                            </div>
                        </div>
                        <div className="reason">
                            <h2>{this.props.data.name}</h2>
                            <p>Be late for class</p>
                        </div>
                    </div> : <div className="punish_list-none" >
                        <div className="arc">
                            <div className="progress">

                                <i>{this.props.data.score}</i>
                                <i>$</i>
                            </div>
                        </div>
                        <div className="reason">
                            <h2>{this.props.data.name}</h2>
                            <p>Be late for class</p>
                        </div>
                    </div>
                }
            </div>

        )
    }
}