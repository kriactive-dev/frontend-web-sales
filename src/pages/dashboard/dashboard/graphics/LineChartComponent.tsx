import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface LineChartProps {
    data: { day: string; visits: number }[];
}

const LineChartComponent: React.FC<LineChartProps> = ({ data }) => {
    return (
        <div className="graphicLine">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid horizontal={true} vertical={false} strokeDasharray="1 1" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="visits" stroke="#2f71ff" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    );
};

export default LineChartComponent;
