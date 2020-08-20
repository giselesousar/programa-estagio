import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import {FaQuestionCircle} from 'react-icons/fa';

export default function TooltipComponent(props) {
    const { content } = props;

    return (
        <OverlayTrigger overlay={
            <Tooltip id="tooltip-disabled">
                {content}
            </Tooltip>
        }>
            <span className="d-inline-block">
            <FaQuestionCircle style={{
                    margin: 8
                }} size={16}/>
            </span>
        </OverlayTrigger>
    )
}