//@LIBRARY
import ReactCountryFlag from 'react-country-flag'
// @IMAGES
import WantedLogo from '../../assets/images/image-logo.svg'
import AppleLogo from '../../assets/images/image-apple.svg'
import GoogleLogo from '../../assets/images/image-google.svg'
import KakaoLogo from '../../assets/images/image-kakao.svg'
//@REACT-ICONS
import { MdKeyboardArrowRight } from 'react-icons/md'

const SignIn = () => {
  return (
    <main className='w-screen h-screen flex-center bg-primaryGray'>
      <section className='w-[400px] h-[840px] bg-white border p-5'>
        <div className='flex-center w-full h-[84px] pt-14 mb-[30px]'>
          <img className='w-[93px] h-[28px]' src={WantedLogo} alt='wanted-logo' />
        </div>
        <form className=''>
          {/* INFO__TEXT */}
          <h1 className='text-center font-bold text-[24px] mb-4 w-full h-[64px] leading-8'>하나의 계정으로 <br/> 더욱 편리하게</h1>
          <h2 className='text-center text-[14px] w-full  text-gray01 opacity-80 mb-[45px]'>원티드가 제공하는 서비스를 <br/> 하나의 계정으로 모두 이용할 수 있습니다.</h2>
          {/* INPUT__BOX */}
          <div className='w-full h-[85px]'>
            <label className='block text-gray01 text-[14px] opacity-80 font-semibold mb-[7px]'>이메일</label>
            <input 
              type="email"
              placeholder='이메일을 입력해주세요'
              className='w-full h-[50px] px-3 border border-gray03 rounded-sm text-primaryGray opacity-50 mb-2'/>
          </div>
          {/* LOGIN__BTN */}
          <button
            className="flex-center w-full h-[50px] px-1.5 py-0.5 mt-[30px] mb-2.5 rounded-full bg-gray02 text-gray03"
          >이메일로 계속하기</button>
          {/* 또는 */}
          <p className='mt-[5px] mb-[15px] w-full h-4 text-center text-[12px] text-gray01'>또는</p>
          {/* SOCIAL-LOGIN__BTN */}
          <div className='flex items-center justify-center'>
            <button className='social-btn'>
              <img className='w-14 h-14' src={AppleLogo} alt="apple-logo" />
              <p className='text-[11px] text-gray01'>Apple</p> 
            </button>
            <button className='social-btn'>
              <img  className='border rounded-full w-14 h-14' src={GoogleLogo} alt="google-logo" />
              <p className='text-[11px] text-gray01'>Google</p>
            </button>
            <button className='social-btn'>
              <img className='w-14 h-14' src={KakaoLogo} alt="kakao-logo" />
              <p className='text-[11px] text-gray01'>Kakao</p>
            </button>
          </div>
          {/* FORGET__ID__BTN */}
          <button className='w-full h-[52px] py-[1px] px-1.5'>
            <p className='flex items-center justify-center mt-[30px] text-gray01 text-[14px]'>계정을 잊으셨나요? <MdKeyboardArrowRight className="text-xl"/></p>
          </button>
          {/* ETC */}
          <div className='social-divider'></div>
          <div className='flex-center text-[13px] space-x-3 mb-[15px]'>
            <a className='text-gray01' href="https://id.wanted.jobs/terms/ko" target='_blank'>이용약관</a>
            <a className='font-bold text-gray01' href="https://id.wanted.jobs/privacy/ko?user=true" target='_blank'>개인정보처리방침</a>
          </div>
          <p className='flex-center text-[12px] text-gray01 opacity-80 mb-[30px]'>&copy; Wantedlab, lnc. </p>
          {/* Select language */}
          <div className='flex-center'>
            <select className="w-[140px] h-[32px]  max-w-xs select-xs select select-bordered">
              <option className='text-center'>
                <ReactCountryFlag countryCode="KR" style={{ width: '2em', height: '2em'}}/>
                <span>
                  한국어
                </span>
              </option>
              <option className='text-center'>
                <ReactCountryFlag countryCode="US" />
                English
              </option>
              <option className='text-center'>
                <ReactCountryFlag countryCode="JP" />
                日本語
              </option>
            </select>
          </div>
        </form>
      </section>
    </main>
  )
}

export default SignIn