"use client";
import { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { searchActivities } from "@/lib/dal/searchActivities";

export default function SearchBar({ searchTerm, setSearchTerm }) {

    const [inputValue, setInputValue] = useState(searchTerm);
    const [isFocused, setIsFocused] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const inputRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        if (showInput && inputRef.current) {
            inputRef.current.focus();
        }
    }, [showInput]);

    return (
        <form
            className="relative max-w-md mx-auto p-4 rounded"
            style={{ minHeight: "73px" }} // Adjust height as needed

            onSubmit={async e => {
                e.preventDefault();
                setSearchTerm(inputValue);

                const response = await searchActivities(inputValue);
                const activities = response.data || [];

                // Filter on the frontend
                const query = inputValue.toLowerCase();
                const match = activities.find(
                    activity =>
                        activity.name.toLowerCase().includes(query) ||
                        activity.weekday.toLowerCase().includes(query)
                );

                if (match) {
                    router.push(`/aktiviteter/${match.id}`);
                } else {
                    alert("Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet.");
                }
            }}
        >
            {showInput && (
                <input
                    ref={inputRef}
                    value={inputValue}
                    onFocus={() => setIsFocused(true)}
                    onChange={e => setInputValue(e.target.value)}
                    onBlur={() => {
                        setIsFocused(false);
                        if (!inputValue) setShowInput(false);
                    }}
                    type="search"
                    name="search"
                    placeholder="Søg på aktivitet, ugedag ect."
                    className="p-2 rounded-md rounded-br-none w-full pr-8 focus:outline-none"
                    style={{
                        backgroundColor: showInput ? "var(--secondary)" : "transparent"
                    }}
                />
            )}
            <button
                type={showInput ? "submit" : "button"}
                onClick={e => {
                    if (!showInput) {
                        e.preventDefault();
                        setShowInput(true);
                    }
                }}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white rounded"
                style={{ minWidth: "40px" }}
            >
                <IoSearch />
            </button>
        </form>
    );
}