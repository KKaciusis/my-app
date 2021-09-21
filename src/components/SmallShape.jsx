function SmallShape(props) {
    return (<div className="small-circle" style={{backgroundColor: props.color, borderRadius: props.shape === "circle" ? '50%' : '5px'}}>{props.color}</div>);
}
export default SmallShape;