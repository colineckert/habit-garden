"use client";

import { Button } from "./ui/button";

export function CreateButton() {
  return (
    <Button onClick={() => console.log("Create clicked!")}>
      Track New Habit
    </Button>
  );
}
