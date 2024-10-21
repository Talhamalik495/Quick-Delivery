import { TextField } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";

function ProductInput({ productTitle, type, value, setValue, focus, blur }) {
  return (
    <div>
      <TextField
        required
        className="w-full h-10"
        id="outlined-basic"
        label={productTitle}
        variant="outlined"
        autoComplete="off"
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);

          console.log(e.target.value);
        }}
        onFocus={focus}
        onBlur={blur}
      />
    </div>
  );
}

export default ProductInput;
