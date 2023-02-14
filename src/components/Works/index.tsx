import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Tag from '../Tag';
import WorkItem from '../WorkItem';
import styles from './Works.module.scss';

const Works = () => {
  return (
    <div className={clsx(styles.works, 'container')}>
      <header>
        <Tag tag="h2">
          <h2>My Portfolio</h2>
        </Tag>
        <Tag tag="p">
          <p>
            A small gallery of recent projects chosen by me.
            <br />
            I've done them all together with amazing people
            <br />
            from companies around the globe.
          </p>
        </Tag>
        <Link className={clsx(styles.worksButton)} to={'/'}>
          <Button type="outlined">See more</Button>
        </Link>
      </header>
      <div className={clsx(styles.workItems)}>
        <WorkItem imageUrl="https://uploads.turbologo.com/uploads/design/hq_preview_image/1488654/draw_svg20210507-22909-p58hc2.svg.png" />
        <WorkItem imageUrl="https://st2.depositphotos.com/1592923/10265/v/600/depositphotos_102658762-stock-illustration-coffee-cup-with-beans-and.jpg" />
        <WorkItem imageUrl="https://genlogo.com/templates/genlogo_rus/img/section/genlogo-ideal.png" />
        <WorkItem imageUrl="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/Website/website_logo_6.png" />
        <WorkItem imageUrl="https://static.rfstat.com/logo-presets/1854/thumbnail_ca8d277d1cf0_1x.webp" />

        <WorkItem imageUrl="https://static.rfstat.com/logo-presets/1854/thumbnail_ca8d277d1cf0_1x.webp" />
        <WorkItem imageUrl="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/Website/website_logo_6.png" />
        <WorkItem imageUrl="https://st2.depositphotos.com/1592923/10265/v/600/depositphotos_102658762-stock-illustration-coffee-cup-with-beans-and.jpg" />
        <WorkItem imageUrl="https://genlogo.com/templates/genlogo_rus/img/section/genlogo-ideal.png" />
        <WorkItem imageUrl="https://uploads.turbologo.com/uploads/design/hq_preview_image/1488654/draw_svg20210507-22909-p58hc2.svg.png" />
      </div>
    </div>
  );
};

export default Works;
