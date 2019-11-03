import React, {Component} from 'react';
import PropTypes from 'prop-types';
import  data  from './data.json';

import Table from './components';
import {
    Container,
    DotWrapper,
    Dot,
    Loading
} from './components/ui';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.promise = new Promise((resolve, rejected) => {
            if(typeof data === "object") {
                setTimeout(() => resolve(data), this.timiOut);
            } else {
                rejected('Error dont find data object');
            }
        })
    }

    timiOut = 1000;

    state = {
        products: [],
        isLoaded: false,
        disableButton: false,
    };

    product = {
        id: '',
        name: '',
        price: '',
        category: '',
        quantity: ''
    };

    render() {
        const {
            products,
            isLoaded
        } = this.state;

        if (!isLoaded) {
            return (
                <Loading>
                    Loading
                    <DotWrapper>
                        <Dot delay="0s" />
                        <Dot delay=".1s" />
                        <Dot delay=".2s" />
                    </DotWrapper>
                </Loading>
            )
        } else {
            return (
                <Container>
                    <Table
                        onProductTableUpdate={this.handleProductTable}
                        onRowAdd={this.handleAddEvent}
                        onRowDel={this.handleRowDel}
                        products={products}
                        disableButton={this.state.disableButton}
                        deleteRow={this.deleteRow}
                        addRow={this.addRow}
                        changeCell={this.changeCell}
                    />
                </Container>
            );
        }
    }

    async componentDidMount() {
        await this.promise.then((data) => {
            this.setState({
                products: data,
                isLoaded: true,
            })
        }).catch(err => console.log(err));
    }

    deleteRow = () => {
        console.log('Delete table row');
    };

    addRow = () => {
        console.log('Add table row');
    };

    changeCell = () => {
        console.log('Change table cell');
    };

    handleRowDel = (product) => {
        const { products } = this.state;
        const id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        let index = null;

        if (products.length === 1) {
            this.setState({
                products: [{...this.product, id}],
                disableButton: true,
            });

            this.deleteRow();
            return;
        }

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === product.id) {
                index = i;
            }
        }

        products.splice(index, 1);
        this.setState(products);
        this.deleteRow();
    };

    handleAddEvent = () => {
        const { products } = this.state;
        const id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);

        products.push({...this.product, id});

        this.setState({
            products,
            disableButton: false,
        });

        this.addRow()
    };

    handleProductTable = (e) => {
        const { products } = this.state;
        const target = e.target;

        const item = {
            id: target.id,
            name: target.name,
            value: target.value
        };

        const newProducts = products.map(product => {
            for (let key in product) {
                if (key === item.name && product.id === item.id) {
                    product[key] = item.value;
                }
            }

            this.changeCell();
            return product;
        });

        this.setState(newProducts);
        this.changeCell();
    };
}

App.propTypes = {
    handleRowDel: PropTypes.func,
    handleAddEvent: PropTypes.func,
    handleProductTable: PropTypes.func,
};
