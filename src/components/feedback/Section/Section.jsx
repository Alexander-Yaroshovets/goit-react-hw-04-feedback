import ProTypes from 'prop-types';

import { SectionWrapper, SectionTitle } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: ProTypes.string.isRequired,
  children: ProTypes.node,
};
