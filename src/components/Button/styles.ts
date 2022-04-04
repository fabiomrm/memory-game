import styled from 'styled-components';

export const Container = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    background-color: #1550FF;
    border-radius: 10px;
    cursor: pointer;
    opacity: 1;
    transition: all ease .3s;

    &:hover {
        opacity: .8;
    }
`;

export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 0 15px;

    & svg {
        width: 20px;
        height: 20px;
        
    }
`;

export const Icon = styled.img``;

export const Label = styled.p`
    color:#FFF;
    height: inherit;
    display: block;
    flex: 1;
`;