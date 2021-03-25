// import 'bootstrap/dist/css/bootstrap.css'

export default function About() {

    const color = 'green'

    return (
        <div>
            <h2>
                About us
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi at minus culpa necessitatibus, quaerat saepe laborum earum atque expedita voluptatum? Expedita deserunt iure officiis nemo deleniti alias corrupti! Perspiciatis, et.</p>
        
            <style global jsx>{`
                h2 {
                    color: ${color};
                }
                p {
                    color: red;
                    padding: 10px 40px;
                }
            `}</style>
        
        </div>
    )
}