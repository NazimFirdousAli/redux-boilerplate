const set_data = () => {
    return (dispatch) => {
        dispatch({ type: "SETDATA", payload: { name: "KKR" } })
    }
}

export default set_data;