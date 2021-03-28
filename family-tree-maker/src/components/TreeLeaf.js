

function TreeLeaf(props) {
console.log(props);
    return (
        <div className={props.relative.relationship}>{props.relative.fullName}</div>
    )

}

export default TreeLeaf