import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import Header from "../../components/Header";

const data = [
  {
    id: "japan",
    color: "hsl(273, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 137,
      },
      {
        x: "helicopter",
        y: 208,
      },
      {
        x: "boat",
        y: 178,
      },
      {
        x: "train",
        y: 185,
      },
      {
        x: "subway",
        y: 22,
      },
      {
        x: "bus",
        y: 240,
      },
      {
        x: "car",
        y: 245,
      },
      {
        x: "moto",
        y: 176,
      },
      {
        x: "bicycle",
        y: 255,
      },
      {
        x: "horse",
        y: 169,
      },
      {
        x: "skateboard",
        y: 269,
      },
      {
        x: "others",
        y: 108,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(226, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 99,
      },
      {
        x: "helicopter",
        y: 237,
      },
      {
        x: "boat",
        y: 24,
      },
      {
        x: "train",
        y: 172,
      },
      {
        x: "subway",
        y: 200,
      },
      {
        x: "bus",
        y: 146,
      },
      {
        x: "car",
        y: 197,
      },
      {
        x: "moto",
        y: 289,
      },
      {
        x: "bicycle",
        y: 92,
      },
      {
        x: "horse",
        y: 282,
      },
      {
        x: "skateboard",
        y: 43,
      },
      {
        x: "others",
        y: 26,
      },
    ],
  },

  {
    id: "germany",
    color: "hsl(50, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 48,
      },
      {
        x: "helicopter",
        y: 208,
      },
      {
        x: "boat",
        y: 39,
      },
      {
        x: "train",
        y: 61,
      },
      {
        x: "subway",
        y: 214,
      },
      {
        x: "bus",
        y: 61,
      },
      {
        x: "car",
        y: 99,
      },
      {
        x: "moto",
        y: 71,
      },
      {
        x: "bicycle",
        y: 203,
      },
      {
        x: "horse",
        y: 235,
      },
      {
        x: "skateboard",
        y: 35,
      },
      {
        x: "others",
        y: 41,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(174, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 223,
      },
      {
        x: "helicopter",
        y: 257,
      },
      {
        x: "boat",
        y: 235,
      },
      {
        x: "train",
        y: 184,
      },
      {
        x: "subway",
        y: 197,
      },
      {
        x: "bus",
        y: 94,
      },
      {
        x: "car",
        y: 296,
      },
      {
        x: "moto",
        y: 8,
      },
      {
        x: "bicycle",
        y: 159,
      },
      {
        x: "horse",
        y: 142,
      },
      {
        x: "skateboard",
        y: 263,
      },
      {
        x: "others",
        y: 34,
      },
    ],
  },
];

// eslint-disable-next-line react/prop-types
const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  return (
    <>
  <Header title={isDashboard?null:"LINE"} subTitle={isDashboard?null:"Create Simple Line Chart"} />
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        data={data}
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "Count",
          legendOffset: -44,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
    </>
  );
};

export default LineChart;
