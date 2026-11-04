"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { usePageTransition } from "@/context/TransitionContext";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export function TransitionLink({ href, children, className, ...props }: TransitionLinkProps) {
  const router = useRouter();
  const { navigateWithTransition } = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateWithTransition(href.toString(), (path) => {
      router.push(path);
    });
  };

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}