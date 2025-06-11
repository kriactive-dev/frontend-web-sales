import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
const Dashboard: React.FC = () => {
    return (
        <>
            <div className="barsDash">
                <div className="barsHeaderSide">

                    <div className="sidebar">
                        <Sidebar />
                    </div>
                </div>
                <div className="barsBody">
                    <div className="headerbar">
                        <Header />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Dashboard;