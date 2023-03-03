import React, { useEffect, useState } from 'react';
import DashboardScreen from '.';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminUserScreen() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/order');
      if (response.status == 200) {
        const { data } = await response.json();
        setData(data);
      }
    }
    fetchData();
  }, []);

  const completeBook = async (id) => {
    setLoading(true);
    try {
      let updateOrder = await fetch('/api/complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (updateOrder.status == 200) {
        setLoading(false);
        toast.success('updated successfully');
        router.push('/admin/complete');
      } else toast.error('unable to update, try again');
    } catch (err) {
      toast.error('server error, try again later');
    }
  };
  return (
    <DashboardScreen title="order">
      <section className="bg-white py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <h1 className="p-5 text-lg font-bold">Orders</h1>

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
                        DATE BOOKED
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((order, i) => (
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
                            {new Date(order?.createdAt).toDateString()}
                          </small>
                        </td>
                        <td className="text-dark border-b border-[#E8E8E8] bg-white py-2 px-1 text-center text-base font-medium">
                          {!loading ? (
                            <button
                              className={`${
                                order.status == 'pending'
                                  ? 'primary-button'
                                  : 'secondary-button'
                              }`}
                              disabled={`${
                                order.status == 'pending' ? false : true
                              }`}
                              onClick={() => completeBook(order?.id)}
                            >
                              {order?.status}
                            </button>
                          ) : (
                            <button className="bg-slate-400">loading</button>
                          )}
                        </td>
                      </tr>
                    ))}
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
