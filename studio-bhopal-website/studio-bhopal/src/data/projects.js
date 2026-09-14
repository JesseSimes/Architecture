// PLACEHOLDER DATA — replace every field with real project details,
// then swap PlaceholderArt usage in ProjectDetail.jsx for real <img> tags.

export const projects = [
  {
    slug: 'residence-04',
    title: 'Residence 04',
    category: 'Residential',
    location: 'Kolar, Bhopal',
    year: '2026',
    area: '4,200 sq ft',
    scope: 'Architecture + Interior',
    brief:
      'A steeply sloped half-acre plot ruled out a conventional single-level layout. The house steps down with the land across three volumes, each with its own entrance and outlook.',
    approaches: [
      {
        title: 'Working with the slope',
        text: 'The three volumes step down at three different levels, reducing excavation instead of flattening the site.',
      },
      {
        title: 'Local stone, left unpolished',
        text: 'Coursed sandstone from a nearby quarry is used on the plinth and party walls, left rough so it weathers with the hillside.',
      },
      {
        title: 'One shared spine',
        text: 'A covered walkway connects the three households without routing any of them through each other\u2019s private space.',
      },
    ],
  },
  {
    slug: 'vertex-commercial',
    title: 'Vertex Commercial',
    category: 'Commercial',
    location: 'Hoshangabad Road, Bhopal',
    year: '2025',
    area: '18,600 sq ft',
    scope: 'Architecture + Facade',
    brief:
      'A mixed-tenant commercial block where each floor plate needed to be leasable independently, without the building reading as a stack of unrelated boxes.',
    approaches: [
      {
        title: 'One facade language, three tenants',
        text: 'A repeating vertical fin system unifies the elevation while allowing each floor its own entrance and signage zone.',
      },
      {
        title: 'Daylight over glazing area',
        text: 'Deep-set windows and the fin spacing were modelled for daylight hours rather than maximising glass area, cutting solar load on the west face.',
      },
      {
        title: 'Servicing kept out of sight',
        text: 'Loading and plant access sit on the rear lane, keeping the street frontage clear for tenants and visitors.',
      },
    ],
  },
  {
    slug: 'meridian-towers',
    title: 'Meridian Towers',
    category: 'Large scale',
    location: 'Arera Colony, Bhopal',
    year: '2024',
    area: '2.1 lakh sq ft',
    scope: 'Architecture + Master Planning',
    brief:
      'A residential tower cluster on a constrained urban plot, where the brief was density without the towers overshadowing the low-rise neighbourhood around them.',
    approaches: [
      {
        title: 'Staggered tower heights',
        text: 'Three towers of different heights break up the massing and reduce the shadow cast on neighbouring plots through the afternoon.',
      },
      {
        title: 'Podium as shared ground',
        text: 'A single landscaped podium ties the towers together at ground level, with parking and services housed beneath it.',
      },
      {
        title: 'Cross-ventilated units throughout',
        text: 'Every unit type was planned with openings on two sides, avoiding the single-aspect layouts common at this density.',
      },
    ],
  },
  {
    slug: 'villa-shyamla',
    title: 'Villa 02',
    category: 'Residential',
    location: 'Shyamla Hills, Bhopal',
    year: '2023',
    area: '5,800 sq ft',
    scope: 'Architecture + Interior + Landscape',
    brief:
      'A weekend house on a forested ridge, where the client\u2019s only firm instruction was to remove as few trees as possible.',
    approaches: [
      {
        title: 'Plan drawn around the trees',
        text: 'The footprint was set out after a tree survey, not before it, resulting in an irregular plan that only three trees had to make way for.',
      },
      {
        title: 'Raised on point foundations',
        text: 'The house sits on point foundations rather than a continuous slab, reducing root disturbance and site cutting.',
      },
      {
        title: 'Materials that recede',
        text: 'Charred timber cladding and a dark stone plinth were chosen so the house reads as a shadow in the tree line rather than a clearing.',
      },
    ],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProject(slug) {
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return projects[0]
  return projects[(index + 1) % projects.length]
}
