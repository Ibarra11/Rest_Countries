"use client";
import { useState, Suspense } from "react";
import CountryGrid from "./components/CountryGrid";
import SkeletonGrid from "./components/SkeletonGrid";
import Filter from "./components/filter";

export default function Home() {
  const [searchResults, setSearchResults] = useState("");

  return (
    <>
      <Filter />
      <Suspense fallback={<SkeletonGrid />}>
        <CountryGrid />
      </Suspense>
    </>
  );
}
