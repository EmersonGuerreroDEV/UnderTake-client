interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter = ({ count = 1, onDecrement, onIncrement }: CounterProps) => {
  return (
    <div className='flex h-9 w-full items-center justify-between rounded-xl bg-gray-200 px-4 shadow-xl'>
      <button
        onClick={onDecrement}
        className='flex h-5 w-5 items-center justify-center rounded-full  border-2 border-gray-400  font-extralight'
      >
        -
      </button>
      <p>{count}</p>
      <button
        onClick={onIncrement}
        className='flex h-5 w-5 items-center justify-center rounded-full  border-2 border-orange-400 font-extralight '
      >
        +
      </button>
    </div>
  );
};

export default Counter;
