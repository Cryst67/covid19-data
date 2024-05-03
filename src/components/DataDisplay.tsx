import Card from './Card';
import { cardProps } from './Card';

const data: cardProps[] = [
  { heading: 'COVID-19 HOSPITAL ADMISSIONS (PAST WEEK)', statistic: '5,615' },
  { heading: '% CHANGE IN COVID-19 HOSPITAL ADMISSIONS', statistic: '-14.4%' },
  {
    heading: 'COVID-19 HOSPITAL ADMISSIONS PER 100,000 (PAST WEEK)',
    statistic: '1.69',
  },
];

const DataDisplay = () => {
  return (
    <div className='bg-[#cce5e9] p-5'>
      <div className=' flex justify-evenly flex-col lg:flex-row gap-5'>
        {data.map(({ heading, statistic }, index) => (
          <Card key={index} heading={heading} statistic={statistic} />
        ))}
      </div>
      <div className='text-right text-xs pt-2 text-[#111111]'>
        CDC | Data through: April 20, 2024. Posted: April 29, 2024
      </div>
    </div>
  );
};

export default DataDisplay;
