function Footer(){
    return(
        <footer>
            <p>&copy; {new Date().toLocaleDateString()} Your Website Name</p>
            <p>&copy; {new Date().toLocaleString()} Your Website Name</p>
            {/* <p>This is a footer </p> */}
        </footer>
    );
}

export default Footer