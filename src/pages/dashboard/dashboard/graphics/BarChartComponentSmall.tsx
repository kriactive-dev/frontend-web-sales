import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

// interface BarChartProps {
//   data: { name: string; users: number }[];
// }

interface BarChartProps {
  data: any[];
  strokeColor?: string;
  fillColor?: string;
}




// const BarChartComponent: React.FC<BarChartProps> = ({ data }) => {
//   return (
//     <div className="graphicBar" style={{ width: '100%', height: 300 }}>
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="users" fill="#2f71ff" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

const BarChartComponentSmall: React.FC<BarChartProps> = ({
  data,
  strokeColor = "rgba(47, 113, 255, 1)",
  fillColor = "rgba(47, 113, 255, 0.7)"
}) => {
  return (
    <div className="graphicBar" style={{ width: '100%', height: 50 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          <Bar
            dataKey="users"
            stroke={strokeColor}
            fill={fillColor}
            name="Usuários"
            radius={[4, 4, 4, 4]}
          />
          {/* <Bar
            dataKey="admins"
            stroke="#ff5722"
            fill="rgba(255, 87, 34, 0.7)"
            name="Administradores"
            radius={[2, 2, 0, 0]}
          /> */}
          {/* <Legend /> */}
          {/* <Bar dataKey="users"  stroke="#2f71ff" fill="rgba(47, 113, 255, 0.7)" name="Usuários" />
            <Bar dataKey="admins"  stroke="#ff5722" fill="rgba(255, 87, 34, 0.7)" name="Administradores" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


export default BarChartComponentSmall;
