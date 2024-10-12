import LoginForm from '~/core/components/common/auth/login';

const SignIn = () => {
  return (
    <div className='grid h-screen place-content-center  bg-opacity-95 bg-orange bg-cover bg-no-repeat'>
      <div className='rounded-lg border bg-slate-50/40  p-8 shadow-lg'>
        <LoginForm />
      </div>
    </div>
  );
};

export default SignIn;
