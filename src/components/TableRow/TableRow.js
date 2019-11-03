import React from 'react';
import PropTypes from 'prop-types';

import TableCell from '../TableCell/TableCell';

import {
    Tr,
    Td,
    Button
} from '../../ui';

export default function  TableRow({product, onDelEvent, onProductTableUpdate, disableButton}) {
    const {
        name,
        id,
        price,
        quantity,
        category,
    } = product;

    return (
        <Tr>
            <TableCell
                onProductTableUpdate={onProductTableUpdate}
                cellData={{
                    type: 'name',
                    value: name,
                    id: id,
                }}
            />

            <TableCell
                onProductTableUpdate={onProductTableUpdate}
                cellData={{
                    type: 'price',
                    value: price,
                    id: id,
                }}
            />

            <TableCell
                onProductTableUpdate={onProductTableUpdate}
                cellData={{
                    type: 'quantity',
                    value: quantity,
                    id: id,
                }}
            />

            <TableCell
                onProductTableUpdate={onProductTableUpdate}
                cellData={{
                    type: 'category',
                    value: category,
                    id: id,
                }}
            />

            <Td secondary>
                <Button
                    onClick={() => onDelEvent(product)}
                    secondary
                    disableButton={disableButton}
                >
                    Delete
                </Button>
            </Td>
        </Tr>
    )
};

TableRow.propTypes = {
    onDelEvent: PropTypes.func,
    onProductTableUpdate: PropTypes.func,
    cellData: PropTypes.object,
    type: PropTypes.string,
    id: PropTypes.number,
    value: PropTypes.string,
};
