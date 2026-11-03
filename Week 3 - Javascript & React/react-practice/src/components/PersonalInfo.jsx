function PersonalInfo() {
    const name = "Tan Kok Chung";
    const hobbys = ["Reading", "Playing video games", "Watching movies"];

    return (
        <div>
            <h1> My name is {name}</h1>

            <p>My favourite programming language is JavaScript</p>

            <div className="hobbys">
                <h3>My Hobbys</h3>
                <ul>
                    {hobbys.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
            </div>

            <p>Current Time: {new Date().toLocaleTimeString()}</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnFHofmx0P1YtMI0oij9rWwaP4-FSgk9-GQAgDiVQl2xwAX2JXG3nF5Y7s&s=10" height="500" width="400" alt="Profile" />
        </div>
    )
}

export default PersonalInfo;