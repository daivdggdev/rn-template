import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

interface ScreenContentProps {
  padding?: number;
  style?: any;
  children?: React.ReactNode;
  bgType?: 'gradient';
}

const Layout = styled(View)`
  flex-grow: 1;
  align-items: center;
  width: 100%;
  padding-right: ${({ padding }: ScreenContentProps) => (padding ? padding : 0)}px;
  padding-left: ${({ padding }: ScreenContentProps) => (padding ? padding : 0)}px;
  padding-top: 0px;
  position: relative;
`;

const ScreenContent: React.FC<ScreenContentProps> = ({ padding = 48, style, children }) => {
  return (
    <Layout style={style} padding={padding}>
      {children}
    </Layout>
  );
};

export default ScreenContent;
