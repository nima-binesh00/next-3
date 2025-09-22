import Postscard from "@/components/Cards-post";
import Api from "@/components/fetch";
import React from "react";

export default async function page() {
  const data = await Api("https://dummyjson.com/posts");
  console.log(data);
  return (
    <div>
      <Postscard dataapi={data} />
    </div>
  );
}
