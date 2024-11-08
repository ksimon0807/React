
function Student(props){
    return(
        <div className="student">
            <p>
                Name : {props.name}
                <br />
                Age : {props.age}
                <br />
                Student : {props.isStudent ? "YES" : "NO"}
            </p>
        </div>
    );
}

export default Student