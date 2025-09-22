import ActionAreaCard from "@/components/Cards";
import Api from "@/components/fetch";
import React from "react";

export default async function page() {
  const data = await Api("https://dummyjson.com/users");
  console.log(data);
  return (
    <div>
      <ActionAreaCard dataapi={data} />
    </div>
  );
}
