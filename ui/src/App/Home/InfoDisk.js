import React from 'react';
import styled from 'styled-components';

const InfoDisk = ({ count }) => {
  const plural = count > 1 ? 's' : '';

  return (
    <Disk>
      <Count>{count || 'No'}</Count>
      <Text>Place{plural} to visit</Text>
    </Disk>
  );
};

const Disk = styled.div`
  width: 16rem;
  height: 12rem;
  position: relative;
  background: var(--peterRiver);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  margin: 2rem auto 8rem;
`;

const Count = styled.div`
  font-size: 8.9rem;
  color: var(--clouds);
`;

const Text = styled.div`
  width: 16rem;
  height: 4rem;
  line-height: 4rem;
  background-color: var(--belizeHole);
  font-size: 1.4rem;
  text-align: center;
  position: absolute;
  bottom: -4rem;
  color: var(--clouds);
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

export default InfoDisk;
