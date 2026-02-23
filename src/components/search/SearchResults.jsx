import { searchActivities } from "@/lib/dal/searchActivities";
import { useState, useEffect } from "react";

function SearchResults({ searchTerm }) {

    const [results, setResults] = useState([]);


    async function handleSearch(query) {
        const response = await searchActivities(query);
        const activities = response.data || [];
        setResults(activities);
        console.log(response);
    }

    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm]);



    return (
        <div>
            {results.map(activity => (
                <div key={activity.id}>{activity.name}</div>
            ))}
        </div>
    );
}

export default SearchResults;

