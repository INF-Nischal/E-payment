"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handlePay = () => {
    router.push("/esewa");
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-slate-200">
      <div className="bg-slate-50 px-[15px] py-3 rounded-lg w-[240px]">
        <div>
          <Image
            src="/headphone.jpg"
            alt="headphone"
            width={210}
            height={180}
            className="rounded-md"
          />
        </div>
        <div className="mt-2">
          <div>
            <p className="text-sm">
              {" "}
              <span className="font-bold">Name:</span> Heaphone{" "}
            </p>
            <p className="text-sm">
              <span className="font-bold">Price:</span> Rs.100
            </p>
            <p className="text-sm">
              {" "}
              <span className="font-bold">Description:</span> This a headphone
            </p>
          </div>
          <div>
            <button
              onClick={handlePay}
              className="w-full mt-4 py-2 text-center rounded-md bg-green-400 text-white font-bold uppercase tracking-wide hover:bg-green-500 transition-all duration-300 ease-in-out"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
