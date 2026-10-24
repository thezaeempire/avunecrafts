import {Q as e, et as t, o as n} from "./useStore-BIgwMX88.js";
import {W as r, n as i, y as a} from "./cart-CQxn7ou7.js";
var o = t(e())
  , s = (...e) => e.filter( (e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `).trim()
  , c = e => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase()
  , l = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase())
  , u = e => {
    let t = l(e);
    return t.charAt(0).toUpperCase() + t.slice(1)
}
  , d = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
}
  , f = e => {
    for (let t in e)
        if (t.startsWith(`aria-`) || t === `role` || t === `title`)
            return !0;
    return !1
}
  , p = (0,
o.forwardRef)( ({color: e=`currentColor`, size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: i=``, children: a, iconNode: c, ...l}, u) => (0,
o.createElement)(`svg`, {
    ref: u,
    ...d,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: s(`lucide`, i),
    ...!a && !f(l) && {
        "aria-hidden": `true`
    },
    ...l
}, [...c.map( ([e,t]) => (0,
o.createElement)(e, t)), ...Array.isArray(a) ? a : [a]]))
  , m = (e, t) => {
    let n = (0,
    o.forwardRef)( ({className: n, ...r}, i) => (0,
    o.createElement)(p, {
        ref: i,
        iconNode: t,
        className: s(`lucide-${c(u(e))}`, `lucide-${e}`, n),
        ...r
    }));
    return n.displayName = u(e),
    n
}
  , h = m(`heart`, [[`path`, {
    d: `M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,
    key: `mvr1a0`
}]])
  , g = m(`instagram`, [[`rect`, {
    width: `20`,
    height: `20`,
    x: `2`,
    y: `2`,
    rx: `5`,
    ry: `5`,
    key: `2e1cvw`
}], [`path`, {
    d: `M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`,
    key: `9exkf1`
}], [`line`, {
    x1: `17.5`,
    x2: `17.51`,
    y1: `6.5`,
    y2: `6.5`,
    key: `r4j83e`
}]])
  , _ = m(`menu`, [[`path`, {
    d: `M4 5h16`,
    key: `1tepv9`
}], [`path`, {
    d: `M4 12h16`,
    key: `1lakjw`
}], [`path`, {
    d: `M4 19h16`,
    key: `1djgab`
}]])
  , v = m(`message-circle`, [[`path`, {
    d: `M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,
    key: `1sd12s`
}]])
  , y = m(`moon`, [[`path`, {
    d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,
    key: `kfwtm`
}]])
  , b = m(`search`, [[`path`, {
    d: `m21 21-4.34-4.34`,
    key: `14j7rj`
}], [`circle`, {
    cx: `11`,
    cy: `11`,
    r: `8`,
    key: `4ej97u`
}]])
  , x = m(`shopping-bag`, [[`path`, {
    d: `M16 10a4 4 0 0 1-8 0`,
    key: `1ltviw`
}], [`path`, {
    d: `M3.103 6.034h17.794`,
    key: `awc11p`
}], [`path`, {
    d: `M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,
    key: `o988cm`
}]])
  , S = m(`sun`, [[`circle`, {
    cx: `12`,
    cy: `12`,
    r: `4`,
    key: `4exip2`
}], [`path`, {
    d: `M12 2v2`,
    key: `tus03m`
}], [`path`, {
    d: `M12 20v2`,
    key: `1lh1kg`
}], [`path`, {
    d: `m4.93 4.93 1.41 1.41`,
    key: `149t6j`
}], [`path`, {
    d: `m17.66 17.66 1.41 1.41`,
    key: `ptbguv`
}], [`path`, {
    d: `M2 12h2`,
    key: `1t8f8n`
}], [`path`, {
    d: `M20 12h2`,
    key: `1q8mjw`
}], [`path`, {
    d: `m6.34 17.66-1.41 1.41`,
    key: `1m8zz5`
}], [`path`, {
    d: `m19.07 4.93-1.41 1.41`,
    key: `1shlcs`
}]])
  , C = m(`user`, [[`path`, {
    d: `M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,
    key: `975kel`
}], [`circle`, {
    cx: `12`,
    cy: `7`,
    r: `4`,
    key: `17ys0d`
}]])
  , w = m(`x`, [[`path`, {
    d: `M18 6 6 18`,
    key: `1bl5f8`
}], [`path`, {
    d: `m6 6 12 12`,
    key: `d8bk6v`
}]])
  , T = n()
  , E = [{
    to: `/`,
    label: `Home`
}, {
    to: `/products`,
    label: `Boutique`
}, {
    to: `/gallery`,
    label: `Gallery`
}, {
    to: `/custom`,
    label: `Custom`
}, {
    to: `/about`,
    label: `Atelier`
}, {
    to: `/contact`,
    label: `Contact`
}];
function D() {
    let[e,t] = (0,
    o.useState)(!1)
      , [n,s] = (0,
    o.useState)(!1)
      , [c,l] = (0,
    o.useState)(!1)
      , u = i()
      , {user: d} = a();
    return (0,
    o.useEffect)( () => {
        let e = () => s(window.scrollY > 20);
        return e(),
        window.addEventListener(`scroll`, e, {
            passive: !0
        }),
        () => window.removeEventListener(`scroll`, e)
    }
    , []),
    (0,
    o.useEffect)( () => {
        document.documentElement.classList.toggle(`dark`, c)
    }
    , [c]),
    (0,
    T.jsxs)(`header`, {
        className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${n ? `py-2` : `py-4`}`,
        children: [(0,
        T.jsx)(`div`, {
            className: `mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${n ? `glass rounded-full shadow-glass` : ``}`,
            children: (0,
            T.jsxs)(`div`, {
                className: `flex items-center justify-between gap-4 py-3`,
                children: [(0,
                T.jsx)(r, {
                    to: `/`,
                    className: `flex items-center gap-2 group`,
                    children: (0,
                    T.jsxs)(`span`, {
                        className: `text-display text-2xl tracking-tight`,
                        children: [`Avun`, (0,
                        T.jsx)(`span`, {
                            className: `italic text-accent`,
                            children: `è`
                        })]
                    })
                }), (0,
                T.jsx)(`nav`, {
                    className: `hidden md:flex items-center gap-8`,
                    children: E.map(e => (0,
                    T.jsx)(r, {
                        to: e.to,
                        className: `text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full`,
                        activeProps: {
                            className: `text-foreground after:w-full`
                        },
                        activeOptions: {
                            exact: e.to === `/`
                        },
                        children: e.label
                    }, e.to))
                }), (0,
                T.jsxs)(`div`, {
                    className: `flex items-center gap-1`,
                    children: [(0,
                    T.jsx)(`button`, {
                        "aria-label": `Search`,
                        className: `p-2 rounded-full hover:bg-muted transition-colors hidden sm:inline-flex`,
                        children: (0,
                        T.jsx)(b, {
                            className: `h-4 w-4`
                        })
                    }), (0,
                    T.jsx)(`button`, {
                        "aria-label": `Toggle dark mode`,
                        onClick: () => l(e => !e),
                        className: `p-2 rounded-full hover:bg-muted transition-colors`,
                        children: c ? (0,
                        T.jsx)(S, {
                            className: `h-4 w-4`
                        }) : (0,
                        T.jsx)(y, {
                            className: `h-4 w-4`
                        })
                    }), (0,
                    T.jsx)(`button`, {
                        "aria-label": `Wishlist`,
                        className: `p-2 rounded-full hover:bg-muted transition-colors hidden sm:inline-flex`,
                        children: (0,
                        T.jsx)(h, {
                            className: `h-4 w-4`
                        })
                    }), (0,
                    T.jsx)(r, {
                        to: d ? `/account` : `/auth`,
                        "aria-label": `Account`,
                        className: `p-2 rounded-full hover:bg-muted transition-colors hidden sm:inline-flex`,
                        children: (0,
                        T.jsx)(C, {
                            className: `h-4 w-4`
                        })
                    }), (0,
                    T.jsxs)(r, {
                        to: `/cart`,
                        "aria-label": `Cart`,
                        className: `relative p-2 rounded-full hover:bg-muted transition-colors`,
                        children: [(0,
                        T.jsx)(x, {
                            className: `h-4 w-4`
                        }), u.count > 0 && (0,
                        T.jsx)(`span`, {
                            className: `absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-accent text-[10px] text-accent-foreground grid place-items-center font-medium`,
                            children: u.count
                        })]
                    }), (0,
                    T.jsx)(`button`, {
                        "aria-label": `Menu`,
                        onClick: () => t(!0),
                        className: `md:hidden p-2 rounded-full hover:bg-muted transition-colors`,
                        children: (0,
                        T.jsx)(_, {
                            className: `h-4 w-4`
                        })
                    })]
                })]
            })
        }), e && (0,
        T.jsxs)(`div`, {
            className: `fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl animate-reveal`,
            children: [(0,
            T.jsxs)(`div`, {
                className: `flex items-center justify-between px-6 py-5`,
                children: [(0,
                T.jsxs)(`span`, {
                    className: `text-display text-2xl`,
                    children: [`Avun`, (0,
                    T.jsx)(`span`, {
                        className: `italic text-accent`,
                        children: `è`
                    })]
                }), (0,
                T.jsx)(`button`, {
                    onClick: () => t(!1),
                    className: `p-2`,
                    children: (0,
                    T.jsx)(w, {
                        className: `h-5 w-5`
                    })
                })]
            }), (0,
            T.jsx)(`nav`, {
                className: `flex flex-col px-6 pt-10 gap-6`,
                children: [...E, d ? {
                    to: `/account`,
                    label: `My Orders`
                } : {
                    to: `/auth`,
                    label: `Sign In`
                }].map(e => (0,
                T.jsx)(r, {
                    to: e.to,
                    onClick: () => t(!1),
                    className: `text-display text-4xl`,
                    children: e.label
                }, e.to))
            })]
        })]
    })
}
function O() {
    return (0,
    T.jsxs)(`footer`, {
        className: `relative mt-24 border-t border-border/60`,
        children: [(0,
        T.jsxs)(`div`, {
            className: `mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4`,
            children: [(0,
            T.jsxs)(`div`, {
                className: `md:col-span-2 space-y-4`,
                children: [(0,
                T.jsxs)(`div`, {
                    className: `text-display text-3xl`,
                    children: [`Avun`, (0,
                    T.jsx)(`span`, {
                        className: `italic text-accent`,
                        children: `è`
                    })]
                }), (0,
                T.jsx)(`p`, {
                    className: `text-sm text-muted-foreground max-w-xs leading-relaxed`,
                    children: `Handmade with love, crafted to last. Every bloom is shaped by hand in our atelier.`
                }), (0,
                T.jsxs)(`div`, {
                    className: `flex gap-3 pt-2`,
                    children: [(0,
                    T.jsx)(`a`, {
                        "aria-label": `Instagram`,
                        href: `#`,
                        className: `p-2.5 rounded-full glass hover:bg-primary/20 transition-colors`,
                        children: (0,
                        T.jsx)(g, {
                            className: `h-4 w-4`
                        })
                    }), (0,
                    T.jsx)(`a`, {
                        "aria-label": `WhatsApp`,
                        href: `#`,
                        className: `p-2.5 rounded-full glass hover:bg-primary/20 transition-colors`,
                        children: (0,
                        T.jsx)(v, {
                            className: `h-4 w-4`
                        })
                    }), (0,
                    T.jsx)(`a`, {
                        "aria-label": `Pinterest`,
                        href: `#`,
                        className: `p-2.5 rounded-full glass hover:bg-primary/20 transition-colors`,
                        children: (0,
                        T.jsx)(`svg`, {
                            viewBox: `0 0 24 24`,
                            className: `h-4 w-4`,
                            fill: `currentColor`,
                            children: (0,
                            T.jsx)(`path`, {
                                d: `M12 0C5.4 0 0 5.4 0 12c0 5 3.1 9.3 7.5 11-.1-.9-.2-2.4 0-3.4.2-.9 1.4-5.6 1.4-5.6s-.4-.7-.4-1.8c0-1.7 1-2.9 2.2-2.9 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.1 1.7 2.1 2.1 0 3.6-2.2 3.6-5.3 0-2.8-2-4.7-4.9-4.7-3.3 0-5.3 2.5-5.3 5.1 0 1 .4 2.1.9 2.7.1.1.1.2.1.3-.1.4-.3 1.2-.3 1.4-.1.2-.2.3-.4.2-1.4-.7-2.3-2.7-2.3-4.4 0-3.6 2.6-6.9 7.5-6.9 3.9 0 7 2.8 7 6.5 0 3.9-2.5 7.1-5.9 7.1-1.1 0-2.2-.6-2.6-1.3l-.7 2.7c-.3 1-1 2.3-1.5 3.1.9.3 1.9.5 2.9.5 6.6 0 12-5.4 12-12S18.6 0 12 0z`
                            })
                        })
                    })]
                })]
            }), (0,
            T.jsxs)(`div`, {
                children: [(0,
                T.jsx)(`div`, {
                    className: `eyebrow mb-4`,
                    children: `Boutique`
                }), (0,
                T.jsxs)(`ul`, {
                    className: `space-y-2 text-sm text-muted-foreground`,
                    children: [(0,
                    T.jsx)(`li`, {
                        children: (0,
                        T.jsx)(r, {
                            to: `/products`,
                            className: `hover:text-foreground`,
                            children: `Bouquets`
                        })
                    }), (0,
                    T.jsx)(`li`, {
                        children: (0,
                        T.jsx)(r, {
                            to: `/products`,
                            className: `hover:text-foreground`,
                            children: `Single Flowers`
                        })
                    }), (0,
                    T.jsx)(`li`, {
                        children: (0,
                        T.jsx)(r, {
                            to: `/products`,
                            className: `hover:text-foreground`,
                            children: `Keychains`
                        })
                    }), (0,
                    T.jsx)(`li`, {
                        children: (0,
                        T.jsx)(r, {
                            to: `/products`,
                            className: `hover:text-foreground`,
                            children: `Gift Sets`
                        })
                    })]
                })]
            }), (0,
            T.jsxs)(`div`, {
                children: [(0,
                T.jsx)(`div`, {
                    className: `eyebrow mb-4`,
                    children: `Maison`
                }), (0,
                T.jsxs)(`ul`, {
                    className: `space-y-2 text-sm text-muted-foreground`,
                    children: [(0,
                    T.jsx)(`li`, {
                        children: (0,
                        T.jsx)(r, {
                            to: `/about`,
                            className: `hover:text-foreground`,
                            children: `Our Story`
                        })
                    }), (0,
                    T.jsx)(`li`, {
                        children: (0,
                        T.jsx)(r, {
                            to: `/custom`,
                            className: `hover:text-foreground`,
                            children: `Custom Orders`
                        })
                    }), (0,
                    T.jsx)(`li`, {
                        children: (0,
                        T.jsx)(r, {
                            to: `/gallery`,
                            className: `hover:text-foreground`,
                            children: `Gallery`
                        })
                    }), (0,
                    T.jsx)(`li`, {
                        children: (0,
                        T.jsx)(r, {
                            to: `/contact`,
                            className: `hover:text-foreground`,
                            children: `Contact`
                        })
                    })]
                })]
            })]
        }), (0,
        T.jsx)(`div`, {
            className: `border-t border-border/60`,
            children: (0,
            T.jsxs)(`div`, {
                className: `mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground`,
                children: [(0,
                T.jsxs)(`span`, {
                    children: [`© `, new Date().getFullYear(), ` Avunè. All rights reserved.`]
                }), (0,
                T.jsx)(`span`, {
                    className: `tracking-widest uppercase`,
                    children: `Handmade · Édition Limitée`
                })]
            })
        })]
    })
}
function k({children: e}) {
    return (0,
    T.jsxs)(`div`, {
        className: `min-h-screen flex flex-col`,
        children: [(0,
        T.jsx)(D, {}), (0,
        T.jsx)(`main`, {
            className: `flex-1 pt-24`,
            children: e
        }), (0,
        T.jsx)(O, {})]
    })
}
export {m as i, v as n, g as r, k as t};
