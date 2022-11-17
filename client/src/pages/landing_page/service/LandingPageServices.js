import FindImg from '../../../images/landing_find.svg';
import CompareImg from '../../../images/landing_compare.svg';
import CareerImg from '../../../images/landing_career.svg';
import ExploreImg from '../../../images/landing_explore.svg';

// Props
export const bgGradient = `linear-gradient(
  90.65deg,
  #10143b 2.13%,
  rgba(16, 20, 59, 0.579917) 34.9%,
  rgba(16, 20, 59, 0) 99.44%
)`;

export const heading = 'Let’s help you make the best educational choices';

export const smallText =
  'You don’t have to travel distances or search a lot of sites. School scouting made easy.';

export const arrowCardList = [
  {
    id: 1,
    image: `${ExploreImg}`,
    text: 'Explore Schools',
  },
  {
    id: 2,
    image: `${CompareImg}`,
    text: 'Compare Schools',
  },
  {
    id: 3,
    image: `${CareerImg}`,
    text: 'Career Advisory',
  },
  {
    id: 4,
    image: `${FindImg}`,
    text: 'Find scholarship',
  },
];
