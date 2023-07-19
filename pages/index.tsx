import {styled} from "@/shared-components/index";
import { COLOR } from "@/styles/index";
import Image from "next/image";


const Text = styled('p', {
    fontFamily: '$system',
    color: '$hiContrast',

    variants: {
        size: {
            1: {
                fontSize: '$1',
            },
            2: {
                fontSize: '$2',
            },
            3: {
                fontSize: '$3',
            },
        },
    },
});

const MainContainer = styled('article',{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    padding:'5rem 0',
    width:'62.5rem',
    margin:'auto'
})
const ProfileSection = styled('section',{
    display:'flex',
    width:'100%',
    gap:'2rem',
    alignItems:'center',
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

const ProfileLink = styled('span', {
    borderBottom:'1px solid $lightGray02',
    color:'$gray02',
    '&:hover': {
        cursor:'pointer',
        color:'$black'
    }
});


export default function Home() {

    const renderIntroduce = () => {
        return (<div>내소개</div>)
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
                            <ProfileLink>https://velog.io/@wjd489898</ProfileLink></a>
                    </div>
                    <div>
                        <ProfileCategory>Email</ProfileCategory>
                        <a href={'mailto:wjd489898@gmail.com'} target={"_blank"} style={{textDecoration:"inherit"}}>
                            <ProfileLink>wjd489898@gmail.com</ProfileLink></a>
                    </div>
                    <div>
                        <ProfileCategory>GitHub</ProfileCategory>
                        <a href={'https://github.com/jeong-yerim4898'} target={"_blank"} style={{textDecoration:"inherit"}}>
                            <ProfileLink>https://github.com/jeong-yerim4898</ProfileLink></a>
                    </div>
                </ProfileWrapper>
            </ProfileSection>
            {renderIntroduce()}

        </MainContainer>
    );
}