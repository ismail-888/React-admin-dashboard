import { Box, useTheme, Typography } from "@mui/material";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography align="center" variant="h6" color={theme.palette.error.main}>
        There is no design yet
      
      <br />
      <br />
      Please try again later..
      </Typography>
    </Box>
  );
};

export default NotFound;
