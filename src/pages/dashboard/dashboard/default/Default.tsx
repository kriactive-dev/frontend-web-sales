import type React from "react";
import BarChartComponent from "../graphics/BarChartComponent";
import LineChartComponent from "../graphics/LineChartComponent";
import { User } from "lucide-react";

const Default: React.FC = () => {
    const barData = [
        { name: 'Jan', users: 400 },
        { name: 'Feb', users: 300 },
        { name: 'Mar', users: 500 },
        { name: 'Apr', users: 200 },
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
    ];

    return (
        <div>
            <div className="cardsDefaultDash">
                <div className="itemCard">
                    <div className="titleUser">
                        <h2>
                            Total de Usuários
                        </h2>
                        
                        <div className="iconcards">
                            <User className="iconcard" />
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
                            <User className="iconcard" />
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
                            Total de Usuários
                        </h2>
                        <div className="iconcards">
                            <User className="iconcard" />
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
                            Total de Usuários
                        </h2>
                        <div className="iconcards">
                            <User className="iconcard" />
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