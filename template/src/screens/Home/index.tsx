import React from 'react';
import { Text } from '@/library';
import { ScreenContainer, ScreenContent } from '@/components';
import styled from 'styled-components/native';

interface Props {}

const Label = styled(Text)`
  color: black;
`;

const Home: React.FC<Props> = () => {
  return (
    <ScreenContainer>
      <ScreenContent>
        <Label>Hello World!</Label>
      </ScreenContent>
    </ScreenContainer>
  );
};

export default Home;
