import styled from 'styled-components';

export const PageWrapper = styled.div`
    padding: 60px 90px;
    box-sizing: border-box;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr 40px;
    grid-template-areas:
        'header'
        'content'
        'footer'
`;

export const PageHeader = styled.div`
    padding: 10px
    width: 100%;
    box-sizing: border-box;
    grid-area: header;
    position: relative;
`;

export const PageContent = styled.div`
    padding: 20px
    box-sizing: border-box;
    grid-area: content;
    overflow-y: hidden;
    height: 100%;
`;

export const PageFooter = styled.div`
    padding: 10px;
    box-sizing: border-box;
    grid-area: footer;
    position: relative
`;
