import React from 'react';
import PropTypes from 'prop-types';

import {
    Input,
    Td
} from "../ui";

export default function TableCell({cellData, onProductTableUpdate}) {
    const {
        type,
        id,
        value,
    } = cellData;

    return (
        <Td primary>
            <Input
                type='text'
                name={type}
                id={id}
                value={value}
                onChange={onProductTableUpdate}
                secondary
            />
        </Td>
    );
};

TableCell.propTypes = {
    onProductTableUpdate: PropTypes.func,
    cellData: PropTypes.object,
    type: PropTypes.string,
    id: PropTypes.number,
    value: PropTypes.string,
};
