const CardList = ({ children}:any) => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4">
            <div className="px-6 py-4">
               {children}
            </div>
        </div>
    )
}

export default CardList;
