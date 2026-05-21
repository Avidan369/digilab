// app/syslab/layout.tsx
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Opticorp Bolivia",
  description: "Opticorp",
};

export default function Digilab({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

                <main>
                    {children}
                </main>

  


    );
}