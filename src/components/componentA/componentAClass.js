import { Component } from 'react';
import {get} from '@utils';
import {convertToString} from '../../legacy/deeply/nested/because/why/not/something.js';
import ComponentBFunctional from '../componentB/componentBFunctional';

export default class ComponentAClass extends Component {
    state = {
        user = {}
    }

    callback(id){
        console.log(convertToString(id));
    }

    componentDidMount() {
        get().then((data) => {
            this.setState({user: data});
        });
    }

    render() {
        <div>
            <ComponentBFunctional callback={this.callback} user={this.state.user} />
        </div>
    }
}