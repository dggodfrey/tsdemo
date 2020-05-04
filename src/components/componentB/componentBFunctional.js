import React from 'react';
import hi from '@legacyUtils';
import {utils} from '@utils';

export default function ComponentBFunctional(props) {
    const handleDisplayClick = (id) => {
        const {callback} = props;
        callback(utils.someHelpfulUtil(id));
    }

    return (
        <div>
            <div className="name">{props.user.name}</div>
            <button 
                className="display"
                onClick={() => handleDisplayClick(props.user.id)}
            >
                {hi()}{props.user.displayName}
            </button>
        </div>
    )
}
