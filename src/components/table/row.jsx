
const Row = ({columns = [], classes="border-solid border-[1px] border-gray-500 ", classColumn = "grid-cols-row_user_table"}) => {
    return (
        <div className={`grid ${classColumn}`}>
            {
                columns.map((item, index) => {
                    return (
                        <div key={index} className={`${classes} border-collapse py-1 `}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Row