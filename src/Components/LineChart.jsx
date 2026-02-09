import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import RenderWeatherDot from "./RenderWeatherDot";

const LineChart = ({ forecast }) => {
  // Logic to calculate min/max for the Y-axis to make the curve look better
  const minTemp = forecast ? Math.min(...forecast.map((d) => d.temp)) - 5 : 0;
  const maxTemp = forecast ? Math.max(...forecast.map((d) => d.temp)) + 5 : 100;

  return (
    <>
      {forecast?.length > 0 && (
        <div
          className="chart-container"
          style={{ width: "100%", height: "100%", minHeight: "250px" }}
        >
          <ResponsiveContainer width="100%" height="100%" minHeight={250}>
            <AreaChart
              data={forecast}
              margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0095ff" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0095ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="rgba(255,255,255,0.1)"
              />
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9399a2", fontSize: 12 }}
                dy={10}
              />
              <YAxis hide={true} domain={[minTemp, maxTemp]} />
              <Tooltip
                contentStyle={{
                  borderRadius: "10px",
                  backgroundColor: "#202b3b",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                }}
              />
              <Area
                type="monotone"
                dataKey="temp"
                stroke="#0095ff"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorTemp)"
                dot={<RenderWeatherDot />}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default LineChart;
