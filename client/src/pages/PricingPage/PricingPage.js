import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './PricingPage.module.sass';
import classNames from 'classnames';
import { ReactComponent as Check } from '../../icons/check.svg';

const PricingPage = () => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.bronzePriceBox}>
                        <h3>Bronze</h3>
                        <p>Branding on a budget</p>
                        <span>US$299</span>
                    </div>
                    <ul>
                        <li className={styles.underlined}>Prize to Winner - $135 (Included)</li>
                        <li>Validation Services & Upgrades ($39 value)</li>
                        <li className={classNames(styles.marked, styles.underlined)}><Check className={styles.listMark} />  Matching.com URL</li>
                        <li>Expected 300+ Entries</li>
                    </ul>
                    <a href='###' target='_blank' className={styles.bronzeBtnStart}><Check className={styles.icon} />  Start</a>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.goldPriceBox}>
                        <h3>Gold</h3>
                        <p>Increase participation and basic brand validation</p>
                        <span>US$449</span>
                    </div>
                    <ul>
                        <li className={styles.underlined}>Prize to Winner - $200 (Included)</li>
                        <li>Validation Services & Upgrades ($305 value)</li>
                        <li className={styles.marked}><Check className={styles.listMark} />  Matching.com URL</li>
                        <li className={styles.marked}><Check className={styles.listMark} />  Instant Trademark Check (One Database)</li>
                        <li className={styles.marked}><Check className={styles.listMark} />  NDA and More Privacy</li>
                        <li className={styles.marked}><Check className={styles.listMark} />  Project Promotion (Basic)</li>
                        <li className={classNames(styles.marked, styles.underlined)}><Check className={styles.listMark} />  Comprehensive Trademark Research</li>
                        <li className={styles.underlined}>Expected 600+ Entries</li>
                        <li>Partial Refund Option</li>
                    </ul>
                    <a href='###' target='_blank' className={styles.goldBtnStart}><Check className={styles.icon} />  Start</a>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.platinumPriceBox}>
                        <h3>Platinum</h3>
                        <p>Work with top-level creatives, plus agency-style brand validation</p>
                        <span>US$749</span>
                    </div>
                    <ul>
                        <li className={styles.underlined}>Prize to Winner - $300 (Included)</li>
                        <li>Validation Services & Upgrades ($979 value)</li>
                        <li className={styles.marked}><Check className={styles.listMark} />  Audience Testing (Up to 6 Names) <a href='###' target='_blank'>View Sample Report</a></li>
                        <li className={styles.marked}><Check className={styles.listMark} />  Comprehensive Trademark Research (3 Names)</li>
                        <li className={styles.marked}><Check className={styles.listMark} />  Linguistics Analysis (3 Names)</li>
                        <li className={styles.marked}><Check className={styles.listMark} />  Tier A Creatives</li>
                        <li className={styles.marked}><Check className={styles.listMark} />  Matching.com URL</li>
                        <li className={styles.marked}><Check className={styles.listMark} />  Instant Trademark Check (4 Databases)</li>
                        <li className={styles.marked}><Check className={styles.listMark} />  NDA and More Privacy</li>
                        <li className={styles.marked}><Check className={styles.listMark} />  Enhanced Project Promotion</li>
                        <li className={classNames(styles.marked, styles.underlined)}><Check className={styles.listMark} />  Team Collaboration Tools</li>
                        <li className={styles.underlined}>Expected 1000+ Entries</li>
                        <li>Partial Refund Option</li>
                    </ul>
                    <a href='###' target='_blank' className={styles.platinumBtnStart}><Check className={styles.icon} />  Start</a>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.managedPriceBox}>
                        <h3>Managed</h3>
                        <p>A full agency experience without the agency price tag</p>
                        <span>US$1499</span>
                    </div>
                    <ul>
                        <li>Receive optimum results from your Platinum Contest by launching a Managed Contest Package and working one-on-one with an experienced Squadhelp Branding Consultant.</li>
                        <li>With significantly more validation services, professional brief creation, and daily management of your contest by your Branding Expert, you'll receive an enhanced branding experience to closeout your branding project.</li>
                        <li>Learn More about <a href='###' target='_blank'>Managed Contest Service</a></li>
                    </ul>
                    <a href='###' target='_blank' className={styles.managedBtnStart}><Check className={styles.icon} />  Start</a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PricingPage;
