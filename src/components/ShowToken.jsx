import React from 'react';
import { useSelector } from 'react-redux';
import Token from './Token';
import Goti from './Goti';
const ShowToken = ({ pathBoxId, moveToken }) => {
  const viewPosition = useSelector((state) => state.tokenPosition);
  const { blueToken, redToken, greenToken, yellowToken } = viewPosition;

  const colors = {
    yellow: "yellow",
    green: "green",
    red: "red",
    blue: "rgb(36,113,255)",
  };

  const tokenTypes = [
    { token: blueToken, color: colors.blue },
    { token: redToken, color: colors.red },
    { token: greenToken, color: colors.green },
    { token: yellowToken, color: colors.yellow },
  ];

  for (const { token, color } of tokenTypes) {
    const tokenNum = token.indexOf(pathBoxId);
    if (tokenNum !== -1) {
      // console.log(`Path Box ID: ${pathBoxId}, Color: ${color}, Token Number: ${tokenNum + 1}`);
      return <Goti color={color} moveToken={moveToken} tokenNum={tokenNum + 1} />;
    }
  }

  return null;
};

export default ShowToken;
