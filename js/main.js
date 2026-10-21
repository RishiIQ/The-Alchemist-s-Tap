const productsData = [
    {
        id: 1,
        name: "Alchemist Pro 5-Gallon Starter Kit",
        category: "kits",
        price: 189.99,
        rating: 4.9,
        reviews: 142,
        image: "https://craftabrew.com/cdn/shop/files/everyday_5_gallon_bucket_thumb-2.webp?v=1761251508&width=480",
        description: "Complete stainless kettle, glass carboy, thermometer, auto-siphon, sanitizer, and beginner recipe kit."
    },
    {
        id: 2,
        name: "Maris Otter Base Malt (25kg)",
        category: "malts",
        price: 54.50,
        rating: 4.8,
        reviews: 98,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DT9zTXXiFS4OeLbyoXOcDeNHi2FM-QKaRlbrHKMD-qf8N47B1m_auAA&s=10",
        description: "Legendary English floor-malted barley known for its rich, bready, and deep nutty malt profile."
    },
    {
        id: 3,
        name: "Citra & Cascade Hop Pellet Pack",
        category: "hops",
        price: 24.99,
        rating: 5.0,
        reviews: 215,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR514Ulfsb5orcSRjU_CKBv5jM1WOkRePBx3ORGqTylAwjc7kGuE7H1_c3d&s=10",
        description: "Nitrogen-flushed vacuum pack containing 8oz Citra (14.2% AA) and 8oz Cascade (6.8% AA) for zesty IPA brews."
    },
    {
        id: 4,
        name: "West Coast Ale Liquid Yeast (WLP001)",
        category: "hops",
        price: 11.99,
        rating: 4.9,
        reviews: 320,
        image: "https://d1w7312wesee68.cloudfront.net/fHaFTx_1iABf_DtapzvSDnsqOUA3IXbyDSFoumJuZOo/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-8876000000000000/menu/items/6/item-100000055819838006_1770320998.jpg",
        description: "Renowned clean fermentation strain that accentuates hop bitterness while leaving a crisp, dry malt finish."
    },
    {
        id: 5,
        name: "Digital Refractometer & Hydrometer Set",
        category: "equipment",
        price: 49.99,
        rating: 4.7,
        reviews: 76,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3vFgJhlIhpxfgkev88r7pPPDLJ1HMQm20ptvBeJtI5irhdYEn9aGAhc&s=10",
        description: "High-precision ATC refractometer and glass triple-scale hydrometer for exact Original and Final Gravity readings."
    },
    {
        id: 6,
        name: "Munich Dark Specialty Malt (10kg)",
        category: "malts",
        price: 32.00,
        rating: 4.8,
        reviews: 54,
        image: "https://www.cactuscraft.co.za/wp-content/uploads/2021/01/DMun5-1024x768.jpg",
        description: "Imparts a deep amber hue and rich malty aroma characteristic of traditional continental bocks and marzens."
    },
    {
        id: 7,
        name: "Compact 1-Gallon Stovetop Starter Kit",
        category: "kits",
        price: 89.99,
        rating: 4.7,
        reviews: 64,
        image: "https://m.media-amazon.com/images/I/71urdCM7LAL.jpg",
        description: "Everything required to brew your very first gallon of craft American Pale Ale right on a standard kitchen stove."
    },
    {
        id: 8,
        name: "Pilsner German Floor Malt (25kg)",
        category: "malts",
        price: 58.00,
        rating: 4.9,
        reviews: 82,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosmfA_6kZnWX3AV5XiNxwXjW0qMOWKtewCsnGr1_e6g&s=10",
        description: "Lightly kilned continental pilsner malt delivering a clean, straw-colored wort with delicate sweet malt notes."
    },
    {
        id: 9,
        name: "Mosaic & Simcoe Hop Cryo Pack",
        category: "hops",
        price: 29.99,
        rating: 5.0,
        reviews: 174,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8AWGfvU_Y6lfI71HltM5eEU_yfIPNYBnkqfmwIq0KGQ&s",
        description: "Ultra-concentrated lupulin pellets loaded with dank pine, blueberry, and tropical stone fruit aromas."
    },
    {
        id: 10,
        name: "Belgian Abbey Liquid Yeast (WLP530)",
        category: "hops",
        price: 12.50,
        rating: 4.8,
        reviews: 95,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFU-V5ZHOleTikTGUlzDhEXB_DyMTX4V13AJVaGCsyXtN9CbQMp1GPsTw&s=10",
        description: "Authentic trappist abbey strain producing complex dark fruit, plum, and spicy clove phenols."
    },
    {
        id: 11,
        name: "Stainless Steel Auto-Siphon & Tubing",
        category: "equipment",
        price: 34.99,
        rating: 4.7,
        reviews: 110,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ37E8jtE5VXn_K86X7ucLP9C2wMAoaD4h9uwGYRIY6QtvkYJit5KFovtw&s=10",
        description: "Sanitary stainless racking cane with sediment trap clip and food-grade silicone transfer tubing."
    },
    {
        id: 12,
        name: "Digital Thermometer & pH Pen Combo",
        category: "equipment",
        price: 64.99,
        rating: 4.9,
        reviews: 138,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRFWVLuXItKcDdkHiu3mDbH0c5HeSm1aGq7qNVXGVkQ&s=10",
        description: "Waterproof pocket pH tester with auto-temperature compensation and fast-response immersion probe."
    },
    {
        id: 101,
        name: "Brewers Gypsum (Calcium Sulfate) - 1kg",
        category: "equipment",
        price: 8.99,
        rating: 4.8,
        reviews: 42,
        image: "https://images.meesho.com/images/products/1017454948/agmie_512.jpg",
        description: "Enhances hop crispness and bittering profile in pale ales."
    },
    {
        id: 102,
        name: "Calcium Chloride Flakes - 1kg",
        category: "equipment",
        price: 9.49,
        rating: 4.9,
        reviews: 38,
        image: "https://5.imimg.com/data5/SELLER/Default/2025/4/500045067/XI/TX/TQ/236/calcium-chloride-flake-500x500.jpeg",
        description: "Softens water profiles to accentuate round malt sweetness."
    },
    {
        id: 103,
        name: "Whirlfloc Tablet (Pack of 50)",
        category: "equipment",
        price: 12.99,
        rating: 5.0,
        reviews: 89,
        image: "https://cdn.shopify.com/s/files/1/2400/0975/files/Whirlfloc-tablets_800x.jpg",
        description: "Irish moss extract for superior hot break precipitation and clear wort."
    },
    {
        id: 104,
        name: "Star San Acid Sanitizer - 32oz",
        category: "equipment",
        price: 21.99,
        rating: 5.0,
        reviews: 240,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCX77jtLg3yF2XYy3ePrTJHzVGYt0FnGEkCy-cZbcafeWeAoeYU8Wy4brs&s=10",
        description: "No-rinse foaming sanitizer for absolute contamination control."
    }
];

const blogData = [
    {
        id: 1,
        title: "Mastering All-Grain Mashing: Temperature & pH Guide",
        category: "Brewing Science",
        date: "October 14, 2026",
        readTime: "6 min read",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhOhjJDYr7q87F8-mp33ARac4wCVvGYp9RtMXLjt4eu_7pCHn8LzbEpU&s=10",
        snippet: "Learn how mash rest temperatures between 148°F and 158°F dictate fermentable sugars and body in your final craft beer.",
        content: [
            "All-grain mashing is where true artisanal brewing begins, acting as the fundamental cornerstone for creating complex flavor profiles and precise attenuation in your final beer. By carefully managing your mash temperature between 148°F and 158°F, you directly activate specific enzymes responsible for converting grain starches into fermentable sugars.",
            "Beta-amylase enzymes thrive at the lower end of this spectrum (140°F to 148°F), severing malt starches into highly fermentable maltose units. This results in a dry, crisp body and higher attenuation, which is ideal for crisp West Coast IPAs and traditional pilsners where drinkability is paramount.",
            "Conversely, alpha-amylase enzymes operate best at higher temperatures (156°F to 162°F), producing unfermentable dextrins that impart rich body, mouthfeel, and enhanced head retention. Master brewers frequently adjust their single or multi-step mash rests to target exact body characteristics for stouts and bocks.",
            "Maintaining proper mash pH between 5.2 and 5.4 is equally critical for enzyme efficiency during starch conversion. An incorrect pH level can lead to sluggish conversion, poor lautering performance, and undesirable astringency caused by husk tannin extraction during sparging.",
            "Water chemistry adjustments utilizing food-grade gypsum or calcium chloride help buffer alkalinity and lock in optimal mash acidity. Brewers should always measure pH using calibrated digital meters 15 minutes after dough-in to make timely mineral additions if necessary.",
            "Ultimately, mastering all-grain mashing empowers you to take absolute creative control over your recipes, ensuring every batch achieves professional microbrewery standards right from your home kitchen."
        ]
    },
    {
        id: 2,
        title: "Clone Recipe: Pacific Northwest Double IPA",
        category: "Recipe Guide",
        date: "September 29, 2026",
        readTime: "8 min read",
        image: "https://beercartel.com.au/cdn/shop/articles/Double_IPA_and_Imperial_IPA_812b169c-9c98-462a-a8ec-2263ce24d98a.webp?v=1784198723&width=800",
        snippet: "Step-by-step hop schedule and grain bill for recreating a juicy, resinous 8.2% ABV Imperial IPA in your garage.",
        content: [
            "Recreate the legendary hop-forward punch of Pacific Northwest Double IPAs with this award-winning professional clone recipe. This formidable grain bill relies heavily on 85% premium pale ale malt, 10% CaraPils for enduring head retention, and 5% Dextrose to ensure a clean, dry finish despite the high starting gravity.",
            "The hop schedule is engineered around massive late-boil and whirlpool additions of Citra and Mosaic hops. By cooling your kettle down to 180°F before throwing in your whirlpool additions, you extract vibrant citrus, passionfruit, and pine aromas without driving up harsh bittering alpha acids.",
            "Dry hopping is executed in two distinct stages: the first addition occurs on day three of active fermentation to promote biotransformation, where active yeast cells interact with hop oils to create tropical fruit notes.",
            "The second dry hop charge is introduced during secondary conditioning just before cold crashing, locking in intense resinous aromatics that greet you the moment you pop the cap.",
            "Fermentation temperature control is non-negotiable for this style; pitching clean ale yeast like WLP001 at 66°F and allowing it to rise slowly to 70°F ensures a flawless, ester-clean flavor profile that lets the hops shine.",
            "Package your Double IPA under strict oxygen-purged conditions using kegging systems or carbonation drops to prevent premature oxidation and preserve that coveted hazy golden luster."
        ]
    },
    {
        id: 3,
        title: "Sanitization 101: Preventing Off-Flavors & Infection",
        category: "Technique",
        date: "September 15, 2026",
        readTime: "5 min read",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEoo7bsePAmfHIPxY17Y__VC-QEdJesTkICmEBdeurSaiVq6tDXMlMWJd&s=10",
        snippet: "Why clean is not the same as sanitized. Best practices with Star San and phosphoric acid rinses for zero contamination.",
        content: [
            "Cleaning removes visible organic matter and brewing residue, but sanitization destroys microscopic bacteria, wild yeasts, and mold spores that can instantly ruin your hard work. Understanding this critical distinction is what separates novice brewers from seasoned professionals.",
            "Using acid-anionic sanitizers such as Star San at a precise dilution of 1 ounce per 5 gallons of water provides rapid foam sanitization within just 30 seconds of contact time.",
            "Never fear the foam! The famous homebrewer adage 'Don't Fear the Foam' reminds us that residual acid foam breaks down into yeast nutrient, leaving no chemical taste or off-flavor in your finished beer.",
            "Every piece of equipment that touches cooled wort—including fermenters, auto-siphons, tubing, thermometers, and airlocks—must undergo rigorous sanitization immediately prior to transfer.",
            "Contamination typically manifests as buttery diacetyl, medicinal Band-Aid phenolic aromas, or slippery surface films that signal wild bacterial infections requiring deep cleaning.",
            "By establishing a disciplined sanitation workflow on every single brew day, you guarantee consistent batches and eliminate the heartbreak of infected sink pours."
        ]
    },
    {
        id: 4,
        title: "The Art of Lager Fermentation & Diacetyl Rests",
        category: "Brewing Science",
        date: "August 28, 2026",
        readTime: "7 min read",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWLXN4kRaz5p1Y5DpDCX1purer7ahn5r92K9fY3js7g&s",
        snippet: "How cold-pitching bottom-fermenting yeasts and executing a 48-hour diacetyl rest creates crystal-clear lagers.",
        content: [
            "Lager brewing demands exceptional patience, strict temperature control, and deep respect for bottom-fermenting Saccharomyces pastorianus strains. Crafting a pristine, crystal-clear pilsner or bock in your home brewery is the ultimate badge of honor.",
            "Pitching healthy lager yeast at colder temperatures around 48°F and letting primary fermentation proceed slowly prevents the formation of harsh fruity esters and fusel alcohols.",
            "As your fermentation gravity approaches within 2 to 3 points of your projected final gravity, it is time to execute the crucial diacetyl rest.",
            "Raising the ambient temperature to 65°F for 48 hours encourages the yeast cells to remain active long enough to reabsorb buttery diacetyl compounds from the green beer.",
            "Following the diacetyl rest, slowly ramp down your temperatures by 3°F per day until you reach lagering temperatures near 34°F for extended cold conditioning.",
            "During lagering, proteins and suspended yeast flocculate to the bottom of the vessel, resulting in the sparkling brilliance and smooth malt finish characteristic of world-class lagers."
        ]
    },
    {
        id: 5,
        title: "Building a Starter Yeast Culture for High Gravity Beers",
        category: "Equipment & Lab",
        date: "August 12, 2026",
        readTime: "6 min read",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOTwD9BLz0SdmfL49HjijR0eQkv15YFs_vNBRsSyxm64-NORbYLsl-2lq&s=10",
        snippet: "Step-by-step flask propagation with DME and stir plates to achieve 300+ billion viable cells before pitching.",
        content: [
            "When brewing high-gravity imperial stouts, barleywines, or Belgian quadruples exceeding 1.090 OG, pitching a single liquid yeast vial results in severe underpitching and stalled fermentation.",
            "Propagating a healthy yeast starter in a borosilicate Erlenmeyer flask ensures you achieve the recommended 300+ billion viable cells required for high-sugar worts.",
            "To build your starter, combine light dried malt extract (DME) with water to achieve a target specific gravity of 1.040, which mimics ideal propagation conditions without stressing the yeast.",
            "Boil the mixture for 15 minutes to sanitize, rapidly chill the flask in an ice bath down to 70°F, and pitch your pure liquid yeast culture alongside sanitized foam stoppers.",
            "Placing the flask on a magnetic stir plate for 36 hours keeps yeast suspended in oxygenated wort, multiplying cell counts exponentially compared to static container starters.",
            "On brew day, cold crash your starter in the refrigerator for 24 hours so the yeast settles into a dense white cake, allowing you to decant the spent liquid before pitching."
        ]
    },
    {
        id: 6,
        title: "Water Chemistry Fundamentals: Tailoring Ion Profiles",
        category: "Advanced Technique",
        date: "July 20, 2026",
        readTime: "9 min read",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyZEHk3tOrTflxMJ42UcxJChg-vQVkO2J2nI7HaUAdtxbVZgaW5QtrvKu&s=10",
        snippet: "Adjusting calcium, sulfate, and chloride ratios to accentuate crisp hop bitterness or soft, malt-forward profiles.",
        content: [
            "Water makes up over 90% of your finished beer, making mineral composition one of the most influential yet frequently overlooked variables in homebrewing success.",
            "Understanding ion profiles allows you to transform ordinary tap water into historic brewing liquor, whether you are targeting Burton-on-Trent or soft Pilsen water.",
            "Calcium ions are essential for lowering mash pH, promoting yeast flocculation during chilling, and clarifying bright beers during secondary conditioning.",
            "Sulfate ions (added via gypsum) sharpen and accentuate hop bitterness, creating a snappy, dry finish that makes West Coast IPAs pop on the palate.",
            "Chloride ions (added via calcium chloride) round out the mouthfeel and accentuate malt sweetness, making them ideal for juicy New England IPAs and rich stouts.",
            "By utilizing brewing water calculators and RO (reverse osmosis) water built up with precise mineral salts, you can finally unlock professional regional flavor profiles in every batch."
        ]
    }
];

let cart = [];
let currentDirection = 'ltr';
let selectedPaymentMethod = 'cod';

window.onload = function() {
    injectHeaderAndFooter();
    switchTab('home');
    updateCartUI();
    setDirection('ltr');
};

function conditionalRender(componentId, condition, renderFn) {
    const container = document.getElementById(componentId);
    if (!container) return;
    
    if (condition) {
        container.style.display = 'inline-block';
        if (typeof renderFn === 'function') {
            renderFn(container);
        }
    } else {
        container.style.display = 'none';
        container.innerHTML = '';
    }
}

function injectHeaderAndFooter() {
    const headerContainer = document.getElementById('app-header-container');
    if(headerContainer) {
        headerContainer.innerHTML = `
            <header class="fixed  top-0 inset-x-0 z-50 max-w-7xl mx-auto px-3 sm:px-6">
                <div class="bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800 rounded-2xl px-3 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between shadow-lg shadow-stone-900/5">
                    <a href="#home" onclick="switchTab('home')" class="flex items-center space-x-2.5 rtl:space-x-reverse group cursor-pointer min-w-0 pr-2">
                        <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white font-extrabold shadow-md shadow-amber-600/20 group-hover:rotate-6 transition-transform shrink-0">
                            <i class="fa-solid fa-flask text-xs sm:text-sm"></i>
                        </div>
                        <div class="min-w-0">
                            <span class="block text-[11px] sm:text-sm font-extrabold tracking-tight text-espressoText dark:text-white truncate">THE ALCHEMIST'S TAP</span>
                            <span class="block text-[8px] sm:text-[9px] tracking-widest uppercase text-amber-700 dark:text-amber-500 font-bold truncate">Artisan Homebrew</span>
                        </div>
                    </a>
                    
                    <!-- Desktop Nav (Visible only when width > 1100px) -->
                    <nav class="hidden min-[1101px]:flex items-center space-x-1 rtl:space-x-reverse relative shrink-0">
                        <div class="relative">
                            <button onclick="toggleHomeDropdown(event)" id="nav-home-dropdown" class="nav-btn px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-stone-600 dark:text-stone-300 flex items-center space-x-1 cursor-pointer">
                                <span>Home</span>
                                <i class="fa-solid fa-chevron-down text-[9px]"></i>
                            </button>
                            <div id="home-dropdown-menu" class="absolute ltr:left-0 rtl:right-0 mt-2 w-48 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-xl py-2 hidden z-50">
                                <button onclick="switchTab('home'); toggleHomeDropdown(event);" class="w-full ltr:text-left rtl:text-right px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-stone-800 hover:text-amber-600 transition-colors">Customer View</button>
                                <button onclick="switchTab('saas'); toggleHomeDropdown(event);" class="w-full ltr:text-left rtl:text-right px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-stone-800 hover:text-amber-600 transition-colors">SaaS Platform</button>
                            </div>
                        </div>
                        <button onclick="switchTab('products')" id="nav-products" class="nav-btn px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-stone-600 dark:text-stone-300">Products</button>
                        <button onclick="switchTab('pricing')" id="nav-pricing" class="nav-btn px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-stone-600 dark:text-stone-300">Pricing</button>
                        <button onclick="switchTab('recipes')" id="nav-recipes" class="nav-btn px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-stone-600 dark:text-stone-300">Recipes</button>
                        <button onclick="switchTab('about')" id="nav-about" class="nav-btn px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-stone-600 dark:text-stone-300">About</button>
                        <button onclick="switchTab('contact')" id="nav-contact" class="nav-btn px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-stone-600 dark:text-stone-300">Contact</button>
                    </nav>

                    <!-- Desktop Controls (Visible only when width > 1100px) -->
                    <div class="hidden min-[1101px]:flex items-center space-x-2 rtl:space-x-reverse shrink-0">
                        <button onclick="toggleTheme()" class="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all text-xs" title="Toggle Theme">
                            <i class="fa-solid fa-sun hidden dark:block"></i>
                            <i class="fa-solid fa-moon block dark:hidden"></i>
                        </button>
                        
                        <div id="header-direction-btn-container"></div>

                        <button onclick="openCartDrawer()" class="relative p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all text-xs">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <span id="cart-badge" class="absolute -top-1.5 -right-1.5 rtl:-left-1.5 rtl:right-auto bg-amber-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-extrabold shadow">0</span>
                        </button>
                    </div>

                    <!-- Mobile / Tablet Action Bar (Visible when width <= 1100px) -->
                    <div class="flex min-[1101px]:hidden items-center space-x-2 rtl:space-x-reverse shrink-0">
                        <button onclick="openCartDrawer()" class="relative p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all text-xs">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <span id="cart-badge-mobile" class="absolute -top-1.5 -right-1.5 rtl:-left-1.5 rtl:right-auto bg-amber-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-extrabold shadow">0</span>
                        </button>
                        <button type="button" onclick="toggleMobileMenu()" class="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all cursor-pointer">
                            <i class="fa-solid fa-bars pointer-events-none"></i>
                        </button>
                    </div>
                </div>

                <!-- Professional Mobile Hamburger Dropdown Drawer (Active at width <= 1100px) -->
                <div id="mobile-menu" class="hidden mt-2 bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl border border-stone-200 dark:border-stone-800 rounded-3xl p-4 space-y-1.5 shadow-2xl min-[1101px]:hidden">
                    <div class="px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-amber-600 border-b border-stone-100 dark:border-stone-800 mb-1 ltr:text-left rtl:text-right">Navigation Menu</div>
                    <button onclick="switchTab('home'); toggleMobileMenu();" class="block w-full ltr:text-left rtl:text-right px-4 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 hover:bg-amber-50 dark:hover:bg-stone-800 transition-colors">Customer View</button>
                    <button onclick="switchTab('saas'); toggleMobileMenu();" class="block w-full ltr:text-left rtl:text-right px-4 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 hover:bg-amber-50 dark:hover:bg-stone-800 transition-colors">SaaS Platform</button>
                    <button onclick="switchTab('products'); toggleMobileMenu();" class="block w-full ltr:text-left rtl:text-right px-4 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 hover:bg-amber-50 dark:hover:bg-stone-800 transition-colors">Products Catalog</button>
                    <button onclick="switchTab('pricing'); toggleMobileMenu();" class="block w-full ltr:text-left rtl:text-right px-4 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 hover:bg-amber-50 dark:hover:bg-stone-800 transition-colors">Pricing Plans</button>
                    <button onclick="switchTab('recipes'); toggleMobileMenu();" class="block w-full ltr:text-left rtl:text-right px-4 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 hover:bg-amber-50 dark:hover:bg-stone-800 transition-colors">Recipes & Blog</button>
                    <button onclick="switchTab('about'); toggleMobileMenu();" class="block w-full ltr:text-left rtl:text-right px-4 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 hover:bg-amber-50 dark:hover:bg-stone-800 transition-colors">About Us</button>
                    <button onclick="switchTab('contact'); toggleMobileMenu();" class="block w-full ltr:text-left rtl:text-right px-4 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 hover:bg-amber-50 dark:hover:bg-stone-800 transition-colors">Contact Us</button>

                    <div class="pt-3 mt-2 border-t border-stone-100 dark:border-stone-800 grid grid-cols-2 gap-2">
                        <button onclick="toggleTheme(); toggleMobileMenu();" class="flex items-center justify-center space-x-2 rtl:space-x-reverse px-4 py-3 rounded-2xl bg-stone-100 dark:bg-stone-800 text-xs font-bold uppercase text-stone-800 dark:text-stone-200">
                            <i class="fa-solid fa-sun dark:hidden"></i>
                            <i class="fa-solid fa-moon hidden dark:block"></i>
                            <span>Theme</span>
                        </button>
                        <button onclick="setDirection(currentDirection === 'ltr' ? 'rtl' : 'ltr'); toggleMobileMenu();" class="flex items-center justify-center space-x-2 rtl:space-x-reverse px-4 py-3 rounded-2xl bg-stone-100 dark:bg-stone-800 text-xs font-bold uppercase text-stone-800 dark:text-stone-200">
                            <i class="fa-solid fa-globe"></i>
                            <span>Switch RTL/LTR</span>
                        </button>
                    </div>
                </div>
            </header>
        `;
    }

    const footerContainer = document.getElementById('app-footer-container');
    if(footerContainer) {
        footerContainer.innerHTML = `
            <footer class="text-stone-400 text-xs py-12 border-t border-stone-800 mt-24">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        <div class="space-y-4">
                            <a href="#home" onclick="switchTab('home')" class="flex items-center space-x-3 rtl:space-x-reverse group cursor-pointer">
                                <div class="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white font-extrabold shadow-md shadow-amber-600/20 group-hover:rotate-6 transition-transform">
                                    <i class="fa-solid fa-flask"></i>
                                </div>
                                <div>
                                    <span class="text-base font-extrabold tracking-tight text-espressoText dark:text-white">THE ALCHEMIST'S TAP</span>
                                    <span class="block text-[9px] tracking-widest uppercase text-amber-700 dark:text-amber-500 font-bold">Artisan Homebrew</span>
                                </div>
                            </a>
                            <p class="text-[11px] text-stone-800 dark:text-white/60 leading-relaxed">Artisanal floor malts, vacuum nitrogen hops, and precision brewing starter systems.</p>
                            
                            <!-- Social Media Icons -->
                            <div class="flex items-center space-x-3 pt-2">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl bg-stone-800 border border-stone-700 hover:bg-amber-600 text-amber-400 hover:text-white flex items-center justify-center transition-all shadow-md" title="Instagram">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl bg-stone-800 border border-stone-700 hover:bg-amber-600 text-amber-400 hover:text-white flex items-center justify-center transition-all shadow-md" title="YouTube">
                                    <i class="fa-brands fa-youtube"></i>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl bg-stone-800 border border-stone-700 hover:bg-amber-600 text-amber-400 hover:text-white flex items-center justify-center transition-all shadow-md" title="Facebook">
                                    <i class="fa-brands fa-facebook"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 class="font-bold text-stone-800 dark:text-white mb-4 uppercase text-[11px] tracking-wider">Quick Links</h4>
                            <ul class="space-y-2.5 text-slate-800 dark:text-white/60">
                                <li><button onclick="switchTab('home')" class="hover:text-amber-400 transition-colors">Customer View</button></li>
                                <li><button onclick="switchTab('saas')" class="hover:text-amber-400 transition-colors">SaaS Platform</button></li>
                                <li><button onclick="switchTab('products')" class="hover:text-amber-400 transition-colors">Products</button></li>
                                <li><button onclick="switchTab('pricing')" class="hover:text-amber-400 transition-colors">Pricing</button></li>
                                <li><button onclick="switchTab('recipes')" class="hover:text-amber-400 transition-colors">Recipes & Blog</button></li>
                                <li><button onclick="switchTab('about')" class="hover:text-amber-400 transition-colors">About Us</button></li>
                                <li><button onclick="switchTab('contact')" class="hover:text-amber-400 transition-colors">Contact Us</button></li>
                            </ul>
                        </div>
                        <div>
    <h4 class="font-bold text-stone-800 dark:text-white mb-4 uppercase text-[11px] tracking-wider">Inventory</h4>
    <ul class="space-y-2.5 text-slate-800 dark:text-white/60">
        <li><button onclick="switchTab('products', 'kits')" class="hover:text-amber-400 transition-colors cursor-pointer">All-in-One Kits</button></li>
        <li><button onclick="switchTab('products', 'malts')" class="hover:text-amber-400 transition-colors cursor-pointer">Maris Otter Malts</button></li>
        <li><button onclick="switchTab('products', 'hops')" class="hover:text-amber-400 transition-colors cursor-pointer">Citra & Cascade Hops</button></li>
        <li><button onclick="switchTab('products', 'equipment')" class="hover:text-amber-400 transition-colors cursor-pointer">Liquid Yeast & Gear</button></li>
    </ul>
</div>
                        <div>
                            <h4 class="font-bold text-stone-800 dark:text-white mb-4 uppercase text-[11px] tracking-wider">Newsletter</h4>
                            <p class="text-[11px] text-slate-800 dark:text-white/60 mb-3">Get seasonal hop harvest alerts and weekly clone recipes.</p>
                            <form onsubmit="handleNewsletter(event)" class="flex items-center space-x-2 rtl:space-x-reverse">
                                <input type="email" required placeholder="Your email..." class="bg-stone-800 border border-stone-700 rounded-xl px-3 py-2 text-xs text-white w-full focus:outline-none">
                                <button type="submit" class="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors shrink-0">Join</button>
                            </form>
                        </div>
                    </div>
                    <!-- Centered Copyright and Footer Links -->
                    <div class="pt-8 border-t border-stone-800 flex flex-col items-center justify-center text-center text-stone-500 text-[11px] space-y-3">
                        <p>&copy; 2026 The Alchemist's Tap Inc. All rights reserved.</p>
                        <div class="flex space-x-4">
                            <button onclick="switchTab('privacy')" class="hover:text-amber-600">Privacy Policy</button>
                            <button onclick="switchTab('terms')" class="hover:text-amber-600">Terms of Service</button>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }

    renderDirectionButton();
}

function toggleHomeDropdown(event) {
    event.stopPropagation();
    const menu = document.getElementById('home-dropdown-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

window.addEventListener('click', function(e) {
    const menu = document.getElementById('home-dropdown-menu');
    const dropdownBtn = document.getElementById('nav-home-dropdown');
    if (menu && dropdownBtn && !dropdownBtn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
    }
});

function renderDirectionButton() {
    conditionalRender('header-direction-btn-container', true, (container) => {
        if (currentDirection === 'ltr') {
            container.innerHTML = `
                <button onclick="setDirection('rtl')" class="flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-xs font-bold uppercase hover:bg-stone-200 dark:hover:bg-stone-700 transition-all shadow-sm" title="Switch to RTL">
                    <span>RTL</span>
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
            `;
        } else {
            container.innerHTML = `
                <button onclick="setDirection('ltr')" class="flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-xs font-bold uppercase hover:bg-stone-200 dark:hover:bg-stone-700 transition-all shadow-sm" title="Switch to LTR">
                    <i class="fa-solid fa-arrow-right"></i>
                    <span>LTR</span>
                </button>
            `;
        }
    });
}

function setDirection(dir) {
    currentDirection = dir;
    const htmlEl = document.documentElement;
    htmlEl.setAttribute('dir', dir);
    renderDirectionButton();
    showToast("Layout Direction", `Switched to ${dir.toUpperCase()} layout.`);
}

async function switchTab(tabId, categoryFilter = null) {
    const viewContainer = document.getElementById('app-view-container');
    if(!viewContainer) return;

    try {
        // Use an absolute-relative path or ensure exact lowercase match for Vercel Linux servers
        let templateFilename = `${tabId}.html`;
        const response = await fetch(templateFilename);
        if(response.ok) {
            const htmlContent = await response.text();
            viewContainer.innerHTML = htmlContent;
        } else {
            viewContainer.innerHTML = `<div class="text-center py-24 text-stone-500">Failed to load view template.</div>`;
        }
    } catch (err) {
        console.error("Template load error:", err);
    }

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('text-amber-700', 'bg-amber-50', 'dark:bg-amber-950/50', 'dark:text-amber-400', 'border', 'border-amber-200', 'dark:border-amber-800');
        btn.classList.add('text-stone-600', 'dark:text-stone-300');
    });

    const activeBtn = document.getElementById(`nav-${tabId}`);
    const homeDropdownBtn = document.getElementById('nav-home-dropdown');
    
    if(activeBtn) {
        activeBtn.classList.remove('text-stone-600', 'dark:text-stone-300');
        activeBtn.classList.add('text-amber-700', 'bg-amber-50', 'dark:bg-amber-950/50', 'dark:text-amber-400', 'border', 'border-amber-200', 'dark:border-amber-800');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if(tabId === 'home') {
        renderHomeFeatured();
        calculateABV();
    } else if(tabId === 'products') {
        // Ensure products grid is present before filtering
        const checkGrid = setInterval(() => {
            const grid = document.getElementById('product-grid');
            if (grid) {
                clearInterval(checkGrid);
                renderProducts(categoryFilter || 'all');
                // Highlight active filter button if it exists
                document.querySelectorAll('.product-filter-btn').forEach(btn => {
                    if(btn.dataset.filter === (categoryFilter || 'all')) {
                        btn.classList.remove('bg-stone-100', 'dark:bg-stone-800', 'text-stone-600', 'dark:text-stone-300', 'border');
                        btn.classList.add('bg-amber-600', 'text-white', 'shadow-md');
                    } else {
                        btn.classList.remove('bg-amber-600', 'text-white', 'shadow-md');
                        btn.classList.add('bg-stone-100', 'dark:bg-stone-800', 'text-stone-600', 'dark:text-stone-300', 'border', 'border-stone-200', 'dark:border-stone-700');
                    }
                });
            }
        }, 50);
    } else if(tabId === 'recipes') {
        renderBlog();
    }
}

function toggleTheme() {
    const htmlEl = document.documentElement;
    htmlEl.classList.toggle('dark');
    const isDark = htmlEl.classList.contains('dark');
    showToast("Theme Updated", isDark ? "Switched to Dark Mode." : "Switched to Light Mode.");
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if(menu) {
        menu.classList.toggle('hidden');
    }
}

function calculateABV() {
    const ogInput = document.getElementById('calc-og');
    const fgInput = document.getElementById('calc-fg');
    const resultEl = document.getElementById('calc-result');
    if(ogInput && fgInput && resultEl) {
        const og = parseFloat(ogInput.value) || 1.050;
        const fg = parseFloat(fgInput.value) || 1.010;
        const abv = (og - fg) * 131.25;
        resultEl.innerText = abv.toFixed(1) + '%';
    }
}

function renderHomeFeatured() {
    const container = document.getElementById('home-featured-grid');
    if(!container) return;
    const featured = productsData.slice(0, 3);
    container.innerHTML = featured.map(p => `
        <div class="editorial-card rounded-3xl overflow-hidden flex flex-col group">
            <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] uppercase tracking-wider text-amber-700 dark:text-amber-500 font-bold">${p.category}</span>
                        <div class="flex items-center text-amber-600 text-xs font-semibold space-x-1 rtl:space-x-reverse">
                            <i class="fa-solid fa-star"></i>
                            <span>${p.rating} (${p.reviews})</span>
                        </div>
                    </div>
                    <h3 class="font-bold text-lg text-espressoText dark:text-white mb-2">${p.name}</h3>
                    <p class="text-stone-600 dark:text-stone-400 text-xs line-clamp-2">${p.description}</p>
                </div>
                <div class="flex items-center justify-between pt-4 border-t border-stone-200 dark:border-stone-800">
                    <span class="text-2xl font-extrabold text-amber-700 dark:text-amber-500">$${p.price.toFixed(2)}</span>
                    <button onclick="addToCart(${p.id})" class="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold tracking-wider uppercase shadow transition-all flex items-center space-x-2 rtl:space-x-reverse cursor-pointer">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProducts(filter) {
    const container = document.getElementById('product-grid');
    if(!container) return;
    const filtered = filter === 'all' ? productsData : productsData.filter(p => p.category === filter);
    container.innerHTML = filtered.map(p => `
        <div class="editorial-card rounded-3xl overflow-hidden flex flex-col group">
            <img src="${p.image}" alt="${p.name}" class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] uppercase tracking-wider text-amber-700 dark:text-amber-500 font-bold">${p.category}</span>
                        <div class="flex items-center text-amber-600 text-xs font-semibold space-x-1 rtl:space-x-reverse">
                            <i class="fa-solid fa-star"></i>
                            <span>${p.rating} (${p.reviews})</span>
                        </div>
                    </div>
                    <h3 class="font-bold text-lg text-espressoText dark:text-white mb-2">${p.name}</h3>
                    <p class="text-stone-600 dark:text-stone-400 text-xs">${p.description}</p>
                </div>
                <div class="flex items-center justify-between pt-4 border-t border-stone-200 dark:border-stone-800">
                    <span class="text-2xl font-extrabold text-amber-700 dark:text-amber-500">$${p.price.toFixed(2)}</span>
                    <button onclick="addToCart(${p.id})" class="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold tracking-wider uppercase shadow transition-all flex items-center space-x-2 rtl:space-x-reverse cursor-pointer">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterProducts(category) {
    document.querySelectorAll('.product-filter-btn').forEach(btn => {
        if(btn.dataset.filter === category) {
            btn.classList.remove('bg-stone-100', 'dark:bg-stone-800', 'text-stone-600', 'dark:text-stone-300', 'border');
            btn.classList.add('bg-amber-600', 'text-white', 'shadow-md');
        } else {
            btn.classList.remove('bg-amber-600', 'text-white', 'shadow-md');
            btn.classList.add('bg-stone-100', 'dark:bg-stone-800', 'text-stone-600', 'dark:text-stone-300', 'border', 'border-stone-200', 'dark:border-stone-700');
        }
    });
    renderProducts(category);
}

function renderBlog() {
    const container = document.getElementById('blog-grid');
    if(!container) return;
    container.innerHTML = blogData.map(b => `
        <div class="editorial-card rounded-3xl overflow-hidden flex flex-col group cursor-pointer" onclick="openBlogModal(${b.id})">
            <img src="${b.image}" alt="${b.title}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                    <div class="flex items-center justify-between mb-3 text-xs text-stone-500 dark:text-stone-400">
                        <span class="text-amber-700 dark:text-amber-500 font-bold uppercase tracking-wider text-[10px]">${b.category}</span>
                        <span class="flex items-center space-x-1 rtl:space-x-reverse"><i class="fa-solid fa-clock"></i><span>${b.readTime}</span></span>
                    </div>
                    <h3 class="font-bold text-lg text-espressoText dark:text-white mb-3 group-hover:text-amber-700 transition-colors">${b.title}</h3>
                    <p class="text-stone-600 dark:text-stone-400 text-xs leading-relaxed">${b.snippet}</p>
                </div>
                <div class="flex items-center justify-between pt-4 border-t border-stone-200 dark:border-stone-800 text-xs text-stone-500 dark:text-stone-400">
                    <span>${b.date}</span>
                    <span class="text-amber-700 dark:text-amber-500 font-bold flex items-center space-x-1.5 rtl:space-x-reverse uppercase tracking-wider text-[11px]">
                        <span>Read Article</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if(!product) return;
    const existing = cart.find(i => i.id === productId);
    if(existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartUI();
    showToast("Added to Brew Cart", `${product.name} successfully added.`);
}

function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const badgeMobile = document.getElementById('cart-badge-mobile');
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');

    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    if(badge) badge.innerText = totalItems;
    if(badgeMobile) badgeMobile.innerText = totalItems;

    if(!container) return;

    if(cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-20 text-stone-400 space-y-3">
                <i class="fa-solid fa-bag-shopping text-4xl text-stone-300 dark:text-stone-700"></i>
                <p class="text-sm font-bold">Your brew cart is empty.</p>
            </div>
        `;
        if(subtotalEl) subtotalEl.innerText = "$0.00";
        if(totalEl) totalEl.innerText = "$0.00";
        return;
    }

    let subtotal = 0;
    container.innerHTML = cart.map(item => {
        subtotal += item.price * item.qty;
        return `
            <div class="flex items-center justify-between bg-stone-50 dark:bg-stone-800/80 p-4 rounded-2xl border border-stone-200 dark:border-stone-700">
                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-cover rounded-xl">
                    <div>
                        <h4 class="font-bold text-xs text-espressoText dark:text-white line-clamp-1">${item.name}</h4>
                        <span class="text-xs text-amber-700 dark:text-amber-400 font-semibold">$${item.price.toFixed(2)}</span>
                    </div>
                </div>
                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                    <div class="flex items-center space-x-2 rtl:space-x-reverse bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg px-2 py-1">
                        <button onclick="updateQty(${item.id}, -1)" class="text-stone-500 hover:text-stone-900 dark:hover:text-white px-1 cursor-pointer">-</button>
                        <span class="text-xs font-bold text-espressoText dark:text-white">${item.qty}</span>
                        <button onclick="updateQty(${item.id}, 1)" class="text-stone-500 hover:text-stone-900 dark:hover:text-white px-1 cursor-pointer">+</button>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-600 p-1 cursor-pointer">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    if(subtotalEl) subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
    if(totalEl) totalEl.innerText = `$${subtotal.toFixed(2)}`;
}

function updateQty(productId, change) {
    const item = cart.find(i => i.id === productId);
    if(item) {
        item.qty += change;
        if(item.qty <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
        updateCartUI();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartUI();
    showToast("Item Removed", "Product removed from cart.");
}

function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if(drawer) drawer.classList.remove('hidden');
}

function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if(drawer) drawer.classList.add('hidden');
}

function checkoutCart() {
    if(cart.length === 0) {
        showToast("Cart is Empty", "Add ingredients before checking out.", "error");
        return;
    }
    
    closeCartDrawer();
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    selectedPaymentMethod = 'cod'; // Default to COD

    let modal = document.getElementById('transaction-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'transaction-modal';
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-sm overflow-y-auto';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl max-w-lg w-full shadow-2xl p-6 sm:p-8 space-y-6 relative my-8">
            <button onclick="closeTransactionModal()" class="absolute top-6 ltr:right-6 rtl:left-6 p-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors cursor-pointer">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
            <div class="space-y-1">
                <span class="text-xs font-bold text-amber-600 uppercase tracking-widest">Secure Checkout</span>
                <h3 class="text-2xl font-bold text-espressoText dark:text-white">Choose Payment Method</h3>
                <p class="text-stone-500 text-xs">Total Order Amount: <span class="font-bold text-espressoText dark:text-white">$${totalAmount.toFixed(2)}</span></p>
            </div>

            <div class="space-y-4">
                <div class="space-y-2">
                    <label class="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">Select Option</label>
                    <div class="grid grid-cols-3 gap-3">
                        <button type="button" onclick="selectPaymentMethod('cod')" id="pay-method-cod" class="p-3 rounded-2xl border-2 border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-espressoText dark:text-white text-xs font-bold flex flex-col items-center space-y-1 transition-all cursor-pointer">
                            <i class="fa-solid fa-truck text-amber-600 text-base"></i>
                            <span>COD</span>
                        </button>
                        <button type="button" onclick="selectPaymentMethod('card')" id="pay-method-card" class="p-3 rounded-2xl border-2 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 text-xs font-bold flex flex-col items-center space-y-1 transition-all cursor-pointer">
                            <i class="fa-solid fa-credit-card text-base"></i>
                            <span>Card</span>
                        </button>
                        <button type="button" onclick="selectPaymentMethod('upi')" id="pay-method-upi" class="p-3 rounded-2xl border-2 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 text-xs font-bold flex flex-col items-center space-y-1 transition-all cursor-pointer">
                            <i class="fa-solid fa-mobile-screen-button text-base"></i>
                            <span>UPI</span>
                        </button>
                    </div>
                </div>

                <!-- Pre-rendered COD inputs by default with strict max widths and constraints -->
                <div id="payment-fields-container" class="space-y-3 pt-2">
                    <div class="space-y-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700">
                        <div class="flex items-center space-x-2 text-xs font-bold text-amber-700 dark:text-amber-500">
                            <i class="fa-solid fa-truck"></i>
                            <span>Delivery Address & Contact Details</span>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-1">Street Address</label>
                            <input type="text" id="input-cod-address" required placeholder="123 Brewer St, Apt 4B" class="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-xs text-espressoText dark:text-white focus:outline-none">
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label class="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-1">City</label>
                                <input type="text" id="input-cod-city" required placeholder="Coimbatore" class="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-xs text-espressoText dark:text-white focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-1">Postal Code (6 Digits)</label>
                                <input type="text" id="input-cod-zip" maxlength="6" oninput="this.value = this.value.replace(/\\D/g, '')" required placeholder="641001" class="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-xs text-espressoText dark:text-white focus:outline-none">
                            </div>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-1">Phone Number for Delivery</label>
                            <input type="tel" id="input-cod-phone" maxlength="13" oninput="this.value = this.value.replace(/[^\\d+]/g, '')" required placeholder="+919876543210" class="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-xs text-espressoText dark:text-white focus:outline-none">
                        </div>
                    </div>
                </div>
            </div>

            <div class="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
                <button onclick="closeTransactionModal()" class="px-5 py-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-bold text-xs uppercase transition-colors cursor-pointer">Cancel</button>
                <button onclick="validateAndConfirmPayment()" class="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center space-x-2 cursor-pointer">
                    <i class="fa-solid fa-check"></i>
                    <span>Confirm Order</span>
                </button>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
}

function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    ['cod', 'card', 'upi'].forEach(m => {
        const btn = document.getElementById(`pay-method-${m}`);
        if(btn) {
            if(m === method) {
                btn.className = "p-3 rounded-2xl border-2 border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-espressoText dark:text-white text-xs font-bold flex flex-col items-center space-y-1 transition-all cursor-pointer";
            } else {
                btn.className = "p-3 rounded-2xl border-2 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 text-xs font-bold flex flex-col items-center space-y-1 transition-all cursor-pointer";
            }
        }
    });

    const fieldsContainer = document.getElementById('payment-fields-container');
    if(fieldsContainer) {
        if(method === 'cod') {
            fieldsContainer.innerHTML = `
                <div class="space-y-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700">
                    <div class="flex items-center space-x-2 text-xs font-bold text-amber-700 dark:text-amber-500">
                        <i class="fa-solid fa-truck"></i>
                        <span>Delivery Address & Contact Details</span>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-1">Street Address</label>
                        <input type="text" id="input-cod-address" required placeholder="123 Brewer St, Apt 4B" class="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-xs text-espressoText dark:text-white focus:outline-none">
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-1">City</label>
                            <input type="text" id="input-cod-city" required placeholder="Coimbatore" class="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-xs text-espressoText dark:text-white focus:outline-none">
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-1">Postal Code (6 Digits)</label>
                            <input type="text" id="input-cod-zip" maxlength="6" oninput="this.value = this.value.replace(/\\D/g, '')" required placeholder="641001" class="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-xs text-espressoText dark:text-white focus:outline-none">
                        </div>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-1">Phone Number for Delivery</label>
                        <input type="tel" id="input-cod-phone" maxlength="13" oninput="this.value = this.value.replace(/[^\\d+]/g, '')" required placeholder="+919876543210" class="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-xs text-espressoText dark:text-white focus:outline-none">
                    </div>
                </div>
            `;
        } else if(method === 'card') {
            fieldsContainer.innerHTML = `
                <div>
                    <label class="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-1">Card Number (Max 16 Digits)</label>
                    <input type="text" id="input-card-num" maxlength="16" oninput="this.value = this.value.replace(/\\D/g, '')" placeholder="4242424242424242" class="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-xs text-espressoText dark:text-white focus:outline-none">
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-1">Expiry Date (MMYY)</label>
                        <input type="text" id="input-card-exp" maxlength="4" oninput="this.value = this.value.replace(/\\D/g, '')" placeholder="1228" class="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-xs text-espressoText dark:text-white focus:outline-none">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-1">CVV (3 Digits)</label>
                        <input type="password" id="input-card-cvv" maxlength="3" oninput="this.value = this.value.replace(/\\D/g, '')" placeholder="123" class="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-xs text-espressoText dark:text-white focus:outline-none">
                    </div>
                </div>
            `;
        } else if(method === 'upi') {
            fieldsContainer.innerHTML = `
                <div>
                    <label class="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-1">Enter UPI ID / VPA</label>
                    <input type="text" id="input-upi-id" placeholder="username@ybl" class="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-xs text-espressoText dark:text-white focus:outline-none">
                </div>
                <p class="text-[10px] text-stone-500">A payment collect request will be sent to your UPI app.</p>
            `;
        }
    }
}

function validateAndConfirmPayment() {
    if (selectedPaymentMethod === 'cod') {
        const address = document.getElementById('input-cod-address')?.value.trim();
        const city = document.getElementById('input-cod-city')?.value.trim();
        const zip = document.getElementById('input-cod-zip')?.value.trim();
        const phone = document.getElementById('input-cod-phone')?.value.trim();

        if (!address) {
            showToast("Missing Street Address", "Please enter your street address.", "error");
            return;
        }
        if (!city) {
            showToast("Missing City", "Please enter your city.", "error");
            return;
        }
        if (!zip || zip.length !== 6) {
            showToast("Invalid Postal Code", "Postal code must be exactly 6 digits.", "error");
            return;
        }
        if (!phone || phone.length < 10) {
            showToast("Invalid Phone Number", "Please enter a valid phone number (at least 10 digits).", "error");
            return;
        }
    } else if (selectedPaymentMethod === 'card') {
        const cardNum = document.getElementById('input-card-num')?.value.trim();
        const cardExp = document.getElementById('input-card-exp')?.value.trim();
        const cardCvv = document.getElementById('input-card-cvv')?.value.trim();

        if (!cardNum || cardNum.length < 13 || cardNum.length > 16) {
            showToast("Invalid Card Number", "Card number must be between 13 and 16 digits.", "error");
            return;
        }
        if (!cardExp || cardExp.length !== 4) {
            showToast("Invalid Expiry Date", "Expiry date must be exactly 4 digits (MMYY).", "error");
            return;
        }
        if (!cardCvv || cardCvv.length !== 3) {
            showToast("Invalid CVV", "CVV must be exactly 3 numbers.", "error");
            return;
        }
    } else if (selectedPaymentMethod === 'upi') {
        const upiId = document.getElementById('input-upi-id')?.value.trim();

        if (!upiId || !upiId.includes('@') || upiId.split('@')[1].length === 0) {
            showToast("Invalid UPI ID", "Please enter a valid UPI ID (e.g., username@ybl).", "error");
            return;
        }
    }

    showToast("Processing Order...", "Verifying transaction details...");
    setTimeout(() => {
        cart = [];
        updateCartUI();
        closeTransactionModal();
        showToast("Payment Success!", "Your order has been placed successfully via Cash on Delivery!");
    }, 1800);
}

function closeTransactionModal() {
    const modal = document.getElementById('transaction-modal');
    if (modal) modal.remove();
}

function handleContactSubmit(event) {
    event.preventDefault();
    const nameEl = document.getElementById('contact-name');
    const name = nameEl ? nameEl.value : 'Brewer';
    showToast("Enquiry Sent Successfully!", `Thanks ${name}. Our brewmasters will reply within 24 hours.`);
    event.target.reset();
}

function handleNewsletter(event) {
    event.preventDefault();
    showToast("Subscribed!", "You have joined The Alchemist's Gazette.");
    event.target.reset();
}

function showToast(title, desc, type = 'success') {
    const toast = document.getElementById('toast');
    const titleEl = document.getElementById('toast-title');
    const descEl = document.getElementById('toast-desc');

    if(!toast || !titleEl || !descEl) return;

    titleEl.innerText = title;
    descEl.innerText = desc;

    if(type === 'error') {
        toast.className = "fixed bottom-8 ltr:right-8 rtl:left-8 z-50 transform transition-all duration-300 bg-red-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 rtl:space-x-reverse border border-red-400";
    } else {
        toast.className = "fixed bottom-8 ltr:right-8 rtl:left-8 z-50 transform transition-all duration-300 bg-espressoText dark:bg-stone-800 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 rtl:space-x-reverse border border-amber-500/30";
    }

    toast.classList.remove('translate-y-32', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-32', 'opacity-0');
    }, 3500);
}

function toggleFaq(btn) {
    const card = btn.closest('.editorial-card');
    const content = card.querySelector('div[id^="faq-content"]');
    const icon = btn.querySelector('.fa-chevron-down');
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
    } else {
        content.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
    }
}

function openBlogModal(blogId) {
    const blog = blogData.find(b => b.id === blogId);
    if (!blog) return;

    let modal = document.getElementById('blog-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'blog-modal';
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm';
        document.body.appendChild(modal);
    }

    const paragraphsHtml = blog.content.map(p => `<p>${p}</p>`).join('');

    modal.innerHTML = `
        <div class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-10 space-y-6 relative">
            <button onclick="closeBlogModal()" class="absolute top-6 ltr:right-6 rtl:left-6 p-2.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors cursor-pointer">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
            <div class="space-y-2">
                <div class="flex items-center space-x-2 text-xs font-bold text-amber-700 dark:text-amber-500 uppercase">
                    <span>${blog.category}</span>
                    <span>&bull;</span>
                    <span>${blog.date}</span>
                </div>
                <h2 class="text-2xl sm:text-4xl font-bold text-espressoText dark:text-white">${blog.title}</h2>
            </div>
            <div class="rounded-2xl overflow-hidden h-72 w-full">
                <img src="${blog.image}" alt="${blog.title}" class="w-full h-full object-cover">
            </div>
            <div class="text-stone-700 dark:text-stone-300 text-sm leading-relaxed space-y-4">
                ${paragraphsHtml}
            </div>
            <div class="pt-6 border-t border-stone-200 dark:border-stone-800 flex justify-end">
                <button onclick="closeBlogModal()" class="px-8 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer">Close Guide</button>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
}

function closeBlogModal() {
    const modal = document.getElementById('blog-modal');
    if (modal) modal.remove();
}

function openPricingConfirmation(planName, price, type) {
    let modal = document.getElementById('pricing-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'pricing-modal';
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-sm';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl max-w-md w-full shadow-2xl p-6 sm:p-8 space-y-6 relative">
            <button onclick="closePricingModal()" class="absolute top-6 ltr:right-6 rtl:left-6 p-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors cursor-pointer">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
            <div class="space-y-1">
                <span class="text-xs font-bold text-amber-600 uppercase tracking-widest">Confirm Selection</span>
                <h3 class="text-2xl font-bold text-espressoText dark:text-white">${planName}</h3>
                <p class="text-stone-500 text-xs">Price: <span class="font-bold text-espressoText dark:text-white">$${price.toFixed(2)} ${type === 'subscription' ? '/ month' : 'one-time'}</span></p>
            </div>

            <form onsubmit="handlePlanConfirmation(event, '${planName}', ${price}, '${type}')" class="space-y-4">
                <div>
                    <label class="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-1">Your Full Name</label>
                    <input type="text" id="confirm-name" required placeholder="Master Brewer" class="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-xs text-espressoText dark:text-white focus:outline-none">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-1">Brewery / Email Address</label>
                    <input type="email" id="confirm-email" required placeholder="brewer@crafttap.com" class="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-xs text-espressoText dark:text-white focus:outline-none">
                </div>

                <div class="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
                    <button type="button" onclick="closePricingModal()" class="px-5 py-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-bold text-xs uppercase transition-colors cursor-pointer">Cancel</button>
                    <button type="submit" class="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center space-x-2 cursor-pointer">
                        <i class="fa-solid fa-check"></i>
                        <span>Confirm Plan</span>
                    </button>
                </div>
            </form>
        </div>
    `;
    modal.classList.remove('hidden');
}

function handlePlanConfirmation(event, planName, price, type) {
    event.preventDefault();
    const name = document.getElementById('confirm-name').value;
    
    closePricingModal();
    showToast("Pack Confirmed!", `Thank you ${name}! Your request for ${planName} has been registered.`);
    
    if (type === 'subscription') {
        setTimeout(() => switchTab('saas'), 1200);
    } else {
        setTimeout(() => switchTab('products'), 1200);
    }
}

function closePricingModal() {
    const modal = document.getElementById('pricing-modal');
    if (modal) modal.remove();
}

function downloadDummyRecipePDF() {
    const pdfContent = `
THE ALCHEMIST'S TAP - OFFICIAL BREW DAY LOG SHEET
=================================================
Recipe Name: Pacific Northwest Double IPA Clone
Target Original Gravity (OG): 1.082
Target Final Gravity (FG): 1.015
Target ABV: 8.2%
IBU: 65 | SRM: 6

BREW DAY CHECKLIST:
[ ] Water Volume Prepared: 7.5 Gallons RO Water
[ ] Mineral Adjustments: 5g Gypsum, 4g Calcium Chloride
[ ] Mash Rest Temperature: 152°F for 60 minutes
[ ] Boil Time: 60 Minutes
[ ] Hop Additions: 
    - 60 min: 1 oz Cascade
    - 15 min: 2 oz Citra & Mosaic
    - Whirlpool (180°F): 3 oz Cryo Citra
[ ] Pitch Temperature: 66°F (WLP001 California Ale Yeast)

NOTES:
-----------------------------------------------------------------
-----------------------------------------------------------------
    `;

    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Alchemists_Tap_Brew_Day_Log.pdf';
    document.body.appendChild(a);
    a.click();
    
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    showToast('Downloaded Successfully', 'Your dummy brew day recipe PDF log has been saved.');
}