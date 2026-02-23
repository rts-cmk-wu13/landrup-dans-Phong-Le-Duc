

export function UserCalenderCard({ activity }) {


    return (
        <article className="user-calender-card">
            <h3>{activity.name}</h3>
            <p>{activity.weekday} · {activity.time}</p>
            <p>Instruktør: {activity.instructor}</p>
        </article>
    );
}