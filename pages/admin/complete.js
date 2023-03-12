import React, { useEffect, useState } from 'react';
import DashboardScreen from '.';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminUserScreen() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/order');
      if (response.status == 200) {
        const { data } = await response.json();
        setData(() => data.filter((a) => a.status == 'complete'));
      }
    }
    fetchData();
  }, []);

  return (
    <DashboardScreen title="complete">
      <section className="bg-white py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <h1 className="p-5 text-lg font-bold">Completed Orders</h1>

            <div className="w-full px-4">
              <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-primary text-center">
                      <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-xs lg:py-7 lg:px-4">
                        ID
                      </th>
                      <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-xs lg:py-7 lg:px-4">
                        NAME
                      </th>
                      <th className="w-1/6 min-w-[160px] py-4 px-3 text-xs  lg:py-7 lg:px-4">
                        PRODUCT NAME
                      </th>
                      <th className="w-1/6 min-w-[160px] py-4 px-3 text-xs lg:py-7 lg:px-4">
                        DATE COMPLETED
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data ? (
                      data?.map((order, i) => (
                        <tr key={i}>
                          <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-2 px-1 text-center text-base font-medium">
                            <small> {order?.id}</small>
                          </td>
                          <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-2 px-1 text-center text-base font-medium">
                            <small> {order?.name}</small>
                          </td>
                          <td className="text-dark border-b border-[#E8E8E8] bg-white py-2 px-1 text-center text-base font-medium">
                            <small>{order?.productName}</small>
                          </td>
                          <td className="text-dark border-b border-[#E8E8E8] bg-white py-2 px-1 text-center text-base font-medium">
                            <small>
                              {new Date(order?.updatedAt).toDateString()}
                            </small>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td>loading...</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DashboardScreen>
  );
}
