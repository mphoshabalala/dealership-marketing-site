import React, { useState } from "react";
import { useCars } from "../contexts/carsContext";
import Header from "../components/Header";
import { useDealers } from "../contexts/dealersContext";
import { useOrders } from "../contexts/ordersContext";
import ScrollToTop from "../utilities/ScrollToTop";
import CarEditForm from "../components/CarEditForm";
import CarDeleteForm from "../components/CarDeleteForm";
import DealerEditForm from "../components/DealerEditForm";
import DealerDeleteForm from "../components/DealerDeleteForm";
import OrderEditForm from "../components/OrderEditForm";
import OrderDeleteForm from "../components/OrderDeleteForm";

export default function Administration() {
  const { cars } = useCars();
  const { dealers } = useDealers();
  const { orders } = useOrders();

  // cars states
  const [editCarFormOpen, setEditCarFormOpen] = useState(false);
  const [deleteCarFormOpen, setDeleteCarFormOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState({});

  // dealers states
  const [editDealerFormOpen, setEditDealerFormOpen] = useState(false);
  const [deleteDealerFormOpen, setDeleteDealerFormOpen] = useState(false);
  const [selectedDealer, setSelectedDealer] = useState({});

  // orders states
  const [editOrderFormOpen, setEditOrderFormOpen] = useState(false);
  const [deleteOrderFormOpen, setDeleteOrderFormOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});

  // dealer edit form
  const handleEditDealer = (dealer) => {
    setEditDealerFormOpen(true);
    setSelectedDealer(dealer);
  };
  //dealer delete
  const handleDeleteDealer = (dealer) => {
    setDeleteDealerFormOpen(true);
    setSelectedDealer(dealer);
  };

  // car edit form
  const handleEditCar = (car) => {
    setEditCarFormOpen(true);
    setSelectedCar(car);
    setDeleteCarFormOpen(false);
  };
  // car delete
  const handleDeleteCar = (car) => {
    setDeleteCarFormOpen(true);
    setSelectedCar(car);
  };
  // edit order
  const handleEditOrder = (order) => {
    setEditOrderFormOpen(true);
    setSelectedOrder(order);
  };
  // delete order
  const handleDeleteOrder = (order) => {
    setDeleteOrderFormOpen(true);
    setSelectedOrder(order);
  };
  return (
    <div className="relative">
      <ScrollToTop />
      <Header />
      <div className=" pt-40 p-8 bg-heroImage text-gray-800 font-bold">
        <p className="text-3xl">Cars</p>
        <table className="">
          <thead>
            <tr>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">ID</th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Car ID
              </th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Brand
              </th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Model
              </th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Price
              </th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Configure
              </th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr
                key={car.id}
                className="hover:bg-blue-300 border border-gray-400"
              >
                <td className="hover:bg-blue-400 pl-4 pr-10 border-l-2 border border-gray-400">
                  {index + 1}
                </td>
                <td className="hover:bg-blue-400 pl-4 pr-10 border-l-2 border border-gray-400">
                  {car.id}
                </td>

                <td className="hover:bg-blue-400 pl-4 pr-40 border-l-2 border border-gray-400">
                  {car.brand}
                </td>
                <td className="hover:bg-blue-400 pl-4 pr-40 border-l-2 border border-gray-400">
                  {car.model}
                </td>
                <td className="hover:bg-blue-400 pl-4 pr-40 border-l-2 border border-gray-400">
                  R{car.price}.00
                </td>
                <td>
                  <button
                    onClick={() => handleEditCar(car)}
                    className="px-4 mx-2 bg-green-400 hover:bg-green-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCar(car)}
                    className="px-4 bg-red-400 hover:bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editCarFormOpen && (
        <CarEditForm
          setEditCarFormOpen={setEditCarFormOpen}
          selectedCar={selectedCar}
        />
      )}

      {deleteCarFormOpen && (
        <CarDeleteForm
          selectedCar={selectedCar}
          setDeleteCarFormOpen={setDeleteCarFormOpen}
        />
      )}

      <div className="pt-40 p-8 bg-heroImage text-gray-800 font-bold">
        <p className="text-3xl">Dealers</p>
        <table className="">
          <thead>
            <tr>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">ID</th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Dealer ID
              </th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Dealer Name
              </th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Company
              </th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Location
              </th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Configure
              </th>
            </tr>
          </thead>
          <tbody>
            {dealers.map((dealer, index) => (
              <tr
                key={dealer.id}
                className="hover:bg-blue-300 border border-gray-400"
              >
                <td className="hover:bg-blue-400 pl-4 pr-10 border-l-2 border border-gray-400">
                  {index + 1}
                </td>
                <td className="hover:bg-blue-400 pl-4 pr-10 border-l-2 border border-gray-400">
                  {dealer.id}
                </td>
                <td className="hover:bg-blue-400 pl-4 pr-40 border-l-2 border border-gray-400">
                  {dealer.name}
                </td>

                <td className="hover:bg-blue-400 pl-4 pr-40 border-l-2 border border-gray-400">
                  {dealer.companyName}
                </td>
                <td className="hover:bg-blue-400 pl-4 pr-40 border-l-2 border border-gray-400">
                  {dealer.dealerLocation}
                </td>

                <td className="flex">
                  {" "}
                  <button
                    onClick={() => handleEditDealer(dealer)}
                    className="px-4 mx-2 bg-green-400 hover:bg-green-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteDealer(dealer)}
                    className="px-4 bg-red-400 hover:bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editDealerFormOpen && (
        <DealerEditForm
          selectedDealer={selectedDealer}
          setEditDealerFormOpen={setEditDealerFormOpen}
        />
      )}

      {deleteDealerFormOpen && (
        <DealerDeleteForm
          selectedDealer={selectedDealer}
          setDeleteDealerFormOpen={setDeleteDealerFormOpen}
        />
      )}

      <div className="pt-40 p-8 bg-heroImage text-gray-800 font-bold">
        <p className="text-3xl">Orders</p>
        <table className="">
          <thead>
            <tr>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">ID</th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Order ID
              </th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Client Name
              </th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Client Contacts
              </th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Client Email
              </th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Initial Date
              </th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Last Date
              </th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Car Model
              </th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Car ID
              </th>
              <th className="bg-gray-500 p-2 border-r-2 border-gray-600">
                Configure
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className="hover:bg-blue-300 border border-gray-400"
              >
                <td className="hover:bg-blue-400 px-4  border-l-2 border border-gray-400">
                  {index + 1}
                </td>
                <td className="hover:bg-blue-400 px-4  border-l-2 border border-gray-400">
                  {order.id}
                </td>
                <td className="hover:bg-blue-400 px-4  border-l-2 border border-gray-400">
                  {order.name}
                </td>

                <td className="hover:bg-blue-400 px-4  border-l-2 border border-gray-400">
                  {order.contacts}
                </td>
                <td className="hover:bg-blue-400 px-4  border-l-2 border border-gray-400">
                  {order.email}
                </td>
                <td className="hover:bg-blue-400 px-4 border-l-2 border border-gray-400">
                  {order.from}
                </td>
                <td className="hover:bg-blue-400 px-4 border-l-2 border border-gray-400">
                  {order.to}
                </td>
                <td className="hover:bg-blue-400 px-4 border-l-2 border border-gray-400">
                  {order.model}
                </td>
                <td className="hover:bg-blue-400 px-4 border-l-2 border border-gray-400">
                  {order.carId}
                </td>
                <td className="flex">
                  <button
                    onClick={() => handleEditOrder(order)}
                    className="px-4 mx-2 bg-green-400 hover:bg-green-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteOrder(order)}
                    className="px-4 bg-red-400 hover:bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editOrderFormOpen && (
        <OrderEditForm
          selectedOrder={selectedOrder}
          setEditOrderFormOpen={setEditOrderFormOpen}
        />
      )}

      {deleteOrderFormOpen && (
        <OrderDeleteForm
          selectedOrder={selectedOrder}
          setDeleteOrderFormOpen={setDeleteOrderFormOpen}
        />
      )}
    </div>
  );
}
