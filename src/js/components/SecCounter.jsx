import { useEffect, useState } from "react"

export const SecCounter = (props) => {

    const [counter, setCounter] = useState(0)




    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(counter + 1)
        }, 100)

        return () => clearInterval(intervalId)

    }, [counter])


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex counterclass">
                        <div><svg xmlns="http://www.w3.org/2000/svg"  width="40" height="" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg></div>
                        
                        <div>{Math.floor((counter / 1000000) % 10)}</div>
                        <div>{Math.floor((counter / 100000) % 10)}</div>
                        <div>{Math.floor((counter / 10000) % 10)}</div>
                        <div>{Math.floor((counter / 1000) % 10)}</div>
                        <div>{Math.floor((counter / 100) % 10)}</div>
                        <div>{Math.floor((counter / 10) % 10)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}