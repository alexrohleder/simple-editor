import { forwardRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Editable = forwardRef<HTMLDivElement, Props>(function Editable(
  props,
  ref
) {
  return <div ref={ref}>{props.children}</div>;
});

export default Editable;
