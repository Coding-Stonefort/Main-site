"use client";

import Image from "next/image";
import styles from "./MetalsGrid.module.css";

const cards = [
  {
    id: "precious-metals",
    title: "Precious Metal CFDs",
    description:
      "Metals such as gold and silver have long been recognised for their role as stores of value and their importance across various industries. With Stonefort, you can trade spot gold and silver in multiple currency pairs, along with access to palladium, platinum and selected metal forwards — all through a single trading account.",
    image: "/images/preciousMetalCFD.jpg",
  },
  {
    id: "semi-precious-metals",
    title: "Semi-Precious Metal CFDs",
    description:
      "While not classified as rare, metals such as copper and nickel play an essential role in industries ranging from aerospace to electronics. Stonefort provides access to spot copper, aluminium, nickel, lead and zinc CFDs with competitive pricing and no additional commission.",
    image: "/images/Semi-PreciousMetal.jpg",
  },
  {
    id: "energy-cfds",
    title: "Energy CFDs",
    description:
      "Energy commodities are fundamental to global markets, serving as essential fuel sources and key industrial inputs. Stonefort offers spot gasoline, natural gas, Brent crude oil and WTI crude oil, along with selected forwards for diversified exposure.",
    image: "/images/EnergyCFDs.jpg",
  },
  {
    id: "soft-commodities",
    title: "Soft Commodity CFDs",
    description:
      "Access a broad selection of agricultural commodities including cattle, cocoa, coffee, corn, cotton, sugar, soybeans and wheat — all through a single trading account.",
    image: "/images/metalsCommodities.webp",
  },
];

export default function MetalsGrid() {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={`title ${styles.title}`}>
            What Commodity CFDs Can You 
            Trade with <span className={styles.brand}>Stonefort?</span>
          </h2>

          <p className={`description ${styles.subtitle}`}>
            Access a diverse selection of commodity CFDs across precious and
            semi-precious metals, energy products and soft commodities. Explore
            multiple market segments through a single trading account.
          </p>
        </header>

        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.id} className={styles.card}>
              <div className={styles.bg}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={styles.img}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <h3 className={styles.cardTitle}>{card.title}</h3>

              <div className={styles.overlay}>
                <div className={styles.body}>
                  <p className={styles.text}>{card.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
