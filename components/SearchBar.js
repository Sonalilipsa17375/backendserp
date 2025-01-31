"use client";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`/api/search?query=${query}`);
    const data = await response.json();
    setResults(data.organic_results || []);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search with SERP API</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Google..."
        style={{ padding: "10px", width: "300px" }}
      />
      <button onClick={handleSearch} style={{ marginLeft: "10px" }}>Search</button>

      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <a href={result.link} target="_blank" rel="noopener noreferrer">{result.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
