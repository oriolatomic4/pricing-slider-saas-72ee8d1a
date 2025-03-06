
import React from "react";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MinimalTopNav } from "@/components/navigation/MinimalTopNav";

const PaymentFailed = () => {
  return (
    <>
      <MinimalTopNav />
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-200 px-4">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="flex justify-center">
            <div className="bg-red-100 dark:bg-red-900/30 w-24 h-24 rounded-full flex items-center justify-center">
              <XCircle className="h-12 w-12 text-red-600 dark:text-red-400" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-black dark:text-white">Payment Failed</h1>
            <p className="text-gray-600 dark:text-gray-300">
              We couldn't process your payment. Please check your payment details and try again.
            </p>
          </div>
          
          <div className="pt-6">
            <Button 
              className="px-8 py-6 text-lg bg-vitruve-purple hover:bg-vitruve-purple/90 text-white rounded-full"
            >
              <Link to="/checkout">Retry</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentFailed;
