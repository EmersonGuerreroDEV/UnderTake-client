interface Props {
  className?: string;
  maxScreen?: string;
  paddingX?: string;
  children: React.ReactNode;
}

const Wrapper = ({
  children,
  className = '',
  maxScreen = 'max-w-screen-xl',
  paddingX = 'px-6'
}: Props) => {
  return (
    <div
      className={`mx-auto flex w-full overflow-y-hidden   ${maxScreen} ${className} ${paddingX}`}
    >
      {children}
    </div>
  );
};
export default Wrapper;
