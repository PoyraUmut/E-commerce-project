import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";
import { setCart } from "../store/actions/shoppingCartActions";



const TURKEY_CITIES = [
  "Adana","Adıyaman","Afyonkarahisar","Ağrı","Amasya","Ankara","Antalya","Artvin",
  "Aydın","Balıkesir","Bilecik","Bingöl","Bitlis","Bolu","Burdur","Bursa","Çanakkale",
  "Çankırı","Çorum","Denizli","Diyarbakır","Edirne","Elazığ","Erzincan","Erzurum",
  "Eskişehir","Gaziantep","Giresun","Gümüşhane","Hakkari","Hatay","Isparta","Mersin",
  "İstanbul","İzmir","Kars","Kastamonu","Kayseri","Kırklareli","Kırşehir","Kocaeli",
  "Konya","Kütahya","Malatya","Manisa","Kahramanmaraş","Mardin","Muğla","Muş",
  "Nevşehir","Niğde","Ordu","Rize","Sakarya","Samsun","Siirt","Sinop","Sivas",
  "Tekirdağ","Tokat","Trabzon","Tunceli","Şanlıurfa","Uşak","Van","Yozgat",
  "Zonguldak","Aksaray","Bayburt","Karaman","Kırıkkale","Batman","Şırnak","Bartın",
  "Ardahan","Iğdır","Yalova","Karabük","Kilis","Osmaniye","Düzce"
];

const emptyAddressForm = {
  title: "", name: "", surname: "", phone: "",
  city: "", district: "", neighborhood: "", address: "",
};

const emptyCardForm = {
  card_no: "", expire_month: "", expire_year: "", name_on_card: "",
};

const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);
const YEARS = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

export default function CheckOutPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);
  const authLoading = useSelector((state) => state.client.authLoading);
  const cart = useSelector((state) => state.shoppingCart.cart);

  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [addressForm, setAddressForm] = useState(emptyAddressForm);
  const [addressLoading, setAddressLoading] = useState(false);

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCardForm, setShowCardForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [cardForm, setCardForm] = useState(emptyCardForm);
  const [cardLoading, setCardLoading] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      history.push("/login");
    }
  }, [authLoading, user, history]);

  useEffect(() => {
    if (user) {
      fetchAddresses();
      fetchCards();
    }
  }, [user]);

 useEffect(() => {
    if (!authLoading && !user) history.push("/login");
  }, [authLoading, user, history]);

  useEffect(() => {
    if (user) { fetchAddresses(); fetchCards(); }
  }, [user]);

  const fetchAddresses = async () => {
    try {
      const res = await api.get("/user/address");
      setAddresses(res.data);
    } catch { toast.error("Adresler yüklenemedi."); }
  };

  const handleAddressChange = (e) => setAddressForm({ ...addressForm, [e.target.name]: e.target.value });

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    setAddressLoading(true);
    try {
      if (editingAddress) {
        await api.put("/user/address", { id: editingAddress.id, ...addressForm });
        toast.success("Adres güncellendi!");
      } else {
        await api.post("/user/address", addressForm);
        toast.success("Adres eklendi!");
      }
      await fetchAddresses();
      setShowAddressForm(false);
      setEditingAddress(null);
      setAddressForm(emptyAddressForm);
    } catch { toast.error("İşlem başarısız."); }
    setAddressLoading(false);
  };

  const handleAddressEdit = (address) => {
    setEditingAddress(address);
    setAddressForm({
      title: address.title || "",
      name: address.name || "",
      surname: address.surname || "",
      phone: address.phone || "",
      city: address.city || "",
      district: address.district || "",
      neighborhood: address.neighborhood || "",
      address: address.address || "",
    });
    setShowAddressForm(true);
  };

  const handleAddressDelete = async (addressId) => {
    if (!window.confirm("Adresi silmek istediğinize emin misiniz?")) return;
    try {
      await api.delete(`/user/address/${addressId}`);
      toast.success("Adres silindi!");
      await fetchAddresses();
      if (selectedAddress?.id === addressId) setSelectedAddress(null);
    } catch (err) {
      toast.error("Adres silinemedi.");
    }
  };

  const toggleAddress = (address) => {
    setSelectedAddress(selectedAddress?.id === address.id ? null : address);
  };

  const fetchCards = async () => {
    try {
      const res = await api.get("/user/card");
      setCards(res.data);
    } catch (err) {
      toast.error("Kartlar yüklenemedi.");
    }
  };

  const handleCardChange = (e) => {
    setCardForm({ ...cardForm, [e.target.name]: e.target.value });
  };

  const handleCardSubmit = async (e) => {
    e.preventDefault();
    setCardLoading(true);
    try {
      const payload = {
        ...cardForm,
        expire_month: parseInt(cardForm.expire_month),
        expire_year: parseInt(cardForm.expire_year),
      };
      if (editingCard) {
        await api.put("/user/card", { id: editingCard.id, ...payload });
        toast.success("Kart güncellendi!");
      } else {
        await api.post("/user/card", payload);
        toast.success("Kart eklendi!");
      }
      await fetchCards();
      setShowCardForm(false);
      setEditingCard(null);
      setCardForm(emptyCardForm);
    } catch (err) {
      toast.error("İşlem başarısız.");
    }
    setCardLoading(false);
  };

  const handleCardEdit = (card) => {
    setEditingCard(card);
    setCardForm({
      card_no: card.card_no || "",
      expire_month: card.expire_month || "",
      expire_year: card.expire_year || "",
      name_on_card: card.name_on_card || "",
    });
    setShowCardForm(true);
  };

  const handleCardDelete = async (cardId) => {
    if (!window.confirm("Kartı silmek istediğinize emin misiniz?")) return;
    try {
      await api.delete(`/user/card/${cardId}`);
      toast.success("Kart silindi!");
      await fetchCards();
      if (selectedCard?.id === cardId) setSelectedCard(null);
    } catch (err) {
      toast.error("Kart silinemedi.");
    }
  };

  const toggleCard = (card) => {
    setSelectedCard(selectedCard?.id === card.id ? null : card);
  };

  const checkedItems = cart.filter((item) => item.checked);
  const subtotal = checkedItems.reduce((sum, item) => sum + item.product.price * item.count, 0);
  const shipping = checkedItems.length > 0 ? 29.99 : 0;
  const total = subtotal + shipping;

  const handleOrder = () => {
    if (!selectedAddress) {
      toast.error("Lütfen bir teslimat adresi seçin!");
      return;
    }
    if (!selectedCard) {
      toast.error("Lütfen bir ödeme yöntemi seçin!");
      return;
    }
    toast.success("Sipariş oluşturuldu!");
  };

  if (authLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-10 h-10 border-4 border-[#23A6F0] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-8">Sipariş Oluştur</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-12">

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold">
                <span className="text-orange-500 mr-2">1</span>
                Teslimat Adresi
              </h2>
              <button
                onClick={() => {
                  setEditingAddress(null);
                  setAddressForm(emptyAddressForm);
                  setShowAddressForm(!showAddressForm);
                }}
                className="text-sm text-[#23A6F0] border border-[#23A6F0] px-4 py-2 rounded hover:bg-blue-50"
              >
                + Yeni Adres Ekle
              </button>
            </div>

            {showAddressForm && (
              <form onSubmit={handleAddressSubmit} className="border rounded-lg p-6 mb-6 bg-gray-50">
                <h3 className="font-semibold mb-4">
                  {editingAddress ? "Adresi Düzenle" : "Yeni Adres"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Adres Başlığı</label>
                    <input name="title" value={addressForm.title} onChange={handleAddressChange} required className="w-full border rounded px-3 py-2 text-sm" placeholder="Ev, İş..." />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Ad</label>
                    <input name="name" value={addressForm.name} onChange={handleAddressChange} required className="w-full border rounded px-3 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Soyad</label>
                    <input name="surname" value={addressForm.surname} onChange={handleAddressChange} required className="w-full border rounded px-3 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Telefon</label>
                    <input name="phone" value={addressForm.phone} onChange={handleAddressChange} required className="w-full border rounded px-3 py-2 text-sm" placeholder="05xxxxxxxxx" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">İl</label>
                    <select name="city" value={addressForm.city} onChange={handleAddressChange} required className="w-full border rounded px-3 py-2 text-sm">
                      <option value="">Seçiniz</option>
                      {TURKEY_CITIES.map((city) => (
                        <option key={city} value={city.toLowerCase()}>{city}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">İlçe</label>
                    <input name="district" value={addressForm.district} onChange={handleAddressChange} required className="w-full border rounded px-3 py-2 text-sm" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm text-gray-600 mb-1 block">Mahalle</label>
                    <input name="neighborhood" value={addressForm.neighborhood} onChange={handleAddressChange} required className="w-full border rounded px-3 py-2 text-sm" placeholder="Mahalle adı..." />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm text-gray-600 mb-1 block">Adres Detayı</label>
                    <textarea name="address" value={addressForm.address} onChange={handleAddressChange} required rows={2} className="w-full border rounded px-3 py-2 text-sm" placeholder="Sokak, bina no, daire no..." />
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <button type="submit" disabled={addressLoading} className="bg-[#23A6F0] text-white px-6 py-2 rounded text-sm font-medium disabled:opacity-50">
                    {addressLoading ? "Kaydediliyor..." : editingAddress ? "Güncelle" : "Kaydet"}
                  </button>
                  <button type="button" onClick={() => { setShowAddressForm(false); setEditingAddress(null); setAddressForm(emptyAddressForm); }} className="border px-6 py-2 rounded text-sm">
                    İptal
                  </button>
                </div>
              </form>
            )}

            {addresses.length === 0 && !showAddressForm && (
              <p className="text-gray-400 text-sm">Kayıtlı adresiniz yok.</p>
            )}

            <div className="flex flex-col gap-4">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  onClick={() => toggleAddress(address)}
                  className={`border rounded-lg p-4 cursor-pointer transition ${
                    selectedAddress?.id === address.id ? "border-orange-500 bg-orange-50" : "hover:border-gray-400"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={selectedAddress?.id === address.id}
                        onChange={() => toggleAddress(address)}
                        className="accent-orange-500 mt-1"
                      />
                      <div>
                        <p className="font-semibold text-sm">{address.title}</p>
                        <p className="text-sm text-gray-600 mt-1">{address.name} {address.surname}</p>
                        <p className="text-sm text-gray-500">{address.phone}</p>
                        <p className="text-sm text-gray-500 mt-1">{address.neighborhood}, {address.district}, {address.city}</p>
                        <p className="text-sm text-gray-500">{address.address}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={(e) => { e.stopPropagation(); handleAddressEdit(address); }} className="text-xs text-[#23A6F0] border border-[#23A6F0] px-3 py-1 rounded hover:bg-blue-50">Düzenle</button>
                      <button onClick={(e) => { e.stopPropagation(); handleAddressDelete(address.id); }} className="text-xs text-red-400 border border-red-400 px-3 py-1 rounded hover:bg-red-50">Sil</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold">
                <span className="text-orange-500 mr-2">2</span>
                Ödeme Seçenekleri
              </h2>
              <button
                onClick={() => {
                  setEditingCard(null);
                  setCardForm(emptyCardForm);
                  setShowCardForm(!showCardForm);
                }}
                className="text-sm text-[#23A6F0] border border-[#23A6F0] px-4 py-2 rounded hover:bg-blue-50"
              >
                + Yeni Kart Ekle
              </button>
            </div>

            {showCardForm && (
              <form onSubmit={handleCardSubmit} className="border rounded-lg p-6 mb-6 bg-gray-50">
                <h3 className="font-semibold mb-4">
                  {editingCard ? "Kartı Düzenle" : "Yeni Kart"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="text-sm text-gray-600 mb-1 block">Kart Numarası</label>
                    <input name="card_no" value={cardForm.card_no} onChange={handleCardChange} required maxLength={16} className="w-full border rounded px-3 py-2 text-sm" placeholder="1234123412341234" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm text-gray-600 mb-1 block">Kart Üzerindeki İsim</label>
                    <input name="name_on_card" value={cardForm.name_on_card} onChange={handleCardChange} required className="w-full border rounded px-3 py-2 text-sm" placeholder="Ad Soyad" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Son Kullanma Ayı</label>
                    <select name="expire_month" value={cardForm.expire_month} onChange={handleCardChange} required className="w-full border rounded px-3 py-2 text-sm">
                      <option value="">Ay</option>
                      {MONTHS.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Son Kullanma Yılı</label>
                    <select name="expire_year" value={cardForm.expire_year} onChange={handleCardChange} required className="w-full border rounded px-3 py-2 text-sm">
                      <option value="">Yıl</option>
                      {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <button type="submit" disabled={cardLoading} className="bg-[#23A6F0] text-white px-6 py-2 rounded text-sm font-medium disabled:opacity-50">
                    {cardLoading ? "Kaydediliyor..." : editingCard ? "Güncelle" : "Kaydet"}
                  </button>
                  <button type="button" onClick={() => { setShowCardForm(false); setEditingCard(null); setCardForm(emptyCardForm); }} className="border px-6 py-2 rounded text-sm">
                    İptal
                  </button>
                </div>
              </form>
            )}

            {cards.length === 0 && !showCardForm && (
              <p className="text-gray-400 text-sm">Kayıtlı kartınız yok.</p>
            )}

            <div className="flex flex-col gap-4">
              {cards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => toggleCard(card)}
                  className={`border rounded-lg p-4 cursor-pointer transition ${
                    selectedCard?.id === card.id ? "border-orange-500 bg-orange-50" : "hover:border-gray-400"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input type="radio" checked={selectedCard?.id === card.id} onChange={() => toggleCard(card)} className="accent-orange-500" />
                      <div>
                        <p className="font-semibold text-sm">{card.name_on_card}</p>
                        <p className="text-sm text-gray-500">**** **** **** {card.card_no?.slice(-4)}</p>
                        <p className="text-xs text-gray-400">{card.expire_month}/{card.expire_year}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={(e) => { e.stopPropagation(); handleCardEdit(card); }} className="text-xs text-[#23A6F0] border border-[#23A6F0] px-3 py-1 rounded hover:bg-blue-50">Düzenle</button>
                      <button onClick={(e) => { e.stopPropagation(); handleCardDelete(card.id); }} className="text-xs text-red-400 border border-red-400 px-3 py-1 rounded hover:bg-red-50">Sil</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="w-full lg:w-80">
          <div className="border rounded-lg p-6 sticky top-4">
            <h2 className="text-lg font-bold mb-4">Sipariş Özeti</h2>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Ürünün Toplamı</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Kargo Toplam</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-base">
                <span>Toplam</span>
                <span className="text-orange-500">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleOrder}
              className="w-full bg-orange-500 text-white py-3 rounded-lg mt-6 font-semibold hover:bg-orange-600"
            >
              Siparişi Onayla
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}