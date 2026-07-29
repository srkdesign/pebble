import { Fragment } from "react";

function renderLines(text: string) {
  return text.split("\n").map((line, i, arr) => (
    <Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </Fragment>
  ));
}

export function Heading({ text }: { text: string }) {
  const [before, decorated = "", after] = text.split("*");
  return (
    <>
      {renderLines(before)}
      {decorated && (
        <span className="font-display">{renderLines(decorated)}</span>
      )}
      {renderLines(after ?? "")}
    </>
  );
}
