

function TreeLeaf(props) {
console.log(props);
    return (
        <div className={props.relative.relationship}>{props.relative.firstName}</div>
    )

}

export default TreeLeaf