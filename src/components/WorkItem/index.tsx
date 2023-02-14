import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WorkItem.module.scss';

interface WorkItemProps {
  imageUrl: string
}

const WorkItem: React.FC<WorkItemProps> = ({imageUrl}) => {
  return (
    <div style={{backgroundImage: `url('${imageUrl}')`}} className={clsx(styles.wrapper)}>
      <p className={clsx(styles.viewProject)}>
        <Link to={'/'}>view project</Link>
      </p>
      {/* <img src={'https://uploads.turbologo.com/uploads/design/hq_preview_image/1488654/draw_svg20210507-22909-p58hc2.svg.png'} alt="projectLogo" /> */}
    </div>
  );
};

export default WorkItem;
