import React from "react";

import { form } from "./data";
import FormPage from "./components/formpage";
import SkeletonCard from "./components/skeletonCard";
import useLoadingHook from './hooks/loadingHook'

export const FormApp = () => {
  const { loading} = useLoadingHook(form);
  return (
    <>
      {loading ? (
        <SkeletonCard />
      ) : (
        
        <FormPage />
      )}
    </>
  );
};
