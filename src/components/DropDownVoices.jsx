import React from "react";
import { Select, Option } from "@material-tailwind/react";
 
export function DropDownVoices() {
  const [value, setValue] = React.useState("Alloy");
 
  return (
    <div className="w-72">
      <Select
        label="Select Version"
        value={value}
        onChange={(val) => setValue(val)}
      >
        <Option value="Alloy">Alloy</Option>
        <Option value="Echo">Echo</Option>
        <Option value="Fable">Fable</Option>
        <Option value="Onyx">Onyx</Option>
        <Option value="Nova">Nova</Option>
        <Option value="Nova">Nova</Option>
        <Option value="Shimmer">Shimmer</Option>
      </Select>
    </div>
  );
}