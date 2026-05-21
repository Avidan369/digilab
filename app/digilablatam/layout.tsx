// app/syslab/layout.tsx
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Digilab",
  description: "Laboratorio Óptico Digilab Latam",
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