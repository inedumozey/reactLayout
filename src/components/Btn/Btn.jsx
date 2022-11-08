import { Link } from "react-router-dom";
import styled from 'styled-components'

export default function Btn({ children, padding = "8px 25px", onClick }) {
    return (
        <Wrapper onClick={onClick} padding={padding}>
            <Link to="/auth/signin" className="login">{children}</Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .login {
        background: var(--yellow);
        padding: ${({ padding }) => padding};
        border: 2px solid var(--yellow);
        color: #fff;
        transition: ${({ theme }) => theme.transition};
        font-size: 15px;
        font-weight: 700;
        border-radius: 3px;

        &:hover{
            color: var(--yellow);
            background: #fff;
        }
    }
`