import imageWd01 from '../../assets/images/image-wd01.svg'
import imageWd02 from '../../assets/images/image-wd02.svg'

const Wd = () => {
  return (
    <main className='w-full h-[4700px] pt-5 pb-20 flex justify-center'>
      <div className='relative z-10 w-[1060px] h-full'>
        {/* WD__INFOMATION */}
        <section className='w-full h-[2290px]'>
          {/* MAIN */}
          <div className='w-[700px]'>
            {/* CAROUSEL */}
            <div className="w-[700px] h-[490px] carousel rounded-md">
              <div className="w-full carousel-item">
                <img src={imageWd01} alt="" className='object-cover w-full'/>
              </div>  
              <div className="w-full carousel-item">
                <img src={imageWd02} alt="" className='object-cover w-full'/>
              </div>  
            </div> 
            {/* CONTENT - HEADER*/}
            <section className='mt-10 mb-[30px]'>
              <h2 className='font-semibold text-[22px]'>콘텐츠 마케터</h2>
              <div className='flex items-center text-[14px] space-x-3'>
                <h6 className='font-medium'>유진정밀</h6>
                <button className='text-[10px] text-blue-600 border  border-blue-600 px-1'>응답률 높음</button>
                <div className='w-[2px] h-2.5 border-l m-2.5'/>
                <span className='text-gray01'>서울 &#183; 한국</span>
              </div>
              <div className='mt-5'>
                <div className='flex items-center space-x-2 text-[12px]'>
                  <div className='flex-center h-[30px] px-[14px] py-[9px] bg-gray04 rounded-full'><a className='h-3 flex-center' href="#">#건강검진</a></div>
                  <div className='flex-center h-[30px] px-[14px] py-[9px] bg-gray04 rounded-full'><a className='h-3 flex-center' href="#">#노트북</a></div>
                  <div className='flex-center h-[30px] px-[14px] py-[9px] bg-gray04 rounded-full'><a className='h-3 flex-center' href="#">#판매, 유통</a></div>
                </div>
              </div>
            </section>
            {/* CONETNT - DESCRIPTION */}
            <section>
              {/* DESCRIPTION */}
              <section className='pr-5 mb-[60px]'>
                <p>About 유진:</p>
                <ul className='leading-7 tracking-wide'>
                  <li>&#183; 유진정밀은 주거환경을 풍성하게 만드는 제품을 개발합니다. 인스턴트 제품보다는 오래 가치있게 사용할 수 있는 제품을 추구합니다.</li>
                  <li>&#183; 새로운 아이디어를 표현하기 위해 폰트부터 사출까지 모든 부분을 개발하며, 철저한 품질관리를 통해 대형 유통사의 신뢰를 받고 있습니다.</li>
                  <li>&#183; 한국 시계산업의 모체가 되어온 오리엔트 벽/탁상시계와 OWC시계를 개발하며, 최초 LED 랜턴스피커 브랜드인 MoriMori를 독점 수입합니다.</li>
                </ul>
                <h6 className='mt-5 font-semibold'>주요업무</h6>
                <ul className='leading-7 tracking-wide'>
                  <li>&#183; 고객 니즈에 기반한 콘텐츠 기획 및 촬영 (상세페이지 디자인 및 촬영업체 관리)</li>
                  <li>&#183; 판매채널 내 브랜드 스토어, 상세페이지, 배너, 썸네일 등 터치포인트 관리</li>
                  <li>&#183; SNS 채널 오픈 및 운영 (예. 인스타그램)</li>
                  <li>&#183; 위 사항에 대한 데이터 분석 및 성과 개선</li>
                </ul>
                <h6 className='mt-5 font-semibold'>자격요건</h6>
                <ul className='leading-7 tracking-wide'>
                  <li>&#183; 3~5년의 콘텐츠 마케팅 실무경험</li>
                  <li>&#183; 디자인툴 사용 가능자 (예. 포토샵)</li>
                  <li>&#183; 학력: 대졸</li>
                  <li>&#183; 포트폴리오 첨부 필수</li>
                </ul>
                <h6 className='mt-5 font-semibold'>우대사항</h6>
                <ul className='leading-7 tracking-wide'>
                  <li>&#183; 창의적인 콘텐츠 기획, 제작과 카피라이팅 경험이 있으신 분</li>
                </ul>
                <h6 className='mt-5 font-semibold'>혜택 및 복지</h6>
                <ul className='leading-7 tracking-wide'>
                  <li>&#183; 업계 상위 수준의 보상</li>
                  <li>&#183; 최고 사양의 노트북 등 업무툴 지원</li>
                  <li>&#183; 직무 관련 컨퍼런스, 교육 참여 지원</li>
                  <li>&#183; 대명콘도 연간 이용권 제공</li>
                  <li>&#183; 본인과 배우자의 건강검진 연 1회 지원</li>
                  <li>&#183; 눈치보지 않고 연차, 휴가 이용 가능</li>
                </ul>
                <h6 className='mt-5 font-semibold'>기술스택 &#183; 툴 </h6>
                <div className='flex items-center mt-[5px] text-[12px] font-medium space-x-3'>
                  <div className='px-[14px] py-[9px] bg-green01 rounded-full'>HTML5/CSS3</div>
                  <div className='px-[14px] py-[9px] bg-green01 rounded-full'>JAVASCRIPT</div>
                  <div className='px-[14px] py-[9px] bg-green01 rounded-full'>TYPESCRIPT</div>
                  <div className='px-[14px] py-[9px] bg-green01 rounded-full'>REACT</div>
                  <div className='px-[14px] py-[9px] bg-green01 rounded-full'>NEXT</div>
                  <div className='px-[14px] py-[9px] bg-green01 rounded-full'>TAILWINDCSS</div>
                </div>
              </section>
              {/* Divider */}
              <div className='w-[700px] border-b border-gray01 opacity-70'></div>
              {/*ETC 01*/}
              <section className='w-[700px] h-[342px] mt-5 mb-10'>
                <div className='flex items-center mb-5'>
                  <span className='w-[80px] h-[23px] text-[16px] font-medium text-gray01'>마감일</span>
                  <span className='w-[80px] h-[23px] text-[16px] font-medium'>상시</span>
                </div>
                <div className='flex items-center mb-5 whitespace-nowrap'>
                  <span className='w-[80px] h-[23px] text-[16px] font-medium text-gray01'>근무지역</span>
                  <span className='w-[80px] h-[23px] text-[16px] font-medium'>테헤란로 443 애플트리타워 4층</span>
                </div>
                {/* MAP */}
                <div className='w-full h-[254px] bg-slate-200'></div>
              </section>
              {/* ETC 02 */}
              <section className='w-[700px] h-[92px] mt-20 border'>
                
              </section>
              {/* Accodion */}
              <section className='w-[700px] h-[94px] mt-3 bg-slate-100'>
                
              </section>
            </section>
            
          </div>
          {/* ASIDE - Apply TAB */}
          <aside className='absolute top-0 right-0 w-[340px] h-[331.5px] border px-5 py-6'>
            <div>
              <h3 className='text-[15px] font-medium'>채용보상금</h3>
              <ul className='flex items-center my-6'>
                <li className='w-[149px] h-[46px]'>
                  <h4 className='h-[16px] text-[14px] text-gray01 mb-2'>추천인</h4>
                  <p className='text-[15px] font-medium'>500,000원</p>
                </li>
                <li className='w-[149px] h-[46px]'>
                  <h4 className='h-[16px] text-[14px] text-gray01 mb-2'>지원자</h4>
                  <p className='text-[15px] font-medium'>500,000원</p>
                </li>
              </ul>
            </div>
            {/* ABSOLUTE__BTN */}
            {/* <button></button> */}
            {/* NORMAL__BTN */}
            <button className='w-full h-[50px] border border-blue-600 text-blue-600 rounded-full mb-2.5'>북마크하기</button>
            <button className='w-full h-[50px] border border-blue-600  bg-blue-600 text-white rounded-full'>지원하기</button>
          </aside>
          
        </section>
        {/* JOBS__FEEDS */}
        <section className='w-full h-[2240px] mt-20 bg-rose-50'></section>

      </div>
    </main>
  )
}

export default Wd