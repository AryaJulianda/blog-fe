import { useState } from "react"
import ListExpanses from "./ListExpanses";

const AllExpenses = ({ data, loading }) => {
  const [selectedValue, setSelectedValue] = useState('monthly');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={`flex flex-col w-full p-5 gap-4 bg-white rounded-xl shadow-lg max-xl:p-4 max-xl:gap-3 max-lg:p-3 max-lg:gap-2 ${loading && 'animate-pulse'}`}>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-semibold text-dark-blue max-lg:text-lg">All Expenses</h1>
        <select className="flex flex-row p-3 rounded-xl border-2 border-[#f1f1f1] pr-10 select-custom cursor-pointer outline-primary-blue bg-[length:24px_24px] max-xl:p-2 max-xl:pr-9 max-lg:p-2 max-lg:pr-8 max-lg:text-sm max-lg:bg-[length:18px_18px] " onChange={handleSelectChange}>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      
      <ListExpanses data={data} selectedValue={selectedValue} />

    </div>
  );
};

export default AllExpenses;
