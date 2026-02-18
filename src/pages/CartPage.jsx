import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Trash2, Minus, Plus } from "lucide-react";
import { removeFromCart, updateCount, toggleCheck } from "../store/actions/shoppingCartActions";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shoppingCart.cart);

  const checkedItems = cart.filter((item) => item.checked);
  const subtotal = checkedItems.reduce((sum, item) => sum + item.product.price * item.count, 0);
  const shipping = checkedItems.length > 0 ? 29.99 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Sepetiniz Boş</h2>
        <Link to="/shop" className="text-[#23A6F0] hover:underline">
          Alışverişe Devam Et
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-8">Sepetim ({cart.length} Ürün)</h1>

      <div className="flex flex-col lg:flex-row gap-8">

        <div className="flex-1">
          <div className="border rounded-lg overflow-hidden">

            <div className="grid grid-cols-12 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-600">
              <div className="col-span-1"></div>
              <div className="col-span-5">Ürün</div>
              <div className="col-span-2 text-center">Fiyat</div>
              <div className="col-span-2 text-center">Adet</div>
              <div className="col-span-2 text-center">Toplam</div>
            </div>

            {cart.map((item) => (
              <div
                key={item.product.id}
                className="grid grid-cols-12 items-center px-4 py-4 border-t gap-2"
              >
                <div className="col-span-1 flex justify-center">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => dispatch(toggleCheck(item.product.id))}
                    className="w-4 h-4 cursor-pointer accent-[#23A6F0]"
                  />
                </div>

                <div className="col-span-5 flex items-center gap-3">
                  <img
                    src={item.product.images?.[0]?.url || ""}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-sm line-clamp-2">{item.product.name}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Stock: {item.product.stock}
                    </p>
                  </div>
                </div>

                <div className="col-span-2 text-center text-sm font-medium">
                  ${item.product.price?.toFixed(2)}
                </div>

                <div className="col-span-2 flex items-center justify-center gap-2">
                  <button
                    onClick={() => dispatch(updateCount(item.product.id, item.count - 1))}
                    className="w-6 h-6 border rounded flex items-center justify-center hover:bg-gray-100"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="text-sm w-6 text-center">{item.count}</span>
                  <button
                    onClick={() => dispatch(updateCount(item.product.id, item.count + 1))}
                    className="w-6 h-6 border rounded flex items-center justify-center hover:bg-gray-100"
                  >
                    <Plus size={12} />
                  </button>
                </div>

                <div className="col-span-2 text-center text-sm font-semibold text-green-600">
                  ${(item.product.price * item.count).toFixed(2)}
                </div>

                <div className="col-span-12 flex justify-end mt-1">
                  <button
                    onClick={() => dispatch(removeFromCart(item.product.id))}
                    className="text-red-400 hover:text-red-600 transition"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-80">
          <div className="border rounded-lg p-6 sticky top-4">
            <h2 className="text-lg font-bold mb-6">Sipariş Özeti</h2>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Ürünlerin Toplamı</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Kargo Toplam</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-base">
                <span>Toplam</span>
                <span className="text-[#23A6F0]">${total.toFixed(2)}</span>
              </div>
            </div>

            <Link
                to="/checkout"
                className="w-full bg-[#23A6F0] text-white py-3 rounded-lg mt-6 font-semibold hover:bg-blue-500 transition text-center block"
                >
                Siparişi Onayla
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}