import { useState, useCallback, useMemo } from "react";
import DayItem from "../DayItem/DayItem";
import styles from "./Sidebar.module.css";

const Sidebar = ({ challengeDays = 9, streak = 1 }) => {
  const [selectedDay, setSelectedDay] = useState(streak);

  const handleDayClick = useCallback(
    (dayNumber) => {
      if (streak >= dayNumber) {
        setSelectedDay(dayNumber);
      }
    },
    [streak],
  );

  const daysArray = useMemo(
    () =>
      Array.from({ length: challengeDays }, (_, i) => {
        const dayNumber = i + 1;
        const isUnlocked = streak >= dayNumber;

        return {
          id: dayNumber,
          number: dayNumber,
          isUnlocked,
        };
      }),
    [challengeDays, streak],
  );

  // Split into three groups
  const beforeSelected = daysArray.filter((d) => d.number < selectedDay) || [];
  const selected = daysArray.find((d) => d.number === selectedDay) || [];
  const afterSelected = daysArray.filter((d) => d.number > selectedDay) || [];

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {/* Days before selected */}
        <div className={styles.beforeSelected}>
          {beforeSelected.map((day) => (
            <DayItem
              key={day.id}
              day={day}
              streak={streak}
              isSelected={false}
              onClick={handleDayClick}
              dayNumber={day.number}
            />
          ))}
        </div>

        {/* Selected day rendered separately */}
        <div className={styles.selected}>
          {selected && (
            <DayItem
              key={selected.id}
              day={selected}
              streak={streak}
              isSelected={true}
              onClick={handleDayClick}
              dayNumber={selected.number}
            />
          )}
        </div>

        {/* Days after selected */}
        <div className={styles.afterSelected}>
          {afterSelected.map((day) => (
            <DayItem
              key={day.id}
              day={day}
              streak={streak}
              isSelected={false}
              onClick={handleDayClick}
              dayNumber={day.number}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
