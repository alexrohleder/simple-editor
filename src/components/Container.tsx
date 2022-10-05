import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cx } from "@emotion/css";

type Props = ComponentPropsWithoutRef<"section">;

const Container = forwardRef<HTMLElement, Props>(function Container(
  props,
  ref
) {
  return (
    <section
      {...props}
      ref={ref}
      className={cx(
        "container flex items-center justify-center h-40 text-gray-500 bg-gray-200",
        props.className
      )}
    />
  );
});

export default Container;
