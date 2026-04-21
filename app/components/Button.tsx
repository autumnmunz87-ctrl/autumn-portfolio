"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({ children, className = "", ...props }: ButtonProps) {
  const baseStyles =
    "btn inline-flex items-center justify-center rounded-[30px] border border-primary-black bg-transparent py-3 px-4 text-body-small text-primary-black no-underline transition-colors duration-200 min-[809px]:text-body-regular hover:bg-accent-orange hover:border-accent-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-primary-white";

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={`${baseStyles} ${className}`} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { ...buttonProps } = props as ComponentPropsWithoutRef<"button">;
  return (
    <button type="button" className={`${baseStyles} ${className}`} {...buttonProps}>
      {children}
    </button>
  );
}
