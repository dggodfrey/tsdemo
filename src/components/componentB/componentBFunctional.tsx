import React from 'react';
import {hello} from '@legacyUtils';
import {utils} from '@utils';
import { userData } from 'src/utils/ajax';

interface props {
    // user: Partial<userData>; // Generic made with utility type that could be used instead of checking `props.user`
    user: userData;
    callback: (id: any) => void
}

export default function ComponentBFunctional(props: props) {
    const handleDisplayClick = (id) => {
        const {callback} = props;
        callback(utils.someHelpfulUtilOfAmazingness(id));
    }

    return (
        <div>
            {typeof props.user === 'undefined' && (
                <span> Loading! </span>
            )}
            {typeof props.user !== 'undefined' && (
            <>
                <div className="name">{props.user.name}</div>
                <button 
                    className="display"
                    onClick={() => handleDisplayClick(props.user.id)}
                >
                    {hello()}{props.user.displayName}
                </button>
            </>
            )}
        </div>
    )
}
