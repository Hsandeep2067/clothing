// Product Data
const products = [
    
    
    // Game Category Products
    {
        id: 25,
        name: "Apex Legends Game",
        category: "games",
        price: 2400,
        originalPrice: 2990,
        image: "images/games/Apex Legend.png",
        rating: 4.8,
        reviews: 72,
        badge: "New",
        description: "Battle royale champions design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 26,
        name: "Call of Duty Cold War Game",
        category: "games",
        price: 2400,
        originalPrice: 2990,
        image: "images/games/Call of Duty Cold War.png",
        rating: 4.7,
        reviews: 68,
        badge: "New",
        description: "Cold War combat design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 27,
        name: "Farcry 3 Game",
        category: "games",
        price: 2400,
        originalPrice: 2990,
        image: "images/games/Farcry 3.png",
        rating: 4.6,
        reviews: 55,
        badge: "New",
        description: "Tropical shooter adventure design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 28,
        name: "Farcry 4 Game",
        category: "games",
        price: 2400,
        originalPrice: 2990,
        image: "images/games/Farcry 4.png",
        rating: 4.7,
        reviews: 61,
        badge: "New",
        description: "Himalayan adventure design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 29,
        name: "Farcry 5 Game",
        category: "games",
        price: 2400,
        originalPrice: 2990,
        image: "images/games/Farcry 5.png",
        rating: 4.8,
        reviews: 69,
        badge: "New",
        description: "Cult resistance design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 30,
        name: "Farcry 6 Game",
        category: "games",
        price: 2400,
        originalPrice: 2990,
        image: "images/games/Farcry 6.png",
        rating: 4.7,
        reviews: 63,
        badge: "New",
        description: "Revolutionary guerrilla design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 31,
        name: "Freefire Player Game",
        category: "games",
        price: 2400,
        originalPrice: 2990,
        image: "images/games/Freefire - Player.png",
        rating: 4.6,
        reviews: 75,
        badge: "New",
        description: "Elite player design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 32,
        name: "Freefire Game",
        category: "games",
        price: 2400,
        originalPrice: 2990,
        image: "images/games/Freefire.png",
        rating: 4.6,
        reviews: 75,
        badge: "New",
        description: "Survival battle royale design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 33,
        name: "GTA VI Game",
        category: "games",
        price: 2400,
        originalPrice: 2990,
        image: "images/games/GTA VI.png",
        rating: 4.9,
        reviews: 88,
        badge: "New",
        description: "Next-gen open world design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 34,
        name: "NFS Most Wanted Game",
        category: "games",
        price: 2400,
        originalPrice: 2990,
        image: "images/games/NFS most Wanted.png",
        rating: 4.7,
        reviews: 71,
        badge: "New",
        description: "High-speed racing design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 35,
        name: "PUBG Game",
        category: "games",
        price: 2400,
        originalPrice: 2990,
        image: "images/games/PUBG.png",
        rating: 4.8,
        reviews: 82,
        badge: "New",
        description: "Chicken dinner champion design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 36,
        name: "Red Dead Redemption 2 Game",
        category: "games",
        price: 2400,
        originalPrice: 2990,
        image: "images/games/Red Dead 2.png",
        rating: 4.9,
        reviews: 79,
        badge: "New",
        description: "Wild west adventure design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    // Film & TV Series Category Products
    {
        id: 37,
        name: "Knight Rider TV Series",
        category: "filmtvseries",
        price: 2400,
        originalPrice: 2990,
        image: "images/film & tvseries/Knight Rider.png",
        rating: 4.7,
        reviews: 62,
        badge: "New",
        description: "Iconic television series design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 38,
        name: "Squid Game - 3 Red Mask Team",
        category: "filmtvseries",
        price: 2400,
        originalPrice: 2990,
        image: "images/film & tvseries/Squid Game - 3 Red Mask Team.png",
        rating: 4.9,
        reviews: 85,
        badge: "New",
        description: "Popular Netflix series design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 39,
        name: "Squid Game - Mask Man",
        category: "filmtvseries",
        price: 2400,
        originalPrice: 2990,
        image: "images/film & tvseries/Squid Game - Mask Man.png",
        rating: 4.8,
        reviews: 78,
        badge: "New",
        description: "Popular Netflix series design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 40,
        name: "Squid Game - Red Mask Team",
        category: "filmtvseries",
        price: 2400,
        originalPrice: 2990,
        image: "images/film & tvseries/Squid Game - Red Mask Team.png",
        rating: 4.9,
        reviews: 82,
        badge: "New",
        description: "Popular Netflix series design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    
    {
        id: 41,
        name: "Squid Game Special Edition",
        category: "filmtvseries",
        price: 2400,
        originalPrice: 2990,
        image: "images/film & tvseries/Squid Game -.png",
        rating: 4.8,
        reviews: 76,
        badge: "New",
        description: "Popular Netflix series design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    
    {
        id: 43,
        name: "The Boys - The Seven",
        category: "filmtvseries",
        price: 2400,
        originalPrice: 2990,
        image: "images/film & tvseries/The Boys - The Seven.png",
        rating: 4.6,
        reviews: 68,
        badge: "New",
        description: "Popular superhero series design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 44,
        name: "The Punisher - Frank",
        category: "filmtvseries",
        price: 2400,
        originalPrice: 2990,
        image: "images/film & tvseries/The Punisher - Frank.png",
        rating: 4.8,
        reviews: 75,
        badge: "New",
        description: "Anti-hero character design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 45,
        name: "The Punisher",
        category: "filmtvseries",
        price: 2400,
        originalPrice: 2990,
        image: "images/film & tvseries/The Punisher.png",
        rating: 4.7,
        reviews: 71,
        badge: "New",
        description: "Anti-hero character design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 46,
        name: "The Boys - Vought",
        category: "filmtvseries",
        price: 2400,
        originalPrice: 2990,
        image: "images/film & tvseries/The boys - Vought.png",
        rating: 4.6,
        reviews: 65,
        badge: "New",
        description: "Popular superhero series design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 47,
        name: "The Boys - Season 01",
        category: "filmtvseries",
        price: 2400,
        originalPrice: 2990,
        image: "images/film & tvseries/the Boys - Season 01.png",
        rating: 4.7,
        reviews: 69,
        badge: "New",
        description: "Popular superhero series design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    }

];

// New products added based on uploaded images
const newProducts = [
    // General Sports Products (with sporty subcategory)
    // {
    //     id: 81,
    //     name: "Champions League Soccer",
    //     category: "sports",
    //     subcategory: "sporty",
    //     price: 2400,
    //     originalPrice: 2990,
    //     image: "images/sports/Champions League.png",
    //     rating: 4.8,
    //     reviews: 85,
    //     badge: "New",
    //     description: "Football champions design",
    //     specifications: {
    //         style: "Regular",
    //         gender: "Unisex",
    //         color: "Black",
    //         fabric: "220 GSM, Single Jersey"
    //     },
    //     sizes: {
    //         "XS": { price: 2400, originalPrice: 2990 },
    //         "S": { price: 2400, originalPrice: 2990 },
    //         "M": { price: 2400, originalPrice: 2990 },
    //         "L": { price: 2700, originalPrice: 3290 },
    //         "XL": { price: 2700, originalPrice: 3290 },
    //         "2XL": { price: 2700, originalPrice: 3290 },
    //         "3XL": { price: 2700, originalPrice: 3290 },
    //         "4XL": { price: 3200, originalPrice: 3790 },
    //         "5XL": { price: 3200, originalPrice: 3790 },
    //         "6XL": { price: 3200, originalPrice: 3790 }
    //     },
    //     defaultSize: "M"
    // },
    // {
    //     id: 82,
    //     name: "NBA Basketball",
    //     category: "sports",
    //     subcategory: "sporty",
    //     price: 2400,
    //     originalPrice: 2990,
    //     image: "images/sports/NBA.png",
    //     rating: 4.7,
    //     reviews: 78,
    //     badge: "New",
    //     description: "Basketball legend design",
    //     specifications: {
    //         style: "Regular",
    //         gender: "Unisex",
    //         color: "Black",
    //         fabric: "220 GSM, Single Jersey"
    //     },
    //     sizes: {
    //         "XS": { price: 2400, originalPrice: 2990 },
    //         "S": { price: 2400, originalPrice: 2990 },
    //         "M": { price: 2400, originalPrice: 2990 },
    //         "L": { price: 2700, originalPrice: 3290 },
    //         "XL": { price: 2700, originalPrice: 3290 },
    //         "2XL": { price: 2700, originalPrice: 3290 },
    //         "3XL": { price: 2700, originalPrice: 3290 },
    //         "4XL": { price: 3200, originalPrice: 3790 },
    //         "5XL": { price: 3200, originalPrice: 3790 },
    //         "6XL": { price: 3200, originalPrice: 3790 }
    //     },
    //     defaultSize: "M"
    // },
    // {
    //     id: 83,
    //     name: "Olympic Games",
    //     category: "sports",
    //     subcategory: "sporty",
    //     price: 2400,
    //     originalPrice: 2990,
    //     image: "images/sports/Olympic Games.png",
    //     rating: 4.9,
    //     reviews: 92,
    //     badge: "New",
    //     description: "Olympic spirit design",
    //     specifications: {
    //         style: "Regular",
    //         gender: "Unisex",
    //         color: "Black",
    //         fabric: "220 GSM, Single Jersey"
    //     },
    //     sizes: {
    //         "XS": { price: 2400, originalPrice: 2990 },
    //         "S": { price: 2400, originalPrice: 2990 },
    //         "M": { price: 2400, originalPrice: 2990 },
    //         "L": { price: 2700, originalPrice: 3290 },
    //         "XL": { price: 2700, originalPrice: 3290 },
    //         "2XL": { price: 2700, originalPrice: 3290 },
    //         "3XL": { price: 2700, originalPrice: 3290 },
    //         "4XL": { price: 3200, originalPrice: 3790 },
    //         "5XL": { price: 3200, originalPrice: 3790 },
    //         "6XL": { price: 3200, originalPrice: 3790 }
    //     },
    //     defaultSize: "M"
    // },
    // New Sports Products (WWE)
    {
        id: 48,
        name: "AJ LEE - Love bites back",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/AJ LEE - Love bites back.png",
        rating: 4.7,
        reviews: 42,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 49,
        name: "AJ LEE - Spider web",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/AJ LEE - Spider web.png",
        rating: 4.6,
        reviews: 38,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 50,
        name: "CM PUNK - 2K25 Edition",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/CM PUNK - 2K25 Edition.png",
        rating: 4.9,
        reviews: 75,
        badge: "New",
        description: "Wrestling legend design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 51,
        name: "CM PUNK - Hell Freeze Over",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/CM PUNK - Hell Freeze Over.png",
        rating: 4.8,
        reviews: 69,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 52,
        name: "CM Punk - Collection",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/CM Punk - Collection.png",
        rating: 4.9,
        reviews: 82,
        badge: "New",
        description: "Wrestling legend collection design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 53,
        name: "Cm punk - Best In the world",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/Cm punk - Best In the world.png",
        rating: 4.8,
        reviews: 71,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 54,
        name: "Cm punk - Cross Hands",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/Cm punk - Cross Hands.png",
        rating: 4.7,
        reviews: 58,
        badge: "New",
        description: "Wrestling legend design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 55,
        name: "Cm punk - Thunder Bolt",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/Cm punk - Thunder Bolt.png",
        rating: 4.6,
        reviews: 52,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 56,
        name: "JOHN CENA - 17 time champion",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/JOHN CENA - 17 time champion.png",
        rating: 4.9,
        reviews: 95,
        badge: "New",
        description: "Wrestling icon design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 57,
        name: "JOHN CENA - 2K25 Edition",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/JOHN CENA - 2K25 Edition.png",
        rating: 4.8,
        reviews: 88,
        badge: "New",
        description: "Wrestling legend design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 58,
        name: "JOHN CENA - CENATION",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/JOHN CENA - CENATION.png",
        rating: 4.7,
        reviews: 76,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 59,
        name: "JOHN CENA - ONE LAST TIME",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/JOHN CENA - ONE LAST TIME.png",
        rating: 4.8,
        reviews: 81,
        badge: "New",
        description: "Wrestling icon design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 60,
        name: "JOHN CENA - YOU CANT SEE ME",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/JOHN CENA - YOU CANT SEE ME.png",
        rating: 4.9,
        reviews: 92,
        badge: "New",
        description: "Wrestling legend design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 61,
        name: "JOHN CENA - You Cant See Me with Face",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/JOHN CENA - You Cant See Me with Face.png",
        rating: 4.8,
        reviews: 87,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 62,
        name: "JOHN CENA - rise above hate",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/JOHN CENA - rise above hate.png",
        rating: 4.7,
        reviews: 73,
        badge: "New",
        description: "Wrestling icon design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 63,
        name: "JOHN CENA",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/JOHN CENA.png",
        rating: 4.9,
        reviews: 98,
        badge: "New",
        description: "Wrestling legend design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 64,
        name: "Jey USO - 2K25 Edition",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/Jey USO - 2K25 Edition.png",
        rating: 4.6,
        reviews: 54,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 65,
        name: "Liv-Dom - 2K25 Edition",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/Liv-Dom - 2K25 Edition.png",
        rating: 4.7,
        reviews: 59,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 66,
        name: "NWO",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/NWO.png",
        rating: 4.8,
        reviews: 77,
        badge: "New",
        description: "Wrestling legend design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 67,
        name: "ROMAN RIEGNS - Tribal Chief",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/ROMAN RIEGNS - Tribal Chief.png",
        rating: 4.9,
        reviews: 89,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 68,
        name: "Randy Orton - 2K25 Edition",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/Randy Orton - 2K25 Edition.png",
        rating: 4.7,
        reviews: 68,
        badge: "New",
        description: "Wrestling legend design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 69,
        name: "Randy Orton - RKO The Viper",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/Randy Orton - RKO The Viper.png",
        rating: 4.8,
        reviews: 74,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 70,
        name: "Randy Orton - RKO",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/Randy Orton - RKO.png",
        rating: 4.9,
        reviews: 83,
        badge: "New",
        description: "Wrestling legend design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 71,
        name: "Randy Orton - The Viper",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/Randy Orton - The Viper.png",
        rating: 4.8,
        reviews: 79,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 72,
        name: "Randy Orton Collection",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/Randy Orton Collection.png",
        rating: 4.9,
        reviews: 85,
        badge: "New",
        description: "Wrestling legend collection design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 73,
        name: "drew mcintyre  - 2K25 Edition",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/drew mcintyre  - 2K25 Edition.png",
        rating: 4.6,
        reviews: 57,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 74,
        name: "gunther  - 2K25 Edition",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/gunther  - 2K25 Edition.png",
        rating: 4.7,
        reviews: 61,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 75,
        name: "la knight  - 2K25 Edition",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/la knight  - 2K25 Edition.png",
        rating: 4.6,
        reviews: 53,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 76,
        name: "roman reigns  - 2K25 Edition",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/roman reigns  - 2K25 Edition.png",
        rating: 4.9,
        reviews: 91,
        badge: "New",
        description: "Wrestling legend design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 77,
        name: "terror twins  - 2K25 Edition",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/terror twins  - 2K25 Edition.png",
        rating: 4.5,
        reviews: 48,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 78,
        name: "the rock - final boss",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/the rock - final boss.png",
        rating: 4.9,
        reviews: 96,
        badge: "New",
        description: "Wrestling legend design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 79,
        name: "tiffany stratton  - 2K25 Edition",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/tiffany stratton  - 2K25 Edition.png",
        rating: 4.6,
        reviews: 56,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 80,
        name: "wyatt sicks  - 2K25 Edition",
        category: "sports",
        subcategory: "wwe",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/wwe/wyatt sicks  - 2K25 Edition.png",
        rating: 4.7,
        reviews: 62,
        badge: "New",
        description: "Wrestling superstar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 84,
        name: "BMW M 1000RR",
        category: "vehicles",
        subcategory: "bikes",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/bikes/BMW - M 1000RR.png",
        rating: 4.8,
        reviews: 45,
        badge: "New",
        description: "High-performance motorcycle design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 85,
        name: "HONDA AX1",
        category: "vehicles",
        subcategory: "bikes",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/bikes/HONDA - AX1.png",
        rating: 4.6,
        reviews: 38,
        badge: "New",
        description: "Versatile motorcycle design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 86,
        name: "Honda BAJA XR 250cc",
        category: "vehicles",
        subcategory: "bikes",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/bikes/Honda - BAJA XR 250cc.png",
        rating: 4.7,
        reviews: 42,
        badge: "New",
        description: "Adventure motorcycle design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 87,
        name: "Honda Hornet CB250",
        category: "vehicles",
        subcategory: "bikes",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/bikes/Honda - Hornet CB250.png",
        rating: 4.6,
        reviews: 39,
        badge: "New",
        description: "Street fighter motorcycle design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 88,
        name: "Honda Hornet CB600",
        category: "vehicles",
        subcategory: "bikes",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/bikes/Honda - Hornet CB600.png",
        rating: 4.7,
        reviews: 41,
        badge: "New",
        description: "Powerful street motorcycle design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 89,
        name: "KAWASAKI KLX250D",
        category: "vehicles",
        subcategory: "bikes",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/bikes/KAWASAKI - KLX250D.png",
        rating: 4.5,
        reviews: 37,
        badge: "New",
        description: "Off-road motorcycle design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 90,
        name: "KAWASAKI Ninja H2",
        category: "vehicles",
        subcategory: "bikes",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/bikes/KAWASAKI - Ninja H2.png",
        rating: 4.9,
        reviews: 52,
        badge: "New",
        description: "Supercharged sport motorcycle design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 91,
        name: "SUZUKI DRZ400",
        category: "vehicles",
        subcategory: "bikes",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/bikes/SUZUKI - DRZ400.png",
        rating: 4.6,
        reviews: 38,
        badge: "New",
        description: "Trail motorcycle design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 92,
        name: "Suzuki Djebel",
        category: "vehicles",
        subcategory: "bikes",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/bikes/Suzuki - Djebel.png",
        rating: 4.5,
        reviews: 35,
        badge: "New",
        description: "Adventure motorcycle design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 93,
        name: "TVS NTORQ",
        category: "vehicles",
        subcategory: "bikes",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/bikes/TVS - NTORQ.png",
        rating: 4.4,
        reviews: 33,
        badge: "New",
        description: "Scooter design with modern aesthetics",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 94,
        name: "YAMAHA Mt15",
        category: "vehicles",
        subcategory: "bikes",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/bikes/YAMAHA - Mt15.png",
        rating: 4.7,
        reviews: 40,
        badge: "New",
        description: "Naked street motorcycle design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 95,
        name: "YAMAHA RX100",
        category: "vehicles",
        subcategory: "bikes",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/bikes/YAMAHA - RX100.png",
        rating: 4.6,
        reviews: 39,
        badge: "New",
        description: "Classic motorcycle design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 96,
        name: "YAMAHA YZF R1",
        category: "vehicles",
        subcategory: "bikes",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/bikes/YAMAHA - YZF R1.png",
        rating: 4.9,
        reviews: 55,
        badge: "New",
        description: "Super sport motorcycle design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 97,
        name: "Harley Davidson",
        category: "vehicles",
        subcategory: "bikes",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/bikes/harly Davidson.png",
        rating: 4.8,
        reviews: 48,
        badge: "New",
        description: "Iconic cruiser motorcycle design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 98,
        name: "BTS Team",
        category: "music",
        price: 2400,
        originalPrice: 2990,
        image: "images/music/BTS - Team.png",
        rating: 4.8,
        reviews: 65,
        badge: "New",
        description: "K-pop boy band BTS design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 99,
        name: "BlackPINK Heart with Logo",
        category: "music",
        price: 2400,
        originalPrice: 2990,
        image: "images/music/BlackPINK - Heart with Logo.png",
        rating: 4.7,
        reviews: 58,
        badge: "New",
        description: "K-pop girl group BlackPINK heart design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 100,
        name: "BlackPINK Illustration",
        category: "music",
        price: 2400,
        originalPrice: 2990,
        image: "images/music/BlackPINK - Illustration.png",
        rating: 4.6,
        reviews: 52,
        badge: "New",
        description: "K-pop girl group BlackPINK illustration design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 101,
        name: "BTS Flowers with Logo",
        category: "music",
        price: 2400,
        originalPrice: 2990,
        image: "images/music/Bts - Flowers with Logo.png",
        rating: 4.9,
        reviews: 72,
        badge: "New",
        description: "K-pop boy band BTS flowers design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 102,
        name: "Guns N' Roses Two Guns Logo",
        category: "music",
        price: 2400,
        originalPrice: 2990,
        image: "images/music/Gun n Roses - Two guns Logo.png",
        rating: 4.8,
        reviews: 68,
        badge: "New",
        description: "Rock band Guns N' Roses two guns logo design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 103,
        name: "Iron Maiden Zombie Rider",
        category: "music",
        price: 2400,
        originalPrice: 2990,
        image: "images/music/Iron Maiden - Zombie Rider.png",
        rating: 4.7,
        reviews: 61,
        badge: "New",
        description: "Heavy metal band Iron Maiden zombie rider design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 104,
        name: "KORN",
        category: "music",
        price: 2400,
        originalPrice: 2990,
        image: "images/music/KORN.png",
        rating: 4.6,
        reviews: 55,
        badge: "New",
        description: "Nu metal band KORN design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 105,
        name: "Lamb of God Skeleton Bird",
        category: "music",
        price: 2400,
        originalPrice: 2990,
        image: "images/music/Lamb of god - Skeleton Bird.png",
        rating: 4.7,
        reviews: 59,
        badge: "New",
        description: "Metal band Lamb of God skeleton bird design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 106,
        name: "Linkin Park Hybrid Theory Album",
        category: "music",
        price: 2400,
        originalPrice: 2990,
        image: "images/music/Linkin Park - Hybrid Theory Album.png",
        rating: 4.8,
        reviews: 75,
        badge: "New",
        description: "Rock band Linkin Park Hybrid Theory album design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 107,
        name: "Metallica Red Skull Heart",
        category: "music",
        price: 2400,
        originalPrice: 2990,
        image: "images/music/Metallica - Red Skull Heart.png",
        rating: 4.9,
        reviews: 82,
        badge: "New",
        description: "Heavy metal band Metallica red skull heart design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 108,
        name: "Metallica Skull Butterfly",
        category: "music",
        price: 2400,
        originalPrice: 2990,
        image: "images/music/Metallica - Skull Butterfly.png",
        rating: 4.8,
        reviews: 78,
        badge: "New",
        description: "Heavy metal band Metallica skull butterfly design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 109,
        name: "Metallica Skull Head Explosion",
        category: "music",
        price: 2400,
        originalPrice: 2990,
        image: "images/music/Metallica - Skull Head Explosion.png",
        rating: 4.9,
        reviews: 85,
        badge: "New",
        description: "Heavy metal band Metallica skull head explosion design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 110,
        name: "Metallica Skull Head XXX",
        category: "music",
        price: 2400,
        originalPrice: 2990,
        image: "images/music/Metallica - Skull Head XXX.png",
        rating: 4.7,
        reviews: 71,
        badge: "New",
        description: "Heavy metal band Metallica skull head XXX design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 111,
        name: "Slipknot All Hope Is Gone",
        category: "music",
        price: 2400,
        originalPrice: 2990,
        image: "images/music/Slipknot - All hope is gone.png",
        rating: 4.6,
        reviews: 63,
        badge: "New",
        description: "Nu metal band Slipknot all hope is gone design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 112,
        name: "System of a Down Bandmates",
        category: "music",
        price: 2400,
        originalPrice: 2990,
        image: "images/music/System of a down - Bandmates.png",
        rating: 4.8,
        reviews: 69,
        badge: "New",
        description: "Alternative metal band System of a Down bandmates design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 113,
        name: "Avenged Sevenfold Blue Cyborg Skull",
        category: "music",
        price: 2400,
        originalPrice: 2990,
        image: "images/music/avenged sevenfold - Blue Cyborg Skull.png",
        rating: 4.7,
        reviews: 66,
        badge: "New",
        description: "Metal band Avenged Sevenfold blue cyborg skull design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    
    // Trending Category Products
    {
        id: 100,
        name: "Effevesce Charm",
        category: "trending",
        price: 2400,
        originalPrice: 2990,
        image: "images/trending/Effevesce Charm.png",
        rating: 4.8,
        reviews: 75,
        badge: "Hot",
        description: "Trending design with unique charm",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 101,
        name: "Glory",
        category: "trending",
        price: 2400,
        originalPrice: 2990,
        image: "images/trending/Glory.png",
        rating: 4.7,
        reviews: 68,
        badge: "Hot",
        description: "Glory design for champions",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 102,
        name: "Gods Era",
        category: "trending",
        price: 2400,
        originalPrice: 2990,
        image: "images/trending/Gods Era.png",
        rating: 4.9,
        reviews: 82,
        badge: "Hot",
        description: "Divine era design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 103,
        name: "Greed",
        category: "trending",
        price: 2400,
        originalPrice: 2990,
        image: "images/trending/Greed.png",
        rating: 4.6,
        reviews: 59,
        badge: "Hot",
        description: "Bold greed design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 104,
        name: "HERCULEAN",
        category: "trending",
        price: 2400,
        originalPrice: 2990,
        image: "images/trending/HERCULEAN.png",
        rating: 4.8,
        reviews: 71,
        badge: "Hot",
        description: "Powerful herculean design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 105,
        name: "MOSES",
        category: "trending",
        price: 2400,
        originalPrice: 2990,
        image: "images/trending/MOSES.png",
        rating: 4.7,
        reviews: 65,
        badge: "Hot",
        description: "Moses inspired design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 106,
        name: "Pretender",
        category: "trending",
        price: 2400,
        originalPrice: 2990,
        image: "images/trending/Pretender.png",
        rating: 4.6,
        reviews: 58,
        badge: "Hot",
        description: "Mysterious pretender design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 107,
        name: "RADIANCE",
        category: "trending",
        price: 2400,
        originalPrice: 2990,
        image: "images/trending/RADIANCE.png",
        rating: 4.9,
        reviews: 85,
        badge: "Hot",
        description: "Radiant design with shine",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 108,
        name: "Rebel Angle",
        category: "trending",
        price: 2400,
        originalPrice: 2990,
        image: "images/trending/Rebel Angle.png",
        rating: 4.7,
        reviews: 72,
        badge: "Hot",
        description: "Rebel with a cause design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 109,
        name: "Snipe",
        category: "trending",
        price: 2400,
        originalPrice: 2990,
        image: "images/trending/Snipe.png",
        rating: 4.6,
        reviews: 63,
        badge: "Hot",
        description: "Precision snipe design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 110,
        name: "Feeling Blue",
        category: "trending",
        price: 2400,
        originalPrice: 2990,
        image: "images/trending/feeling Blue.png",
        rating: 4.8,
        reviews: 77,
        badge: "Hot",
        description: "Emotional blue design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    
    // Sporty Category Products
    {
        id: 111,
        name: "Chicago Bulls - Jordan",
        category: "sports",
        subcategory: "sporty",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/sports/Chicago Bulls - Jordan.png",
        rating: 4.9,
        reviews: 88,
        badge: "Hot",
        description: "Chicago Bulls legendary design featuring Michael Jordan",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 112,
        name: "Chicago Bulls",
        category: "sports",
        subcategory: "sporty",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/sports/Chicago Bulls.png",
        rating: 4.8,
        reviews: 76,
        badge: "Hot",
        description: "Classic Chicago Bulls basketball design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 113,
        name: "Lakers - Kobe",
        category: "sports",
        subcategory: "sporty",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/sports/Lakers - Cobe.png",
        rating: 4.9,
        reviews: 92,
        badge: "Hot",
        description: "Los Angeles Lakers tribute to Kobe Bryant",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 114,
        name: "Lakers - King James",
        category: "sports",
        subcategory: "sporty",
        price: 2400,
        originalPrice: 2990,
        image: "images/sports/sports/Lakers - King James.png",
        rating: 4.8,
        reviews: 85,
        badge: "Hot",
        description: "Los Angeles Lakers design featuring LeBron James",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    
    // Car Category Products
    {
        id: 115,
        name: "AUDI - R8",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/AUDI - R8.png",
        rating: 4.9,
        reviews: 87,
        badge: "Hot",
        description: "High-performance Audi R8 supercar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 116,
        name: "Ayrton Senna Grand Prix",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Ayrton Senna Grand Prix.png",
        rating: 4.9,
        reviews: 91,
        badge: "Hot",
        description: "Tribute to Formula 1 legend Ayrton Senna",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 117,
        name: "Ayrton Senna MP4-4 1988",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Ayrton Senna MP4-4 1988.png",
        rating: 4.9,
        reviews: 93,
        badge: "Hot",
        description: "McLaren MP4/4 1988 championship winning car design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 118,
        name: "Ayrton Senna MP4-4",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Ayrton Senna MP4-4.png",
        rating: 4.8,
        reviews: 89,
        badge: "Hot",
        description: "Classic McLaren MP4-4 design tribute",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 119,
        name: "BYD - Seal",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/BYD - Seal.png",
        rating: 4.7,
        reviews: 76,
        badge: "New",
        description: "Modern electric vehicle design by BYD",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 120,
        name: "Dodge - Ram 3500",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Dodge - Ram 3500.png",
        rating: 4.6,
        reviews: 72,
        badge: "New",
        description: "Powerful Dodge Ram 3500 truck design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 121,
        name: "Dodge - SRT Demon",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Dodge -SRT demon.png",
        rating: 4.8,
        reviews: 84,
        badge: "Hot",
        description: "High-performance Dodge SRT Demon muscle car",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 122,
        name: "Ferrari - F8",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Ferrari - F8.png",
        rating: 4.9,
        reviews: 88,
        badge: "Hot",
        description: "Stylish Ferrari F8 Tributo supercar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 123,
        name: "Ford - GT 2017",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Ford - Gt 2017.png",
        rating: 4.8,
        reviews: 82,
        badge: "Hot",
        description: "Le Mans winning Ford GT 2017 design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 124,
        name: "Ford - Mustang",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Ford - Mustang.png",
        rating: 4.7,
        reviews: 79,
        badge: "Hot",
        description: "Classic American muscle car Ford Mustang",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 125,
        name: "Ford - F 150",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Ford - f 150.png",
        rating: 4.6,
        reviews: 75,
        badge: "New",
        description: "Best-selling Ford F-150 pickup truck design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 126,
        name: "Honda - Type R",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Honda - Type R.png",
        rating: 4.8,
        reviews: 83,
        badge: "Hot",
        description: "High-performance Honda Civic Type R design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 127,
        name: "Lewis Hamilton - Ferrari Scuderia",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Lewis Hamilton - Ferrari Scuderia.png",
        rating: 4.9,
        reviews: 90,
        badge: "Hot",
        description: "Formula 1 champion Lewis Hamilton Ferrari design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 128,
        name: "McLaren - P1",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/MClaren - P1.png",
        rating: 4.9,
        reviews: 86,
        badge: "Hot",
        description: "Hybrid hypercar McLaren P1 design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 129,
        name: "Mercedes Benz - C63",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Mercedes Benz - C63.png",
        rating: 4.7,
        reviews: 78,
        badge: "Hot",
        description: "High-performance Mercedes-Benz C63 AMG design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 130,
        name: "Nissan - GTR Nismo",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Nissan - GTR Nismo.png",
        rating: 4.8,
        reviews: 85,
        badge: "Hot",
        description: "Legendary Nissan GT-R Nismo supercar design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 131,
        name: "Nissan - NV350",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Nissan - NV350.png",
        rating: 4.5,
        reviews: 69,
        badge: "New",
        description: "Versatile Nissan NV350 van design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 132,
        name: "Pagani - ZONDA C1",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Pagani - ZONDA C1.png",
        rating: 4.9,
        reviews: 89,
        badge: "Hot",
        description: "Exotic Italian supercar Pagani Zonda C1 design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 133,
        name: "Toyota - KDH",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Toyota - KDH.png",
        rating: 4.6,
        reviews: 73,
        badge: "New",
        description: "Reliable Toyota KDH wagon design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    },
    {
        id: 134,
        name: "Toyota - Supra MK4",
        category: "vehicles",
        subcategory: "cars",
        price: 2400,
        originalPrice: 2990,
        image: "images/vehicles/cars/Toyota - Supra MK4.png",
        rating: 4.8,
        reviews: 87,
        badge: "Hot",
        description: "Iconic Toyota Supra MK4 sports car design",
        specifications: {
            style: "Regular",
            gender: "Unisex",
            color: "Black",
            fabric: "220 GSM, Single Jersey"
        },
        sizes: {
            "XS": { price: 2400, originalPrice: 2990 },
            "S": { price: 2400, originalPrice: 2990 },
            "M": { price: 2400, originalPrice: 2990 },
            "L": { price: 2700, originalPrice: 3290 },
            "XL": { price: 2700, originalPrice: 3290 },
            "2XL": { price: 2700, originalPrice: 3290 },
            "3XL": { price: 2700, originalPrice: 3290 },
            "4XL": { price: 3200, originalPrice: 3790 },
            "5XL": { price: 3200, originalPrice: 3790 },
            "6XL": { price: 3200, originalPrice: 3790 }
        },
        defaultSize: "M"
    }
    
];

// Combine existing products with new products
const allProducts = [...products, ...newProducts];

// Update the products array to include new products
products.length = 0;
products.push(...allProducts);

// Cart and Wishlist Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// DOM Elements - Check if they exist before using
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const checkoutBtn = document.getElementById('checkoutBtn');

const wishlistBtn = document.getElementById('wishlistBtn');
const wishlistSidebar = document.getElementById('wishlistSidebar');
const closeWishlist = document.getElementById('closeWishlist');
const wishlistItems = document.getElementById('wishlistItems');
const wishlistCount = document.getElementById('wishlistCount');

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

const featuredProducts = document.getElementById('featuredProducts');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing application...');
    
    // Debug: Log which elements exist
    console.log('Cart elements:', {
        cartBtn: !!cartBtn,
        cartSidebar: !!cartSidebar,
        cartCount: !!cartCount,
        cartItems: !!cartItems,
        cartTotal: !!cartTotal,
        checkoutBtn: !!checkoutBtn
    });
    
    console.log('Wishlist elements:', {
        wishlistBtn: !!wishlistBtn,
        wishlistSidebar: !!wishlistSidebar,
        wishlistCount: !!wishlistCount,
        wishlistItems: !!wishlistItems
    });
    
    // Only initialize cart/wishlist if elements exist
    if (cartCount) {
        console.log('Updating cart count...');
        updateCartCount();
    }
    if (wishlistCount) {
        console.log('Updating wishlist count...');
        updateWishlistCount();
    }
    
    // Only load featured products if the element exists
    if (featuredProducts) {
        console.log('Loading featured products...');
        loadFeaturedProducts();
    }
    
    console.log('Setting up event listeners...');
    setupEventListeners();
    console.log('Setting up animations...');
    setupAnimations();
    console.log('Setting up scroll to top...');
    setupScrollToTop();
    
    console.log('Application initialization complete!');
});

// Event Listeners Setup
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Cart functionality - only if elements exist
    if (cartBtn && cartSidebar && closeCart && checkoutBtn) {
        console.log('Setting up cart event listeners...');
        cartBtn.addEventListener('click', toggleCart);
        closeCart.addEventListener('click', toggleCart);
        checkoutBtn.addEventListener('click', proceedToCheckout);
    } else {
        console.log('Cart elements missing:', { cartBtn: !!cartBtn, cartSidebar: !!cartSidebar, closeCart: !!closeCart, checkoutBtn: !!checkoutBtn });
    }

    // Wishlist functionality - only if elements exist
    if (wishlistBtn && wishlistSidebar && closeWishlist) {
        console.log('Setting up wishlist event listeners...');
        wishlistBtn.addEventListener('click', toggleWishlist);
        closeWishlist.addEventListener('click', toggleWishlist);
    } else {
        console.log('Wishlist elements missing:', { wishlistBtn: !!wishlistBtn, wishlistSidebar: !!wishlistSidebar, closeWishlist: !!closeWishlist });
    }

    // Search functionality - only if elements exist
    if (searchBtn && searchInput) {
        console.log('Setting up search event listeners...');
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    } else {
        console.log('Search elements missing:', { searchBtn: !!searchBtn, searchInput: !!searchInput });
    }

    // Mobile menu - only if elements exist
    if (mobileMenuBtn && navMenu) {
        console.log('Setting up mobile menu event listeners...');
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    } else {
        console.log('Mobile menu elements missing:', { mobileMenuBtn: !!mobileMenuBtn, navMenu: !!navMenu });
    }

    // Category cards - only if they exist
    const categoryCards = document.querySelectorAll('.category-card');
    if (categoryCards.length > 0) {
        console.log('Setting up category card event listeners...');
        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const category = this.dataset.category;
                const subcategory = this.dataset.subcategory;
                
                if (subcategory) {
                    window.location.href = `shop.html?category=${category}&subcategory=${subcategory}`;
                } else {
                    window.location.href = `shop.html?category=${category}`;
                }
            });
        });
    } else {
        console.log('No category cards found');
    }

    // Close sidebars when clicking outside - only if elements exist
    if (cartSidebar || wishlistSidebar) {
        console.log('Setting up sidebar close event listeners...');
        document.addEventListener('click', function(e) {
            if (cartSidebar && !cartSidebar.contains(e.target) && cartBtn && !cartBtn.contains(e.target)) {
                cartSidebar.classList.remove('active');
            }
            if (wishlistSidebar && !wishlistSidebar.contains(e.target) && wishlistBtn && !wishlistBtn.contains(e.target)) {
                wishlistSidebar.classList.remove('active');
            }
        });
    } else {
        console.log('No sidebars found for close functionality');
    }
    
    console.log('Event listeners setup complete!');
}

// Cart Functions
function toggleCart() {
    console.log('toggleCart called');
    if (!cartSidebar) {
        console.log('Cart sidebar not found!');
        return;
    }
    cartSidebar.classList.toggle('active');
    console.log('Cart sidebar active:', cartSidebar.classList.contains('active'));
    if (cartSidebar.classList.contains('active')) {
        renderCart();
    }
}

function addToCart(productId, quantity = 1, selectedSize = null) {
    console.log('addToCart called with productId:', productId, 'quantity:', quantity, 'size:', selectedSize);
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.log('Product not found with ID:', productId);
        return;
    }
    console.log('Product found:', product.name);

    // Determine the size and pricing
    let size = selectedSize;
    let price = product.price;
    let originalPrice = product.originalPrice;
    
    if (product.sizes) {
        if (!size) {
            size = getSelectedSize(productId) || product.defaultSize || 'M';
        }
        const sizeData = product.sizes[size];
        if (sizeData) {
            price = sizeData.price;
            originalPrice = sizeData.originalPrice;
        }
    }

    // Create unique cart item ID based on product ID and size
    const cartItemId = product.sizes ? `${productId}-${size}` : productId;
    
    const existingItem = cart.find(item => item.cartItemId === cartItemId);
    if (existingItem) {
        existingItem.quantity += quantity;
        console.log('Updated existing item quantity to:', existingItem.quantity);
    } else {
        const cartItem = {
            ...product,
            cartItemId: cartItemId,
            selectedSize: size,
            price: price,
            originalPrice: originalPrice,
            quantity: quantity
        };
        cart.push(cartItem);
        console.log('Added new item to cart with size:', size);
    }

    console.log('Current cart:', cart);
    updateCartCount();
    saveCart();
    showNotification(`Product added to cart${product.sizes ? ` (Size: ${size})` : ''}!`, 'success');
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => (item.cartItemId || item.id) != cartItemId);
    updateCartCount();
    saveCart();
    if (cartItems) renderCart();
    showNotification('Product removed from cart!', 'info');
}

function updateCartItemQuantity(cartItemId, quantity) {
    const item = cart.find(item => (item.cartItemId || item.id) == cartItemId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(cartItemId);
        } else {
            item.quantity = quantity;
            updateCartCount();
            saveCart();
            if (cartItems) renderCart();
        }
    }
}

function renderCart() {
    if (!cartItems || !cartTotal) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = 'රු0.00';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                ${item.selectedSize ? `<p class="cart-item-size">Size: <strong>${item.selectedSize}</strong></p>` : ''}
                ${item.specifications ? `<p class="cart-item-specs">${item.specifications.style} • ${item.specifications.color}</p>` : ''}
                <p class="cart-item-price">රු${item.price.toLocaleString()}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-cart-item-id="${item.cartItemId || item.id}" data-action="decrease">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus" data-cart-item-id="${item.cartItemId || item.id}" data-action="increase">+</button>
                </div>
            </div>
            <button class="remove-cart-item" data-cart-item-id="${item.cartItemId || item.id}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    // Add event listeners for cart item buttons
    cartItems.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            const cartItemId = this.dataset.cartItemId;
            const action = this.dataset.action;
            const item = cart.find(item => (item.cartItemId || item.id) == cartItemId);
            
            if (item) {
                if (action === 'decrease') {
                    updateCartItemQuantity(cartItemId, item.quantity - 1);
                } else if (action === 'increase') {
                    updateCartItemQuantity(cartItemId, item.quantity + 1);
                }
            }
        });
    });

    cartItems.querySelectorAll('.remove-cart-item').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            const cartItemId = this.dataset.cartItemId;
            removeFromCart(cartItemId);
        });
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `රු${total.toLocaleString()}`;
}

function updateCartCount() {
    if (!cartCount) {
        console.log('Cart count element not found!');
        return;
    }
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
    console.log('Updated cart count to:', count);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Wishlist Functions
function toggleWishlist() {
    console.log('toggleWishlist called');
    if (!wishlistSidebar) {
        console.log('Wishlist sidebar not found!');
        return;
    }
    wishlistSidebar.classList.toggle('active');
    console.log('Wishlist sidebar active:', wishlistSidebar.classList.contains('active'));
    if (wishlistSidebar.classList.contains('active')) {
        renderWishlist();
    }
}

function addToWishlist(productId) {
    console.log('addToWishlist called with productId:', productId);
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.log('Product not found with ID:', productId);
        return;
    }
    console.log('Product found:', product.name);

    if (!wishlist.find(item => item.id === productId)) {
        wishlist.push(product);
        console.log('Added product to wishlist');
        updateWishlistCount();
        saveWishlist();
        showNotification('Product added to wishlist!', 'success');
    } else {
        console.log('Product already in wishlist');
        showNotification('Product already in wishlist!', 'info');
    }
    
    console.log('Current wishlist:', wishlist);
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    updateWishlistCount();
    saveWishlist();
    if (wishlistItems) renderWishlist();
    showNotification('Product removed from wishlist!', 'info');
}

function renderWishlist() {
    if (!wishlistItems) return;
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<p class="empty-wishlist">Your wishlist is empty</p>';
        return;
    }

    wishlistItems.innerHTML = wishlist.map(item => `
        <div class="wishlist-item">
            <img src="${item.image}" alt="${item.name}" class="wishlist-item-image">
            <div class="wishlist-item-details">
                <h4>${item.name}</h4>
                <p class="wishlist-item-price">රු${item.price.toLocaleString()}</p>
                <button class="add-to-cart-from-wishlist" data-product-id="${item.id}">
                    Add to Cart
                </button>
            </div>
            <button class="remove-wishlist-item" data-product-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    // Add event listeners for wishlist item buttons
    wishlistItems.querySelectorAll('.add-to-cart-from-wishlist').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            const productId = parseInt(this.dataset.productId);
            addToCart(productId);
        });
    });

    wishlistItems.querySelectorAll('.remove-wishlist-item').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            const productId = parseInt(this.dataset.productId);
            removeFromWishlist(productId);
        });
    });
}

function updateWishlistCount() {
    if (!wishlistCount) {
        console.log('Wishlist count element not found!');
        return;
    }
    wishlistCount.textContent = wishlist.length;
    console.log('Updated wishlist count to:', wishlist.length);
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Product Functions
function loadFeaturedProducts() {
    if (!featuredProducts) return;
    
    // Get products from different categories to mix in featured products
    const gamesProducts = products.filter(product => product.category === 'games');
    const filmsTvSeriesProducts = products.filter(product => product.category === 'filmtvseries');
    const sportsProducts = products.filter(product => product.category === 'sports');
    
    // Select 2-3 products from each category to create a mixed featured selection
    const featured = [];
    
    // Add 3 games products
    featured.push(...gamesProducts.slice(0, 3));
    
    // Add 3 films & TV series products
    featured.push(...filmsTvSeriesProducts.slice(0, 3));
    
    // Add 2 sports products
    featured.push(...sportsProducts.slice(0, 2));
    
    // Shuffle the array to mix products from different categories
    for (let i = featured.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [featured[i], featured[j]] = [featured[j], featured[i]];
    }
    
    // Limit to 8 products
    const finalFeatured = featured.slice(0, 8);
    
    featuredProducts.innerHTML = finalFeatured.map(product => createProductCard(product)).join('');
    
    // Add event listeners for product card buttons
    featuredProducts.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.dataset.productId);
            addToWishlist(productId);
        });
    });

    featuredProducts.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.dataset.productId);
            const selectedSize = getSelectedSize(productId);
            addToCart(productId, 1, selectedSize);
        });
    });
    
    // Add event listeners for size buttons
    featuredProducts.querySelectorAll('.size-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = parseInt(this.dataset.productId);
            const selectedSize = this.dataset.size;
            
            // Update active button
            const sizeOptions = this.parentElement;
            sizeOptions.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update price
            updateProductPrice(productId, selectedSize);
        });
    });
}

function createProductCard(product) {
    const isInWishlist = wishlist.find(item => item.id === product.id);
    
    // Use size-based pricing if available, otherwise use default price
    const defaultSize = product.defaultSize || 'M';
    const currentPrice = product.sizes ? product.sizes[defaultSize].price : product.price;
    const currentOriginalPrice = product.sizes ? product.sizes[defaultSize].originalPrice : product.originalPrice;
    const discount = Math.round(((currentOriginalPrice - currentPrice) / currentOriginalPrice) * 100);
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onclick="zoomImage('${product.image}', '${product.name}')" style="cursor: zoom-in;">
                ${product.badge ? `<div class="product-badge">${product.badge} -${discount}%</div>` : ''}
                <div class="product-actions">
                    <button class="action-btn wishlist-btn" data-product-id="${product.id}" title="Add to Wishlist">
                        <i class="fas fa-heart ${isInWishlist ? 'text-danger' : ''}"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <span class="stock-status">In Stock</span>
                </div>
                ${product.specifications ? `
                <div class="product-specs">
                    <span class="spec-item">${product.specifications.style}</span>
                    <span class="spec-item">${product.specifications.gender}</span>
                    <span class="spec-item">${product.specifications.color}</span>
                </div>
                ` : ''}
                ${product.sizes ? `
                <div class="size-selection">
                    <label class="size-label">Size:</label>
                    <div class="size-options" data-product-id="${product.id}">
                        ${Object.keys(product.sizes).map(size => 
                            `<button class="size-btn ${size === defaultSize ? 'active' : ''}" data-size="${size}" data-product-id="${product.id}">${size}</button>`
                        ).join('')}
                    </div>
                </div>
                ` : ''}
                <div class="product-price">
                    <span class="current-price" data-product-id="${product.id}">රු${currentPrice.toLocaleString()}</span>
                    <span class="original-price" data-product-id="${product.id}">රු${currentOriginalPrice.toLocaleString()}</span>
                </div>
                <button class="add-to-cart" data-product-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Helper functions for size selection and pricing
function getSelectedSize(productId) {
    const activeButton = document.querySelector(`.size-btn.active[data-product-id="${productId}"]`);
    return activeButton ? activeButton.dataset.size : 'M';
}

function updateProductPrice(productId, selectedSize) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.sizes) return;
    
    const sizeData = product.sizes[selectedSize];
    if (!sizeData) return;
    
    // Update price displays for this product
    const currentPriceElement = document.querySelector(`.current-price[data-product-id="${productId}"]`);
    const originalPriceElement = document.querySelector(`.original-price[data-product-id="${productId}"]`);
    
    if (currentPriceElement) {
        currentPriceElement.textContent = `රු${sizeData.price.toLocaleString()}`;
    }
    if (originalPriceElement) {
        originalPriceElement.textContent = `රු${sizeData.originalPrice.toLocaleString()}`;
    }
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Get default size and pricing
    const defaultSize = product.defaultSize || 'M';
    const currentPrice = product.sizes ? product.sizes[defaultSize].price : product.price;
    const currentOriginalPrice = product.sizes ? product.sizes[defaultSize].originalPrice : product.originalPrice;

    // Create modal for quick view
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <button class="close-modal">&times;</button>
                <div class="product-quick-view">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-details">
                        <h2>${product.name}</h2>
                        <div class="product-rating">
                            <span class="stock-status">In Stock</span>
                        </div>
                        <p class="product-description">${product.description}</p>
                        ${product.specifications ? `
                        <div class="product-specifications">
                            <h4>Specifications:</h4>
                            <ul>
                                <li><strong>Style:</strong> ${product.specifications.style}</li>
                                <li><strong>Gender:</strong> ${product.specifications.gender}</li>
                                <li><strong>Color:</strong> ${product.specifications.color}</li>
                                <li><strong>Fabric:</strong> ${product.specifications.fabric}</li>
                            </ul>
                        </div>
                        ` : ''}
                        ${product.sizes ? `
                        <div class="modal-size-selection">
                            <label class="size-label">Size:</label>
                            <div class="modal-size-options" data-product-id="${product.id}">
                                ${Object.keys(product.sizes).map(size => 
                                    `<button class="modal-size-btn ${size === defaultSize ? 'active' : ''}" data-size="${size}">${size}</button>`
                                ).join('')}
                            </div>
                        </div>
                        ` : ''}
                        <div class="product-price">
                            <span class="current-price modal-current-price">රු${currentPrice.toLocaleString()}</span>
                            <span class="original-price modal-original-price">රු${currentOriginalPrice.toLocaleString()}</span>
                        </div>
                        <div class="product-actions">
                            <button class="btn btn-primary modal-add-to-cart" data-product-id="${product.id}">
                                Add to Cart
                            </button>
                            <button class="btn btn-secondary modal-add-to-wishlist" data-product-id="${product.id}">
                                <i class="fas fa-heart"></i> Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Add event listeners for size buttons in modal
    const modalSizeButtons = modal.querySelectorAll('.modal-size-btn');
    if (modalSizeButtons.length > 0) {
        modalSizeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const selectedSize = this.dataset.size;
                
                // Update active button
                modalSizeButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Update prices
                const sizeData = product.sizes[selectedSize];
                if (sizeData) {
                    modal.querySelector('.modal-current-price').textContent = `රු${sizeData.price.toLocaleString()}`;
                    modal.querySelector('.modal-original-price').textContent = `රු${sizeData.originalPrice.toLocaleString()}`;
                }
            });
        });
    }
    
    // Add event listeners for modal buttons
    modal.querySelector('.modal-add-to-cart').addEventListener('click', function(e) {
        e.stopPropagation();
        const productId = parseInt(this.dataset.productId);
        const activeButton = modal.querySelector('.modal-size-btn.active');
        const selectedSize = activeButton ? activeButton.dataset.size : null;
        addToCart(productId, 1, selectedSize);
        document.body.removeChild(modal);
    });

    modal.querySelector('.modal-add-to-wishlist').addEventListener('click', function(e) {
        e.stopPropagation();
        const productId = parseInt(this.dataset.productId);
        addToWishlist(productId);
    });
    
    // Close modal functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
        if (e.target === modal.querySelector('.modal-overlay')) {
            document.body.removeChild(modal);
        }
    });
}

// Search Functions
function performSearch() {
    if (!searchInput) return;
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    const results = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

    if (results.length > 0) {
        // Store search results and redirect to shop page
        sessionStorage.setItem('searchResults', JSON.stringify(results));
        sessionStorage.setItem('searchQuery', query);
        window.location.href = 'shop.html';
    } else {
        showNotification('No products found for your search!', 'warning');
    }
}

// Mobile Menu Functions
function toggleMobileMenu() {
    if (!mobileMenuBtn || !navMenu) return;
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Animation Functions
function setupAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation - only if they exist
    const elementsToObserve = document.querySelectorAll('.feature-card, .product-card, .category-card, .testimonial-card');
    if (elementsToObserve.length > 0) {
        elementsToObserve.forEach(el => {
            observer.observe(el);
        });
    }
}

// Scroll to Top Function
function setupScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Utility Functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        default: return 'info-circle';
    }
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'warning');
        return;
    }
    
    // Create WhatsApp message with cart details
    const whatsappMessage = createWhatsAppMessage();
    
    // WhatsApp API URL with the message
    const whatsappUrl = `https://wa.me/94772953138?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    showNotification('Redirecting to WhatsApp...', 'success');
}

function createWhatsAppMessage() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let message = `🛒 *NEW ORDER*\n\n`;
    message += `Hello! I would like to place an order:\n\n`;
    
    // Add cart items with size information
    cart.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n`;
        
        // Include size information if available
        if (item.selectedSize) {
            message += `   Size: ${item.selectedSize}\n`;
        }
        
        message += `   Quantity: ${item.quantity}\n`;
        message += `   Unit Price: රු${item.price.toLocaleString()}\n`;
        message += `   Subtotal: රු${(item.price * item.quantity).toLocaleString()}\n\n`;
    });
    
    message += `💰 *Total Amount: රු${total.toLocaleString()}*\n\n`;
    
    // Add product specifications summary
    const hasSpecifications = cart.some(item => item.specifications);
    if (hasSpecifications) {
        message += `📋 *Product Specifications:*\n`;
        const specs = cart[0].specifications; // Assuming all products have same specs
        if (specs) {
            message += `• Style: ${specs.style}\n`;
            message += `• Gender: ${specs.gender}\n`;
            message += `• Color: ${specs.color}\n`;
            message += `• Fabric: ${specs.fabric}\n\n`;
        }
    }
    
    message += `\n`;
    // message += `• Delivery address:\n`;
    // message += `• Contact number:\n`;
    // message += `• Preferred delivery time:\n\n`;
    message += `Thank you!`;
    
    return message;
}

// Add CSS for notifications and modals
const additionalStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        padding: 15px 20px;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    }

    .notification.show {
        transform: translateX(0);
    }

    .notification-success {
        border-left: 4px solid #28a745;
    }

    .notification-error {
        border-left: 4px solid #dc3545;
    }

    .notification-warning {
        border-left: 4px solid #ffc107;
    }

    .notification-info {
        border-left: 4px solid #17a2b8;
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .notification-content i {
        font-size: 18px;
    }

    .quick-view-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
    }

    .modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    .modal-content {
        background: white;
        border-radius: 15px;
        max-width: 800px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
    }

    .close-modal {
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #666;
        z-index: 1;
    }

    .product-quick-view {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        padding: 30px;
    }

    .product-quick-view .product-image img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 10px;
    }

    .product-quick-view .product-details h2 {
        font-size: 24px;
        margin-bottom: 15px;
    }

    .product-quick-view .product-actions {
        display: flex;
        gap: 15px;
        margin-top: 20px;
    }

    .cart-item, .wishlist-item {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px 0;
        border-bottom: 1px solid #eee;
    }

    .cart-item-image, .wishlist-item-image {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 8px;
    }

    .cart-item-details, .wishlist-item-details {
        flex: 1;
    }

    .cart-item-details h4, .wishlist-item-details h4 {
        font-size: 14px;
        margin-bottom: 5px;
    }

    .cart-item-price, .wishlist-item-price {
        color:rgb(0, 0, 0);
        font-weight: 600;
        margin-bottom: 5px;
    }

    .cart-item-quantity {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .cart-item-quantity button {
        width: 25px;
        height: 25px;
        border: 1px solid #ddd;
        background: white;
        border-radius: 4px;
        cursor: pointer;
    }

    .remove-cart-item, .remove-wishlist-item {
        background: none;
        border: none;
        color: #e74c3c;
        cursor: pointer;
        padding: 5px;
    }

    .add-to-cart-from-wishlist {
        background: linear-gradient(135deg, rgb(58, 58, 58) 0%, #000000 100%);
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
    }

    .empty-cart, .empty-wishlist {
        text-align: center;
        color: #666;
        padding: 40px 20px;
    }

    .text-danger {
        color: #e74c3c !important;
    }

    @media (max-width: 768px) {
        .product-quick-view {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 20px;
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Image zoom functionality
function zoomImage(imageUrl, productName) {
    // Create zoom modal
    const zoomModal = document.createElement('div');
    zoomModal.className = 'image-zoom-modal';
    zoomModal.innerHTML = `
        <div class="zoom-modal-overlay" onclick="closeZoomModal(this.parentElement)">
            <div class="zoom-modal-content" onclick="event.stopPropagation()">
                <button class="close-zoom-btn" onclick="closeZoomModal(this.parentElement.parentElement.parentElement)">
                    <i class="fas fa-times"></i>
                </button>
                <img src="${imageUrl}" alt="${productName}" class="zoomed-image">
                <div class="zoom-image-title">${productName}</div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(zoomModal);
    
    // Show modal with animation
    setTimeout(() => {
        zoomModal.classList.add('active');
    }, 10);
    
    // Close modal on Escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeZoomModal(zoomModal);
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

// Close zoom modal
function closeZoomModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        if (modal && modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    }, 300);
}
