export const CheckPolarity = (pol) => {
    switch(pol)
    {
        case 'NONE':
            return "Neutral"
        case 'N+':
            return "Very Negative"
        case 'N':
            return "Negative"
        case 'P':
            return "Positive"
        case 'P+':
            return "Very Positive"
        default:
            return "Neutral"
        }
}