import React from "react"
import TransactionCard from "./TransactionCard";

const Invoice = ({ loading }) => {
  return (
    <div className={`w-full flex flex-col p-6 gap-6 bg-white rounded-xl shadow-lg max-xl:p-5 max-xl:gap-5 max-lg:p-4 max-lg:gap-4 ${loading && 'animate-pulse'}`}>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-dark-blue font-semibold text-xl max-lg:text-lg">Quick Invoice</h1>
        <img src="/icon/add.svg" alt="" className="w-12 bg-[#fafafa] p-3 rounded-full max-lg:w-10 max-lg:p-2" />
      </div>

      <div className="flex flex-col gap-3 max-lg:gap-2">
        <h3 className="text-base font-medium text-dark-blue max-lg:text-sm">Latest Transaction</h3>

        {/* list latest transaction */}
        <div className="flex flex-row overflow-x-scroll gap-3 pb-2 max-lg:gap-2 max-lg:pb-1">
          <TransactionCard name="Lekan Okeowo" email="demo@gmail.com" />
          <TransactionCard name="Lekan Okeowo" email="demo@gmail.com" />
          <TransactionCard name="Lekan Okeowo" email="demo@gmail.com" />
        </div>

        {/* input */}
        <div className="grid grid-cols-2 gap-4 max-xl:gap-3">
          {["Customer Name", "Customer Email", "Item Name", "Item Amount"].map((label, index) => (
            <div key={index} className="flex flex-col gap-3 max-lg:gap-2">
              <h5 className="text-base text-dark-blue font-medium max-lg:text-sm">{label}</h5>
              {label === "Item Amount" ? (
                <div className="flex flex-row gap-1 bg-[#f0f0f0] p-5 rounded-xl outline-primary-blue cursor-pointer max-xl:p-4 max-lg:p-3 max-lg:text-sm">  
                  <select className="bg-transparent outline-none">
                    <option value="USD">USD</option>
                    <option value="IDR">IDR</option>
                  </select>
                  <input type="number" placeholder="Amount" className="w-full bg-transparent outline-none cursor-pointer max-lg:text-sm"/>
                </div>
              ) : (
                <input type="text" className="bg-[#f0f0f0] p-5 rounded-xl outline-primary-blue max-xl:p-4 max-lg:p-3 max-lg:text-sm" placeholder={`Type ${label.toLowerCase()}`} />
              )}
            </div>
          ))}
          <button className="text-lg font-semibold text-primary-blue py-5 max-lg:text-base">Add More Detail</button>
          <button className="text-lg font-semibold text-white bg-primary-blue py-5 rounded-xl max-lg:text-base">Send Money</button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
