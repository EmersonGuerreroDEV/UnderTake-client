import Image from 'next/image';

const CardCategories = ({ ...props }: any) => {
  return (
    <div className='flex flex-col items-center rounded-md p-2 shadow'>
      <div className='flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-slate-100'>
        <Image
          width={40}
          height={40}
          src={props?.imagen}
          alt={props?.nombre}
          objectFit='cover'
        />
      </div>
      <h2 className='mt-2 text-center text-sm '>{props?.nombre}</h2>
    </div>
  );
};

export default CardCategories;
