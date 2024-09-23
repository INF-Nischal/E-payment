"use client";

import React, { useState } from "react";
import { UUID } from "uuidjs";
import cryptoJS from "crypto-js";

const Page = () => {
  const uuid: string = UUID.generate();
  console.log(uuid);

  const [amount, setAmount] = useState("100");
  const [taxAmount, setTaxAmount] = useState("10");
  const [totalAmount, setTotalAmount] = useState("110");
  const [transactionUuid, setTransactionUuid] = useState(uuid);
  const [productCode, setProductCode] = useState("EPAYTEST");
  const [productServiceCharge, setProductServiceCharge] = useState("0");
  const [productDeliveryCharge, setProductDeliveryCharge] = useState("0");
  const [successUrl, setSuccessUrl] = useState("http://localhost:3000/success");
  const [failureUrl, setFailureUrl] = useState("https://google.com");
  const [signedFieldNames, setSignedFieldNames] = useState(
    "total_amount,transaction_uuid,product_code"
  );

  const message = `total_amount=${totalAmount},transaction_uuid=${transactionUuid},product_code=${productCode}`;
  const secret = "8gBm/:&EnhH.1/q";

  console.log(typeof message);
  const hash = cryptoJS.HmacSHA256(message, secret);
  const hashInBase64 = cryptoJS.enc.Base64.stringify(hash);
  console.log(hashInBase64);
  const [signature, setSignature] = useState(hashInBase64);

  return (
    <div className="bg-slate-200 h-screen flex justify-center items-center">
      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
        className="flex flex-col gap-4 w-[360px] px-8 py-4 bg-slate-100"
      >
        <input
          type="text"
          className="hidden outline-none p-2 rounded-md"
          id="amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <input
          type="text"
          className="hidden outline-none p-2 rounded-md"
          id="tax_amount"
          name="tax_amount"
          value={taxAmount}
          onChange={(e) => setTaxAmount(e.target.value)}
          required
        />

        <input
          type="text"
          className="hidden outline-none p-2 rounded-md"
          id="total_amount"
          name="total_amount"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
          required
        />

        <input
          type="text"
          className="hidden outline-none p-2 rounded-md"
          id="transaction_uuid"
          name="transaction_uuid"
          value={transactionUuid}
          onChange={(e) => setTransactionUuid(e.target.value)}
          required
        />

        <input
          type="text"
          className="hidden outline-none p-2 rounded-md"
          id="product_code"
          name="product_code"
          value={productCode}
          onChange={(e) => setProductCode(e.target.value)}
          required
        />

        <input
          type="text"
          className="hidden outline-none p-2 rounded-md"
          id="product_service_charge"
          name="product_service_charge"
          value={productServiceCharge}
          onChange={(e) => setProductServiceCharge(e.target.value)}
          required
        />

        <input
          type="text"
          className="hidden outline-none p-2 rounded-md"
          id="product_delivery_charge"
          name="product_delivery_charge"
          value={productDeliveryCharge}
          onChange={(e) => setProductDeliveryCharge(e.target.value)}
          required
        />

        <input
          type="text"
          className="hidden outline-none p-2 rounded-md"
          id="success_url"
          name="success_url"
          value={successUrl}
          onChange={(e) => setSuccessUrl(e.target.value)}
          required
        />

        <input
          type="text"
          className="hidden outline-none p-2 rounded-md"
          id="failure_url"
          name="failure_url"
          value={failureUrl}
          onChange={(e) => setFailureUrl(e.target.value)}
          required
        />

        <input
          type="text"
          className="hidden outline-none p-2 rounded-md"
          id="signed_field_names"
          name="signed_field_names"
          value={signedFieldNames}
          onChange={(e) => setSignedFieldNames(e.target.value)}
          required
        />

        <input
          type="text"
          className="hidden outline-none p-2 rounded-md"
          id="signature"
          name="signature"
          value={signature}
          onChange={(e) => setSignature(e.target.value)}
          required
        />

        <input
          value="Pay via E-sewa"
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md font-bold uppercase hover:cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Page;
