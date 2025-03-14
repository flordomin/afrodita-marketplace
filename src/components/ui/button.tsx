"use client";

export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className="bg-blue-500 text-white p-2 rounded-lg" {...props}>{children}</button>;
}
