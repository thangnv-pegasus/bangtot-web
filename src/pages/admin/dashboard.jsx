import Revenue from "../../components/chart/revenue";
import LayoutAdmin from "../../components/layout/admin";
import NavBar from "../../components/nav-bar";

const Dashboard = () => {
  return (
    <LayoutAdmin>
        <Revenue
          labelType="day"
          data={[200, 300, 400]}
          name="Doanh thu tháng 1"
        />
    </LayoutAdmin>
  );
};

export default Dashboard;
