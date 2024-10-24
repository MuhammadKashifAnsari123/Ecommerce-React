import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Image, message } from "antd";
import CheckOutModal from "../componets/CheckoutModal";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../utils/firebase";

function Carts() {
  const { cartItems, removeCart, updateToCart, clearCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const totalQuantity = cartItems.reduce((value, item) => value + item.quantity, 0);
  const totalPrice = cartItems.reduce((value, item) => value + item.quantity * item.price, 0);

  const checkoutOrder = async (values) => {
    const checkoutObj = {
      ...values,
      totalPrice,
      totalQuantity,
      status: "pending",
      user: auth.currentUser ? auth.currentUser.uid : "guest",
      items: cartItems.map((data) => `Item: ${data.title}, Price: ${data.price} (${data.quantity})`),
    };
    const docRef = collection(db, "Orders");
    addDoc(docRef, checkoutObj).then(() => message.success("Your Order is Placed"));

    const encodedTxt = encodeURIComponent(JSON.stringify(checkoutObj));
    window.open(`https://wa.me/923092662658?text=${encodedTxt}`);
    clearCart();
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <CheckOutModal
        isModalOpen={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        handleCancel={() => setIsModalOpen(false)}
        checkoutOrder={checkoutOrder}
      />

      <div className="flex flex-wrap gap-4 my-6">
        <div className="flex-grow border border-gray-300 rounded-lg flex justify-center items-center p-6 shadow-sm">
          <h1 className="text-3xl font-semibold text-gray-700">{totalQuantity} Items</h1>
        </div>

        <div className="flex-grow border border-gray-300 rounded-lg flex justify-center items-center p-6 shadow-sm">
          <h1 className="text-3xl font-semibold text-gray-700">${Math.floor(totalPrice)}</h1>
        </div>

        <div
          onClick={openModal}
          className="cursor-pointer flex-grow bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex justify-center items-center p-6 shadow-lg transition duration-300"
        >
          <h1 className="text-xl font-bold">Proceed To Checkout</h1>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex border border-gray-200 rounded-lg p-4 shadow-md bg-white">
            <Image preview={false} src={item.image} height={100} width={100} className="rounded-md" />
            <div className="pl-4">
              <h1 className="text-xl font-semibold text-gray-800">{item.title}</h1>
              <h1 className="text-lg text-gray-600">${item.price}</h1>

              <div className="flex gap-3 my-4">
                <Button onClick={() => updateToCart(item.id, "plus")} className="bg-green-500 text-white">
                  Plus
                </Button>
                <h1 className="text-xl">{item.quantity}</h1>
                <Button
                  onClick={() => {
                    if (item.quantity <= 1) {
                      removeCart(item.id);
                    } else {
                      updateToCart(item.id, "Minus");
                    }
                  }}
                  className="bg-red-500 text-white"
                >
                  Minus
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carts;
