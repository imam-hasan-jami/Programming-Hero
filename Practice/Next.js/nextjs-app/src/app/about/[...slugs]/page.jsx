import React from "react";

export default async function AboutSlugPages({ params }) {
  const p = await params;
  console.log(p);
  return (
    <div>
      <p>About Slug Pages!</p>
    </div>
  );
}
