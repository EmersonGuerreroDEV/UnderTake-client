import RegisterForm from '~/core/components/common/auth/register';

const SignUp = () => {
  return (
    <div className='grid min-h-screen place-content-center'>
      <div className='mt-12 rounded-lg border bg-slate-50/40  shadow-lg'>
        <RegisterForm />
      </div>
    </div>
  );
};

export default SignUp;
