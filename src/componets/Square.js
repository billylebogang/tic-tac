
const style = {
	border: " 1px solid black",
	fontSize: "30px",
	fontWeight: "800",
	cursor: "pointer",
	outline: "none",
	margin: '10px',
	borderRadius: '10px'

};


export const Square = ({value, onClick}) => {

    return (
    <>
        <button style={style} onClick={onClick}> {value}</button>

    </>

    )
}
