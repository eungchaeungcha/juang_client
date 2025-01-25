"use client";

import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";

interface CheckItemType {
  id: string;
  text: string;
  checked: boolean;
}

interface CheckListProps {
  totalLabel?: string;
  items: CheckItemType[];
  onChange?: (checkItems: CheckItemType[]) => void;
}

export default function CheckList({
  totalLabel,
  items,
  onChange,
}: CheckListProps) {
  const [checkItems, setCheckItems] = useState(items);

  const isAllChecked = checkItems.every(({ checked }) => checked);

  const toggleAllCheck = () => {
    setCheckItems((prevItems) =>
      prevItems.map((item) => ({ ...item, checked: !isAllChecked }))
    );
  };

  const checkHandler = (id: string) => {
    return () => {
      setCheckItems((prevItems) =>
        prevItems.map((item) =>
          id === item.id ? { ...item, checked: !item.checked } : item
        )
      );
    };
  };

  useEffect(() => {
    onChange?.(checkItems);
  }, [checkItems, onChange]);

  return (
    <div className="w-full flex flex-col gap-1">
      {totalLabel && (
        <CheckBox
          text={totalLabel}
          checked={isAllChecked}
          onChange={toggleAllCheck}
        />
      )}
      {checkItems.map(({ id, text, checked }) => (
        <CheckBox
          key={id}
          text={text}
          checked={checked}
          onChange={checkHandler(id)}
        />
      ))}
    </div>
  );
}
