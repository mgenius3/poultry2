import React, { useEffect, useState } from 'react';
import DashboardScreen from '.';
export default function AdminUserScreen() {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/user');
      if (response.status == 200) {
        const { data } = await response.json();
        setData(data);
      }
    }
    fetchData();
  }, [data]);
  return (
    <DashboardScreen title="user">
      <section className="bg-white py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <h1 className="p-5 text-lg font-bold">Registered Users</h1>

            <div className="w-full px-4">
              <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-primary text-center">
                      <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-xs lg:py-7 lg:px-4">
                        NAME
                      </th>
                      <th className="w-1/6 min-w-[160px] py-4 px-3 text-xs  lg:py-7 lg:px-4">
                        EMAIL
                      </th>
                      <th className="w-1/6 min-w-[160px] py-4 px-3 text-xs lg:py-7 lg:px-4">
                        DATE REGISTERED
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((user, i) => (
                      <tr key={i}>
                        <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                          <small> {user?.name}</small>
                        </td>
                        <td className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                          <small>{user?.email}</small>
                        </td>
                        <td className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                          <small>
                            {new Date(user?.createdAt).toDateString()}
                          </small>
                        </td>
                      </tr>
                    ))}
                    {/* <tr>
                      <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                        .com
                      </td>
                      <td className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        1 Year
                      </td>
                      <td className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                        $75.00
                      </td>
                      <td className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        $5.00
                      </td>
                      <td className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                        $10.00
                      </td>
                      <td className="text-dark border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        <a
                          href="javascript:void(0)"
                          className="border-primary text-primary hover:bg-primary inline-block rounded border py-2 px-6 hover:text-white"
                        >
                          Sign Up
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                        .com
                      </td>
                      <td className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        1 Year
                      </td>
                      <td className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                        $75.00
                      </td>
                      <td className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        $5.00
                      </td>
                      <td className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                        $10.00
                      </td>
                      <td className="text-dark border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        <a
                          href="javascript:void(0)"
                          className="border-primary text-primary hover:bg-primary inline-block rounded border py-2 px-6 hover:text-white"
                        >
                          Sign Up
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                        .com
                      </td>
                      <td className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        1 Year
                      </td>
                      <td className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                        $75.00
                      </td>
                      <td className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        $5.00
                      </td>
                      <td className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                        $10.00
                      </td>
                      <td className="text-dark border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        <a
                          href="javascript:void(0)"
                          className="border-primary text-primary hover:bg-primary inline-block rounded border py-2 px-6 hover:text-white"
                        >
                          Sign Up
                        </a>
                      </td>
                    </tr> */}
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
