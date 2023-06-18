import React, { ReactNode } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";


// Your app...
export default function Accordion({
  items,
  activeTab,
  setActiveTab,
}: {
  items: { trigger: ReactNode; content: ReactNode }[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}) {
  return (
    <AccordionPrimitive.Root
      type="single"
      defaultValue={activeTab.toString()}
      onValueChange={(value) => setActiveTab(Number(value))}
    >
      {items.map(({ trigger, content }, index) => (
        <AccordionPrimitive.Item
          key={index}
          value={index.toString()}
          className="overflow-hidden border-b border-gray-200 py-3 last:border-none"
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between">
              {trigger}
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
