import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, View } from 'react-native';
import theme from '@/themes';
import { connect } from 'react-redux';

interface ScreenContainerProps {
  children?: React.ReactNode;
  style?: any;
}

const LayoutLightBlue = styled(View)`
  width: 100%;
  flex-grow: 1;
  position: relative;
  background-color: ${theme.color_bg_base};
  align-items: flex-start;
  justify-content: flex-start;
`;

const Children = styled(View)`
  width: 100%;
  z-index: 1;
  flex-grow: 1;
`;

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => {
  return (
    <LayoutLightBlue>
      <StatusBar barStyle="light-content" />
      <Children>{children}</Children>
    </LayoutLightBlue>
  );
};

export default connect()(ScreenContainer);
