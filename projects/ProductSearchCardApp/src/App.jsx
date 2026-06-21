import { useState, useEffect } from "react";
import useDebounce from "./hooks/useDebounce";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useLocalStorage("searchValue", "");
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const clearSearch = () => setSearch("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Product Search</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "250px", marginRight: "10px" }}
      />

      <button onClick={clearSearch}>Clear</button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : filtered.length > 0 ? (
          filtered.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "10px",
                width: "200px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <h4>{item.name}</h4>
              <p>₹{item.price.toLocaleString("en-IN")}</p>
            </div>
          ))
        ) : (
          <p>No Results Found</p>
        )}
      </div>
    </div>
  );
}

export default App;