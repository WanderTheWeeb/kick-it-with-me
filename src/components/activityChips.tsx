type ActivityChipsProps = {
    activities: string[];
};

export const ActivityChips = ({ activities }: ActivityChipsProps) => {
    return (
        <div className="flex flex-wrap gap-2">
            {activities.map((activity, index) => (
                <div
                    key={index}
                    className="inline-flex items-center bg-gray-300 text-gray-800 px-3 py-1 rounded-full text-xs border border-gray-200"
                >
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    <span>{activity}</span>
                </div>
            ))}
        </div>
    );
};