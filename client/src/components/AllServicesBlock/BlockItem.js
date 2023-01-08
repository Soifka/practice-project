import React from 'react';
import { ReactComponent as Arrow } from '../../icons/angle-small-right.svg';
import styles from './AllServicesBlock.module.sass';


const BlockItem = (props) => {
  return (
    <div>
      <section>
        <h3>
          {props.logo} {props.header}
        </h3>
        <p>{props.text}</p>
      </section>
      <button className={styles.btnArrow}>
        <Arrow className={styles.iconStyle} />
      </button>
    </div>
  );
};

export default BlockItem;