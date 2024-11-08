import PropTypes from 'prop-types'

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

Student.PropTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.boolean
}

export default Student