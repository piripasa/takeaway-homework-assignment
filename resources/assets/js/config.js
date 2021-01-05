export const BASE_URL = process.env.MIX_API_URL;

export const OPENING_STATUS = [
    {icon: 'fa-list', slug: '', text: 'All'},
    {icon: 'fa-check', slug: 'open', text: 'Open'},
    {icon: 'fa-phone', slug: 'order ahead', text: 'Order Ahead'},
    {icon: 'fa-times-circle', slug: 'closed', text: 'Closed'}
];

export const SORT_OPTIONS = [
    {icon: 'fa-crosshairs', slug: 'bestMatch', text: 'Best Match'},
    {icon: 'fa-flash', slug: 'newest', text: 'Newest'},
    {icon: 'fa-thumbs-up', slug: 'popularity', text: 'Popularity'},
    {icon: 'fa-star-o', slug: 'ratingAverage', text: 'Rating Average'},
    {icon: 'fa-map-marker', slug: 'distance', text: 'Distance'},
    {icon: 'fa-money', slug: 'minCost', text: 'Minimum Costs'},
    {icon: 'fa-truck', slug: 'deliveryCosts', text: 'Delivery Costs'},
    {icon: 'fa-shopping-basket', slug: 'averageProductPrice', text: 'Average Product Price'}
];
