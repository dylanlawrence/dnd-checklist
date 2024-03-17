import React, { forwardRef } from "react";
import classNames from "classnames";
import styles from "./Container.module.css";

import { Handle } from "../Handle";
import { Remove } from "../Remove";


export interface Props {
  children: React.ReactNode;
  columns?: number;
  label?: string;
  style?: React.CSSProperties;
  horizontal?: boolean;
  hover?: boolean;
  handleProps?: React.HTMLAttributes<any>;
  scrollable?: boolean;
  shadow?: boolean;
  placeholder?: boolean;
  unstyled?: boolean;
  onClick?(): void;
  onRemove?(): void;
}

export const Container = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      handleProps,
      horizontal,
      hover,
      onClick,
      onRemove,
      label,
      placeholder,
      style,
      scrollable,
      shadow,
      unstyled,
      ...props
    }: Props,
    ref
  ) => {
    const Component = onClick ? "button" : "div";

    return (
      <Component
        {...props}
        ref={ref}
        style={
          {
            ...style,
          } as React.CSSProperties
        }
        className={`flex flex-col grid min-w-[350px] mb-4 overflow-hidden rounded-lg`
        //   classNames(
        //   styles.Container,
        //   unstyled && styles.unstyled,
        //   horizontal && styles.horizontal,
        //   hover && styles.hover,
        //   placeholder && styles.placeholder,
        //   scrollable && styles.scrollable,
        //   shadow && styles.shadow
        // )
      }

        onClick={onClick}
        tabIndex={onClick ? 0 : undefined}
      >
        {label ? (
          <div className='flex items-center justify-between bg-slate-200 dark:bg-slate-700 pl-4 w-full'>
            {label}
            <div className='flex items-center'>
              {onRemove ? <Remove onClick={onRemove} /> : undefined}
              <Handle {...handleProps} />
            </div>
          </div>
        ) : null}
        {placeholder ? children : <ul className="p-4 dark:bg-slate-900">{children}</ul>}
      </Component>
    );
  }
);
