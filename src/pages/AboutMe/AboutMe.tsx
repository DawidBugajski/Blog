import React from 'react';

type AboutMeProps = {
  title: string;
};

function AboutMe({ title }: AboutMeProps) {
  return <div>{title}</div>;
}

export default AboutMe;
