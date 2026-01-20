import { useEffect, useRef, useState } from "react";
import { Transactions } from "./Transactions/Transactions";
import { getCurrentPeriod, getPeriodOptions } from "../utils/util";
import { Tab, Tabs } from "@heroui/react";

export default function Home() {
  const [period, setPeriod] = useState(getCurrentPeriod());
  const [periodOptions] = useState(getPeriodOptions());

  const tabsRef = useRef(null);

  useEffect(() => {
    if (!tabsRef.current) return;

    const tabs = tabsRef.current.querySelectorAll('[role="tab"]');
    const lastTab = tabs[tabs.length - 1];

    lastTab?.scrollIntoView({
      behavior: "smooth",
      inline: "end",
      block: "nearest",
    });
  }, [periodOptions]);

  return (
    <>
      <span>{period}</span>
      <Tabs
        aria-label="Time Periods"
        selectedKey={period}
        onSelectionChange={setPeriod}
        items={periodOptions}
        // classNames={{
        //   tabList: "overflow-x-auto scroll-smooth",
        // }}
        ref={tabsRef}
        color="primary"
        variant="underlined"
        size="lg"
      >
        {(item) => <Tab key={item.id} title={item.name} />}
      </Tabs>

      <Transactions />
    </>
  );
}
