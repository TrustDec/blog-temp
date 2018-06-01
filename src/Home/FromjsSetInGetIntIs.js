import React, { Component } from 'react';
import { is, setIn, fromJS, getIn,Map } from 'immutable';
import Button from '../common/Button';
const $$Obj = fromJS({ userInfo: { data: { name: 'Trust' } } });
const $$times = Map({times:0});
export default class FromjsSetInGetIntIs extends Component {
    state = { data: $$Obj,time:$$times };
    shouldComponentUpdate(nextProps = {}, nextState = {}) {
        let thisState = this.state || {};
        for (const key in nextState) {
            if (thisState[key]!==nextState[key] && !is(thisState[key],nextState[key])) {
                console.log('data不相等,允许渲染');
                return true;
            }
        }
        console.log('data相等,已阻止渲染');
        return false;
    }
    setStateData = title => {
        let $$newObj = setIn($$Obj, ['userInfo', 'data', 'name'], title);
        this.setState({ data: $$newObj });
    };
    handleAdd = () => {
        this.setState(({time})=>({
            time:time.update('times',v=>v+1)})
        );
    }
    render() {
        let name = getIn(this.state.data, ['userInfo', 'data', 'name']);
        let time = this.state.time.get('times');
        return (
            <div>
                <div>{name}</div>
                <div>{time}</div>
                {_BUTTON_.map((item, index) => (
                    <Button
                        key={index}
                        title={`update ${item.title}`}
                        onClick={this.setStateData.bind(this, item.title)}
                    />
                ))}
                <Button title="update" onClick={this.handleAdd}/>
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
