import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
interface LineChartProps {
    data: { name: string; value: number }[];
}

const LineChartComponent: React.FC<LineChartProps> = ({ data }) => {
    return (
        <div className="graphicLine">

            <ResponsiveContainer width="100%" height="100%">

                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2f71ff" stopOpacity={0.3} />
                            <stop offset="90%" stopColor="#2f71ff" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />

                    <Tooltip />

                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#2f71ff"
                        fillOpacity={1}
                        fill="url(#colorValue)"
                    />
                </AreaChart>
            </ResponsiveContainer>


        </div>
    );
};

export default LineChartComponent;


{/* <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid horizontal={true} vertical={false} strokeDasharray="1 1" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="visits" stroke="#2f71ff" />
                </LineChart>
            </ResponsiveContainer> */}