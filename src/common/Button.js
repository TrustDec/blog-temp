import * as React from 'react';
type Props = {
    title: string,
    onClick: () => false
};
const Button = (props: Props) => (
    <div className="button" onClick={props.onClick}>
        {props.title}
    </div>
);
export default Button;
