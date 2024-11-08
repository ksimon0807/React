// import styles from './Button.module.css'

function Button(){
    const styles = {
        
            backgroundColor: "hsl(183, 77%, 75%)",
            color: "rgb(58, 45, 45)",
            cursor:" pointer",
            border: "2px solid black",
            borderRadius: "10px",
            width: "200px",
            height: "100px",
            textAlign: "center",
            padding: "5px",
            textDecoration: "dotted",
            marginLeft: "50px",
            marginTop: "50px",
            textSizeAjust: "2em",
    }
    return(
        <button style = {styles}>Click Me</button>
    );
}

export default Button