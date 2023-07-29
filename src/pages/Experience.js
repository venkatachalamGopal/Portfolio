import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#0c0513'>

      <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2022 - present'
          iconStyle={{ background: '#9e64c4', color: '#fff' }}
          icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>
            Full Stack Development - Course
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            GUVI Geek Networks, IITM Research Park, Chennai
          </h4>
          <p>
            Have a experience with hands-on projects, in the Full stack (MERN) Web
            Development Course.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2018 - 2022'
          iconStyle={{ background: '#007FFF', color: '#dddff' }}
          icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>
            Indusind Marketting Financial Services Limited.Chennai.
          </h3>
          <p>Designation : TeleCaller</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2015 - 2016'
          iconStyle={{ background: '#007FFF', color: '#dddff' }}
          icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>
            Allsec Technologies Private Limited.Chennai.
          </h3>

          <p>Designation : TeleCaller</p>

          
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2014-2015'
          iconStyle={{ background: '#007FFF', color: '#dddff' }}
          icon={<WorkIcon />}
        >
          <h4 className='vertical-timeline-element-subtitle'>
            Aegis Private Limited.Chennai.
          </h4>
          <p>Designation : TeleCaller</p>
        </VerticalTimelineElement>

       

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
