import React from "react";
import styles from "./Schedule.module.scss";

const schedule = [
  { time: "15:00 AM - 15:05 AM", event: "Introduction by Organizers" },
  { time: "15:05 AM - 15:10 AM", event: "Presentation by Cindy Xiong Bearfield", bold: "Cindy Xiong Bearfield" },
  { time: "15:10 AM - 15:15 AM", event: "Presentation by David Gotz", bold: "David Gotz" },
  { time: "15:15 AM - 15:20 AM", event: "Presentation by Alex Kale", bold: "Alex Kale" },
  { time: "15:20 AM - 15:25 AM", event: "Presentation by Bum Chul Kwon", bold: "Bum Chul Kwon" },
  { time: "15:25 AM - 15:30 AM", event: "Presentation by Klaus Mueller", bold: "Klaus Mueller" },
  { time: "15:30 AM - 16:25 AM", event: "Panel Discussion and Q & A" },
  { time: "16:25 AM - 16:30 AM", event: "Closing by Organizers" }
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
