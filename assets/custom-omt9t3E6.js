import {Q as e, et as t, o as n} from "./useStore-BIgwMX88.js";
import {t as r} from "../Layout-BkI1xHW3.js";
import {t as i} from "./check-BvgtbpIC.js";
import {t as a} from "./sparkles-B2iTkPON.js";
var o = t(e())
  , s = n()
  , c = [`Baby Pink`, `Ivory`, `Rose Gold`, `Blush`, `Champagne`, `Sage`, `Lavender`, `Ruby`]
  , l = [`Rose`, `Tulip`, `Peony`, `Daisy`, `Lily`, `Sunflower`, `Baby's Breath`];
function u() {
    let[e,t] = (0,
    o.useState)(!1)
      , [n,u] = (0,
    o.useState)([`Baby Pink`])
      , [d,f] = (0,
    o.useState)([`Rose`])
      , p = (e, t, n) => t(e.includes(n) ? e.filter(e => e !== n) : [...e, n]);
    return (0,
    s.jsxs)(r, {
        children: [(0,
        s.jsxs)(`section`, {
            className: `mx-auto max-w-4xl px-6 py-16 text-center`,
            children: [(0,
            s.jsxs)(`div`, {
                className: `eyebrow mb-4 inline-flex items-center gap-2 justify-center`,
                children: [(0,
                s.jsx)(a, {
                    className: `h-3 w-3`
                }), ` Bespoke`]
            }), (0,
            s.jsx)(`h1`, {
                className: `text-display text-5xl sm:text-6xl`,
                children: `Design your bloom.`
            }), (0,
            s.jsx)(`p`, {
                className: `max-w-xl mx-auto mt-4 text-muted-foreground`,
                children: `Tell us your dream — colors, flowers, feeling. We'll craft it in our atelier and ship it wrapped like couture.`
            })]
        }), (0,
        s.jsx)(`section`, {
            className: `mx-auto max-w-4xl px-6 pb-24`,
            children: (0,
            s.jsx)(`form`, {
                onSubmit: e => {
                    e.preventDefault(),
                    t(!0)
                }
                ,
                className: `glass rounded-[2rem] p-8 md:p-12 space-y-10 shadow-soft`,
                children: e ? (0,
                s.jsxs)(`div`, {
                    className: `text-center py-12 animate-reveal`,
                    children: [(0,
                    s.jsx)(`div`, {
                        className: `mx-auto h-16 w-16 rounded-full bg-primary grid place-items-center`,
                        children: (0,
                        s.jsx)(i, {
                            className: `h-8 w-8`
                        })
                    }), (0,
                    s.jsx)(`h2`, {
                        className: `text-display text-3xl mt-6`,
                        children: `Merci beaucoup.`
                    }), (0,
                    s.jsx)(`p`, {
                        className: `text-muted-foreground mt-2`,
                        children: `Your request has bloomed into our atelier. We'll be in touch within 24 hours.`
                    })]
                }) : (0,
                s.jsxs)(s.Fragment, {
                    children: [(0,
                    s.jsxs)(`div`, {
                        children: [(0,
                        s.jsx)(`label`, {
                            className: `eyebrow mb-3 block`,
                            children: `Colors`
                        }), (0,
                        s.jsx)(`div`, {
                            className: `flex flex-wrap gap-2`,
                            children: c.map(e => (0,
                            s.jsx)(`button`, {
                                type: `button`,
                                onClick: () => p(n, u, e),
                                className: `px-4 py-2 rounded-full text-sm border transition ${n.includes(e) ? `bg-foreground text-background border-foreground` : `border-border/60 hover:border-accent`}`,
                                children: e
                            }, e))
                        })]
                    }), (0,
                    s.jsxs)(`div`, {
                        children: [(0,
                        s.jsx)(`label`, {
                            className: `eyebrow mb-3 block`,
                            children: `Flower types`
                        }), (0,
                        s.jsx)(`div`, {
                            className: `flex flex-wrap gap-2`,
                            children: l.map(e => (0,
                            s.jsx)(`button`, {
                                type: `button`,
                                onClick: () => p(d, f, e),
                                className: `px-4 py-2 rounded-full text-sm border transition ${d.includes(e) ? `bg-foreground text-background border-foreground` : `border-border/60 hover:border-accent`}`,
                                children: e
                            }, e))
                        })]
                    }), (0,
                    s.jsxs)(`div`, {
                        className: `grid gap-6 sm:grid-cols-2`,
                        children: [(0,
                        s.jsxs)(`div`, {
                            children: [(0,
                            s.jsx)(`label`, {
                                className: `eyebrow mb-3 block`,
                                children: `Quantity of stems`
                            }), (0,
                            s.jsx)(`input`, {
                                type: `number`,
                                min: 1,
                                defaultValue: 12,
                                className: `w-full rounded-full border border-input bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring`
                            })]
                        }), (0,
                        s.jsxs)(`div`, {
                            children: [(0,
                            s.jsx)(`label`, {
                                className: `eyebrow mb-3 block`,
                                children: `Occasion`
                            }), (0,
                            s.jsx)(`input`, {
                                type: `text`,
                                placeholder: `Anniversary, birthday…`,
                                className: `w-full rounded-full border border-input bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring`
                            })]
                        }), (0,
                        s.jsxs)(`div`, {
                            children: [(0,
                            s.jsx)(`label`, {
                                className: `eyebrow mb-3 block`,
                                children: `Your name`
                            }), (0,
                            s.jsx)(`input`, {
                                required: !0,
                                type: `text`,
                                className: `w-full rounded-full border border-input bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring`
                            })]
                        }), (0,
                        s.jsxs)(`div`, {
                            children: [(0,
                            s.jsx)(`label`, {
                                className: `eyebrow mb-3 block`,
                                children: `Email`
                            }), (0,
                            s.jsx)(`input`, {
                                required: !0,
                                type: `email`,
                                className: `w-full rounded-full border border-input bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring`
                            })]
                        })]
                    }), (0,
                    s.jsxs)(`div`, {
                        children: [(0,
                        s.jsx)(`label`, {
                            className: `eyebrow mb-3 block`,
                            children: `Special notes`
                        }), (0,
                        s.jsx)(`textarea`, {
                            rows: 5,
                            placeholder: `Tell us the story behind this gift…`,
                            className: `w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none`
                        })]
                    }), (0,
                    s.jsx)(`button`, {
                        type: `submit`,
                        className: `btn-primary w-full`,
                        children: `Submit your dream`
                    })]
                })
            })
        })]
    })
}
export {u as component};
