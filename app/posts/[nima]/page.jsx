import Api from "@/components/fetch";
import PostCardFull from "@/components/Postuser";
import React from "react";

export default async function page({ params }) {
  const data = await Api(`https://dummyjson.com/posts/${params.nima}`);
  console.dir(data);
  if (data.message) throw new Error(data.message);
  return (
    <div>
      <PostCardFull post={data} />
    </div>
  );
}
