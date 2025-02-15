import React from "react";

export const Leaf = ({
  left,
  delay,
  size,
}: {
  left: string;
  delay: string;
  size: string;
}) => {
  return (
    <div
      className={`absolute top-0 animate-fall z-30`}
      style={{
        left: left,
        animationDelay: delay,
        width: size,
        height: size,
      }}
    >
      🍂
    </div>
  );
};
