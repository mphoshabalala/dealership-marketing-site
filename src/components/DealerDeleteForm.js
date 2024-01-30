import React from "react";
import Cancel from "./Cancel";
import SubmitButton from "./SubmitButton";

export default function DealerDeleteForm({
  selectedDealer,
  setDeleteDealerFormOpen,
}) {
  return (
    <div className="fixed flex items-center justify-center top-0 left-0 z-10 w-screen h-screen bg-opacity-50 bg-black">
      <form className="p-8 bg-white flex flex-col items-center">
        <Cancel setModalOpen={setDeleteDealerFormOpen} />
        <p>
          This action will permanently delete this dealer from the database, Are
          you sure you want to delete this dealer: {selectedDealer.owner} ,
          {selectedDealer.dealerLocation}
        </p>
        <SubmitButton
          background_hover_color="hover:bg-red-400"
          background_color="bg-red-500"
          text="DELETE"
        />
      </form>
    </div>
  );
}
