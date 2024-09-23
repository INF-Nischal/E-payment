"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const customerId = "1";
  //   const customerId = cookies.get('id');

  const data = searchParams.get("data") || "";

  if (!data) {
    router.push("/");
    alert("Token not found");
  }

  const decodedData = atob(data);
  const parsedData = JSON.parse(decodedData);

  console.log("Decoded Data:", parsedData);

  const formData = new FormData();

  formData.append("CustomerId", customerId);
  formData.append("Price", parsedData.total_amount);
  formData.append("Status", parsedData.status);
  formData.append("TransID", parsedData.transaction_uuid);

  const onHandleSuccess = () => {
    router.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-200">
      <div className="p-4 bg-slate-50 w-[240px] flex flex-col items-center gap-4">
        <h1>Success Payment</h1>
        <button
          onClick={onHandleSuccess}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Go to HomePage
        </button>
      </div>
    </div>
  );
};

export default page;
