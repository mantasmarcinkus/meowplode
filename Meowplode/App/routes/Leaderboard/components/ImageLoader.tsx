import * as React from "react";
const Cat = require("../assets/cat.png");
const Tombstone = require("../assets/tombstone.png");

export const ImageLoader = ({ result }: { result: boolean }) => {
  return <img alt="result" src={result ? Cat : Tombstone} height="24" />;
};
