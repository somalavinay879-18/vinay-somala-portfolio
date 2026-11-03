import { useState } from "react";
import { featured } from "../content";

const WIDTH = 720;
const HEIGHT = 240;
const PAD = { top: 12, right: 8, bottom: 30, left: 38 };
const MAX = 20; // percent
const TICKS = [0, 5, 10, 15, 20];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const label = (ym) => {
    const [y, m] = ym.split("-");
    return `${MONTHS[Number(m) - 1]} ${y}`;
};

export default function LateChart() {
    const data = featured.monthly;
    const peak = data.findIndex((d) => d.month === "2018-03");
    const [active, setActive] = useState(peak);
    const current = data[active];

    const plotW = WIDTH - PAD.left - PAD.right;
    const plotH = HEIGHT - PAD.top - PAD.bottom;
    const step = plotW / data.length;
    const barW = step * 0.68;
    const y = (v) => PAD.top + plotH - (v / MAX) * plotH;

    return (
        <figure className="mt-8 rounded-lg bg-mist p-5 md:p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <figcaption>
                    <h4 className="font-semibold text-ink">Late deliveries by month</h4>
                    <p className="text-sm text-slate">
                        Share of delivered orders that arrived after the estimated date. Hover or tab through the bars.
                    </p>
                </figcaption>
                <p className="text-sm tabular-nums text-ink" aria-live="polite">
                    <span className="font-semibold">{label(current.month)}</span>
                    {": "}
                    {current.orders.toLocaleString("en-US")} orders, {current.lateRate.toFixed(1)}% late, average review{" "}
                    {current.review.toFixed(2)}
                </p>
            </div>

            <div className="mt-4 overflow-x-auto">
                <svg
                    viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                    className="h-auto w-full min-w-[520px]"
                    role="img"
                    aria-label="Bar chart of the monthly late-delivery rate from January 2017 to August 2018. The rate is mostly between 3 and 7 percent, rising to 12.4 percent in November 2017, 14.1 percent in February 2018 and 19.0 percent in March 2018."
                >
                    {TICKS.map((t) => (
                        <g key={t}>
                            <line x1={PAD.left} x2={WIDTH - PAD.right} y1={y(t)} y2={y(t)} stroke="var(--color-rule)" />
                            <text x={PAD.left - 8} y={y(t) + 4} textAnchor="end" fontSize="11" fill="var(--color-slate)">
                                {t}%
                            </text>
                        </g>
                    ))}

                    {data.map((d, i) => {
                        const x = PAD.left + i * step + (step - barW) / 2;
                        const high = d.lateRate >= 10;
                        const isActive = i === active;
                        return (
                            <g
                                key={d.month}
                                tabIndex={0}
                                role="button"
                                aria-label={`${label(d.month)}: ${d.lateRate.toFixed(1)}% late`}
                                onMouseEnter={() => setActive(i)}
                                onFocus={() => setActive(i)}
                                className="cursor-pointer outline-none"
                            >
                                <rect x={PAD.left + i * step} y={PAD.top} width={step} height={plotH} fill="transparent" />
                                <rect
                                    x={x}
                                    y={y(d.lateRate)}
                                    width={barW}
                                    height={Math.max(1, y(0) - y(d.lateRate))}
                                    rx="2"
                                    fill={high ? "var(--color-amber)" : "var(--color-pine)"}
                                    opacity={isActive ? 1 : 0.55}
                                />
                                {isActive && (
                                    <rect
                                        x={x - 3}
                                        y={y(d.lateRate) - 3}
                                        width={barW + 6}
                                        height={y(0) - y(d.lateRate) + 3}
                                        fill="none"
                                        stroke="var(--color-ink)"
                                        strokeWidth="1.5"
                                        rx="3"
                                    />
                                )}
                                {i % 3 === 0 && (
                                    <text
                                        x={PAD.left + i * step + step / 2}
                                        y={HEIGHT - 10}
                                        textAnchor="middle"
                                        fontSize="11"
                                        fill="var(--color-slate)"
                                    >
                                        {label(d.month).replace(" 20", " ’")}
                                    </text>
                                )}
                            </g>
                        );
                    })}
                </svg>
            </div>

            <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate">
                <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-sm bg-pine" aria-hidden="true" /> Below 10%
                </span>
                <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-sm bg-amber" aria-hidden="true" /> 10% or more
                </span>
                <span>Source: my Olist pipeline, 99,441 orders</span>
            </p>
        </figure>
    );
}
