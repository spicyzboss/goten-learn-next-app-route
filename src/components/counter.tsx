'use client';

import { useState } from "react";
import { Button, Typography } from "@mui/material";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Typography fontWeight="bold">Count (นับ): {count} ครั้ง</Typography>
      <Button variant="contained" onClick={() => setCount(count + 1)}>Increment (นับเพิ่มขึ้น)</Button>
    </>
  );
}
