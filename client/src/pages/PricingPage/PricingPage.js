//import React from 'react';
import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './PricingPage.module.sass';
//import classNames from 'classnames';
import PricingBlock from '../../components/PricingBlock/PricingBlock';



class PricingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blockArray: [
                {
                    type: 'bronze',
                    header: 'Bronze',
                    shortDescr: 'Branding on a budget',
                    price: 'US$299',
                    itemsList: [
                        {
                            type: 'unmarked',
                            text: 'Prize to Winner - $135 (Included)',
                            urlInfo: null
                        },
                        {
                            type: 'unmarked',
                            text: 'Validation Services & Upgrades ($39 value)',
                            urlInfo: null
                        },
                        {
                            type: 'marked',
                            text: 'Matching.com URL',
                            urlInfo: null
                        },
                        {
                            type: 'unmarked',
                            text: 'Expected 300+ Entries',
                            urlInfo: null
                        }
                    ],
                    url: '###' 
                },
                {
                    type: 'gold',
                    header: 'Gold',
                    shortDescr: 'Increase participation and basic brand validation',
                    price: 'US$449',
                    itemsList: [
                        {
                            type: 'unmarked',
                            text: 'Prize to Winner - $200 (Included)',
                            urlInfo: null
                        },
                        {
                            type: 'unmarked',
                            text: 'Validation Services & Upgrades ($305 value)',
                            urlInfo: null
                        },
                        {
                            type: 'marked',
                            text: 'Matching.com URL',
                            urlInfo: null
                        },
                        {
                            type: 'marked',
                            text: 'Instant Trademark Check (One Database)',
                            urlInfo: null
                        },
                        {
                            type: 'marked',
                            text: 'NDA and More Privacy',
                            urlInfo: null
                        },
                        {
                            type: 'marked',
                            text: 'Project Promotion (Basic)',
                            urlInfo: null
                        },
                        {
                            type: 'marked',
                            text: 'Comprehensive Trademark Research',
                            urlInfo: null
                        },
                        {
                            type: 'unmarked',
                            text: 'Expected 600+ Entries',
                            urlInfo: null
                        },
                        {
                            type: 'unmarked',
                            text: 'Partial Refund Option',
                            urlInfo: null
                        }
                    ],
                    url: '###' 
                },
                {
                    type: 'platinum',
                    header: 'Platinum',
                    shortDescr: 'Work with top-level creatives, plus agency-style brand validation',
                    price: 'US$749',
                    itemsList: [
                        {
                            type: 'unmarked',
                            text: 'Prize to Winner - $300 (Included)',
                            urlInfo: null
                        },
                        {
                            type: 'unmarked',
                            text: 'Validation Services & Upgrades ($979 value)',
                            urlInfo: null
                        },
                        {
                            type: 'marked',
                            text: 'Audience Testing (Up to 6 Names)',
                            urlInfo: <a href='###' target='_blank'>View Sample Report</a>
                        },
                        {
                            type: 'marked',
                            text: 'Comprehensive Trademark Research (3 Names)',
                            urlInfo: null
                        },
                        {
                            type: 'marked',
                            text: 'Linguistics Analysis (3 Names)',
                            urlInfo: null
                        },
                        {
                            type: 'marked',
                            text: 'Tiar A Creatives',
                            urlInfo: null
                        },
                        {
                            type: 'marked',
                            text: 'Matching.com URL',
                            urlInfo: null
                        },
                        {
                            type: 'marked',
                            text: 'Instant Trademark Check (4 Databases)',
                            urlInfo: null
                        },
                        {
                            type: 'marked',
                            text: 'NDA and More Privacy',
                            urlInfo: null
                        },
                        {
                            type: 'marked',
                            text: 'Enhanced Project Promotion',
                            urlInfo: null
                        },
                        {
                            type: 'marked',
                            text: 'Team Collaboration Tools',
                            urlInfo: null
                        },
                        {
                            type: 'unmarked',
                            text: 'Expected 1000+ Entries',
                            urlInfo: null
                        },
                        {
                            type: 'unmarked',
                            text: 'Partial Refund Option',
                            urlInfo: null
                        }
                    ],
                    url: '###' 
                },
                {
                    type: 'managed',
                    header: 'Managed',
                    shortDescr: 'A full agency experience without the agency price tag',
                    price: 'US$1499',
                    itemsList: [
                        {
                            type: 'unmarked',
                            text: 'Receive optimum results from your Platinum Contest by launching a Managed Contest Package and working one-on-one with an experienced Squadhelp Branding Consultant.',
                            urlInfo: null
                        },
                        {
                            type: 'unmarked',
                            text: `With significantly more validation services, professional brief creation, and daily management of your contest by your Branding Expert, you'll receive an enhanced branding experience to closeout your branding project.`,
                            urlInfo: null
                        },
                        {
                            type: 'unmarked',
                            text: 'Learn More about',
                            urlInfo: <a href='###' target='_blank'>Managed Contest Service</a>
                        }
                    ],
                    url: '###'
                },
            ]
        }
    }
    
    getBlocks() {
        const { blockArray } = this.state;
        return blockArray.map((block) => 
        <PricingBlock 
            block={block} 
        />)
    }

    render() {
        return (
            <>
                <Header />
                <div className={styles.container}>
                    {this.getBlocks()}
                </div>
                <Footer />
            </>
        );
    }
}

export default PricingPage;