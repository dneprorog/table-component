import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '../TableRow/TableRow';
import {
    Button,
    TableComponent,
    Thead,
    Tbody,
    Th,
    Tr
} from '../../ui';

export default function Table(props) {
    const {
        products,
        onProductTableUpdate,
        onRowAdd,
        onRowDel,
        disableButton
    } = props;

    const product = products.map(product => {
        const { id } = product;

        return (
            <TableRow
                key={id}
                onProductTableUpdate={onProductTableUpdate}
                product={product}
                onDelEvent={onRowDel}
                disableButton={disableButton}
            />
        )
    });

    return (
        <>
            <TableComponent>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Price</Th>
                        <Th>Quantity</Th>
                        <Th>Category</Th>
                        <Th />
                    </Tr>
                </Thead>

                <Tbody>
                    {product}
                </Tbody>
            </TableComponent>

            <Button
                type='button'
                onClick={onRowAdd}
                primary
            >
                Add
            </Button>
        </>
    )
};

Table.propTypes = {
    product: PropTypes.object,
    onProductTableUpdate: PropTypes.func,
    rowDel: PropTypes.func,
    onRowAdd: PropTypes.func,
    onRowDel: PropTypes.func,
    filterText: PropTypes.string,
};

