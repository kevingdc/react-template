import React, { useState } from 'react';
import styled from 'styled-components';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../store/slices/counterSlice';

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > button {
    margin-left: 4px;
    margin-right: 8px;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Button = styled.button`
  appearance: none;
  background: none;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: rgb(112, 76, 182);
  padding-bottom: 4px;
  cursor: pointer;
  background-color: rgba(112, 76, 182, 0.1);
  border-radius: 2px;
  transition: all 0.15s;

  :hover,
  :focus {
    border: 2px solid rgba(112, 76, 182, 0.4);
  }

  :active {
    background-color: rgba(112, 76, 182, 0.2);
  }
`;

const AsyncButton = styled(Button)`
  position: relative;

  :after {
    content: '';
    background-color: rgba(112, 76, 182, 0.15);
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    transition: width 1s linear, opacity 0.5s ease 1s;
  }

  :active:after {
    width: 0%;
    opacity: 1;
    transition: 0s;
  }
`;

const Span = styled.span`
  font-size: 78px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2px;
  font-family: 'Courier New', Courier, monospace;
`;

const TextBox = styled.input`
  font-size: 32px;
  padding: 2px;
  width: 64px;
  text-align: center;
  margin-right: 4px;
`;

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <Row>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <Span>{count}</Span>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </Row>
      <Row>
        <TextBox
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </Button>
        <AsyncButton onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </AsyncButton>
        <Button onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </Button>
      </Row>
    </div>
  );
}
