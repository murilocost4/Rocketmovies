import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 8px;
    margin-right: 6px;
    background-color: ${({ theme, isgray }) => isgray ? theme.COLORS.GRAY_100 : theme.COLORS.BACKGROUND_PINK};
    color: ${({ theme }) => theme.COLORS.WHITE_TAG};
`;
