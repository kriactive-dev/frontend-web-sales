import type React from "react";
import BarChartComponent from "../graphics/BarChartComponent";
import LineChartComponent from "../graphics/LineChartComponent";
import { User, ShoppingCart, Users, DollarSign, FileText } from "lucide-react";

const Default: React.FC = () => {
    const barData = [
        { name: 'Jan', users: 400, admins: 150 },
        { name: 'Feb', users: 300, admins: 180 },
        { name: 'Mar', users: 500, admins: 200 },
        { name: 'Apr', users: 200, admins: 120 },
        { name: 'May', users: 350, admins: 170 },
        { name: 'Jun', users: 450, admins: 220 },
    ];


    // const pieData = [
    //     { name: 'Ativos', value: 65 },
    //     { name: 'Inativos', value: 35 },
    // ];

    const lineData = [
        { day: 'Seg', visits: 100 },
        { day: 'Ter', visits: 300 },
        { day: 'Qua', visits: 200 },
        { day: 'Qui', visits: 400 },
        { day: 'Sex', visits: 150 },
        { day: 'Sab', visits: 400 },
        { day: 'Dom', visits: 10 },
    ];

    return (
        <div>
            <div className="cardsDefaultDash">
                <div className="itemCard">
                    <div className="titleUser">
                        <h2>
                            Usuários
                        </h2>

                        <div className="iconcards">
                            <Users className="iconcard" />
                        </div>
                    </div>
                    <div className="numersItemCard">
                        <span>
                            20
                        </span>
                    </div>
                </div>
                <div className="itemCard">
                    <div className="titleUser">
                        <h2>
                            Transações
                        </h2>
                        <div className="iconcards">
                            <ShoppingCart className="iconcard" />
                        </div>
                    </div>
                    <div className="numersItemCard">
                        <span>
                            120
                        </span>
                    </div>
                </div>
                <div className="itemCard">
                    <div className="titleUser">
                        <h2>
                            Lucro
                        </h2>
                        <div className="iconcards">
                            <DollarSign className="iconcard" />
                        </div>
                    </div>
                    <div className="numersItemCard">
                        <span>
                            230
                        </span>
                    </div>
                </div>
                <div className="itemCard">
                    <div className="titleUser">
                        <h2>
                            Faturas
                        </h2>
                        <div className="iconcards">
                            <FileText className="iconcard" />
                        </div>
                    </div>
                    <div className="numersItemCard">
                        <span>
                            50
                        </span>
                    </div>
                </div>
            </div>
            <div className="graficsDouble">
                <div className="itemGraphics">
                    <h2>Gráfico de Linha</h2>
                    <LineChartComponent data={lineData} />
                </div>


                <div className="itemGraphics">
                    <h2>Gráfico de Barras</h2>
                    <BarChartComponent data={barData} />
                </div>


            </div>


            {/* <h2>Gráfico de Pizza</h2>
            <PieChartComponent data={pieData} /> */}


        </div>
    );
};

export default Default;