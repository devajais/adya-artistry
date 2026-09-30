# Image slots — Adya Artistry homepage

Every photo on the homepage is a **slot**. Until you drop a real file in, an
on-brand warm placeholder shows automatically (see
`src/components/ui/ImageSlot.tsx`). To use a real photo, just save it at the
exact path below — no code changes needed.

Notes:
- Use `.jpg` (or change the extension in `src/lib/constants.ts` / the component
  `src` prop to match your file).
- Images are served statically and unoptimized (`next.config.ts` → `output: export`),
  so **export them already compressed** (aim for < 300 KB each; hero < 500 KB).
- Recommended dimensions are minimums for crispness on retina screens.

## Hero (`public/images/hero/`)
| File | Slot | Ratio | Recommended px |
|------|------|-------|----------------|
| `feature.jpg` | Main hero feature photo (right side) | 4:5 portrait | 1000 × 1250 |
| `detail.jpg`  | Small overlapping detail shot | 1:1 square | 600 × 600 |

## Featured categories (`public/images/categories/`)
One per category. First one (`handmade-cards.jpg`) is the tall feature tile.
| File | Ratio | Recommended px |
|------|-------|----------------|
| `handmade-cards.jpg` | 3:4 portrait | 900 × 1200 |
| `paper-flowers.jpg`  | 16:10 | 1000 × 625 |
| `crochet.jpg`        | 16:10 | 1000 × 625 |
| `custom-orders.jpg`  | 16:10 | 1000 × 625 |

*(The other categories — `art-supplies`, `paper-packs`, `gift-boxes`,
`bookmarks` — are defined too and used on the Shop page later.)*

## About / story (`public/images/about/`)
| File | Slot | Ratio | Recommended px |
|------|------|-------|----------------|
| `studio.jpg` | Studio / workspace photo | 4:5 portrait | 1000 × 1250 |
| `hands.jpg`  | Hands-at-work detail | 1:1 square | 700 × 700 |

## Gallery masonry (`public/images/gallery/`)
Eight work shots. `piece-01` and `piece-05` render taller (3:4); the rest are
square. Mixed ratios are fine — the masonry adapts.
| Files | Ratio | Recommended px |
|-------|-------|----------------|
| `piece-01.jpg`, `piece-05.jpg` | 3:4 portrait | 800 × 1067 |
| `piece-02.jpg` … `piece-08.jpg` (rest) | 1:1 square | 800 × 800 |

## Newsletter (`public/images/newsletter/`)
| File | Slot | Ratio | Recommended px |
|------|------|-------|----------------|
| `accent.jpg` | Decorative floating accent | 1:1 square | 500 × 500 |

---

### Swapping quickly
Drop `feature.jpg` into `public/images/hero/`, refresh — done. To point a slot
at a different filename, edit its `src` in the relevant component
(`src/components/sections/*`) or in `src/lib/constants.ts` for categories/gallery.
