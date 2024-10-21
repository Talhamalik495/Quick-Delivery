import React from "react";
import ProductInput from "../component/ProductInput";
import { Button } from "antd";

function Order() {
  return (
    // <div></div>
    <div className="w-full h-[900px] flex justify-center items-center py-20 text-2xl flex-col gap-7">
      <div className="w-[40%] h-[1000px] flex flex-col gap-12  items-center shadow-card-shadow rounded-lg py-10">
        <div>
          <h1>Order Now</h1>
        </div>
        <div className="w-[85%]">
          <ProductInput
            productTitle={"First Name"}
            type={"text"}
            // value={description}
            // setValue={setDescription}
          />
        </div>
        <div className="w-[85%]">
          <ProductInput
            productTitle={"Last Name"}
            type={"text"}
            // value={description}
            // setValue={setDescription}
          />
        </div>
        <div className="w-[85%]">
          <ProductInput
            productTitle={"Phone Number"}
            type={"number"}
            // value={description}
            // setValue={setDescription}
          />
        </div>
        <div className="w-[85%]">
          <ProductInput
            productTitle={"Email"}
            type={"email"}
            // value={description}
            // setValue={setDescription}
          />
        </div>
        <div className="w-[85%]">
          <ProductInput
            productTitle={"Address"}
            type={"text"}
            // value={description}
            // setValue={setDescription}
          />
        </div>
        <div className="w-[85%]">
          <ProductInput
            productTitle={"City"}
            type={"text"}
            // value={description}
            // setValue={setDescription}
          />
        </div>
        <div className="w-[85%]">
          <ProductInput
            productTitle={"Postal Code"}
            type={"text"}
            // value={description}
            // setValue={setDescription}
          />
        </div>
        <div>
          <Button
            className=" bg-[#5501b9] text-white h-10 w-36"
            variant="outlined"
          >
            Click to Order
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Order;
