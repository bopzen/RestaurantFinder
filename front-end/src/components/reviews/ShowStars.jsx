export default function ShowStars(
    {rating}
) {
    const getStarElements = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;
        
        const starElements = [];
    
        for (let i = 0; i < fullStars; i++) {
            starElements.push(<i key={`full-${i}`} className="fa-solid fa-star"></i>);
        }
    
        if (halfStar) {
            starElements.push(<i key="half" className="fa-solid fa-star-half-stroke"></i>);
        }
    
        for (let i = 0; i < emptyStars; i++) {
            starElements.push(<i key={`empty-${i}`} className="fa-regular fa-star"></i>);
        }
    
        return starElements;
    }

    return (
        <div className="stars">
            {getStarElements(rating)}
        </div>
    )
}