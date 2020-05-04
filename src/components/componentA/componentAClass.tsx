import { Component } from 'react';
import {get} from '@utils';
import {convertToString} from '../../legacy/deeply/nested/because/why/not/something.js';
import ComponentBFunctional from '../componentB/componentBFunctional';
import { userData } from 'src/utils/ajax.js';

interface state {
    user: userData;
}

export default class ComponentAClass extends Component {
    state: state = {
        user: undefined
    }

    callback(id) {
        console.log(convertToString(id));
    }

    componentDidMount() {
        get().then((data) => {
            this.setState({user: data});
        });
    }

    render() {
        return (
            <div>
                <ComponentBFunctional callback={this.callback} user={this.state.user} />
            </div>
        )
    }
}
