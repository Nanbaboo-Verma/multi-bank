import './product.css'
const Product = () => {
    const productData = [
        {
            image: "https://multibank.cmsmasters.net/alternative/wp-content/uploads/sites/3/2021/11/service-8-600x499.jpg",
            imageContent: "Home and travel insurance support",
            content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        },
        {
            image: "https://multibank.cmsmasters.net/alternative/wp-content/uploads/sites/3/2021/11/service-6-600x499.jpg",
            imageContent: "Home and travel insurance support",
            content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        },
        {
            image: "https://multibank.cmsmasters.net/alternative/wp-content/uploads/sites/3/2021/11/service-5-600x499.jpg",
            imageContent: "Home and travel insurance support",
            content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        }
    ]
    return <>
        <div className='product-container max-width'>
            <div className='product-header-container'>
                <div className='product-heading'>
                    <h2>Popular Products</h2>
                </div>
                <div className='product-header-arrow-container'>
                    <span className='product-left-arrow-button-container product-arrow'>
                        <i class='fa'>&#xf104;</i>
                    </span>
                    <span className='product-right-arrow-button-container product-arrow'>
                        <i class='fa'>&#xf105;</i>
                    </span>
                </div>
            </div>
            <div className='product-scroll-container'>
                <div className='prduct-items-container'>
                    {productData.map((items) => {
                        return <>
                            <div>
                                <img src={items.image} alt="" />
                            </div>
                            <div>
                                <p>{items.imageContent}</p>
                            </div>
                            <div>
                                <p>{items.content}</p>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </div>
    </>
}
export default Product;