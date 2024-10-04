import React from "react";

export default function FooterPage() {
  return (
    <div className="bg-white py-16 px-4">
      {" "}
      {/* Consistent padding */}
      <div className="container mx-auto">
        {" "}
        {/* Wrap content in container */}
        {/* Row 1: Logo and Menu Links */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="flex overflow-hidden relative flex-col justify-center items-center aspect-[6.81] w-full max-w-[245px] md:w-auto">
            {/* Logo (replace with your logo and loading logic) */}
            <img
              loading="lazy"
              src="..."
              className="object-cover absolute inset-0 size-full"
              alt="Company Logo"
            />
          </div>
          <div className="flex items-center text-lg leading-5 text-neutral-900 md:hidden">
            {" "}
            {/* Hide menu on mobile */}
            <div className="mr-5">Feature</div>
            <div className="mr-5">Exchange</div>
            <div className="mr-5">About Us</div>
            <div>Contact</div>
          </div>
        </div>
        {/* Row 2: Divider */}
        <div className="shrink-0 mt-7 h-px border border-solid bg-neutral-900 w-full" />
        {/* Row 3: Copyright and Social Links */}
        <div className="flex flex-wrap justify-between items-center mt-8">
          <div className="text-lg leading-6 text-center text-neutral-900">
            2024 Featured. All Rights Reserved
          </div>
          <div className="flex gap-3 items-center justify-end md:justify-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3594ddfa24a5cce6d220fa333dcca8494683cd09ffbb9d9f82999c6cc29ac92?"
              className="shrink-0 w-12 aspect-square"
              alt="Social Icon 1"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fb7c081385cdd80d219f3429791ad62c8d2a1a24db21ec5b61cf609f42585f1?"
              className="shrink-0 w-12 aspect-square"
              alt="Social Icon 2"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f57013b53b0f780cf4920be31277cfd78bb9b4cbf36a75c36f6c99a8c2eb894?"
              className="shrink-0 w-12 aspect-square"
              alt="Social Icon 3"
            />
          </div>
          <div className=" flex-col text-lg leading-6 text-right text-neutral-900 hidden md:flex">
            {" "}
            {/* Show menu on desktop */}
            <div>Terms of Digital Asset Rate</div>
            <div className="mt-3">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
