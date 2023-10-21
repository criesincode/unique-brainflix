import "./Main.scss"

const Main = () => {
    return (
        <>
        {details.map(details => {
            return (
                <main className="main">
                    <div className="mainTitleContainer">
                        <p className="mainTitle">{details.title}</p>
                    </div>
                </main>     
            )                  
        })}    
      </>  
    )
}

export default Main;
