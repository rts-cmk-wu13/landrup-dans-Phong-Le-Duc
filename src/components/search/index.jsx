"use client";

import { IoSearch } from "react-icons/io5";

export default function Search() {
    return (
        <form className="relative max-w-md mx-auto p-4 rounded ">
            <input
                type="search"
                name="search"
                placeholder="Søg på aktivitet, ugedag eller instruktør"
                className="p-2 border border-gray-300 rounded w-full pr-8"
                autoComplete="off"
                style={{ backgroundColor: "var(--secondary)" }}
            />
            <button
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white  rounded"
                style={{ minWidth: "40px" }}
            >
                <IoSearch />
            </button>
        </form>
    );
}