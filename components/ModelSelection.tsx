"use client";
import React from "react";
import ReactSelect from "react-select";
import useSwr from "swr";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

type Props = {};

const ModelSelection = (props: Props) => {
  const { data: models, isLoading, error } = useSwr("models", fetchModels);

  const { data: model, mutate: setModel } = useSwr("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div className="mt-2">
      <ReactSelect
        className="mt-2"
        isSearchable
        defaultValue={model}
        placeholder={model}
        isLoading={isLoading}
        options={models?.modelOpt}
        menuPosition="fixed"
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
};

export default ModelSelection;
