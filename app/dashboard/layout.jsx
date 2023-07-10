import Navbar from "@/components/navbar/navbar";


export default function RootLayout({ children }) {
    return (
        <div >
            <Navbar />
            {children}
        </div>
    )
}
