import Image from 'next/image';

const CardCategories = ({ ...props }: any) => {
  return (
    <div className='flex flex-col items-center rounded-md p-2 '>
      <div className='flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-slate-100'>
        <Image
          width={200}
          height={200}
          src={props?.image}
          alt={props?.name}
          objectFit='contain'
        />
      </div>
      <h2 className='mt-2 text-center text-sm '>{props?.name}</h2>
    </div>
  );
};

export default CardCategories;
