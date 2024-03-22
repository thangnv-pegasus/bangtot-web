const FilterOrder = ({ setFilter, filter, setOrder, order }) => {
  
  return (
    <div className="flex items-center select-none">
      <select
        name="day"
        id="day"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mr-5 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer"
        onChange={(e) => {
          setFilter((pre) => ({
            ...pre,
            day: e.target.value === "" ? null : e.target.value,
          }));
        }}
      >
        <option selected value={""}>
          Chọn ngày
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
      </select>
      <select
        name="month"
        id="month"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm mr-5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer"
        onChange={(e) => {
          setFilter((pre) => ({
            ...pre,
            month: e.target.value === "" ? null : e.target.value,
          }));
        }}
      >
        <option selected value="">
          Chọn tháng
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <select
        name="year"
        id="year"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm mr-5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer"
        onChange={(e) => {
          setFilter((pre) => ({
            ...pre,
            year: e.target.value === "" ? null : e.target.value,
          }));
        }}
      >
        <option selected value="">
          Chọn năm
        </option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2035">2035</option>
      </select>
      <select
        name="status"
        id="status"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm mr-5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer"
        onChange={(e) => {
          setFilter((pre) => ({
            ...pre,
            status: e.target.value === "" ? null : e.target.value,
          }));
        }}
      >
        <option selected value="">
          Trạng thái
        </option>
        <option value="1">Đã giao</option>
        <option value="0">Chưa giao</option>
      </select>
    </div>
  );
};

export default FilterOrder;
