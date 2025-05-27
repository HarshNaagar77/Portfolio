import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function BasicTimeline() {
  return (
    <Timeline className=' sm:-ml-[170vh] -ml-[35vh]'>
      <TimelineItem sx={{ mb: 4 }}>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector sx={{ minHeight: 80 }} />
        </TimelineSeparator>
        <TimelineContent>
          <span className='font-semibold'>Technical Head</span>
          <br />
          <span>
            Hashtag society , Jemtec
            <br />
            <span><i class="bi bi-calendar"></i> Year 2023-Present</span>
          </span>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem sx={{ mb: 4 }}>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector sx={{ minHeight: 80 }} />
        </TimelineSeparator>
        <TimelineContent>
          <span className='font-semibold'>Junior software dev</span>
          <br />
          <span>
            Codesoft
            <br />
            <span><i class="bi bi-calendar"></i> august 2024- october 2024</span>
          </span>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}
