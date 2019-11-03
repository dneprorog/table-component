import styled, {css, keyframes} from 'styled-components'

export const Container = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 780px;
      height: 100%;
      padding-top: 50px;
      margin: 0 auto;
`;

export const Input = styled.input`
      height: 30px;
      font-size: 16px;
      padding-left: 5px;
      color: #424242;
      background: #ffffff;
      border: none;
      outline: none;
      margin: 0;
`;

export const TableComponent = styled.table`
      border-spacing: 0;
      border-collapse: collapse;
`;

export const Tr = styled.tr`
      height: 40px;
`;

export const Td = styled.td`
    ${p => p.primary && css`
        padding: 0;
        border: 1px solid #d8d8d8;
    `}
   
    ${p => p.secondary && css`
        width: 80px;
        border: 1px solid #d8d8d8;
    `}
`;

export const Th = styled.th`
      font-weight: 500;
      border-right: 1px solid #d8d8d8;
      
      &:last-of-type {
          border-right: none;
          background: #fff;
      }
`;

export const Thead = styled.thead`
      background-color: #f4f4f4;
      border: 1px solid #d8d8d8;
`;

export const Tbody = styled.tbody`
      background: transparent;
`;

export const Button = styled.button`
    ${p => p.primary && css`
        width: 150px;
        height: 40px;
        border: 1px solid #74b027;
        font-size: 18px;
        font-weight: 600;
        background: #74b027;
        color: #ffffff;
        outline: none;
        cursor: pointer;
        margin: 20px 0;
        
        &:hover {
            border: 1px solid #424242;
            background: #fff;
            color: #424242;
            transition: margin-left 2s, color 0.5s;
            cursor: pointer;
        }
    `}
    
    ${p => p.secondary && css`
        border: 1px solid #dc3545;
        font-size: 14px;
        font-weight: 400;
        background: #dc3545;
        color: white;
        width: 80px;
        height: 40px;
        margin: 0;
        outline: none;
        
        &:hover {
            border: 1px solid #fff;
            background: #fff;
            color: #dc3545;
            transition: margin-left 2s, background 0.3s, color 0.3s;
            cursor: pointer;
        }
    `}
    
    ${p => p.disableButton && css`
        border: 1px solid #ccc;
        background: #ccc;
        color: #fff;
        pointer-events: none;
    `}
`;

export const Loading = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 500px;
      height: 500px;
      color: #74b027;
      margin: 0 auto;
`;

export const BounceAnimation = keyframes`
      0% { margin-bottom: 0; }
      50% { margin-bottom: 15px }
      100% { margin-bottom: 0 }
`;

export const DotWrapper = styled.div`
      display: flex;
      align-items: flex-end;
`;

export const Dot = styled.div`
      background-color: #74b027;
      border-radius: 50%;
      width: 5px;
      height: 5px;
      margin: 0 2px;
      animation: ${BounceAnimation} 0.5s linear infinite;
      animation-delay: ${p => p.delay};
`;
