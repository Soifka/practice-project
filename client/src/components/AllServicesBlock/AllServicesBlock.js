import React, { Component } from 'react';
import { ReactComponent as Star } from '../../icons/star.svg'
import { ReactComponent as Users } from '../../icons/users-alt.svg';
import { ReactComponent as Briefcase } from '../../icons/briefcase.svg';
import { ReactComponent as Resources } from '../../icons/resources.svg';
import { ReactComponent as Comments } from '../../icons/comments.svg';
import { ReactComponent as Video } from '../../icons/video-camera-alt.svg';
import { ReactComponent as Stats } from '../../icons/stats.svg';
import { ReactComponent as World } from '../../icons/world.svg';
import { ReactComponent as Copyright } from '../../icons/copyright.svg';
import styles from './AllServicesBlock.module.sass';
import BlockItem from './BlockItem';


class AllServicesBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsArray: [
                {
                    header: 'Premium Domains',
                    text: 'Curated brandable domains avaliable for immediate purchase',
                    logo: <Star className={styles.iconStyle} /> 
                },
                {
                    header: 'Naming Contests',
                    text: 'Crowdsourced Name Ideas from our creative community',
                    logo: <Users className={styles.iconStyle} />
                },
                {
                    header: 'Managed Contests',
                    text: 'Full Agency-level Experience, led by Branding Consultant',
                    logo: <Briefcase className={styles.iconStyle} />
                },
                {
                    header: 'Logo Contests',
                    text: 'Professional logo design contests',
                    logo: <Resources className={styles.iconStyle} />
                },
                {
                    header: 'Tagline Contests',
                    text: 'Taglines, slogan, and strapline ideas from our creative community',
                    logo: <Comments className={styles.iconStyle} />
                },
                {
                    header: 'Video Creation',
                    text: 'Get perfectly branded videos optimized for results',
                    logo: <Video className={styles.iconStyle} />
                },
                {
                    header: 'Audience Testing',
                    text: 'Fast, effective naming and branding research with consumer test panels',
                    logo: <Stats className={styles.iconStyle} />
                },
                {
                    header: 'Trademark Research',
                    text: 'Comprehensive Trademark Research across 100+ countries',
                    logo: <World className={styles.iconStyle} />
                },
                {
                    header: 'Trademark Filing',
                    text: 'Trademark filing service by Licensed Trademark attorneys',
                    logo: <Copyright className={styles.iconStyle} />
                }
            ]
        }
    }

    getItems() {
        const { itemsArray } = this.state;
        return itemsArray.map((item) => 
        <BlockItem 
            header={item.header}
            text={item.text}
            logo={item.logo} 
        />)
    }

    render() {
        return (
            <div className={styles.blueWrapper}>
              <h2>All Branding Agency Services</h2>
              <p>
                Let our Squad of 250K+ experts from around the world help you launch
                your brand!
              </p>
              <div className={styles.cardWrapper}>
                {this.getItems()}
              </div>
            </div>
          );
    }
}


export default AllServicesBlock;
