import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => {
  return (
    <section className="formpage bk">
      <h3 className="form-title">
        <Skeleton height={150} width={280} />
         </h3>
        <ul className="form">
          {Array(9)
            .fill()
            .map((item, i) => (
              <li className="input-group" key={i}>
                <Skeleton item={item} height={60} width={270} />
              </li>
            ))}
        </ul>
     
    </section>
  );
};

export default SkeletonCard;
