export default function ProductLayout({
    children,
}: {
    children: React.ReactNode
}){
    return(
        <div className="row row-cols-1 row-cols-md-4 px-5">
            {children}
        </div>
    )
}