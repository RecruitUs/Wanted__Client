import { Link } from 'react-router-dom'
import { HiOutlineMenu } from 'react-icons/hi'
import WantedLogo from '../../assets/images/image-logo.svg'
import SearchIcon from '../../assets/images/image-search.svg'

const Header = () => {
  return (
    <header className='sticky z-20 top-0 w-full h-[50px] bg-white'>
      <div className='h-full flex-center'>
        <nav className='w-[1060px] h-full flex items-center justify-between'>
          {/* Hamburger Menu + LOGO */}
          <div className='w-[106px] h-full flex items-center justify-center'>
            <button className='w-[17px] h-[28px] mt-[2px] mr-[15px]'><HiOutlineMenu className="text-2xl"/></button>
            <Link to="/"><img src={WantedLogo} alt="logo-wanted" className='w-[74px] h-[26px]' /></Link>
          </div>
          {/* NAV LISTS */}
          <ul className='flex items-center w-[414.5px] h-full'>
            <li className='header-lists'><Link to="">채용</Link></li>
            <li className='header-lists'><Link to="">이벤트</Link></li>
            <li className='header-lists'><Link to="">이력서</Link></li>
            <li className='header-lists'><Link to="">소셜</Link></li>
            <li className='header-lists'><Link to="">프리랜서</Link></li>
            <li className='header-lists'><Link to="">AI 합격예측</Link></li>
          </ul>
          {/* AUTH / ETC */}
          <aside className='flex items-center w-[271.2px] h-full py-2.5'>
            <ul className='flex items-center'>
              <li>
                <button className='flex-center px-2.5'>
                  <img src={SearchIcon} alt="image-search" className='text-black'/>
                </button>
              </li>
              <li>
                <button className='flex-center px-2.5 text-[14px] font-medium'>
                  <Link to='/login'>
                    회원가입/로그인
                  </Link>
                </button>
              </li>
              <li className='flex items-center'>  
                <div className='w-[2px] h-2.5 border-l m-2.5'/>
                <button className='ml-[15px] px-2.5 flex-center border rounded-full text-[13px] h-[28px] text-gray01'>
                  기업 서비스
                </button>
              </li>
              {/* TOKEN RENDERING */}
              {/* <li></li> */}
            </ul>
          </aside>
        </nav>
      </div>
      <div className='social-divider'></div>
    </header>
  )
}

export default Header