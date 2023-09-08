import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { usePocketData } from '@/api/usePocketData';
import { Helmet } from 'react-helmet-async';
import { Toaster, toast } from 'react-hot-toast';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Form from '@/components/Form';
import regEx from '@/utils/regEx';

function SignUpPage() {
  const { createData, getListData } = usePocketData('users');
  const { data: userData } = useQuery(['users'], () =>
    getListData({ fields: 'username,email,name' }),
  );
  const navigate = useNavigate();
  const idRef = useRef(null);
  const emailRef = useRef(null);
  const nickNameRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const agreeRef = useRef(null);

  const [isShowPassword, setIsShowPassword] = useState({
    password: false,
    passwordConfirm: false,
  });

  const handleCheckId = () => {
    const username = idRef.current.value;
    if (!regEx.id(username)) {
      toast.error('아이디는 영문,숫자만 입력이 가능합니다.');
      return;
    }
    if (userData.some((user) => user.username === username)) {
      toast.error('이미 사용 중인 아이디입니다.');
    } else {
      toast.success('사용 가능한 아이디입니다.');
    }
  };

  const handleCheckEmail = () => {
    const email = emailRef.current.value;
    if (!regEx.email(email)) {
      toast.error('유효한 이메일을 입력해주세요.');
      return;
    }
    if (userData.some((user) => user.email === email)) {
      toast.error('이미 사용 중인 이메일입니다.');
    } else {
      toast.success('사용 가능한 이메일입니다.');
    }
  };

  const handleCheckName = () => {
    const nickName = nickNameRef.current.value;
    if (nickName.trim() === '') {
      toast.error('닉네임을 입력해주세요.');
      return;
    }
    if (userData.some((user) => user.name === nickName)) {
      toast.error('이미 사용 중인 닉네임입니다.');
    } else {
      toast.success('사용 가능한 닉네임입니다.');
    }
  };

  const handleShowPassword = (field) => {
    setIsShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleAllAgree = () => {
    const checkbox = document.querySelectorAll('.checkbox');
    const allChecked = checkbox[0].checked;
    checkbox.forEach((checkbox) => {
      checkbox.checked = allChecked;
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = idRef.current.value;
    const email = emailRef.current.value;
    const name = nickNameRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;
    const agree = agreeRef.current.checked;

    const userInfo = {
      username,
      email,
      name,
      password,
      passwordConfirm,
    };

    if (!regEx.id(username)) {
      idRef.current.classList.add('border-b-accent');
      toast.error('아이디는 영문,숫자만 입력이 가능합니다.');
      return;
    } else {
      idRef.current.classList.remove('border-b-accent');
    }

    if (!regEx.email(email)) {
      emailRef.current.classList.add('border-b-accent');
      toast.error('유효한 이메일을 입력해주세요.');
      return;
    } else {
      emailRef.current.classList.remove('border-b-accent');
    }

    if (!regEx.name(name)) {
      nickNameRef.current.classList.add('border-b-accent');
      toast.error('닉네임은 12자리까지 입력이 가능합니다.');
      return;
    } else {
      nickNameRef.current.classList.remove('border-b-accent');
    }

    if (!regEx.pw(password)) {
      passwordRef.current.classList.add('border-b-accent');
      toast.error('유효한 비밀번호를 입력해주세요.');
      return;
    } else {
      passwordRef.current.classList.remove('border-b-accent');
    }

    if (passwordConfirm !== password) {
      passwordConfirmRef.current.classList.add('border-b-accent');
      toast.error('비밀번호가 일치하지 않습니다.');
      return;
    } else {
      passwordConfirmRef.current.classList.remove('border-b-accent');
    }

    if (!agree) {
      toast.error('필수 항목을 체크해주세요.');
      return;
    }

    try {
      toast.success('회원가입 되었습니다.');
      await createData(userInfo);
      navigate('/');
    } catch (error) {
      toast.error('서버 오류');
    }
  };

  return (
    <>
      <Helmet>
        <title>회원가입</title>
      </Helmet>
      <Header search='search' back='back' className='text-xl font-semibold' title='회원가입' />
      <section className='px-5 pb-20 pt-10'>
        <h2 className='sr-only'>회원가입 페이지</h2>
        <Form onSubmit={handleRegister} className='flex flex-col items-center'>
          <div className='flex w-full max-w-md justify-center gap-1'>
            <Input
              inputRef={idRef}
              label='아이디'
              type='text'
              id='id'
              placeholder='아이디'
              className='mb-8 h-9 w-full flex-1 border-b border-gray p-2 outline-primary'
              labelClass='sr-only'
            />
            <Button
              type='button'
              className='flex-2 mt-1 flex h-7 items-center rounded-full border px-2 font-bold text-primary hover:bg-primary  hover:text-white'
              onClick={handleCheckId}
            >
              중복확인
            </Button>
          </div>
          <div className='flex w-full max-w-md justify-center gap-1'>
            <Input
              inputRef={emailRef}
              label='이메일'
              type='text'
              id='email'
              placeholder='이메일 abc@gamil.com'
              className='mb-8 h-9 w-full flex-1 border-b border-gray p-2 outline-primary'
              labelClass='sr-only'
            />
            <Button
              type='button'
              className='flex-2 mt-1 flex h-7 items-center rounded-full border px-2 font-bold text-primary hover:bg-primary  hover:text-white'
              onClick={handleCheckEmail}
            >
              중복확인
            </Button>
          </div>
          <div className='flex w-full max-w-md justify-center gap-1'>
            <Input
              inputRef={nickNameRef}
              label='닉네임'
              type='text'
              id='nickName'
              placeholder='닉네임'
              className='mb-8 h-9 w-full flex-1 border-b border-gray p-2 outline-primary'
              labelClass='sr-only'
            />
            <Button
              type='button'
              className='flex-2 mt-1 flex h-7 items-center rounded-full border px-2 font-bold text-primary hover:bg-primary  hover:text-white'
              onClick={handleCheckName}
            >
              중복확인
            </Button>
          </div>
          <div className='relative flex w-full max-w-md justify-center'>
            <Input
              inputRef={passwordRef}
              label='비밀번호'
              type={isShowPassword.password ? 'text' : 'password'}
              id='password'
              placeholder='비밀번호'
              className='mb-8 h-9 w-full border-b border-gray p-2 outline-primary'
              labelClass='sr-only'
            />
            <img
              src={isShowPassword.password ? '/signup-open.svg' : '/signup-hide.svg'}
              alt={isShowPassword.password ? '오픈' : '숨김'}
              className='absolute right-0 top-2'
              onClick={() => handleShowPassword('password')}
            />
          </div>
          <div className='relative flex w-full max-w-md justify-center'>
            <Input
              inputRef={passwordConfirmRef}
              label='비밀번호 확인'
              type={isShowPassword.passwordConfirm ? 'text' : 'password'}
              id='passwordConfirm'
              placeholder='비밀번호 확인'
              className='mb-8 h-9 w-full border-b border-gray p-2 outline-primary'
              labelClass='sr-only'
            />
            <img
              src={isShowPassword.passwordConfirm ? '/signup-open.svg' : '/signup-hide.svg'}
              alt={isShowPassword.passwordConfirm ? '오픈' : '숨김'}
              className='absolute right-0 top-2'
              onClick={() => handleShowPassword('passwordConfirm')}
            />
          </div>

          <ul className='flex w-full max-w-md flex-col gap-2'>
            <li>
              <Input
                type='checkbox'
                label='전체 동의 (선택 포함)'
                id='all'
                className="checkbox cursor-pointer appearance-none pr-2 before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:align-middle checked:before:bg-[url('/signup-agree.svg')]"
                labelClass='cursor-pointer text-lg font-semibold text-gray3 '
                onClick={handleAllAgree}
              />
            </li>
            <li>
              <Input
                inputRef={agreeRef}
                type='checkbox'
                label='만 14세 이상 이용 동의(필수)'
                id='agreeAge'
                className="checkbox cursor-pointer appearance-none pr-2 before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:align-middle checked:before:bg-[url('/signup-agree.svg')]"
                labelClass='cursor-pointer font-semibold text-gray3'
              />
            </li>
            <li>
              <Input
                type='checkbox'
                label='개인정보 수집 및 이용 동의(선택)'
                id='agreeInfo'
                className="checkbox cursor-pointer appearance-none pr-2 before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:align-middle checked:before:bg-[url('/signup-agree.svg')]"
                labelClass='cursor-pointer font-semibold text-gray3'
              />
            </li>
            <li>
              <Input
                type='checkbox'
                label='특가, 쿠폰 등 마케팅 수신 동의(선택)'
                id='agreeAd'
                className="checkbox cursor-pointer appearance-none pr-2 before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:align-middle checked:before:bg-[url('/signup-agree.svg')]"
                labelClass='cursor-pointer font-semibold text-gray3'
              />
            </li>
            <li>
              <Input
                type='checkbox'
                label='위치 정보 이용 약관 동의(선택)'
                id='agreeLocation'
                className="checkbox cursor-pointer appearance-none pr-2 before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:align-middle checked:before:bg-[url('/signup-agree.svg')]"
                labelClass='cursor-pointer font-semibold text-gray3'
              />
            </li>
            <li>
              <Input
                type='checkbox'
                label='장기 미접속 시에도 계정 유지(선택)'
                id='agreeGhost'
                className="checkbox cursor-pointer appearance-none pr-2 before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:align-middle checked:before:bg-[url('/signup-agree.svg')]"
                labelClass='cursor-pointer font-semibold text-gray3'
              />
            </li>
          </ul>
          <Button
            type='submit'
            className='mt-6 w-full max-w-md rounded-lg border py-2 text-center font-bold text-primary hover:bg-primary hover:text-white'
          >
            회원가입
          </Button>
        </Form>
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: '#5D6FFF',
                color: 'white',
              },
            },
            error: {
              style: {
                background: '#E03B69',
                color: 'white',
              },
            },
          }}
        />
      </section>
    </>
  );
}
export default SignUpPage;
