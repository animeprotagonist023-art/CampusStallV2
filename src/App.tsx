import { createElement, useState, type ReactNode } from "react";

type Screen =
  | "home"
  | "search"
  | "stall"
  | "food"
  | "cart"
  | "fulfillment"
  | "checkout"
  | "payment"
  | "confirmed"
  | "tracking";

type StallId = "ama" | "savanna";

type IconName =
  | "home"
  | "search"
  | "receipt"
  | "user"
  | "map"
  | "clock"
  | "star"
  | "arrow"
  | "back"
  | "cart"
  | "plus"
  | "minus"
  | "chevron"
  | "bike"
  | "store"
  | "card"
  | "cash"
  | "check"
  | "close"
  | "filter"
  | "heart";

const images = {
  jollof:
    "https://images.unsplash.com/photo-1665332195309-9d75071138f0?auto=format&fit=crop&w=1200&q=88",
  chicken:
    "https://images.unsplash.com/photo-1603496987674-79600a000f55?auto=format&fit=crop&w=1000&q=88",
  bowl: "https://images.unsplash.com/photo-1574803636191-b2bbb307e9c6?auto=format&fit=crop&w=1000&q=88",
  plantain:
    "https://images.unsplash.com/photo-1576867917480-152bca50166e?auto=format&fit=crop&w=1000&q=88",
  drink:
    "https://images.unsplash.com/photo-1506802913710-40e2e66339c9?auto=format&fit=crop&w=800&q=88",
};

const stalls = {
  ama: {
    name: "Ama's Kitchen",
    initials: "AK",
    cuisine: "Ghanaian",
    time: "20–30 min",
    pickupTime: "20–25 min",
    hero: images.jollof,
    description: "Generous Ghanaian comfort food, cooked fresh at the Night Market.",
    item: {
      title: "Smoky jollof & chicken",
      description: "Fire-grilled chicken served over smoky party jollof with crunchy citrus slaw.",
      shortDescription: "Charred chicken, party jollof and fresh slaw",
      image: images.chicken,
      price: 42,
    },
  },
  savanna: {
    name: "Savanna Bowl",
    initials: "SB",
    cuisine: "African fusion",
    time: "25–35 min",
    pickupTime: "25–30 min",
    hero: images.bowl,
    description: "Colorful, produce-led bowls layered with familiar West African flavors.",
    item: {
      title: "Golden plantain bowl",
      description: "Caramelized plantain, black-eyed beans, avocado, greens and house shito.",
      shortDescription: "Plantain, beans, avocado and house shito",
      image: images.plantain,
      price: 36,
    },
  },
} as const;

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9" /><path d="M9 20v-6h6v6" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    receipt: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2Z" /><path d="M9 8h6M9 12h6" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    map: <><path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z" /><circle cx="12" cy="9" r="2" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9Z" />,
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    back: <><path d="M19 12H5" /><path d="m10 17-5-5 5-5" /></>,
    cart: <><path d="M4 5h2l2 10h9l2-7H7" /><circle cx="10" cy="19" r="1" /><circle cx="17" cy="19" r="1" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    minus: <path d="M5 12h14" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    bike: <><circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><path d="m6 17 4-8h4l4 8M9 12h6M11 6h3" /></>,
    store: <><path d="M4 10v10h16V10" /><path d="M3 4h18l-2 6H5Z" /><path d="M9 20v-6h6v6" /></>,
    card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></>,
    cash: <><rect x="3" y="6" width="18" height="12" rx="2" /><circle cx="12" cy="12" r="3" /><path d="M7 9h.01M17 15h.01" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    filter: <path d="M4 6h16M7 12h10M10 18h4" />,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />,
  };
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "icon";
  className?: string;
  disabled?: boolean;
}) {
  return createElement(
    "button",
    {
      type: "button",
      disabled,
      onClick,
      className: `btn btn-${variant} ${className}`,
    },
    children,
  );
}

function Input({
  label,
  placeholder,
  autoFocus,
  value,
  readOnly,
}: {
  label: string;
  placeholder?: string;
  autoFocus?: boolean;
  value?: string;
  readOnly?: boolean;
}) {
  return createElement("input", {
    "aria-label": label,
    placeholder,
    autoFocus,
    value,
    readOnly,
  });
}

function TopBar({
  title,
  onBack,
  right,
}: {
  title: string;
  onBack?: () => void;
  right?: ReactNode;
}) {
  return (
    <div className="top-bar">
      <div className="top-side">
        {onBack && <Button variant="icon" onClick={onBack}><Icon name="back" /></Button>}
      </div>
      <div className="top-title">{title}</div>
      <div className="top-side justify-end">{right}</div>
    </div>
  );
}

function BottomNav({ active, go }: { active: Screen; go: (screen: Screen) => void }) {
  const items: { icon: IconName; label: string; screen: Screen }[] = [
    { icon: "home", label: "Home", screen: "home" },
    { icon: "search", label: "Search", screen: "search" },
    { icon: "receipt", label: "Orders", screen: "tracking" },
  ];
  return (
    <div className="bottom-nav">
      {items.map((item) => (
        <Button
          key={item.label}
          variant="ghost"
          className={`nav-item ${active === item.screen ? "active" : ""}`}
          onClick={() => go(item.screen)}
        >
          <Icon name={item.icon} size={22} />
          <span>{item.label}</span>
        </Button>
      ))}
    </div>
  );
}

function Chip({ children, active = false, onClick }: { children: ReactNode; active?: boolean; onClick?: () => void }) {
  return <Button variant="secondary" className={`chip ${active ? "selected" : ""}`} onClick={onClick}>{children}</Button>;
}

function StallCard({
  name,
  image,
  cuisine,
  time,
  onClick,
}: {
  name: string;
  image: string;
  cuisine: string;
  time: string;
  onClick: () => void;
}) {
  return (
    <Button variant="ghost" className="stall-card" onClick={onClick}>
      <div className="stall-image-wrap">
        <img className="stall-image" src={image} alt={`${name} food`} />
        <span className="rating"><Icon name="star" size={13} /> 4.8</span>
      </div>
      <div className="stall-copy">
        <div className="item-title">{name}</div>
        <div className="meta">{cuisine} · GHS 4 delivery</div>
        <div className="time"><Icon name="clock" size={14} /> {time}</div>
      </div>
    </Button>
  );
}

function FoodRow({
  image,
  title,
  description,
  price,
  onClick,
}: {
  image: string;
  title: string;
  description: string;
  price: string;
  onClick: () => void;
}) {
  return (
    <Button variant="ghost" className="food-row" onClick={onClick}>
      <div className="food-copy">
        <div className="item-title">{title}</div>
        <div className="food-description">{description}</div>
        <div className="food-price">{price}</div>
      </div>
      <img className="food-thumb" src={image} alt={title} />
    </Button>
  );
}

function Home({
  go,
  openStall,
  openFood,
}: {
  go: (screen: Screen) => void;
  openStall: (stall: StallId) => void;
  openFood: (stall: StallId) => void;
}) {
  return (
    <>
      <main className="screen has-nav">
        <div className="home-header">
          <div>
            <div className="eyebrow">DELIVERING TO</div>
            <Button variant="ghost" className="location-button">
              Akuafo Hall <span className="location-dot" /> <Icon name="chevron" size={15} />
            </Button>
          </div>
          <div className="avatar">AM</div>
        </div>

        <div className="hero">
          <div className="hero-kicker">LUNCH, SORTED</div>
          <div className="display">Good food,<br />right on campus.</div>
          <div className="hero-copy">Order from trusted campus kitchens and skip the queue.</div>
          <Button variant="secondary" className="hero-search" onClick={() => go("search")}>
            <Icon name="search" size={19} /><span>What are you craving?</span>
          </Button>
        </div>

        <section className="section">
          <div className="section-head">
            <div>
              <div className="section-title">Popular near you</div>
              <div className="section-subtitle">Campus favorites, ready soon</div>
            </div>
            <Button variant="ghost" className="text-link" onClick={() => go("search")}>See all</Button>
          </div>
          <div className="horizontal-list">
            <StallCard name="Ama's Kitchen" image={images.jollof} cuisine="Ghanaian" time="20–30 min" onClick={() => openStall("ama")} />
            <StallCard name="Savanna Bowl" image={images.bowl} cuisine="African fusion" time="25–35 min" onClick={() => openStall("savanna")} />
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <div className="section-title">Quick picks</div>
              <div className="section-subtitle">Big flavor, under 30 minutes</div>
            </div>
          </div>
          <FoodRow image={images.chicken} title="Smoky jollof & chicken" description="Charred chicken, jollof, slaw" price="GHS 42" onClick={() => openFood("ama")} />
          <FoodRow image={images.plantain} title="Golden plantain bowl" description="Plantain, beans, avocado, shito" price="GHS 36" onClick={() => openFood("savanna")} />
        </section>
      </main>
      <BottomNav active="home" go={go} />
    </>
  );
}

function Search({
  go,
  openStall,
  openFood,
}: {
  go: (screen: Screen) => void;
  openStall: (stall: StallId) => void;
  openFood: (stall: StallId) => void;
}) {
  const [category, setCategory] = useState("All");
  return (
    <>
      <main className="screen has-nav">
        <TopBar title="Search" />
        <div className="search-box">
          <Icon name="search" />
          <Input label="Search dishes or stalls" placeholder="Search dishes or stalls" />
          <Icon name="filter" size={19} />
        </div>
        <div className="chips">
          {["All", "Rice", "Local", "Healthy", "Drinks"].map((item) => (
            <Chip key={item} active={category === item} onClick={() => setCategory(item)}>{item}</Chip>
          ))}
        </div>
        <section className="section search-results">
          <div className="section-title">Top results</div>
          <div className="search-stall">
            <img src={images.jollof} alt="Ama's Kitchen dishes" />
            <div className="flex-1">
              <div className="eyebrow green">OPEN · 20–30 MIN</div>
              <div className="item-title">Ama's Kitchen</div>
              <div className="meta">Ghanaian · 4.8 (240+)</div>
            </div>
            <Button variant="icon" onClick={() => openStall("ama")}><Icon name="chevron" /></Button>
          </div>
          <div className="result-label">DISHES</div>
          <FoodRow image={images.chicken} title="Smoky jollof & chicken" description="Ama's Kitchen · Bestseller" price="GHS 42" onClick={() => openFood("ama")} />
          <FoodRow image={images.plantain} title="Golden plantain bowl" description="Savanna Bowl · Vegetarian" price="GHS 36" onClick={() => openFood("savanna")} />
          <div className="rule-note"><Icon name="store" size={18} /><span>One stall per order keeps delivery fast and reliable.</span></div>
        </section>
      </main>
      <BottomNav active="search" go={go} />
    </>
  );
}

function Stall({ go, stallId }: { go: (screen: Screen) => void; stallId: StallId }) {
  const stall = stalls[stallId];
  return (
    <main className="screen">
      <div className="stall-hero">
        <img src={stall.hero} alt={`Food from ${stall.name}`} />
        <div className="overlay-actions">
          <Button variant="icon" onClick={() => go("home")}><Icon name="back" /></Button>
          <Button variant="icon"><Icon name="heart" /></Button>
        </div>
      </div>
      <div className="stall-details">
        <div className="eyebrow green">OPEN NOW</div>
        <div className="page-title">{stall.name}</div>
        <div className="meta-row">
          <span><Icon name="star" size={15} /> 4.8 (240+)</span>
          <span><Icon name="clock" size={15} /> {stall.time}</span>
          <span>GHS 4 delivery</span>
        </div>
        <div className="stall-description">{stall.description}</div>
      </div>
      <div className="menu-tabs"><span className="active">Popular</span><span>Main dishes</span><span>Drinks</span></div>
      <section className="menu-section">
        <div className="section-title">Most ordered</div>
        <FoodRow image={stall.item.image} title={stall.item.title} description={stall.item.shortDescription} price={`GHS ${stall.item.price}`} onClick={() => go("food")} />
        <FoodRow image={images.bowl} title="Waakye complete" description="Rice and beans, beef, egg, gari and shito" price="GHS 38" onClick={() => go("food")} />
        <FoodRow image={images.drink} title="Bissap cooler" description="Hibiscus, pineapple and ginger" price="GHS 12" onClick={() => go("food")} />
      </section>
    </main>
  );
}

function Food({ go, stallId, addToCart }: { go: (screen: Screen) => void; stallId: StallId; addToCart: (quantity: number) => void }) {
  const [quantity, setQuantity] = useState(1);
  const [spice, setSpice] = useState("Medium");
  const stall = stalls[stallId];
  return (
    <main className="screen with-sticky-action">
      <div className="food-hero">
        <img src={stall.item.image} alt={stall.item.title} />
        <div className="overlay-actions">
          <Button variant="icon" onClick={() => go("stall")}><Icon name="back" /></Button>
          <Button variant="icon"><Icon name="heart" /></Button>
        </div>
      </div>
      <div className="food-detail">
        <div className="eyebrow">{stall.name.toUpperCase()}</div>
        <div className="page-title">{stall.item.title}</div>
        <div className="food-lede">{stall.item.description}</div>
        <div className="price-large">GHS {stall.item.price}</div>
      </div>
      <div className="option-block">
        <div className="option-head"><div><div className="section-title">Choose your spice</div><div className="section-subtitle">Select one</div></div><span className="required">Required</span></div>
        {["Mild", "Medium", "Hot"].map((level) => (
          <Button key={level} variant="ghost" className="radio-row" onClick={() => setSpice(level)}>
            <span>{level}</span><span className={`radio ${spice === level ? "active" : ""}`} />
          </Button>
        ))}
      </div>
      <div className="sticky-action">
        <div className="stepper">
          <Button variant="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Icon name="minus" size={18} /></Button>
          <span>{quantity}</span>
          <Button variant="icon" onClick={() => setQuantity(quantity + 1)}><Icon name="plus" size={18} /></Button>
        </div>
        <Button className="flex-1" onClick={() => { addToCart(quantity); go("cart"); }}>Add to cart · GHS {stall.item.price * quantity}</Button>
      </div>
    </main>
  );
}

function Cart({ go, stallId, quantity, setQuantity }: { go: (screen: Screen) => void; stallId: StallId; quantity: number; setQuantity: (value: number) => void }) {
  const stall = stalls[stallId];
  const subtotal = stall.item.price * quantity;
  return (
    <main className="screen with-sticky-action">
      <TopBar title="Your cart" onBack={() => go("stall")} />
      <div className="cart-stall">
        <div className="stall-mark">{stall.initials}</div>
        <div><div className="item-title">{stall.name}</div><div className="meta">One stall per order</div></div>
        <Button variant="ghost" className="text-link" onClick={() => go("search")}>Change</Button>
      </div>
      <section className="cart-items">
        <img src={stall.item.image} alt={stall.item.title} />
        <div className="flex-1">
          <div className="item-title">{stall.item.title}</div>
          <div className="meta">Medium spice</div>
          <div className="food-price">GHS {subtotal}</div>
        </div>
        <div className="mini-stepper">
          <Button variant="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Icon name="minus" size={15} /></Button>
          <span>{quantity}</span>
          <Button variant="icon" onClick={() => setQuantity(quantity + 1)}><Icon name="plus" size={15} /></Button>
        </div>
      </section>
      <Button variant="secondary" className="add-more" onClick={() => go("stall")}><Icon name="plus" size={18} /> Add another item</Button>
      <section className="summary-card">
        <div><span>Subtotal</span><strong>GHS {subtotal}</strong></div>
        <div><span>Service fee</span><strong>GHS 2</strong></div>
        <div className="summary-total"><span>Total before delivery</span><strong>GHS {subtotal + 2}</strong></div>
      </section>
      <div className="sticky-action single">
        <Button className="flex-1" onClick={() => go("fulfillment")}>Choose fulfillment <Icon name="arrow" /></Button>
      </div>
    </main>
  );
}

function Fulfillment({ go, stallId, method, setMethod }: { go: (screen: Screen) => void; stallId: StallId; method: "pickup" | "delivery"; setMethod: (value: "pickup" | "delivery") => void }) {
  const stall = stalls[stallId];
  return (
    <main className="screen with-sticky-action">
      <TopBar title="Fulfillment" onBack={() => go("cart")} />
      <div className="intro">
        <div className="page-title">How should we get it to you?</div>
        <div className="food-lede">Both options are available from {stall.name}.</div>
      </div>
      <div className="choice-list">
        <Button variant="ghost" className={`choice-card ${method === "pickup" ? "selected" : ""}`} onClick={() => setMethod("pickup")}>
          <span className="choice-icon"><Icon name="store" /></span>
          <span className="choice-copy"><strong>I'll pick it up</strong><small>Night Market · Ready in {stall.pickupTime}</small><em>Free</em></span>
          <span className={`radio ${method === "pickup" ? "active" : ""}`} />
        </Button>
        <Button variant="ghost" className={`choice-card ${method === "delivery" ? "selected" : ""}`} onClick={() => setMethod("delivery")}>
          <span className="choice-icon"><Icon name="bike" /></span>
          <span className="choice-copy"><strong>Campus delivery</strong><small>To Akuafo Hall · 25–35 min</small><em>GHS 4</em></span>
          <span className={`radio ${method === "delivery" ? "active" : ""}`} />
        </Button>
      </div>
      {method === "delivery" && (
        <div className="delivery-card">
          <div className="eyebrow">DELIVERY LOCATION</div>
          <div className="delivery-line"><span className="map-pin"><Icon name="map" /></span><div><strong>Akuafo Hall</strong><small>Main entrance · University of Ghana</small></div><Button variant="ghost" className="text-link">Edit</Button></div>
        </div>
      )}
      <div className="sticky-action single">
        <Button className="flex-1" onClick={() => go("checkout")}>Continue to checkout <Icon name="arrow" /></Button>
      </div>
    </main>
  );
}

function Checkout({ go, stallId, method, quantity }: { go: (screen: Screen) => void; stallId: StallId; method: "pickup" | "delivery"; quantity: number }) {
  const stall = stalls[stallId];
  const delivery = method === "delivery" ? 4 : 0;
  const subtotal = stall.item.price * quantity;
  const total = subtotal + 2 + delivery;
  return (
    <main className="screen with-sticky-action">
      <TopBar title="Checkout" onBack={() => go("fulfillment")} />
      <div className="checkout-section">
        <div className="checkout-label">FULFILLMENT</div>
        <div className="checkout-row">
          <span className="choice-icon"><Icon name={method === "delivery" ? "bike" : "store"} /></span>
          <div className="flex-1"><div className="item-title">{method === "delivery" ? "Campus delivery" : "Pickup"}</div><div className="meta">{method === "delivery" ? "Akuafo Hall · 25–35 min" : `Night Market · ${stall.pickupTime}`}</div></div>
          <Button variant="ghost" className="text-link" onClick={() => go("fulfillment")}>Change</Button>
        </div>
      </div>
      <div className="checkout-section">
        <div className="checkout-label">YOUR ORDER</div>
        <div className="order-mini">
          <span>{quantity}×</span><div className="flex-1"><div className="item-title">{stall.item.title}</div><div className="meta">Medium spice · {stall.name}</div></div><strong>GHS {subtotal}</strong>
        </div>
      </div>
      <div className="checkout-section">
        <div className="checkout-label">CONTACT</div>
        <div className="checkout-row simple"><div><div className="item-title">Ama Mensah</div><div className="meta">024 555 0198</div></div><Button variant="ghost" className="text-link">Edit</Button></div>
      </div>
      <section className="summary-card borderless">
        <div><span>Subtotal</span><strong>GHS {subtotal}</strong></div>
        <div><span>Service fee</span><strong>GHS 2</strong></div>
        <div><span>Delivery</span><strong>{delivery ? `GHS ${delivery}` : "Free"}</strong></div>
        <div className="summary-total"><span>Total</span><strong>GHS {total}</strong></div>
      </section>
      <div className="sticky-action single">
        <Button className="flex-1" onClick={() => go("payment")}>Choose payment · GHS {total}</Button>
      </div>
    </main>
  );
}

function Payment({ go, payment, setPayment, total }: { go: (screen: Screen) => void; payment: "online" | "cash"; setPayment: (value: "online" | "cash") => void; total: number }) {
  return (
    <main className="screen with-sticky-action">
      <TopBar title="Payment" onBack={() => go("checkout")} />
      <div className="intro">
        <div className="page-title">Choose how to pay</div>
        <div className="food-lede">Your payment is secured and confirmed instantly.</div>
      </div>
      <div className="choice-list">
        <Button variant="ghost" className={`choice-card ${payment === "online" ? "selected" : ""}`} onClick={() => setPayment("online")}>
          <span className="choice-icon"><Icon name="card" /></span>
          <span className="choice-copy"><strong>Pay online</strong><small>Mobile money or bank card</small><em>Fastest confirmation</em></span>
          <span className={`radio ${payment === "online" ? "active" : ""}`} />
        </Button>
        <Button variant="ghost" className={`choice-card ${payment === "cash" ? "selected" : ""}`} onClick={() => setPayment("cash")}>
          <span className="choice-icon"><Icon name="cash" /></span>
          <span className="choice-copy"><strong>Pay with cash</strong><small>Pay when you receive your order</small><em>Exact amount preferred</em></span>
          <span className={`radio ${payment === "cash" ? "active" : ""}`} />
        </Button>
      </div>
      {payment === "online" && (
        <div className="payment-detail">
          <div className="checkout-label">MOBILE MONEY NUMBER</div>
          <div className="phone-field"><span>+233</span><Input label="Mobile money number" value="24 555 0198" readOnly /></div>
          <div className="secure-note"><Icon name="check" size={16} /> You'll authorize the payment on your phone.</div>
        </div>
      )}
      {payment === "cash" && <div className="rule-note cash-note"><Icon name="cash" size={18} /><span>No online charge. Please have GHS {total} ready at handoff.</span></div>}
      <div className="sticky-action single">
        <Button className="flex-1" onClick={() => go("confirmed")}>{payment === "online" ? `Pay GHS ${total}` : `Place cash order · GHS ${total}`}</Button>
      </div>
    </main>
  );
}

function Confirmed({ go, stallId, method, payment }: { go: (screen: Screen) => void; stallId: StallId; method: "pickup" | "delivery"; payment: "online" | "cash" }) {
  const stall = stalls[stallId];
  return (
    <main className="screen confirmation-screen">
      <div className="success-mark"><Icon name="check" size={34} /></div>
      <div className="eyebrow green">ORDER CONFIRMED</div>
      <div className="display small">Lunch is on the way.</div>
      <div className="confirmation-copy">{stall.name} has your order. We'll keep you posted as it moves.</div>
      <div className="eta-card">
        <div><span>Estimated {method === "delivery" ? "arrival" : "pickup"}</span><strong>{method === "delivery" ? "12:40–12:50 PM" : "12:30–12:35 PM"}</strong></div>
        <div className="eta-art"><Icon name={method === "delivery" ? "bike" : "store"} size={28} /></div>
      </div>
      <div className="confirmation-details">
        <div><span>Order</span><strong>#AM–1842</strong></div>
        <div><span>Fulfillment</span><strong>{method === "delivery" ? "Campus delivery" : "Pickup"}</strong></div>
        <div><span>Payment</span><strong>{payment === "online" ? "Paid online" : "Cash at handoff"}</strong></div>
      </div>
      <div className="confirmation-actions">
        <Button onClick={() => go("tracking")}>Track order <Icon name="arrow" /></Button>
        <Button variant="secondary" onClick={() => go("home")}>Back to home</Button>
      </div>
    </main>
  );
}

function Tracking({ go, stallId, method }: { go: (screen: Screen) => void; stallId: StallId; method: "pickup" | "delivery" }) {
  const stall = stalls[stallId];
  const steps = method === "delivery"
    ? ["Order confirmed", "Kitchen is preparing", "Rider pickup", "Delivered"]
    : ["Order confirmed", "Kitchen is preparing", "Ready for pickup", "Collected"];
  return (
    <main className="screen tracking-screen">
      <TopBar title="Order #AM–1842" onBack={() => go("home")} />
      <div className="tracking-map">
        <div className="map-grid" />
        <div className="route" />
        <span className="map-stall"><Icon name="store" size={17} /></span>
        <span className="map-destination"><Icon name="map" size={18} /></span>
      </div>
      <div className="tracking-sheet">
        <div className="handle" />
        <div className="eyebrow green">ON SCHEDULE</div>
        <div className="page-title">{method === "delivery" ? "Preparing your order" : "Getting your order ready"}</div>
        <div className="food-lede">{method === "delivery" ? "Estimated arrival 12:40–12:50 PM" : "Ready for pickup by 12:35 PM"}</div>
        <div className="timeline">
          {steps.map((step, index) => (
            <div className={`timeline-row ${index < 2 ? "complete" : ""}`} key={step}>
              <div className="timeline-node">{index < 2 && <Icon name="check" size={13} />}</div>
              <div><strong>{step}</strong>{index === 1 && <small>{stall.name} · Updated just now</small>}</div>
              {index === 1 && <span className="live-pill">LIVE</span>}
            </div>
          ))}
        </div>
        <div className="help-row"><div className="stall-mark">{stall.initials}</div><div className="flex-1"><strong>{stall.name}</strong><small>Need help with your order?</small></div><Button variant="secondary" className="compact">Contact</Button></div>
      </div>
    </main>
  );
}

function ChangeStallModal({ currentStall, quantity, close, confirm }: { currentStall: StallId; quantity: number; close: () => void; confirm: () => void }) {
  const stall = stalls[currentStall];
  return (
    <div className="modal-backdrop" role="presentation" onClick={close}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="change-stall-title" onClick={(event) => event.stopPropagation()}>
        <Button variant="icon" className="modal-close" onClick={close}><Icon name="close" /></Button>
        <div className="modal-icon"><Icon name="store" size={25} /></div>
        <div className="page-title" id="change-stall-title">Start a new order?</div>
        <div className="food-lede">Your cart contains items from {stall.name}. You can only order from one stall at a time.</div>
        <div className="modal-cart"><img src={stall.item.image} alt="" /><div><strong>Current cart</strong><small>{quantity} {quantity === 1 ? "item" : "items"} · GHS {stall.item.price * quantity}</small></div></div>
        <Button onClick={confirm}>Clear cart & change stall</Button>
        <Button variant="secondary" onClick={close}>Keep current order</Button>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [stallId, setStallId] = useState<StallId>("ama");
  const [pendingStallId, setPendingStallId] = useState<StallId>("savanna");
  const [quantity, setQuantity] = useState(1);
  const [hasCart, setHasCart] = useState(false);
  const [method, setMethod] = useState<"pickup" | "delivery">("delivery");
  const [payment, setPayment] = useState<"online" | "cash">("online");
  const [showChangeStall, setShowChangeStall] = useState(false);

  const stall = stalls[stallId];
  const total = stall.item.price * quantity + 2 + (method === "delivery" ? 4 : 0);
  const go = (next: Screen) => setScreen(next);
  const openStall = (nextStall: StallId) => {
    if (hasCart && nextStall !== stallId) {
      setPendingStallId(nextStall);
      setShowChangeStall(true);
      return;
    }
    setStallId(nextStall);
    go("stall");
  };
  const openFood = (nextStall: StallId) => {
    if (hasCart && nextStall !== stallId) {
      setPendingStallId(nextStall);
      setShowChangeStall(true);
      return;
    }
    setStallId(nextStall);
    go("food");
  };

  return (
    <div className="app-shell">
      <div className="mobile-app">
        {screen === "home" && <Home go={go} openStall={openStall} openFood={openFood} />}
        {screen === "search" && <Search go={go} openStall={openStall} openFood={openFood} />}
        {screen === "stall" && <Stall go={go} stallId={stallId} />}
        {screen === "food" && <Food go={go} stallId={stallId} addToCart={(nextQuantity) => { setQuantity(nextQuantity); setHasCart(true); }} />}
        {screen === "cart" && <Cart go={go} stallId={stallId} quantity={quantity} setQuantity={setQuantity} />}
        {screen === "fulfillment" && <Fulfillment go={go} stallId={stallId} method={method} setMethod={setMethod} />}
        {screen === "checkout" && <Checkout go={go} stallId={stallId} method={method} quantity={quantity} />}
        {screen === "payment" && <Payment go={go} payment={payment} setPayment={setPayment} total={total} />}
        {screen === "confirmed" && <Confirmed go={go} stallId={stallId} method={method} payment={payment} />}
        {screen === "tracking" && <Tracking go={go} stallId={stallId} method={method} />}
        {hasCart && !["cart", "fulfillment", "checkout", "payment", "confirmed", "tracking"].includes(screen) && (
          <Button className="floating-cart" onClick={() => go("cart")}><span><Icon name="cart" size={18} /> {quantity} {quantity === 1 ? "item" : "items"}</span><span>GHS {stall.item.price * quantity}</span></Button>
        )}
        {showChangeStall && (
          <ChangeStallModal
            currentStall={stallId}
            quantity={quantity}
            close={() => setShowChangeStall(false)}
            confirm={() => {
              setShowChangeStall(false);
              setHasCart(false);
              setQuantity(1);
              setStallId(pendingStallId);
              go("food");
            }}
          />
        )}
      </div>
    </div>
  );
}
