import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './PricingPage.module.sass';
import { ReactComponent as Check } from '../../icons/check.svg';

const PricingPage = () => {
    return (
        <div>
            <Header />
            <section className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.priceInfo}>
                        <h3>Bronze</h3>
                        <p>Branding on a budget</p>
                        <span>US$299</span>
                    </div>
                    <a href='###' className={styles.btnStart}><Check className={styles.icon} />  Start</a>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.priceInfo}>
                        <h3>Gold</h3>
                        <p>Increase participation and basic brand validation</p>
                        <span>US$449</span>
                    </div>
                    <a href='###' className={styles.btnStart}><Check className={styles.icon} />  Start</a>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.priceInfo}>
                        <h3>Platinum</h3>
                        <p>Work with top-level creatives, plus agency-style brand validation</p>
                        <span>US$749</span>
                    </div>
                    <a href='###' className={styles.btnStart}><Check className={styles.icon} />  Start</a>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.priceInfo}>
                        <h3>Managed</h3>
                        <p>A full agency experience without the agency price tag</p>
                        <span>US$1499</span>
                    </div>
                    <a href='###' className={styles.btnStart}><Check className={styles.icon} />  Start</a>
                </div>
            </section>
            



            <Footer />
        </div>
    );
}

export default PricingPage;
