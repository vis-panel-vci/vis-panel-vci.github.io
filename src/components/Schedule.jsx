import React from "react";
import styles from "./Schedule.module.scss";

const schedule = [
  { time: "8:00 AM - 8:05 AM", event: "Introduction by Organizers" },
  { time: "8:05 AM - 8:10 AM", event: "Presentation by Cindy Xiong Bearfield", bold: "Cindy Xiong Bearfield" },
  { time: "8:10 AM - 8:15 AM", event: "Presentation by David Gotz", bold: "David Gotz" },
  { time: "8:15 AM - 8:20 AM", event: "Presentation by Alex Kale", bold: "Alex Kale" },
  { time: "8:20 AM - 8:25 AM", event: "Presentation by Bum Chul Kwon", bold: "Bum Chul Kwon" },
  { time: "8:25 AM - 8:30 AM", event: "Presentation by Klaus Mueller", bold: "Klaus Mueller" },
  { time: "8:30 AM - 9:25 AM", event: "Panel Discussion and Q & A" },
  { time: "9:25 AM - 9:30 AM", event: "Closing by Organizers" }
];

const Schedule = () => (
  <div className={styles.scheduleBlock}>
    <h3 className={styles.scheduleTitle}>Schedule (tentative)</h3>
    <table className={styles.scheduleTable}>
      <thead>
        <tr>
          <th>Time</th>
          <th>Event</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((item, idx) => (
          <tr key={idx}>
            <td>{item.time}</td>
            <td>
              {item.bold ? (
                <>
                  {item.event.split(item.bold)[0]}
                  <b>{item.bold}</b>
                  {item.event.split(item.bold)[1]}
                </>
              ) : (
                item.event
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Schedule;
