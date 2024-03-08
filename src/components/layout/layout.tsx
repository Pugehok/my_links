interface props{
    children: React.ReactNode
}

export const Layout = (props:props) =>{
    return(
        <div className="container mx-auto">
            {props.children}
        </div>
    )
}