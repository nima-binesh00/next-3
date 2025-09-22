import RecipesCard from "@/components/Cord-recipes";
import Api from "@/components/fetch";
import React from "react";

export default async function page() {
  const data = await Api("https://dummyjson.com/recipes");
  console.log(data);
  return (
    <div>
      <RecipesCard dataapi={data} />
    </div>
  );
}
