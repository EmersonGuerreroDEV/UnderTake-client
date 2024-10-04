interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter = ({ count = 0, onDecrement, onIncrement }: CounterProps) => {
  return (
    <div className='flex h-9 w-full items-center justify-between rounded-lg bg-gray-200 px-2'>
      <button
        onClick={onDecrement}
        className='flex h-4 w-4 items-center justify-center rounded-full border border-black/80 font-extralight hover:border-red-400 hover:text-red-400'
      >
        -
      </button>
      <p>{count}</p>
      <button
        onClick={onIncrement}
        className='flex h-4 w-4 items-center justify-center rounded-full border border-black/80 font-extralight hover:border-green-400 hover:text-green-400'
      >
        +
      </button>
    </div>
  );
};

export default Counter;
