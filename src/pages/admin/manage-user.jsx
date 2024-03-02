import { useEffect, useState } from "react";
import instance from "../../axios/config";
import LayoutAdmin from "../../components/layout/admin";
import TitlePage from "../../components/page-title";
import LoadingSpinner from "../../components/loading/spinner";
import Row from "../../components/table/row";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    const { data } = await instance.get("admin/all-user", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    setUsers(data.users);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <LayoutAdmin>
        {loading === false ? (
          <>
            <TitlePage title="Danh sách người dùng" />
            <div className="py-4">
              <Row
                columns={[
                  "STT",
                  "Họ và tên",
                  "Email",
                  "Số điện thoại",
                  "id tài khoản",
                  "Vai trò",
                  "Trạng thái",
                ]}
                classes="font-semibold"
              />
              {users.map((item, index) => {
                return (
                  <Row
                    columns={[
                      index+1, 
                      item.name,
                      item.email,
                      item.phone,
                      item.id,
                      item.role,
                      item.status,
                    ]}
                    key={index}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <LoadingSpinner />
        )}
      </LayoutAdmin>
    </>
  );
};

export default ManageUser;
