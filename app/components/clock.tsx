'use client';

import { format } from "date-fns";
import { useEffect, useState } from "react";

export const Clock = () => {
  const [date, setDate] = useState<Date>();
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-3xl font-bold text-sky-800/40">
      {date && <time className="font-mono">{format(date, 'yyyy.MM.dd HH:mm:ss')}</time>}
    </div>
  )
}