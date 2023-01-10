import React from 'react';
import PricingBox from '../PricingBox/PricingBox';
import PricingPageList from '../PricingPageList/PricingPageList';
import classNames from 'classnames';
import { ReactComponent as Check } from '../../icons/check.svg';
import styles from './PricingBlock.module.sass';

const PricingBlock = (props) => {
    const { type, header, shortDescr, price, itemsList, url } = props.block;

    console.log(itemsList)
    
    return (
        <div className={styles.wrapper}>
            <PricingBox 
                type={type}
                header={header}
                shortDescr={shortDescr}
                price={price}
            />
            <ul className={styles.lineTop}>
                <PricingPageList
                    itemsList={itemsList}
                />
            </ul>
            <a href={url} target='_blank' className={styles[`${type}BtnStart`]}><Check className={styles.icon} />  Start</a>
        </div>        
    );
}

export default PricingBlock;
