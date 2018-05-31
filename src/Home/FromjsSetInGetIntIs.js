import React, { Component } from 'react';
import { is, setIn, fromJS, getIn } from 'immutable';
import Button from '../common/Button';
const $$Obj = fromJS({ userInfo: { data: { name: 'Trust' } } });
export default class FromjsSetInGetIntIs extends Component {
    state = { data: $$Obj };
    shouldComponentUpdate(nextProps = {}, nextState = {}) {
        if (is(this.state['data'], nextState['data'])) {
            console.log('data相等,已阻止渲染');
            return false;
        }
        return true;
    }
    setStateData = title => {
        let $$newObj = setIn($$Obj, ['userInfo', 'data', 'name'], title);
        this.setState({ data: $$newObj });
    };
    render() {
        let c = getIn(this.state.data, ['userInfo', 'data', 'name']);
        return (
            <div>
                <div>{c}</div>
                {_BUTTON_.map((item, index) => (
                    <Button
                        key={index}
                        title={`update ${item.title}`}
                        onClick={this.setStateData.bind(this, item.title)}
                    />
                ))}
            </div>
        );
    }
}

const _BUTTON_ = [
    {
        title: 'TrustTheBoy'
    },
    {
        title: 'Trust'
    }
];
