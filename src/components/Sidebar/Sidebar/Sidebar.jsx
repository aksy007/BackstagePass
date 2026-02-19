import { useState, useCallback, useMemo } from "react";
import DayItem from "../DayItem/DayItem";
import styles from "./Sidebar.module.css";

const Sidebar = ({ challengeDays = 9, streak = 1 }) => {
  const [selectedDay, setSelectedDay] = useState(streak);

  const handleDayClick = useCallback(
    (dayNumber) => {
      // Only allow selection of days that are unlocked (streak >= dayNumber)
      if (streak >= dayNumber) {
        setSelectedDay(dayNumber);
      }
    },
    [streak],
  );

  // Generate days array based on challengeDays - memoized to prevent recalculation
  const daysArray = useMemo(
    () =>
      Array.from({ length: challengeDays }, (_, i) => {
        const dayNumber = i + 1;
        const isUnlocked = streak >= dayNumber;

        return {
          id: dayNumber,
          number: dayNumber,
          isUnlocked: isUnlocked,
        };
      }),
    [challengeDays, streak],
  );

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {daysArray.map((day) => (
          <DayItem
            key={day.id}
            day={day}
            streak={streak}
            isSelected={selectedDay === day.number}
            onClick={handleDayClick}
            dayNumber={day.number}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
