import { createContext, forwardRef, ReactNode, useContext } from "react";
import { cx, css } from "@emotion/css";
import styles from "./Editable.module.css";

type Props = {
  as?: keyof React.ReactHTML | React.ForwardRefExoticComponent<any>;
  className?: string;
  children: ReactNode;
};

// We use this context to discover if we're inside an Editable component. The
// nesting level is used to create the class name for showing/hiding the controls.
const NestingLevelContext = createContext(0);

const Editable = forwardRef<HTMLElement, Props>(function Editable(props, ref) {
  const { as: Component = "div", children, ...rest } = props;
  const nestingLevel = useContext(NestingLevelContext);

  const className = cx(
    rest.className,

    // The border styles are quite complex and we need a stable class name to
    // avoid visual border clashes of sinbling editable components.
    styles.border,

    // This is the important class that shows/hides the controls accounting for
    // the nesting level. We show only the controls for the innermost editable component.
    css`
      position: relative;

      :hover [data-controls="${nestingLevel}"] {
        visibility: visible;
      }
    `
  );

  return (
    <NestingLevelContext.Provider value={nestingLevel + 1}>
      <Component {...rest} className={className} ref={ref}>
        {children}
        {/* This element shows/hides the controls; todo: animate */}
        <div data-controls={nestingLevel} className="invisible">
          {/* This element positions the controls */}
          <div className="absolute left-0 flex items-center justify-center w-full -top-[6px]">
            {/* This element pushes the controls up when expanding */}
            <div className="hover:pb-1 hover:-mt-4 group">
              {/* This is the controls container, we NEED two borders here for ideal contrast */}
              <div className="bg-yellow-400 border border-black rounded-full outline outline-white">
                {/* This element sets the circle dimensions when the controls are not expanded */}
                <div className="w-3 h-3 group-hover:hidden" />
                {/* The controls */}
                <div className="hidden px-2 group-hover:block whitespace-nowrap">
                  Edit
                </div>
              </div>
            </div>
          </div>
        </div>
      </Component>
    </NestingLevelContext.Provider>
  );
});

export default Editable;
