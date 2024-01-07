export const SildeMenu = ( { loadCategory, category }) =>{
    const links = ["Légumes", "Fruits", "Produits Frais", "Epicerie", "Boissons"]
    return (
        <ul>
            {
                links.map((link, index) => {
                    return ( <li className={category === link && 'active'} key={index} onClick={() => loadCategory(link)}>{link}</li>)
                })
            }
        </ul>
    )
}

export const Footer = () =>{
    return (
        <footer>
            <div className="container">
                <span className="text-muted">Place sticky footer content here.</span>
            </div>
        </footer>
    )
}

export const Card = props =>{
    const { fruit } = props
    return (
        <div className="col-sm-5">
            <div className="card">
                <div className="card-image">
                    <img src={process.env.PUBLIC_URL+`./media/${fruit.category}/${fruit.image}`} width="170" height="170" alt={fruit.name}/></div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>{fruit.name}</h4>
                        </div>
                        <div className="col-sm-6 ">
                            <p>{fruit.price}</p>
                            <button className="btn btn-warning btn-sm">View Product</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal */}
        </div>
    )
}

export const List = props =>{
    const { data, category } = props
    const produits = data.find(categoryData => categoryData[0].category === category);
    return (
        <div className="col-sm">
            <div className="row">
                {
                    produits.map(produit => <Card key={produit.ref} fruit={produit}/> )
                }
            </div> 
        </div>
    )
}