import React, { useEffect, useState } from "react";
import Link from "next/link";

const blogs = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
   let data = fetch('http://localhost:3000/api/blog').then((a) => {
     return a.json();}).then((parsed) => {
      setdata(parsed)
      console.log(parsed);
     })
  },[])

  return (
    <>
      <div className="container my-5">
        {data && data.length > 0 ? (
          <>
            {data.map((card, index) => {
              return (
                <>
                  <div className="text-center" key={index}>
                    <Link
                      href={`/blogspost/${card.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <h3 className="text-white">
                        This is a free demo of {card.title}
                      </h3>
                    </Link>
                    <p style={{ textAlign: "justify", padding: "0px 60px" }}>
                      {card.content}
                    </p>
                  </div>
                  <hr className="text-white" />
                </>
              );
            })}
          </>
        ) : null}
      </div>
    </>
  );
};

export default blogs;
