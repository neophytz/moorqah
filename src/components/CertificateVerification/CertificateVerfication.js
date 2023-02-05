import React, { useState } from 'react';

const CertificateVerification = () => {
  const [certificateCode, setCertificateCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = (event) => {
    event.preventDefault();

    // You can add your own verification logic here
    // For example, you can check if the certificate code exists in your database

    setIsVerified(true);
  };

  return (
    <div className="p-6 mx-auto max-w-sm">
      {isVerified ? (
        <div className="bg-green-500 text-white text-center p-4">
          Certificate Verified
        </div>
      ) : (
        <form onSubmit={handleVerification}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="certificateCode"
            >
              Certificate Code
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="certificateCode"
              type="text"
              value={certificateCode}
              onChange={(e) => setCertificateCode(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Verify
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CertificateVerification;
