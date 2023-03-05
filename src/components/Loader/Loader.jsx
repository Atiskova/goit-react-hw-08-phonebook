import { RotatingLines } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="#e08f43"
        strokeWidth="5"
        animationDuration="0.75"
        width="90"
        visible={true}
      />
    </Wrapper>
  );
};
