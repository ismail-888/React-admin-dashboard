import {
  Box,
  Paper,
  Stack,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import LineChart from "../line/LineChart";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={2}>
      
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
        <Stack
          alignItems={"center"}
          justifyContent={"space-between"}
          direction={"row"}
          flexWrap={"wrap"}
        >
          <Box>
            <Typography
              variant="h6"
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342,32
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
          
        </Stack>
        <LineChart isDashboard={true} />
      </Paper>

      <Box
        sx={{
          overflow: "auto",

          maxHeight: 380,
          flexGrow: 1,
          minWidth: "280px",
        }}
      >
        <Paper>
          <Typography
            variant="h6"
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
          >
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((item) => {
          return (
            <Paper
              key={item.txId}
              sx={{
                mt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1" fontWeight={"600"}>
                  {item.txId}
                </Typography>

                <Typography variant="body2">{item.user}</Typography>
              </Box>

              <Typography variant="body1">{item.date}</Typography>

              <Typography
                variant="body2"
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>

    </Stack>
  );
};

export default Row2;
