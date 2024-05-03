export type cardProps = {
  heading: string;
  statistic: string;
};

const Card = ({ heading, statistic }: cardProps) => {
  return (
    <div className='w-full bg-white flex justify-center items-center flex-col text-center p-5 uppercase gap-2'>
      <div className='text-lg'>{heading}</div>
      <div className='text-3xl text-[#007c91]'>{statistic}</div>
    </div>
  );
};

export default Card;
