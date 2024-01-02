import { GetFormById } from "@/actions/form";
import FormBuilder from "@/components/FormBuilder";
import React from "react";

async function Builderpage({
  //id에 따라 동적으로 페이지 조회
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  //여기서 Error가 터지면 error.tsx에서 인식함
  const form = await GetFormById(Number(id));
  if (!form) {
    throw new Error();
  }
  return <FormBuilder form={form} />;
}

export default Builderpage;
