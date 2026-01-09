/**
 * IFR Phraseology Model
 * Contains all IFR communication phrases
 */
export const IFRPhrases = {
  departure: {
    delivery: [
      {
        situation: 'Requesting IFR Clearance',
        pilot: 'Soetta Delivery, GIA123, request IFR clearance to Denpasar FL370 with information D',
        atc: 'GIA123, Cleared to destination departure follow CA2A, runway 07L, initial climb FL290, expect FL370, Squawk 5362',
        pilotReadback: 'Cleared to Denpasar, CA2A departure, runway 07L, initial climb FL290, expect FL370, Squawk 5362, GIA123',
        atcResponse: 'GIA123, Readback correct, Contact Ground 121.600',
        pilotFinal: '121.600, Wilco (Will Comply), GIA123'
      }
    ],
    ground: [
      {
        situation: 'Request Push and Start',
        pilot: 'Soetta Ground, GIA123, Parking stand G42, ready for push and start',
        atc: 'GIA123, push and start approved facing west, expect NC3',
        pilotReadback: 'Facing west expect NC3, GIA123'
      },
      {
        situation: 'Request Taxi',
        pilot: 'Soetta Ground, GIA123, Request Taxi',
        atc: 'GIA123, Taxi holding point N9 runway 07L via NC3 NP2',
        pilotReadback: 'Holding point N9 runway 07L via NC3 NP2, GIA123',
        situation2: 'Approaching N9',
        atc2: 'GIA123, Contact Tower 118.200',
        pilot2: 'Contact Tower 118.200, GIA123'
      }
    ],
    tower: [
      {
        situation: 'Takeoff Clearance',
        pilot: 'Soetta Tower, GIA123, ready for departure runway 07L',
        atc: 'GIA123, wind 070 degrees 8 knots runway 07L, cleared for takeoff',
        pilotReadback: 'Runway 07L, cleared for takeoff, GIA123',
        atcResponse: 'GIA123, Airborne time 14.00 Zulu, contact Jakarta Radar 124.350',
        pilotFinal: 'Contact Jakarta Radar 124.350, GIA123'
      }
    ],
    approach: [
      {
        situation: 'Climb Phase',
        pilot: 'Jakarta Radar, GIA123 passing 3000ft climbing FL290',
        atc: 'GIA123, Identified, climb FL290 no restriction',
        pilotReadback: 'Climb FL290 unrestricted, GIA123',
        atcResponse: 'GIA123, Contact Jakarta Control 132.300',
        pilotFinal: 'Contact Jakarta Control 132.300, GIA123'
      }
    ],
    enroute: [
      {
        situation: 'Level at FL290 and cleared to climb final FL370',
        pilot: 'Jakarta Control, GIA123, level off at FL290',
        atc: 'GIA123, Identified continue climb final FL370',
        pilotReadback: 'Climb final FL370, GIA123',
        atcResponse: 'GIA123, Contact Ujung Radar 132.150',
        pilotFinal: 'Contact Ujung Radar 132.150, GIA123'
      }
    ]
  },
  arrival: {
    enroute: [
      {
        situation: 'Arrival clearance and Descent',
        pilot: 'Ujung Radar, GIA123 with you on FL370 inbound ANY',
        atc: 'GIA123, identified maintain FL370',
        pilotReadback: 'maintain FL370, GIA123',
        atc2: 'GIA123, Arrival clearance available',
        pilot2: 'Go Ahead, GIA123',
        atc3: 'GIA123, Cleared to Denpasar follow MOVMO1E Arrival expect RNP Approach RWY09',
        pilot3: 'Cleared to Denpasar follow MOVMO1E Arrival expect RNP Approach RWY09, GIA123',
        atc4: 'GIA123, Readback is correct report when ready for descend',
        pilot4: 'Wilco (Will Comply), GIA123',
        pilot5: 'Ujung Radar, GIA123 ready for descend',
        atc5: 'GIA123, Descend FL250',
        pilot6: 'Descend FL250, GIA123',
        situation2: 'Reached FL250',
        atc6: 'GIA123, Contact Bali Radar 119.700',
        pilot7: 'Contact Bali Radar 119.700'
      }
    ],
    approach: [
      {
        situation: 'Descent and approach clearance phase',
        pilot: 'Bali Radar, GIA123, Maintaining FL250',
        atc: 'GIA123, Descent 10000 feet',
        pilotReadback: 'Descent 10000 feet, GIA123',
        atc2: 'GIA123, Descent 3000 feet QNH1011, Cleared RNP approach runway 09',
        pilot2: 'Descent 3000 feet QNH1011 and cleared RNP approach runway 09, GIA123',
        situation2: 'Established RNP 09',
        pilot3: 'GIA123, Established RNP 09',
        atc3: 'GIA123, Contact Ngurah Tower 118.100',
        pilot4: 'Contact Ngurah Tower 118.100, GIA123'
      }
    ],
    tower: [
      {
        situation: 'Landing Clearance',
        pilot: 'Ngurah Tower, GIA123, established RNP runway 09',
        atc: 'GIA123, wind 070 degrees 6 knots, runway 09 clear to land',
        pilotReadback: 'Runway 09, cleared to land, GIA123',
        atcResponse: 'GIA123, left turn vacate N3, contact Ground 118.800',
        pilotFinal: 'N3, Contact Ground 118.800, GIA123'
      }
    ],
    ground: [
      {
        situation: 'Taxi to Gate',
        pilot: 'Ngurah Ground, GIA123, runway vacated via N3',
        atc: 'GIA123, taxi to gate A15 via NP, report onblock',
        pilotReadback: 'Taxi to gate A15 via NP, Wilco, GIA123',
        pilot2: 'GIA123, Onblock A15',
        atc2: 'GIA123, Frequency change approved UNICOM 122.800',
        pilot3: 'UNICOM 122.800, Thankyou, GIA123'
      }
    ]
  }
};
