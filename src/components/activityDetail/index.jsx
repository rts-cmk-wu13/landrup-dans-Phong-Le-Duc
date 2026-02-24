import JoinCourseBtn from "../buttons/joinCourseBtn";

export default function ActivityDetail({ activity }) {

    if (!activity) return null

    return (
        <>
            <article className="min-h-screen">

                <div className="relative">
                    {activity.asset?.url && (
                        <img
                            src={activity.asset.url}
                            alt={activity.name}
                            loading="lazy"
                            className=" w-full aspect-square object-cover "
                        />
                    )}

                    <div className="absolute bottom-10 right-8">
                        <JoinCourseBtn activityId={activity.id} minAge={activity.minAge} maxAge={activity.maxAge} />
                    </div>

                </div>
                <div className="wrapper">
                    <h2 className="mt-4">{activity.name}</h2>
                    <p className="text-sm">
                        {activity.minAge}
                        {activity.maxAge === 100 ? '+' : ` - ${activity.maxAge}`} år
                    </p>
                    <div className="mt-2 mb-4">
                        <p>{activity.description}</p>
                        <p>Consectetur adipiscing elit. Eget elementum lorem nulla vitae felis auctor pretium suspendisse et. Condimentum fringilla odio vitae interdum adipiscing odio volutpat. Faucibus gravida quis nisi, purus morbi leo nulla a. Mattis tincidunt phasellus enim, egestas non ultrices.</p>
                    </div>

                    <p className="font-bold">{activity.weekday} kl. {activity.time}</p>
                </div>

            </article>

        </>
    );
}