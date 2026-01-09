/**
 * VFR Phraseology Model
 * Contains all VFR communication phrases and circuit pattern data
 */
export const VFRPhrases = {
  circuitLegs: [
    {
      number: 1,
      title: 'Upwind (Departure)',
      description: 'Setelah takeoff, terbang lurus searah dengan runway hingga mencapai altitude yang aman untuk turn.',
      altitude: '🛫 Climb to circuit altitude'
    },
    {
      number: 2,
      title: 'Crosswind',
      description: 'Turn 90° ke kiri (atau kanan untuk right-hand circuit). Lanjutkan climb hingga mencapai circuit altitude.',
      altitude: '⬆️ Level off at circuit altitude'
    },
    {
      number: 3,
      title: 'Downwind',
      description: 'Turn 90° lagi sehingga terbang paralel dengan runway, berlawanan arah. Maintain circuit altitude.',
      altitude: '➡️ Maintain circuit altitude'
    },
    {
      number: 4,
      title: 'Base',
      description: 'Turn 90° menuju runway. Mulai descent',
      altitude: '⬇️ Begin descent'
    },
    {
      number: 5,
      title: 'Final',
      description: 'Turn 90° terakhir untuk align dengan runway. Lanjutkan descent dengan stable approach hingga touchdown.',
      altitude: '🛬 Continue descent to landing'
    }
  ],
  
  phraseology: [
    {
      situation: 'Initial Contact & Taxi Request',
      exchanges: [
        { type: 'pilot', text: 'Ngurah Tower, PK-ABC, Cessna 172, at parking stand 41, request VFR clearance local flight circuit pattern' },
        { type: 'atc', text: 'PK-ABC, cleared local flight left hand circuit pattern altitude 1500ft runway 09, squawk 1201' },
        { type: 'pilot', text: 'Cleared local flight left hand circuit pattern altitude 1500ft runway 09, squawk 1201, PK-ABC' },
        { type: 'atc', text: 'PK-ABC, readback is correct report ready for start up' },
        { type: 'pilot', text: 'PK-ABC, request start up' },
        { type: 'atc', text: 'PK-ABC, start up approved, report ready for taxi' },
        { type: 'pilot', text: 'PK-ABC, request taxi departure intersection S2' },
        { type: 'atc', text: 'PK-ABC, taxi hold short S2' },
        { type: 'pilot', text: 'Hold short S2, PK-ABC' }
      ]
    },
    {
      situation: 'Ready for Departure',
      exchanges: [
        { type: 'pilot', text: 'Ngurah Tower, PK-ABC, S2, ready for departure' },
        { type: 'atc', text: 'PK-ABC, runway 09, cleared for takeoff, report upwind' },
        { type: 'pilot', text: 'Cleared for takeoff runway 09, report upwind, PK-ABC' },
        { type: 'situation', text: 'Upwind report' },
        { type: 'pilot', text: 'PK-ABC, upwind' },
        { type: 'atc', text: 'PK-ABC, cleared join downwind report on downwind' },
        { type: 'pilot', text: 'Cleared downwind report downwind, PK-ABC' },
        { type: 'situation', text: 'Downwind report' },
        { type: 'pilot', text: 'PK-ABC, downwind, request touch and go' },
        { type: 'atc', text: 'PK-ABC, cleared join final report on final' },
        { type: 'pilot', text: 'Cleared final report final, PK-ABC' },
        { type: 'situation', text: 'Final report' },
        { type: 'pilot', text: 'PK-ABC, final' },
        { type: 'atc', text: 'PK-ABC, wind calm runway 09, clear for touch and go, report upwind' },
        { type: 'pilot', text: 'Cleared for touch and go, report upwind, PK-ABC' },
        { type: 'situation', text: 'Upwind report' },
        { type: 'pilot', text: 'PK-ABC, upwind' },
        { type: 'atc', text: 'PK-ABC, cleared join downwind report on downwind' },
        { type: 'pilot', text: 'Cleared downwind report downwind, PK-ABC' },
        { type: 'situation', text: 'Downwind report' },
        { type: 'pilot', text: 'PK-ABC, downwind, request full stop' },
        { type: 'atc', text: 'PK-ABC, cleared join final report on final' },
        { type: 'pilot', text: 'Cleared final report final, PK-ABC' },
        { type: 'situation', text: 'Final report' },
        { type: 'pilot', text: 'PK-ABC, final' },
        { type: 'atc', text: 'PK-ABC, wind calm, runway 09 cleared to land' },
        { type: 'pilot', text: 'Cleared to land runway 09, PK-ABC' }
      ]
    }
  ]
};
