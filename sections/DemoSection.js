import { Typography } from '@mui/material';
import SectionWrapper from './SectionWrapper';

export default function Section({ id, bgcolor }) {
  return (
    <SectionWrapper
      title={`Demo section ${id}`}
      description="Demo description."
      id={id}
      bgcolor={bgcolor}
    >
      <Typography variant="h2">Demo Section</Typography>
    </SectionWrapper>
  );
}
