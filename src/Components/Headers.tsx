import { styled } from '@mui/material/styles';
import { amber } from '@mui/material/colors';
interface HeaderProps{
    userName : string;
}
const HeaderContainer = styled('div')({
    color: `${amber[400]}`,
    fontFamily: 'Roboto',
    fontSize: '64px',
    fontStyle: 'normal',
    letterSpacing: '0em',
    textAlign: 'center',
    marginTop: '201px'

})
export default function Header(Props:HeaderProps) {
    return (
        <HeaderContainer>Hello, {Props.userName}</HeaderContainer>
    )
}
