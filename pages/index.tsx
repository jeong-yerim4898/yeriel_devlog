import {styled} from "@/shared-components/index";
import { COLOR } from "@/styles/index";
import Image from "next/image";


const MainContainer = styled('article',{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    padding:'5rem 0',
    width:'62.5rem',
    margin:'auto'
});

const SectionTitle = styled('h1',{
    fontSize:'2.5rem',
    borderBottom:'10px solid #3353fb',
    display:'inline-flex',
    marginBottom:'1.875rem',
    marginTop:'2rem'
})
const ProfileSection = styled('section',{
    display:'flex',
    width:'100%',
    gap:'2rem',
    alignItems:'center',
    paddingBottom :'2rem',
    borderBottom :'1px solid $lightGray03'
})

const ProfileWrapper = styled('div', {
    display:'flex',
    flexDirection:'column',
    gap:'2rem'
});
const ProfileCategory = styled('span', {
    backgroundColor:'$blue20',
    padding:'.5rem .725rem',
    borderRadius:'.25rem',
    marginRight:'.725rem'
});

const ResumeLink = styled('span', {
    borderBottom:'1px solid $lightGray02',
    color:'$gray02',
    '&:hover': {
        cursor:'pointer',
        color:'$black'
    },
    variants:{
        type : {
            service : {
                display:'lnline-block',
                lineHeight: 2
            }
        }
    }
});

const IntroduceSection = styled('section', {
    padding:'2rem 0',
});
const IntroduceContent = styled('div',{
    whiteSpace:'pre-wrap',
    fontSize:'1.125rem',
    lineHeight:'1.5'
});

const EmphasizeWord = styled('span',{
    backgroundColor:'$blue80',
    color:'$white',
    padding:'.25rem',
    borderRadius:'.25rem',
    fontWeight:'bold',
});

const ExperienceTech = styled('div',{
    display:'flex',
    gap:'.25rem',
    paddingBottom:'.25rem',
    '>span':{
        backgroundColor:'$lightGray02',
        color:'$blackDark40',
        borderRadius:'.25rem',
        padding:'.125rem .3rem',
        display: 'inline-block',
        fontSize:'0.875rem'
    }
});

const ExperienceUl = styled('ul',{
    '>li':{
        marginBottom:'2px',
        lineHeight:1.5
    }
});





export default function Home() {

    const renderIntroduce = () => {
        return (<IntroduceSection id={'introduce'}>
            <SectionTitle>Introduce.</SectionTitle>

            <IntroduceContent>{`안녕하세요. 공감능력으로 요구사항을 놓치지 않는 프론트엔드 개발자 정예림입니다.\n
React, Next.js, scss, Typescript, HTML 등을 사용하여 `}
                <EmphasizeWord>디자인시스템</EmphasizeWord> 부터 <EmphasizeWord>차트</EmphasizeWord>, <EmphasizeWord>페이지</EmphasizeWord>
                {` 까지 다양한 프론트엔드 개발을 해왔습니다.\n
개발에서 가장 중요한 점은`} <EmphasizeWord>요구사항을 놓치지 않는 구현</EmphasizeWord>{`이라고 생각합니다. 
기획의 의도를 파악하고 사용자의 이용성까지 다양한 면을 공감하고 고려하며 개발합니다.\n
이를 위해` }<EmphasizeWord>개발자로의 전문성</EmphasizeWord>, <EmphasizeWord>성장을 위한 질문</EmphasizeWord>, <EmphasizeWord>열린 커뮤니케이션</EmphasizeWord>{` 3가지를 항상 가슴에 새기며 꾸준히 발전하는 개발자가 되기 위해 노력하고 있습니다.`}</IntroduceContent>
        </IntroduceSection>)
    };

    const renderExperience = () => {
        return (<section id={'experience'}>
                <SectionTitle>Experience.</SectionTitle>
                <div style={{display:'flex'}}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Image src={'/igaworks.webp'} alt={'아이지에이웍스 로고'} width={200} height={200}
                               style={{borderRadius:"100rem",height:'10rem',width:'10rem'}}/>
                        <p style={{color:COLOR.blackDark70}}>2021.07 ~ 재직 중</p>
                        <p style={{color:COLOR.blackDark70}}>Front Developer</p>
                    </div>

                    <div style={{marginLeft:'1.5rem'}}>
                        <div>
                            <h2 style={{fontWeight:"bold",fontSize:'2rem'}}>아이지에이웍스</h2>
                            <p style={{color:COLOR.lightGray03,paddingBottom:".5rem"}}>MI 개발실 솔루션팀 프론트엔드 개발자</p>
                            <div style={{color:COLOR.blackDark70}}>빅데터 플랫폼기업 아이지에이웍스에서 DMP기반 앱 분석 서비스 모바일 인덱스, 원스톱 디지털 전환 서비스 마케팅클라우드를 개발하는 솔루션 개발팀에서 프론트엔드 개발자로 근무하고 있습니다.
                                데이터 시각화에 필요한 차트, 다양한 컴포넌트, 랜딩페이지,팀 기술블로그 등 다양한 웹 서비스를 만들고 유지보수 하고 있습니다.</div>
                        </div>
                        <div>
                            <h4 style={{display:'block',fontWeight:"bold",fontSize:'1.25rem',marginTop:"1.5rem",marginBottom:'0.8125rem'}}>ZTL (23.05 ~ 23.06)</h4>
                            <ExperienceTech>
                                <span>React</span>
                                <span>Typescript</span>
                                <span>MobX</span>
                                <span>SCSS</span>
                            </ExperienceTech>
                            <ExperienceUl style={{marginLeft:'2rem'}}>
                                <li>기존의 컴포넌트 성능개선 (셀렉트, 체크박스,스위치, 데이트피커 등) 맟 CRUD 페이지 개발</li>
                                <li>업종 선택필터 개발 및 API 연결</li>
                            </ExperienceUl>
                        </div>
                        <div>
                            <h4 style={{display:'block',fontWeight:"bold",fontSize:'1.25rem',marginTop:"1.5rem",marginBottom:'0.8125rem'}}>사내 개발블로그 개발 (23.03 ~ 23.07)</h4>
                            <ExperienceTech>
                                <span>Next.js</span>
                                <span>Typescript</span>
                                <span>MobX</span>
                                <span>SCSS</span>
                                <span>AWS</span>
                            </ExperienceTech>
                            <a style={{textDecoration:"inherit"}} target={'_blank'} href={'https://devlog.mi.igaw.io/'}><ResumeLink type={"service"}>https://devlog.mi.igaw.io/</ResumeLink></a>
                            <ExperienceUl style={{marginLeft:'2rem'}}>
                                <li>Next.js를 활용한 사내 개발블로그 개발 (디자인, 개발 모두 수행)</li>
                                <li>AWS CodePiple을 통해 CI/CD 구성</li>
                                <li>포스팅 CRUD에 필요한 기술 개발(마크다운, 이미지 업로드, 개인 URI 설정 등)</li>
                                <li>쿠키를 활용한 좋아요 기능 구현, Intersection Observer을 통한 InfiniteScroll 구현</li>
                            </ExperienceUl>
                        </div>
                        <div>
                            <h4 style={{display:'block',fontWeight:"bold",fontSize:'1.25rem',marginTop:"1.5rem",marginBottom:'0.8125rem'}}>2022 연말결산 랜딩페이지 개발 (23.01)</h4>
                            <ExperienceTech>
                                <span>React</span>
                                <span>Typescript</span>
                                <span>MobX</span>
                                <span>SCSS</span>
                                <span>AWS</span>
                            </ExperienceTech>
                            <a style={{textDecoration:"inherit"}} target={'_blank'} href={'https://landscape.mktcloud.igaworks.com/'}><ResumeLink type={"service"}>https://landscape.mktcloud.igaworks.com/</ResumeLink></a>
                            <ExperienceUl style={{marginLeft:'2rem'}}>
                                <li><a style={{textDecoration:"inherit"}} target={'_blank'} href={'https://velog.io/@wjd489898/%ED%9B%84%EA%B8%B0-2022-%EB%9E%9C%EB%93%9C%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%94%84-%EA%B0%9C%EB%B0%9C'}><ResumeLink>다양한 애니메이션이 담긴 랜딩페이지</ResumeLink></a>를 통한 통한 사내 서비스 가입 유도</li>
                                <li>AWS ESC와 CodePipline을 통한 CI/CD 구성</li>
                                <li>반응형 디자인 적용</li>
                            </ExperienceUl>
                        </div>
                        <div>
                            <h4 style={{display:'block',fontWeight:"bold",fontSize:'1.25rem',marginTop:"1.5rem",marginBottom:'0.8125rem'}}>다양한 개발들...</h4>
                            <ExperienceTech>
                                <span>React</span>
                                <span>Typescript</span>
                                <span>MobX</span>
                                <span>SCSS</span>
                                <span>SVG</span>
                                <span>Node.js</span>
                                <span>MongoDB</span>
                            </ExperienceTech>
                            <ExperienceUl style={{marginLeft:'2rem'}}>
                                <li>사내 디자인 시스템 개발</li>
                                <li>SVG를 활용한 파이차트, 막대차트, 워드클라우드, 지도 차트 개발</li>
                                <li>메타게임 서비스 Node.js, MongoDB를 통한 백엔드 개발 </li>
                                <li>사내 개인정보처리방침 페이지 개발 및 업데이트</li>
                            </ExperienceUl>
                        </div>
                    </div>
                </div>
            </section>
        )
    };

    const renderEducation = () => {
        return (<section id={'education'} style={{width:'100%'}}>
            <SectionTitle>Education.</SectionTitle>
            <div className={'education-wrapper'} style={{paddingLeft:'12.5rem'}}>
                <div style={{marginBottom:'2rem'}}>
                    <h2 style={{fontWeight:"bold",fontSize:'2rem',paddingBottom:'.25rem'}}>SSAFY 4기</h2>
                    <p style={{color:COLOR.blackDark40,paddingBottom:'.25rem'}}>2020.07 ~ 2021.07</p>
                    <p style={{color:COLOR.blackDark92}}>삼성청년 SW 아카데미 4기 수료</p>
                </div>
                <div>
                    <h2 style={{fontWeight:"bold",fontSize:'2rem',paddingBottom:'.25rem'}}>금오공과대학교</h2>
                    <p style={{color:COLOR.blackDark40,paddingBottom:'.25rem'}}>2015.03 ~ 2020.02</p>
                    <p style={{color:COLOR.blackDark92}}>산업경영공학 전공 & 교내 비전공자 SW교육 과정 1등 수료(2017)</p>
                </div>
            </div>

        </section>)
    }

    const renderPosting = () => {
        return (<section id={'posting'} style={{width:'100%'}}>
                <SectionTitle>Posting.</SectionTitle>
                    <ul style={{paddingLeft:'12.5rem'}}>
                        <li>
                            <span style={{fontWeight:'bold'}}>2023.07 </span>
                            <a style={{textDecoration:"inherit"}} target={'_blank'} href={'https://devlog.mi.igaw.io/component-date-picker'}><ResumeLink>공공데이터를 활용한 Calendar/DatePicker 구현: 컴포넌트 편
                            </ResumeLink></a>
                        </li>
                        <li><span style={{fontWeight:'bold'}}>2023.05 </span>
                            <a style={{textDecoration:"inherit"}} target={'_blank'} href={'https://devlog.mi.igaw.io/performance-improvement-wordCloud'}><ResumeLink>내가 만든 워드클라우드 : 성능개선을 위한 여정 (Web Worker)
                            </ResumeLink></a>
                        </li>
                    </ul>


            </section>
        )
    }
    return (
        <MainContainer>
            <ProfileSection>
                    <Image src={'/yeriel_profile.jpeg'} alt={'프로필 이미지'} width={200} height={200}
                    style={{borderRadius:"100rem",height:'20rem',width:'20rem'}}/>
                <ProfileWrapper>
                    <div>
                        <ProfileCategory>Blog</ProfileCategory>
                        <a href={"https://velog.io/@wjd489898"} target={"_blank"} style={{textDecoration:"inherit"}}>
                            <ResumeLink>https://velog.io/@wjd489898</ResumeLink></a>
                    </div>
                    <div>
                        <ProfileCategory>Email</ProfileCategory>
                        <a href={'mailto:wjd489898@gmail.com'} target={"_blank"} style={{textDecoration:"inherit"}}>
                            <ResumeLink>wjd489898@gmail.com</ResumeLink></a>
                    </div>
                    <div>
                        <ProfileCategory>GitHub</ProfileCategory>
                        <a href={'https://github.com/jeong-yerim4898'} target={"_blank"} style={{textDecoration:"inherit"}}></a>
                        <a href={'https://github.com/jeong-yerim4898'} target={"_blank"} style={{textDecoration:"inherit"}}>
                            <ResumeLink>https://github.com/jeong-yerim4898</ResumeLink></a>
                    </div>
                </ProfileWrapper>
            </ProfileSection>
            {renderIntroduce()}
            {renderExperience()}
            {renderEducation()}
            {renderPosting()}
        </MainContainer>
    );
}