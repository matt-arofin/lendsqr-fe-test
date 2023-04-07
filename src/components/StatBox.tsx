import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import elipse from "../assets/elipse1.png";

interface StatBoxProps {
  title: string;
  figure: string;
}

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  borderColor: "black",
});

const StatBox = ({ title, figure }: StatBoxProps) => {
  return (
    <StyledBox>
      <img src={elipse} alt={title} />
      <Box>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="h6">{figure}</Typography>
      </Box>
    </StyledBox>
  );
};

export default StatBox;
