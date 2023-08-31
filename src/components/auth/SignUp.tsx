import { useSelector } from 'react-redux/es/hooks/useSelector'
import NationSelect from '../common/NationSelect'
import { BsCheckLg } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const email = useSelector((state: any) => state.auth.email)
  
  const navigate = useNavigate()
  const handleBack = () => {
    const confirm = window.confirm('회원가입을 취소하고 이전 화면으로 되돌아갑니다. 계속하시겠어요?')
    if(confirm) {
      navigate(-1)
    }
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
          <form>
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
                type="email"
                placeholder='이름을 입력해주세요'
                className='w-full h-[50px] px-3 border border-gray03 rounded-sm text-primaryGray opacity-50 mb-2'/>
            </div>
            {/* CELLPHONE AUTHORIZATION */}
            <div className='w-full mt-[20px] mb-2.5'>
              <label className='block text-gray01 text-[14px] opacity-80 font-semibold mb-[7px]'>휴대폰 번호</label>
              <NationSelect />
            </div>
            <div className='h-15 mb-2.5'>
              <input 
                type="text" 
                className='w-[228.6px] h-[50px] border rounded-md px-3'
              />
              <button
                className='ml-2.5 border h-[50px] text-center px-[15px] rounded-md bg-gray02 text-gray03'
              >인증번호 받기</button>
            </div>
            <input 
                type="email"
                placeholder='인증번호를 입력해주세요.'
                className='w-full h-[50px] px-3 border border-gray03 bg-gray02 rounded-md text-primaryGray opacity-80 mb-2'
            />
            <div className='mt-[17px] mb-[7px] h-5'>
              <label className='block text-gray01 text-[14px] opacity-80 font-semibold mb-[7px]'>비밀번호</label>
            </div>
            <input 
              type="email"
              placeholder='비밀번호를 입력해주세요.'
              className='w-full h-[50px] px-3 border border-gray03 rounded-sm text-primaryGray opacity-50 mb-2'/>
              <input 
              type="email"
              placeholder='비밀번호를 다시 한번 입력해주세요.'
              className='w-full h-[50px] px-3 border border-gray03 rounded-sm text-primaryGray opacity-50 mb-2'/>
            {/* PASSWORD INFO */}
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
            className="flex-center w-full h-[50px] px-1.5 py-0.5 mt-[30px] mb-2.5 rounded-full bg-gray02 text-gray03"
            >가입하기</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default SignUp