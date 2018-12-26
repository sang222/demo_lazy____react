import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

class Main extends Component {
    render() {
        return (
            <div className={'auto d-flex no-gutters main_container'}>
                <ul>
                    <li><NavLink to='/'>Demo</NavLink></li>
                    <li><NavLink to='/lazy'>Lazy</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default Main;