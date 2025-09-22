import Api from "@/components/fetch";
import UserCardFull from "@/components/UserCard";
import { Grid } from "@mui/material";
import React from "react";

export default async function page({ params }) {
  const data = await Api(`https://dummyjson.com/users/${params.nima}`);
  console.dir(data);
  if (data.message) throw new Error(data.message);
  return (
    <div>
      <UserCardFull user={data} />
    </div>
  );
}
