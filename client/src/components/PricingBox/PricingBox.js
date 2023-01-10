import React from 'react';
import styles from './PricingBox.module.sass';

const PricingBox = (props) => {
    const {type, header, shortDescr, price} = props;

    return (
        <div className={styles[`${type}PriceBox`]}>
            <h3>{header}</h3>
            <p>{shortDescr}</p>
            <span>{price}</span>
        </div>
    );
}

export default PricingBox;
