import WantedLogos from '../../assets/images/image-logos.svg'
import instaIcon from '../../assets/images/image-insta.svg'
import facebookIcon from '../../assets/images/image-facebook.svg'
import youtubeIcon from '../../assets/images/image-youtube.svg'
import blogIcon from '../../assets/images/image-blog.svg'
import appleIcon from '../../assets/images/image-apple_m.svg'
import gstoreIcon from '../../assets/images/image-gstore.svg'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center border-t border-gray03 pt-[18px] pb-[65px] w-full 2xl:h-[245px] '>
      {/* LOGO + 소개 + SOCIAL__LINK */}
      <div className='flex-center w-full 2xl:h-[39px] mb-[18px]'>
        <div className='flex items-center w-[857px] h-full '>
          <div className='mr-[43px]'>
            <img src={WantedLogos} alt="image-logos" />
          </div>
          <div className=''>
            <ul className='flex items-center text-gray01 text-[15px]'>
              <li className='mr-[45px]'>기업소개</li>
              <li className='mr-[45px]'>고객센터</li>
              <li className='mr-[45px]'>원티드 블로그</li>
              <li className='mr-[45px]'>이용약관</li>
              <li className='mr-[45px] font-bold text-black'>개인정보 처리방침</li>
            </ul>
          </div>
        </div>
        <div className='flex items-center justify-between w-[203px] h-full '>
          <img src={instaIcon} alt="" />
          <img src={youtubeIcon} alt="" />
          <img src={facebookIcon} alt="" />
          <img src={blogIcon} alt="" />
          <img src={appleIcon} alt="" />
          <img src={gstoreIcon} alt="" />
        </div>
      </div>
      {/* divider */}
      <div className='w-[1060px] border-b border-gray03 opacity-70'></div>
      {/* ETC */}
      <div className='py-[25px] flex justify-start w-[1060px]'>
        <p className='w-[770px] h-15 text-[12px] text-gray01'>
        (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147 <br /> 유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | 사업자등록번호 : 299-86-00021 | 02-539-7118 <br /> © Wantedlab, Inc.
        </p>
      </div>
    </footer>
  )
}

export default Footer