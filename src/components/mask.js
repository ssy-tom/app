/**
 * Created by Administrator on 2017/2/26 0026.
 */
/**
 * Created by Administrator on 2017/2/24 0024.
 */
import React, {Component, PropTypes} from 'react';
import './super.css';



export default class mask extends Component {
    render() {
        return (
            <div style={{"display":this.props.mask==false?"none":"block"}}>
                <div className="mask">

                </div>
                 {this.props.children}
            </div>
        )
    }
}