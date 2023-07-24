import {styled} from "@/shared-components/stitches.config";

const MainHeader = styled('header', {
    position:'relative',
    width:'100%',
    padding:'0 3vw',
    height:'4rem',
    color: 'black',
    backgroundColor:"$white",
    margin:"0",
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    borderBottom:'1px solid $lightGray02',
    zIndex:10
});

const Menu = styled('span',{
    cursor:'pointer',
    color: 'black',
    '&:hover':{
        color: 'gray'
    }
})
export default function Header() {
    return <MainHeader>
        <Menu>Resume</Menu>
    </MainHeader>
}