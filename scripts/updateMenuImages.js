// Script to update menuData.json with real Unsplash image URLs

const fs = require('fs');
const path = require('path');

// Load menuData
const menuDataPath = path.join(__dirname, '../data/menuData.json');
const menuData = JSON.parse(fs.readFileSync(menuDataPath, 'utf8'));

// Image URL mapping (same as lib/menuImages.ts)
const imageMap = {
    'chi-tikka-001': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80',
    'chi-afgha-002': 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80',
    'chi-malai-003': 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&q=80',
    'chi-hariyal-004': 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80',
    'chi-turkish-005': 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80',
    'chi-arabian-006': 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80',
    'chi-sheesh-007': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    'chi-chopan-008': 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80',
    'chi-bbq-009': 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&q=80',
    'chi-tangdi-010': 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80',
    'chi-wings-011': 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&q=80',
    'mut-boti-012': 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80',
    'mut-sheekh-013': 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80',
    'mut-afghani-014': 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80',
    'mut-chops-015': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    'mut-shami-016': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
    'mut-shikam-017': 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80',
    'mut-roast-018': 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80',
    'mut-raan-019': 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=800&q=80',
    'mut-kareli-020': 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80',
    'mut-talawa-021': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80',
    'mut-talawa-boneless-022': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80',
    'fish-tikka-023': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80',
    'prawns-bbq-024': 'https://images.unsplash.com/photo-1559737558-2f5c6f7cee2d?w=800&q=80',
    'chilli-prawns-025': 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800&q=80',
    'apollo-fish-026': 'https://images.unsplash.com/photo-1580959705009-e79699d68a2e?w=800&q=80',
    'loose-prawns-027': 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800&q=80',
    'paneer-tikka-028': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
    'hariyali-paneer-029': 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80',
    'afghani-paneer-030': 'https://images.unsplash.com/photo-1645177628172-a94c30a5f136?w=800&q=80',
    'paneer-cheese-031': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80',
    'soya-chaap-032': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
    'soya-afghani-033': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
    'chi65-034': 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=80',
    'chilli-chi-035': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80',
    'garlic-chi-036': 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80',
    'chi-manch-037': 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80',
    'fried-chi-038': 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80',
    'chilli-paneer-039': 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80',
    'paneer65-040': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
    'cheesy-broccoli-041': 'https://images.unsplash.com/photo-1628773822990-202d3b52f4c7?w=800&q=80',
    'kadai-chi-042': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80',
    'dum-chi-043': 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80',
    'butter-chi-044': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80',
    'hariyali-chi-curry-045': 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80',
    'afghani-chi-curry-046': 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80',
    'rani-chi-047': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80',
    'lemon-chi-048': 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&q=80',
    'achari-chi-049': 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80',
    'kadai-mut-050': 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80',
    'kali-mirch-051': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80',
    'hari-mirch-052': 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80',
    'mutton-hariyali-053': 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80',
    'dum-gosht-054': 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80',
    'mutton-khorma-055': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80',
    'afghani-mutton-curry-056': 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80',
    'khatti-dal-057': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80',
    'paneer-mattar-058': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80',
    'paneer-butter-059': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80',
    'aloo-mattar-060': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
    'paneer-tikka-masala-061': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
    'shahi-paneer-062': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80',
    'zeera-rice-063': 'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?w=800&q=80',
    'kabuli-plain-064': 'https://images.unsplash.com/photo-1645177628172-a94c30a5f136?w=800&q=80',
    'kabuli-chicken-065': 'https://images.unsplash.com/photo-1645177628172-a94c30a5f136?w=800&q=80',
    'kabuli-mutton-066': 'https://images.unsplash.com/photo-1645177628172-a94c30a5f136?w=800&q=80',
    'chicken-pulao-067': 'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?w=800&q=80',
    'pilaf-rice-068': 'https://images.unsplash.com/photo-1645177628172-a94c30a5f136?w=800&q=80',
    'mutton-kheema-pulao-069': 'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?w=800&q=80',
    'chicken-fried-rice-070': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80',
    'veg-fried-rice-071': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80',
    'egg-fried-rice-072': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80',
    'white-rice-073': 'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?w=800&q=80',
    'mutton-biryani-074': 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
    'chicken-biryani-075': 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
    'chicken-faham-076': 'https://images.unsplash.com/photo-1645177628172-a94c30a5f136?w=800&q=80',
    'chicken-faham-mandi-077': 'https://images.unsplash.com/photo-1645177628172-a94c30a5f136?w=800&q=80',
    'chicken-mandi-078': 'https://images.unsplash.com/photo-1645177628172-a94c30a5f136?w=800&q=80',
    'juicy-mutton-mandi-079': 'https://images.unsplash.com/photo-1645177628172-a94c30a5f136?w=800&q=80',
    'mutton-fry-mandi-080': 'https://images.unsplash.com/photo-1645177628172-a94c30a5f136?w=800&q=80',
    'fish-mandi-081': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80',
    'mix-mandi-082': 'https://images.unsplash.com/photo-1645177628172-a94c30a5f136?w=800&q=80',
    'crispy-burger-083': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    'grilled-burger-084': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    'cheese-grilled-burger-085': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    'double-patty-burger-086': 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80',
    'grilled-sandwich-087': 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80',
    'cheese-sandwich-088': 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80',
    'veg-sandwich-089': 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80',
    'paneer-sandwich-090': 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80',
    'crispy-wrap-091': 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80',
    'tandoori-wrap-092': 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80',
    'special-wrap-093': 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80',
    'nuggets-wrap-094': 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80',
    'bbq-wrap-095': 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80',
    'chipotle-wrap-096': 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80',
    'paneer-wrap-097': 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80',
    'salted-fries-098': 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800&q=80',
    'peri-fries-099': 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800&q=80',
    'loaded-fries-100': 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&q=80',
    'nuggets-101': 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80',
    'peri-nuggets-102': 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80',
    'broast-2pc-103': 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80',
    'broast-4pc-104': 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80',
    'broast-8pc-105': 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80',
    'qubani-106': 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80',
    'shahi-tukda-107': 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80',
    'fruit-salad-108': 'https://images.unsplash.com/photo-1564093497595-593b96d80180?w=800&q=80',
    'kaddu-kheer-109': 'https://images.unsplash.com/photo-1606490248447-6f2f21e61acd?w=800&q=80',
    'gulab-jamun-110': 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80',
    'dil-e-firdaus-111': 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80',
};

// Update each item's image field
let updatedCount = 0;
menuData.items.forEach(item => {
    if (imageMap[item.id]) {
        item.image = imageMap[item.id];
        updatedCount++;
    } else {
        console.warn(`No image mapping found for item: ${item.id} - ${item.name}`);
    }
});

// Save updated menuData
fs.writeFileSync(menuDataPath, JSON.stringify(menuData, null, 2), 'utf8');
console.log(`✅ Successfully updated ${updatedCount} menu items with real food images!`);
