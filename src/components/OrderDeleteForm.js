import React from "react";
import Cancel from "./Cancel";
import SubmitButton from "./SubmitButton";

export default function OrderDeleteForm({
  selectedOrder,
  setDeleteOrderFormOpen,
}) {
  return (
    <div className="fixed flex items-center justify-center top-0 left-0 z-10 w-screen h-screen bg-opacity-50 bg-black">
      <form className="p-8 bg-white flex flex-col items-center">
        <Cancel setModalOpen={setDeleteOrderFormOpen} />
        <p>
          This action will permanently delete this order from the database, Are
          you sure you want to delete this order by {selectedOrder.name} whom
          ordered {selectedOrder.brand} {selectedOrder.model}
        </p>
        <SubmitButton
          background_hover_color="bg-red-400"
          background_color="bg-red-500"
          text="DELETE"
        />
      </form>
    </div>
  );
}
