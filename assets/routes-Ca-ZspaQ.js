import {Q as e, et as t, o as n} from "./useStore-BIgwMX88.js";
import {W as r, _ as i, g as a, h as o, m as s, p as c} from "./cart-CQxn7ou7.js";
import {i as l, t as u} from "./Layout-BkI1xHW3.js";
import {t as d} from "./sparkles-B2iTkPON.js";
import {n as f, t as p} from "./hero-bouquet-D-ecqePd.js";
var m = l(`arrow-right`, [[`path`, {
    d: `M5 12h14`,
    key: `1ays0h`
}], [`path`, {
    d: `m12 5 7 7-7 7`,
    key: `xquz4c`
}]])
  , h = l(`star`, [[`path`, {
    d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,
    key: `r04s7s`
}]])
  , g = n();
function _() {
    return (0,
    g.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 overflow-hidden`,
        children: [{
            top: `10%`,
            left: `6%`,
            size: 28,
            delay: `0s`,
            cls: `animate-float-slow`
        }, {
            top: `22%`,
            left: `88%`,
            size: 22,
            delay: `1s`,
            cls: `animate-float-med`
        }, {
            top: `60%`,
            left: `4%`,
            size: 34,
            delay: `2s`,
            cls: `animate-float-med`
        }, {
            top: `72%`,
            left: `92%`,
            size: 26,
            delay: `0.5s`,
            cls: `animate-float-slow`
        }, {
            top: `40%`,
            left: `50%`,
            size: 18,
            delay: `1.5s`,
            cls: `animate-float-slow`
        }, {
            top: `84%`,
            left: `40%`,
            size: 24,
            delay: `2.5s`,
            cls: `animate-float-med`
        }].map( (e, t) => (0,
        g.jsx)(`svg`, {
            viewBox: `0 0 40 40`,
            style: {
                position: `absolute`,
                top: e.top,
                left: e.left,
                width: e.size,
                height: e.size,
                animationDelay: e.delay
            },
            className: `${e.cls} opacity-70`,
            children: (0,
            g.jsxs)(`g`, {
                children: [[0, 72, 144, 216, 288].map(e => (0,
                g.jsx)(`ellipse`, {
                    cx: `20`,
                    cy: `10`,
                    rx: `5`,
                    ry: `9`,
                    fill: `var(--primary)`,
                    opacity: `0.85`,
                    transform: `rotate(${e} 20 20)`
                }, e)), (0,
                g.jsx)(`circle`, {
                    cx: `20`,
                    cy: `20`,
                    r: `3`,
                    fill: `var(--rose-gold)`
                })]
            })
        }, t))
    })
}
var v = t(e(), 1);
function y() {
    let[e,t] = (0,
    v.useState)(!1)
      , [n,r] = (0,
    v.useState)(!1);
    return (0,
    v.useEffect)( () => {
        let e = setTimeout( () => t(!0), 1600)
          , n = setTimeout( () => r(!0), 2200);
        return () => {
            clearTimeout(e),
            clearTimeout(n)
        }
    }
    , []),
    n ? null : (0,
    g.jsx)(`div`, {
        className: `fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ${e ? `opacity-0 pointer-events-none` : `opacity-100`}`,
        children: (0,
        g.jsxs)(`div`, {
            className: `flex flex-col items-center gap-6`,
            children: [(0,
            g.jsx)(`svg`, {
                viewBox: `0 0 100 100`,
                className: `h-24 w-24 animate-bloom`,
                children: (0,
                g.jsxs)(`g`, {
                    children: [[0, 60, 120, 180, 240, 300].map(e => (0,
                    g.jsx)(`ellipse`, {
                        cx: `50`,
                        cy: `28`,
                        rx: `10`,
                        ry: `20`,
                        fill: `var(--primary)`,
                        opacity: `0.9`,
                        transform: `rotate(${e} 50 50)`
                    }, e)), (0,
                    g.jsx)(`circle`, {
                        cx: `50`,
                        cy: `50`,
                        r: `7`,
                        fill: `var(--rose-gold)`
                    })]
                })
            }), (0,
            g.jsxs)(`div`, {
                className: `text-display text-3xl tracking-tight`,
                children: [`Avun`, (0,
                g.jsx)(`span`, {
                    className: `italic text-accent`,
                    children: `è`
                })]
            })]
        })
    })
}
var b = [{
    name: `Bouquets`,
    img: c,
    tag: `The Signature`
}, {
    name: `Single Flowers`,
    img: i,
    tag: `Everlasting`
}, {
    name: `Tulips`,
    img: a,
    tag: `Spring Édition`
}, {
    name: `Keychains`,
    img: o,
    tag: `Petite`
}, {
    name: `Gift Sets`,
    img: s,
    tag: `Coffret`
}]
  , x = [{
    name: `Rose Éternelle`,
    price: `₹299`,
    img: i,
    tag: `Bestseller`
}, {
    name: `Tulipe Bouquet`,
    price: `₹1,099`,
    img: a,
    tag: `New`
}, {
    name: `Petite Keychain`,
    price: `₹299`,
    img: o,
    tag: `Gift`
}, {
    name: `Coffret Blossom`,
    price: `₹1,999`,
    img: s,
    tag: `Limited`
}]
  , S = [{
    name: `Amélie R.`,
    role: `Paris`,
    text: `Absolutely exquisite. My bouquet still looks freshly made a year later — it's a piece of art.`
}, {
    name: `Sofia L.`,
    role: `Milan`,
    text: `The custom order process felt like couture. Every petal, every color, chosen with me.`
}, {
    name: `Isabelle M.`,
    role: `New York`,
    text: `Received an Avunè coffret as a gift and immediately ordered three more. Timeless.`
}];
function C() {
    return (0,
    g.jsxs)(g.Fragment, {
        children: [(0,
        g.jsx)(y, {}), (0,
        g.jsxs)(u, {
            children: [(0,
            g.jsxs)(`section`, {
                className: `relative overflow-hidden`,
                children: [(0,
                g.jsx)(`div`, {
                    className: `absolute inset-0 gradient-blush`
                }), (0,
                g.jsx)(_, {}), (0,
                g.jsxs)(`div`, {
                    className: `relative mx-auto max-w-7xl px-6 pt-10 pb-24 md:pt-20 md:pb-32 grid gap-12 md:grid-cols-2 items-center`,
                    children: [(0,
                    g.jsxs)(`div`, {
                        className: `space-y-8 animate-reveal`,
                        children: [(0,
                        g.jsxs)(`div`, {
                            className: `eyebrow flex items-center gap-2`,
                            children: [(0,
                            g.jsx)(d, {
                                className: `h-3 w-3`
                            }), ` Maison Avunè · Est. Handmade`]
                        }), (0,
                        g.jsxs)(`h1`, {
                            className: `text-display text-5xl sm:text-6xl md:text-7xl leading-[0.95]`,
                            children: [`Handmade with `, (0,
                            g.jsx)(`em`, {
                                className: `italic text-accent`,
                                children: `love`
                            }), `,`, (0,
                            g.jsx)(`br`, {}), `crafted to `, (0,
                            g.jsx)(`span`, {
                                className: `shimmer-text`,
                                children: `last`
                            }), `.`]
                        }), (0,
                        g.jsx)(`p`, {
                            className: `max-w-md text-base text-muted-foreground leading-relaxed`,
                            children: `A boutique of everlasting blooms, sculpted petal by petal from the softest chenille. Never wilting. Always yours.`
                        }), (0,
                        g.jsxs)(`div`, {
                            className: `flex flex-wrap gap-3`,
                            children: [(0,
                            g.jsxs)(r, {
                                to: `/products`,
                                className: `btn-primary`,
                                children: [`Shop Now `, (0,
                                g.jsx)(m, {
                                    className: `h-4 w-4`
                                })]
                            }), (0,
                            g.jsx)(r, {
                                to: `/custom`,
                                className: `btn-ghost`,
                                children: `Customize Your Gift`
                            })]
                        }), (0,
                        g.jsxs)(`div`, {
                            className: `flex items-center gap-6 pt-4 text-xs text-muted-foreground`,
                            children: [(0,
                            g.jsxs)(`div`, {
                                className: `flex items-center gap-1`,
                                children: [[...[, , , , , ]].map( (e, t) => (0,
                                g.jsx)(h, {
                                    className: `h-3 w-3 fill-accent text-accent`
                                }, t)), (0,
                                g.jsx)(`span`, {
                                    className: `ml-2`,
                                    children: `4.9 · 2,400+ reviews`
                                })]
                            }), (0,
                            g.jsx)(`span`, {
                                className: `hidden sm:inline`,
                                children: `Worldwide shipping`
                            })]
                        })]
                    }), (0,
                    g.jsxs)(`div`, {
                        className: `relative animate-reveal`,
                        style: {
                            animationDelay: `0.2s`
                        },
                        children: [(0,
                        g.jsx)(`div`, {
                            className: `absolute -inset-6 rounded-[3rem] bg-primary/40 blur-3xl`
                        }), (0,
                        g.jsx)(`div`, {
                            className: `relative rounded-[2.5rem] overflow-hidden shadow-soft`,
                            children: (0,
                            g.jsx)(`img`, {
                                src: p,
                                alt: `Handmade pipe cleaner bouquet by Avunè`,
                                width: 1600,
                                height: 1600,
                                className: `w-full h-auto object-cover`
                            })
                        }), (0,
                        g.jsxs)(`div`, {
                            className: `absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-glass`,
                            children: [(0,
                            g.jsx)(`div`, {
                                className: `eyebrow`,
                                children: `The Signature`
                            }), (0,
                            g.jsx)(`div`, {
                                className: `text-display text-xl`,
                                children: `Blush Bouquet`
                            }), (0,
                            g.jsx)(`div`, {
                                className: `text-xs text-muted-foreground mt-1`,
                                children: `Made to order · 5 days`
                            })]
                        })]
                    })]
                })]
            }), (0,
            g.jsx)(`section`, {
                className: `border-y border-border/60 bg-cream/40 overflow-hidden`,
                children: (0,
                g.jsx)(`div`, {
                    className: `flex gap-16 py-5 whitespace-nowrap animate-[shimmer_30s_linear_infinite] text-display text-2xl`,
                    children: [`Handmade in Atelier`, `Never Wilting`, `Bespoke Blooms`, `Shipped Worldwide`, `Sustainable Craft`, `Handmade in Atelier`, `Never Wilting`, `Bespoke Blooms`].map( (e, t) => (0,
                    g.jsxs)(`span`, {
                        className: `opacity-70`,
                        children: [e, ` `, (0,
                        g.jsx)(`span`, {
                            className: `text-accent mx-4`,
                            children: `✿`
                        })]
                    }, t))
                })
            }), (0,
            g.jsxs)(`section`, {
                className: `mx-auto max-w-7xl px-6 py-24`,
                children: [(0,
                g.jsxs)(`div`, {
                    className: `flex items-end justify-between gap-6 mb-12`,
                    children: [(0,
                    g.jsxs)(`div`, {
                        children: [(0,
                        g.jsx)(`div`, {
                            className: `eyebrow mb-3`,
                            children: `The Collections`
                        }), (0,
                        g.jsx)(`h2`, {
                            className: `text-display text-4xl sm:text-5xl`,
                            children: `Curated by hand.`
                        })]
                    }), (0,
                    g.jsxs)(r, {
                        to: `/products`,
                        className: `hidden sm:inline-flex items-center gap-2 text-sm hover:text-accent transition-colors`,
                        children: [`View all `, (0,
                        g.jsx)(m, {
                            className: `h-4 w-4`
                        })]
                    })]
                }), (0,
                g.jsx)(`div`, {
                    className: `grid gap-4 sm:grid-cols-2 lg:grid-cols-5`,
                    children: b.map( (e, t) => (0,
                    g.jsxs)(r, {
                        to: `/products`,
                        className: `group relative overflow-hidden rounded-3xl bg-card border border-border/60 hover:border-accent/40 transition-all duration-500 ${t === 0 ? `sm:col-span-2 lg:col-span-2 lg:row-span-2` : ``}`,
                        children: [(0,
                        g.jsx)(`div`, {
                            className: `aspect-[3/4] ${t === 0 ? `lg:aspect-[4/5]` : ``} overflow-hidden`,
                            children: (0,
                            g.jsx)(`img`, {
                                src: e.img,
                                alt: e.name,
                                loading: `lazy`,
                                className: `h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105`
                            })
                        }), (0,
                        g.jsx)(`div`, {
                            className: `absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent`
                        }), (0,
                        g.jsxs)(`div`, {
                            className: `absolute bottom-0 left-0 right-0 p-6 text-white`,
                            children: [(0,
                            g.jsx)(`div`, {
                                className: `text-[10px] tracking-[0.28em] uppercase opacity-80`,
                                children: e.tag
                            }), (0,
                            g.jsx)(`div`, {
                                className: `text-display text-2xl mt-1`,
                                children: e.name
                            })]
                        })]
                    }, e.name))
                })]
            }), (0,
            g.jsx)(`section`, {
                className: `bg-secondary/50`,
                children: (0,
                g.jsxs)(`div`, {
                    className: `mx-auto max-w-7xl px-6 py-24`,
                    children: [(0,
                    g.jsxs)(`div`, {
                        className: `text-center mb-14`,
                        children: [(0,
                        g.jsx)(`div`, {
                            className: `eyebrow mb-3`,
                            children: `Featured`
                        }), (0,
                        g.jsx)(`h2`, {
                            className: `text-display text-4xl sm:text-5xl`,
                            children: `Bestsellers of the season`
                        })]
                    }), (0,
                    g.jsx)(`div`, {
                        className: `grid gap-8 sm:grid-cols-2 lg:grid-cols-4`,
                        children: x.map(e => (0,
                        g.jsxs)(`div`, {
                            className: `group`,
                            children: [(0,
                            g.jsxs)(`div`, {
                                className: `relative overflow-hidden rounded-3xl bg-cream aspect-[3/4]`,
                                children: [(0,
                                g.jsx)(`img`, {
                                    src: e.img,
                                    alt: e.name,
                                    loading: `lazy`,
                                    className: `h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105`
                                }), (0,
                                g.jsx)(`span`, {
                                    className: `absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] tracking-widest uppercase`,
                                    children: e.tag
                                }), (0,
                                g.jsx)(`button`, {
                                    className: `absolute inset-x-4 bottom-4 btn-primary opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500`,
                                    children: `Quick view`
                                })]
                            }), (0,
                            g.jsxs)(`div`, {
                                className: `flex items-baseline justify-between mt-4`,
                                children: [(0,
                                g.jsx)(`div`, {
                                    className: `text-display text-lg`,
                                    children: e.name
                                }), (0,
                                g.jsx)(`div`, {
                                    className: `text-sm text-muted-foreground`,
                                    children: e.price
                                })]
                            })]
                        }, e.name))
                    })]
                })
            }), (0,
            g.jsxs)(`section`, {
                className: `mx-auto max-w-7xl px-6 py-24 grid gap-16 md:grid-cols-2 items-center`,
                children: [(0,
                g.jsxs)(`div`, {
                    className: `relative order-2 md:order-1`,
                    children: [(0,
                    g.jsx)(`div`, {
                        className: `absolute -inset-6 bg-primary/30 blur-3xl rounded-full`
                    }), (0,
                    g.jsx)(`img`, {
                        src: f,
                        alt: `Avunè artisan crafting`,
                        loading: `lazy`,
                        className: `relative rounded-[2rem] w-full object-cover aspect-[4/5] shadow-soft`
                    })]
                }), (0,
                g.jsxs)(`div`, {
                    className: `order-1 md:order-2 space-y-6`,
                    children: [(0,
                    g.jsx)(`div`, {
                        className: `eyebrow`,
                        children: `The Atelier`
                    }), (0,
                    g.jsxs)(`h2`, {
                        className: `text-display text-4xl sm:text-5xl leading-tight`,
                        children: [`Each bloom, a quiet `, (0,
                        g.jsx)(`em`, {
                            className: `italic text-accent`,
                            children: `devotion`
                        }), `.`]
                    }), (0,
                    g.jsx)(`p`, {
                        className: `text-muted-foreground leading-relaxed`,
                        children: `Avunè began in a small sunlit corner, with a single pink rose that refused to wilt. Today, every piece is still shaped by hand — one petal, one twist, one memory at a time.`
                    }), (0,
                    g.jsxs)(r, {
                        to: `/about`,
                        className: `btn-ghost`,
                        children: [`Our story `, (0,
                        g.jsx)(m, {
                            className: `h-4 w-4`
                        })]
                    })]
                })]
            }), (0,
            g.jsxs)(`section`, {
                className: `relative overflow-hidden`,
                children: [(0,
                g.jsx)(`div`, {
                    className: `absolute inset-0 gradient-blush opacity-60`
                }), (0,
                g.jsxs)(`div`, {
                    className: `relative mx-auto max-w-7xl px-6 py-24`,
                    children: [(0,
                    g.jsxs)(`div`, {
                        className: `text-center mb-14`,
                        children: [(0,
                        g.jsx)(`div`, {
                            className: `eyebrow mb-3`,
                            children: `Kind Words`
                        }), (0,
                        g.jsx)(`h2`, {
                            className: `text-display text-4xl sm:text-5xl`,
                            children: `Loved by our maison`
                        })]
                    }), (0,
                    g.jsx)(`div`, {
                        className: `grid gap-6 md:grid-cols-3`,
                        children: S.map(e => (0,
                        g.jsxs)(`div`, {
                            className: `glass rounded-3xl p-8 shadow-glass`,
                            children: [(0,
                            g.jsx)(`div`, {
                                className: `flex gap-1 mb-4`,
                                children: [...[, , , , , ]].map( (e, t) => (0,
                                g.jsx)(h, {
                                    className: `h-3 w-3 fill-accent text-accent`
                                }, t))
                            }), (0,
                            g.jsxs)(`p`, {
                                className: `text-display text-xl leading-snug mb-6`,
                                children: [`"`, e.text, `"`]
                            }), (0,
                            g.jsxs)(`div`, {
                                className: `flex items-center gap-3`,
                                children: [(0,
                                g.jsx)(`div`, {
                                    className: `h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground text-sm font-medium`,
                                    children: e.name[0]
                                }), (0,
                                g.jsxs)(`div`, {
                                    children: [(0,
                                    g.jsx)(`div`, {
                                        className: `text-sm font-medium`,
                                        children: e.name
                                    }), (0,
                                    g.jsx)(`div`, {
                                        className: `text-xs text-muted-foreground`,
                                        children: e.role
                                    })]
                                })]
                            })]
                        }, e.name))
                    })]
                })]
            }), (0,
            g.jsx)(`section`, {
                className: `mx-auto max-w-6xl px-6 py-24`,
                children: (0,
                g.jsxs)(`div`, {
                    className: `relative overflow-hidden rounded-[2.5rem] p-12 md:p-20 text-center bg-gradient-to-br from-primary/60 via-cream to-accent/30 shadow-soft`,
                    children: [(0,
                    g.jsx)(`div`, {
                        className: `eyebrow mb-4`,
                        children: `Bespoke`
                    }), (0,
                    g.jsxs)(`h2`, {
                        className: `text-display text-4xl sm:text-6xl max-w-2xl mx-auto leading-[1.05]`,
                        children: [`Dream a bouquet.`, (0,
                        g.jsx)(`br`, {}), (0,
                        g.jsx)(`em`, {
                            className: `italic text-accent`,
                            children: `We'll make it real.`
                        })]
                    }), (0,
                    g.jsx)(`p`, {
                        className: `max-w-lg mx-auto mt-6 text-muted-foreground`,
                        children: `Choose your colors, flowers, and story. Our atelier will craft it to your heart.`
                    }), (0,
                    g.jsx)(`div`, {
                        className: `mt-8 flex justify-center gap-3`,
                        children: (0,
                        g.jsxs)(r, {
                            to: `/custom`,
                            className: `btn-primary`,
                            children: [`Start a custom order `, (0,
                            g.jsx)(m, {
                                className: `h-4 w-4`
                            })]
                        })
                    })]
                })
            })]
        })]
    })
}
export {C as component};
