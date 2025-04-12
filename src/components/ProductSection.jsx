function ProductSection(){
    return(
        <>
        <div className="product container">
            <div className="product-content">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p> YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR HERO. LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. VOLUPTATEM PERFERENDIS OFFICIIS NEMO QUO EXERCITATIONEM <br />
                PUMA GRAVITATION L-9645</p>

                <div className = "product-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping-platforms">
                    <p>Also Available On</p>
                    <div className="platform-icons">
                        <img src="/images/amazon_logo.png" alt="amazon"/>
                        <img src="/images/flipkart_logo.png" alt="flipkart"/>
                    </div>
                </div>

            </div>
            <div className="product-image">
                <img src="/images/puma_shoe.png" alt="Puma Shoe" />
            </div>
        </div>
        </>
    )
};

export default ProductSection;