// @LIBRARIES
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { setName, setPassword, setConfirmPassword, setPhoneNumber } from '../../redux/store'
// @REACT-ICONS
import { BsCheckLg } from 'react-icons/bs'
// @COMPONENTS
import NationSelect from '../common/NationSelect'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const userName = useSelector((state: any) => state.auth.userName)
  const email = useSelector((state: any) => state.auth.email)
  const password = useSelector((state: any) => state.auth.password)
  const phoneNumber = useSelector((state: any) => state.auth.phoneNumber)
  const confirmPassword = useSelector((state: any) => state.auth.confirmPassword)
  
  const [isFocused, setIsFocused] = useState(false)
  const [isButtonActive, setIsButtonActive] = useState(false)
  const [countDown, setCountDown] = useState(0);

  const nameCheck = userName === "" ? null : (userName.length >= 3 && /^[a-zA-Z0-9가-힣]+$/.test(userName)) ? null : <p className='text-[12px] text-red-500'>이름에는 공백과 특수문자가 포함될 수 없습니다.</p>;
  const passwordCheck = (password === confirmPassword || !password || !confirmPassword) 
  ? null 
  : <p className='mb-2 text-[12px] text-red-500'>비밀번호가 서로 일치하지 않습니다.</p>;

  const activateButton = phoneNumber.length === 11;

  useEffect(() => {
    if (
      userName.length >= 3 && /^[a-zA-Z0-9가-힣]+$/.test(userName) &&
      password && confirmPassword &&
      password === confirmPassword
    ) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  },[userName, password, confirmPassword])

  const handleBack = () => {
    const confirm = window.confirm('회원가입을 취소하고 이전 화면으로 되돌아갑니다. 계속하시겠어요?')
    if(confirm) {
      navigate(-1)
    }
  }

  useEffect(() => {
    let timer: number;
    if (countDown > 0) {
      timer = setTimeout(() => setCountDown(countDown - 1), 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [countDown]);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const minutes = formatTime(Math.floor(countDown / 60));
  const seconds = formatTime(countDown % 60);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleChangeName = (e: any) => {
    dispatch(setName(e.target.value))
  }

  const hanleChangePassword = (e: any) => {
    dispatch(setPassword(e.target.value))
  }

  const handleChangeConfirmPassword = (e: any) => {
    dispatch(setConfirmPassword(e.target.value))
  }

  const handleGetAuthNumber = (e: any) => {
    dispatch(setPhoneNumber(e.target.value))
  }

  const conditionalBorder = () => {
    if(nameCheck) {
      return 'outline-red-500'
    } else if (isFocused) {
      return 'outline-blue-500'
    }
    return 'border-gray03'
  }

  const handleFocus = () => {
    setIsFocused(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <main className='w-screen h-screen flex-center bg-primaryGray'>
      <section className='w-[400px] h-[1073px] bg-white border'>
        {/* INFOMATION */}
        <div className='flex w-full h-16 px-5'>
          <div onClick={handleBack} className='flex items-center w-16 h-full font-normal cursor-pointer'>취소</div>
          <div className='flex-center w-[230px] h-full font-medium text-lg'>회원가입</div>
          <div className='flex items-center w-16 h-full'></div>
        </div>
        {/* FORM */}
        <div className='p-5'>
          <form onSubmit={handleSubmit}>
            {/* INPUT__BOX */}
            <div className='w-full h-[85px] mt-5'>
              <label className='block text-gray01 text-[14px] opacity-80 font-semibold mb-[7px]'>이메일</label>
              <input 
                type="email"
                value={email}
                disabled
                placeholder='이메일'
                className='w-full h-[50px] px-3 border border-gray03 bg-gray02 opacity-80 rounded-md text-gray03 placeholder-primaryGray mb-2'/>
            </div>
            {/* INPUT__BOX */}
            <div className='w-full h-[85px] mt-[20px]'>
              <label className='block text-gray01 text-[14px] opacity-80 font-semibold mb-[7px]'>이름</label>
              <input 
                type="text"
                value={userName}
                onChange={handleChangeName}
                placeholder='이름을 입력해주세요'
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`w-full h-[50px] px-3 border border-gray03 rounded-sm placeholder-primaryGray text-black opacity-50 mb-2 ${conditionalBorder()}`}/>
            </div>
            {nameCheck}
            {/* CELLPHONE AUTHORIZATION */}
            <div className='w-full mt-[20px] mb-2.5'>
              <label className='block text-gray01 text-[14px] opacity-80 font-semibold mb-[7px]'>휴대폰 번호</label>
              <NationSelect />
            </div>
            <div className='h-15 mb-2.5'>
              <input 
                type="text" 
                className='w-[228.6px] h-[50px] border rounded-md px-3'
                value={phoneNumber}
                onChange={handleGetAuthNumber}
              />
              <button
                disabled={!activateButton}
                onClick={() => setCountDown(300)}
                className={`ml-2.5 border h-[50px] text-center px-[15px] rounded-md ${activateButton ? 'border-blue-500 bg-white text-blue-500 font-bold' : 'border-gray02 text-gray03'}`}
              >인증번호 받기</button>
            </div>
            <input 
              type="text"
              placeholder='인증번호를 입력해주세요.'
              className='w-full h-[50px] px-3 border border-gray03 bg-gray02 rounded-md placeholder-primaryGray text-black opacity-80 mb-2'
            />
            {countDown > 0 && (
              <p className='text-[12px] text-blue-500'>인증 번호가 요청되었습니다. <br /> 유효 시간 <span className='font-bold'>{minutes}:{seconds} </span></p>
            )}
            <div className='mt-[17px] mb-[7px] h-5'>
              <label className='block text-gray01 text-[14px] opacity-80 font-semibold mb-[7px]'>비밀번호</label>
            </div>
            <input 
              type="password"
              value={password}
              onChange={hanleChangePassword}
              placeholder='비밀번호를 입력해주세요.'
              className='w-full h-[50px] px-3 border border-gray03 rounded-sm placeholder-primaryGray text-black opacity-50 mb-2'/>
              <input 
              type="password"
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
              placeholder='비밀번호를 다시 한번 입력해주세요.'
              className='w-full h-[50px] px-3 border border-gray03 rounded-sm placeholder-primaryGray text-black opacity-50 mb-2'/>
            {/* PASSWORD INFO */}
            {passwordCheck}
            <p className='text-[13px] text-gray01 opacity-80 leading-4 tracking-wide'>영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로 입력해주세요.</p>
            {/* ALL AGREE CHECKBOX */}
            <div className='flex items-center space-x-1 mt-7'>
              <input type="checkbox" checked={true} className="w-[18px] h-[18px]  checkbox checkbox-info" />
              <span>전체 동의</span>
            </div>
            <div className='my-2 social-divider'></div>
            {/* AGREE CHECKES */}
            <div className='flex items-center space-x-1 mb-2.5 text-gray01 text-[15px]'>
              <input type="checkbox" checked={true} className="w-[18px] h-[18px]  checkbox checkbox-info" />
              <span>만 14세 이상입니다.(필수)</span>
            </div>
            <div className='flex items-center space-x-1 mb-2.5 text-gray01 text-[15px]'>
              <input type="checkbox" checked={true} className="w-[18px] h-[18px]  checkbox checkbox-info" />
              <span>원티드 이용약관 동의 (필수)</span>
            </div>
            <div className='flex items-center space-x-1 mb-2.5 text-gray01 text-[15px]'>
              <input type="checkbox" checked={true} className="w-[18px] h-[18px]  checkbox checkbox-info" />
              <span>원티드 개인정보 수집 및 이용 동의 (필수)</span>
            </div>
            <div className='flex items-center space-x-1 mb-2.5 text-gray01 text-[15px]'>
              <input type="checkbox" checked={true} className="w-[18px] h-[18px]  checkbox checkbox-info" />
              <span className='tracking-wide'>채용소식, 커리어 콘텐츠, 이벤트 등 원티드 맞춤 정보 받기</span>
            </div>
            <div className='w-full flex-center h-[22px]'>
              <button className='flex-center w-[90px] space-x-1'>
                <BsCheckLg className="text-xl text-gray01"/>
                <span className='text-gray01'>이메일</span>
              </button>
              <button className='flex-center w-[90px] space-x-1'>
                <BsCheckLg className="text-xl text-gray01"/>
                <span className='text-gray01'>앱푸시</span>
              </button>
              <button className='flex-center w-[120px] space-x-1'>
                <BsCheckLg className="text-xl text-gray01"/>
                <span className='text-gray01'>문자 메세지</span>
              </button>
            </div>
            <button
            className={`flex-center w-full h-[50px] px-1.5 py-0.5 mt-[30px] mb-2.5 rounded-full ${isButtonActive ? 'bg-blue-500 text-white font-bold' : 'bg-gray02 text-gray03'}}`}
            >가입하기</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default SignUp