import React from 'react';
import { ReactComponent as Check } from '../../icons/check.svg';
import styles from './PricingPageList.module.sass';


const PricingPageList = ({itemsList}) => {

    console.log(itemsList)

    return itemsList.map((item) => {
        return item.type === 'unmarked' ? (<li className={styles.topLine}>{item.text} {item.urlInfo}</li>) : (<li className={styles.marked}><Check className={styles.listMark} />  {item.text} {item.urlInfo}</li>)
    })
}

export default PricingPageList;
