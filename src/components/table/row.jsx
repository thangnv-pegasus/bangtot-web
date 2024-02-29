
const Row = ({columns = [], classes=""}) => {
    return (
        <div className="grid grid-cols-row_user_table">
            {
                columns.map((item, index) => {
                    return (
                        <div key={index} className={` border-collapse border-solid border-[1px] border-gray-500 text-center py-1 ${classes}`}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Row