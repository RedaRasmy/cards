import VertedCard from "../../../components/Field/components/VertedCard";

export default function BotHand({ cardsNumber }: { cardsNumber: number }) {

    const midle = Math.floor(cardsNumber / 2);
    const gapX = 100 / cardsNumber;
    const gapY = 10 / cardsNumber;
    return (
        <div>
            {Array.from({ length: cardsNumber }, (e, i) => i).map((e) => (
                <VertedCard
                    style={{
                        display: "absolute",
                        transformOrigin: "50% 100%",
                        transform: `
                                translate(
                                    ${(e - midle) * gapX}px ,
                                    ${Math.abs(midle - e) * gapY}px
                                )
                                rotate(${(e - midle) * 10}deg)
                            `,
                    }}
                    key={e}
                />
            ))}
        </div>
    );
}
