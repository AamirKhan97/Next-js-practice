import React from "react";
import Link from "next/link";
import data from "../mainBlogs/learnjavascript.json";

const blogs = () => {
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
                      href={"/blogspost/latest-version"}
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
