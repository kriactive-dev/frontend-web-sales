import type React from "react";
import { ShoppingCart, Users, DollarSign, FileText, EllipsisVertical, ArrowUpRight, Plus } from "lucide-react";
import BarChartComponentSmall from "../graphics/BarChartComponentSmall";
import CustomChart from "../graphics/LineChartComponent";
import { useTranslation } from "react-i18next";

const Analitics: React.FC = () => {
    const { t } = useTranslation();


    const barData2 = [
        { name: 'Jan', users: 400, admins: 150 },
        { name: 'Feb', users: 300, admins: 180 },
        { name: 'Mar', users: 500, admins: 200 },
        { name: 'Apr', users: 200, admins: 120 },
        { name: 'May', users: 350, admins: 170 },
        { name: 'Jun', users: 450, admins: 220 },
        { name: 'Apr', users: 200, admins: 120 },
        { name: 'May', users: 350, admins: 170 },
        { name: 'Jun', users: 450, admins: 220 },
        { name: 'Jan', users: 400, admins: 150 },
        { name: 'Feb', users: 300, admins: 180 },
        { name: 'Mar', users: 500, admins: 200 },
        { name: 'Apr', users: 200, admins: 120 },
    ];

    // const pieData = [
    //     { name: 'Ativos', value: 65 },
    //     { name: 'Inativos', value: 35 },
    // ];

    const lineData = [
        { name: 'Jan', value: 120 },
        { name: 'Fev', value: 350 },
        { name: 'Mar', value: 210 },
        { name: 'Abr', value: 380 },
        { name: 'Mai', value: 290 },
        { name: 'Jun', value: 730 },
        { name: 'Jul', value: 270 },
        { name: 'Ago', value: 350 },
        { name: 'Set', value: 200 },
        { name: 'Out', value: 400 },
        { name: 'Nov', value: 300 },
        { name: 'Dez', value: 370 },
    ];


    return (
        <div>
            <div className="cardsDefaultDash">
                <div className="itemCard">
                    <div className="titleUser">
                        <div className="iconsTitleUser">
                            <div className="iconcards">
                                <Users className="iconcard" />
                            </div>
                            <h2>
                                {t('user')}
                            </h2>


                        </div>
                        <div className="pointsSelect">
                            <EllipsisVertical className="iconcard" />
                        </div>

                    </div>
                    <div className="graphicsAndNumbers">
                        <div className="containergraphicLk">
                            <div className="graphicLk">
                                <BarChartComponentSmall data={barData2}
                                    strokeColor="#2f71ff"
                                    fillColor="rgba(47, 113, 255, 0.7)" />
                            </div>
                        </div>

                        <div className="numersItemCard">
                            <span>
                                200+
                            </span>
                            <div className="textAnyDetails">
                                <ArrowUpRight className="iconcard" style={{ color: "#2f71ff" }} />
                                <h4 style={{ color: "#2f71ff" }}>30,06%</h4>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="itemCard">
                    <div className="titleUser">
                        <div className="iconsTitleUser">
                            <div className="iconcards">
                                <ShoppingCart className="iconcard" />
                            </div>
                            <h2>
                                {t('transactions')}
                            </h2>


                        </div>
                        <div className="pointsSelect">
                            <EllipsisVertical className="iconcard" />
                        </div>

                    </div>
                    <div className="graphicsAndNumbers">
                        <div className="containergraphicLk">
                            <div className="graphicLk">
                                <BarChartComponentSmall data={barData2}
                                    strokeColor="#ff5722"
                                    fillColor="rgba(255, 87, 34, 0.6)" />
                            </div>
                        </div>

                        <div className="numersItemCard">
                            <span>
                                $300k
                            </span>
                            <div className="textAnyDetails">
                                <ArrowUpRight className="iconcard" style={{ color: "#ff5722" }} />
                                <h4 style={{ color: "#ff5722" }}>30,06%</h4>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="itemCard">
                    <div className="titleUser">
                        <div className="iconsTitleUser">
                            <div className="iconcards">
                                <DollarSign className="iconcard" />
                            </div>
                            <h2>
                                {t('profit')}
                            </h2>


                        </div>
                        <div className="pointsSelect">
                            <EllipsisVertical className="iconcard" />
                        </div>

                    </div>
                    <div className="graphicsAndNumbers">
                        <div className="containergraphicLk">
                            <div className="graphicLk">
                                <BarChartComponentSmall data={barData2}
                                    strokeColor="rgba(6, 182, 212, 1)"
                                    fillColor="rgba(6, 182, 212, 0.6)" />
                            </div>
                        </div>

                        <div className="numersItemCard">
                            <span>
                                839
                            </span>
                            <div className="textAnyDetails">
                                <ArrowUpRight className="iconcard" style={{ color: "rgba(6, 182, 212, 1)" }} />
                                <h4 style={{ color: "rgba(6, 182, 212, 1)" }}>New</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="itemCard">
                    <div className="titleUser">
                        <div className="iconsTitleUser">
                            <div className="iconcards">
                                <FileText className="iconcard" />
                            </div>
                            <h2>
                            {t('invoices')}
                            </h2>


                        </div>
                        <div className="pointsSelect">
                            <EllipsisVertical className="iconcard" />
                        </div>

                    </div>
                    <div className="graphicsAndNumbers">
                        <div className="containergraphicLk">
                            <div className="graphicLk">
                                <BarChartComponentSmall data={barData2}
                                    strokeColor="rgba(168, 85, 247, 1)"
                                    fillColor="rgba(168, 85, 247, 0.6)" />
                            </div>
                        </div>

                        <div className="numersItemCard">
                            <span>
                                80+
                            </span>
                            <div className="textAnyDetails">
                                <ArrowUpRight className="iconcard" style={{ color: "rgba(168, 85, 247, 1)" }} />
                                <h4 style={{ color: "rgba(168, 85, 247, 1)" }}>60,06%</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="graficsDoubleInfo">
                <div className="itemGraphics">
                    <h2>Gráfico de Linha</h2>
                    <CustomChart data={lineData} />
                </div>
                <div className="otherInfoLinearGraphic">
                    <div className="titleotherInfoLinearGraphic">
                        <h2>
                            Project - title
                        </h2>

                    </div>
                    <div className="lineDevider"></div>
                    <div className="releaseDive">
                        <div className="titlereleaseDive">
                            <h2>
                                Release v1.2.0
                            </h2>
                            <div className="percenteRelease">
                                70%
                            </div>
                        </div>
                        <div className="linePercente">
                            <div className="percenteFill"></div>
                        </div>
                        <ul>
                            <li><span></span><h3>Horizontal Layout</h3></li>
                            <li><span></span><h3>Invoice Generator</h3></li>
                            <li><span></span><h3>Packge Upgrades</h3></li>
                            <li><span></span><h3>Figma Auto Layout</h3></li>

                        </ul>

                        <button className="btnPercente">
                            <Plus className="btnPercenteicons" />
                            <span>Add Task</span>
                        </button>
                    </div>

                </div>
            </div>

            {/* <div className="graficsDouble">



                <div className="itemGraphics">
                    <h2>Gráfico de Barras</h2>
                    <BarChartComponent data={barData} />
                </div>


            </div> */}


            {/* <h2>Gráfico de Pizza</h2>
            <PieChartComponent data={pieData} /> */}


        </div>
    );
};

export default Analitics;