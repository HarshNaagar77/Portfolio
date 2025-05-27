import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function BasicTimeline() {
  return (
    <Timeline className='sm:-ml-[170vh] -ml-[35vh]'>
      <TimelineItem sx={{ mb: 4 }}>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector sx={{ minHeight: 80 }} />
        </TimelineSeparator>
        <TimelineContent>
          <span className='font-semibold'>10th</span>
          <br />
          <span>
            Preet Public School
            <br />
            <span><i class="bi bi-calendar"></i> Year 2018-2019</span>
          </span>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem sx={{ mb: 4 }}>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector sx={{ minHeight: 80 }} />
        </TimelineSeparator>
        <TimelineContent>
          <span className='font-semibold'>12th</span>
          <br />
          <span>
            Preet Public School
            <br />
            <span><i class="bi bi-calendar"></i> Year 2021-2022</span>
          </span>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <span className='font-semibold'>Btech Cse</span>
          <br />
          <span>
            Guru gobind singh indraprastha university
            <br />
            <span><i class="bi bi-calendar"></i> Year 2022-2026</span>
          </span>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
