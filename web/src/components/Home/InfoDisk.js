import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InfoDisk = ({ count }) => {
  const plural = count > 1 ? 's' : '';

  return (
    <Disk>
      <Count>
        {count || 'No'}
      </Count>
      <Text>
        place{plural} to go
      </Text>
    </Disk>
  );
};

InfoDisk.propTypes = {
  count: PropTypes.number,
};

const Disk = styled.div`
  width: 25rem;
  height: 25rem;
  background: var(--lightBlue);
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
`;

const Count = styled.div`
  font-size: 8.9rem;
  color: var(--darkBlue);
  margin-top: 3rem;
`;

const Text = styled.div`
  font-size: 2.4rem;
  letter-spacing: .4rem;
  text-align: center;
  color: var(--transparentDarkBlue);
  margin-bottom: 5.5rem;
`;

export default InfoDisk;
