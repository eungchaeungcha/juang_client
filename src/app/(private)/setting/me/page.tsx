"use client";

import { useState } from "react";
import { UserCharacterImage } from "@/components/ui";

type EditMode = "character" | "nickname" | null;

export default function Page() {
  const [editMode, setEditMode] = useState<EditMode>(null);

  return (
    <>
      <div className="relative w-20 h-20">
        <UserCharacterImage
          fill
          className="object-contain"
        />
      </div>
    </>
  );
}
