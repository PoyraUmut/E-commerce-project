import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import api from "../api/axios";
import { toast } from "react-toastify";

export default function OrdersPage() {
  const history = useHistory();
  const user = useSelector((state) => state.client.user);
  const authLoading = useSelector((state) => state.client.authLoading);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openOrders, setOpenOrders] = useState({});

  useEffect(() => {
    if (!authLoading && !user) history.push("/login");
  }, [authLoading, user, history]);

  useEffect(() => {
    if (user) fetchOrders();
  }, [user]);

  const fetchOrders = async () => {
    try {
      const res = await api.get("/order");
      setOrders(res.data);
    } catch {
      toast.error("Siparişler yüklenemedi.");
    }
    setLoading(false);
  };

  const toggleOrder = (orderId) => {
    setOpenOrders((prev) => ({ ...prev, [orderId]: !prev[orderId] }));
  };

  if (authLoading || loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-10 h-10 border-4 border-[#23A6F0] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-8">Siparişlerim</h1>

      {orders.length === 0 ? (
        <p className="text-gray-400">Henüz siparişiniz yok.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-lg overflow-hidden">

              <div
                className="flex items-center justify-between px-6 py-4 bg-gray-50 cursor-pointer hover:bg-gray-100"
                onClick={() => toggleOrder(order.id)}
              >
                <div className="flex gap-8 text-sm">
                  <div>
                    <p className="text-gray-500">Sipariş No</p>
                    <p className="font-semibold">#{order.id}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Tarih</p>
                    <p className="font-semibold">
                      {new Date(order.order_date).toLocaleDateString("tr-TR")}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Toplam</p>
                    <p className="font-semibold text-orange-500">${order.price?.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Ürün Sayısı</p>
                    <p className="font-semibold">{order.products?.length || 0}</p>
                  </div>
                </div>
                {openOrders[order.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>

              {openOrders[order.id] && (
                <div className="px-6 py-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-gray-500 text-left">
                        <th className="pb-2">Ürün</th>
                        <th className="pb-2 text-center">Adet</th>
                        <th className="pb-2 text-right">Fiyat</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.products?.map((item, i) => (
                        <tr key={i} className="border-b last:border-0">
                          <td className="py-3 flex items-center gap-3">
                            {item.product?.images?.[0]?.url && (
                              <img
                                src={item.product.images[0].url}
                                alt={item.product.name}
                                className="w-12 h-12 object-cover rounded"
                              />
                            )}
                            <span>{item.product?.name || `Ürün #${item.product_id}`}</span>
                          </td>
                          <td className="py-3 text-center">{item.count}</td>
                          <td className="py-3 text-right font-medium">
                            ${item.product?.price ? (item.product.price * item.count).toFixed(2) : "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="mt-4 pt-4 border-t flex justify-between text-sm font-bold">
                    <span>Toplam</span>
                    <span className="text-orange-500">${order.price?.toFixed(2)}</span>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      )}
    </div>
  );
}