import { Stack, Paper, Typography,useTheme } from "@mui/material";
import PieChart from "../pie/PieChart";
import BarChart from "../bar/BarChart";
import Geo from "../geography/geo";

const Row3 = () => {
  const theme=useTheme()
  return (
    <Stack direction={"row"} flexWrap={"wrap"}  mt={2}  gap={1.5} >


      <Paper  sx={{flexGrow:1, minWidth:"400px",width:"28%" }}>
        <Typography
     color={theme.palette.secondary.main}
     sx={{padding:"30px 30px 0 30px"}}
     variant="h6"
     fontWeight="600"
      
      >
        Campaign
        </Typography>
        <PieChart isDashboard={true}/>

    <Typography variant="h6" align="center" sx={{mt:"15px"}}>
      $48,252 revenue generated
    </Typography>

<Typography variant="body2" px={.7} pb={3} align="center" >
  Includes extra misc expenditures and costs
</Typography>


      </Paper>



      <Paper sx={{flexGrow:1, minWidth:"400px",width:"33%"}}>
     <Typography variant="h6" color={theme.palette.secondary.main}
        fontWeight="600"
        sx={{p:"30px 30px 0 30px"}}
     > 
        Sales Quantity      
     </Typography>


      <BarChart isDashboard={true}/>

      </Paper>


      <Paper  sx={{flexGrow:1, minWidth:"400px",width:"33%"}}>
      <Geo isDashboard={true}/>
      </Paper>

    </Stack>
  );
};

export default Row3;
