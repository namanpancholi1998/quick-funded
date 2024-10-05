import React from "react";

function AccountSizeDesign() {
  return (
    <div className="mt-20 relative w-full h-96 overflow-hidden">
      <img src="../SemiCirclePic.png" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
        <h2 className="text-[60px] font-bold text-between bg-clip-text bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-transparent mb-4 -mx-20">
          Choose The Account Size
        </h2>
      </div>
    </div>
  );
}

export default AccountSizeDesign;
