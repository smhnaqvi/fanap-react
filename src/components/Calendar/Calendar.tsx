import React from "react";
import moment, { Moment } from "moment-jalaali";
import { Calendar } from "react-datepicker2";

export function MyCalendar() {
  const [selected, setSelected] = React.useState<Moment>();
  const handleSelect = (date: Moment) => {
    if (!selected) {
      return setSelected(date);
    }
    selected.format("jYYYY/jMM/jDD") !== date.format("jYYYY/jMM/jDD")
      ? setSelected(date)
      : setSelected(undefined);
  };

  return (
    <Calendar
      isGregorian={false}
      value={selected}
      onChange={handleSelect}
      min={moment("1399/08/01", "jYYYY/jMM/jDD")}
      max={moment("1399/08/30", "jYYYY/jMM/jDD")}
    />
    // <Calendar
    //   styles={styles}
    //   min={moment("1399/08/01", "jYYYY/jMM/jDD")}
    //   max={moment("1399/08/30", "jYYYY/jMM/jDD")}
    //   defaultMonth={moment("1399/08/01", "jYYYY/jMM/jDD")}
    //   selectedDay={selected}
    //   onSelect={handleSelect}
    // />
  );
}
