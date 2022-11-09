import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useSnap } from '@mozeyinedu/hooks-lab';

export default function Btn({ children, padding = "8px 25px", onClick, color = "var(--yellow)", link = true }) {
    const { snap } = useSnap(.5);

    return (
        <Wrapper className="btn" {...snap()} onClick={onClick} padding={padding} color={color}>
            {
                link ? <Link to="/auth/signin" >{children}</Link> : children
            }
        </Wrapper>
    )
}

const Wrapper = styled.button`
    background: ${({ color }) => color};
    padding: ${({ padding }) => padding};
    border: 2px solid ${({ color }) => color};
    color: #fff;
    transition: ${({ theme }) => theme.transition};
    font-size: 15px;
    font-weight: 700;
    border-radius: 3px;
    outline: none;

    &:hover{
        color: ${({ color }) => color};
        background: #fff;
        border: 2px solid ${({ color }) => color};
    }

    &:focus {
        outline: none;
        opacity: 1
    }
`