/*
 *  This will combine locations on the heatmap. 
 *  It is important to understand what the layout requires.
 *  "KEY": ["Locations", "to", "Combine"],
 *  Where KEY is what you want the heatmap to display as the location name.
 *  and the Locations to Combine are the locations... to combine
 *  It is mandatory that the location names are identical to the forestryLocations.js names - 
 *  PLUS the priority number tacked on to both the KEY and the locations to combine.
 *  I.E. Combining Draynor Willows + Oaks, which are both priority 1, you must put a "1" at
 *  the end of the new Combined Name, AND, to each of the original location names. Dray, and Dray oak
 *  Resulting in:     "Dray (+Oak)1": ["Dray1", "Dray oak1"],
 */

module.exports.COMBINEDLOCATIONS = {
  "Dray (+Oak)1": ["Dray1", "Dray oak1"],
  "Seer (N+NW)1": ["Nwseer1", "Nseer1"],
  "MTA (E+W)2": ["Mta e2", "Mta w2"],
  "Heart (+E)2": ["Heart2","Heart E/Kingstown2"],
  "Lumber (S+SW+W)3": ["Slumber3","Wlumber3", "Swlumber3"],
  "CIR W(Map+Mah)2": ["CIR W Mahogs2","CIR W Maples3"],
  "Legend (S+W)2": ["Wlegend2", "Slegend2"],
  "Rada (W+E+SE)2": ["Rada w2", "Rada e2", "Rada se2"],
  "Glade (+N)1": ["Glade1", "Glade N4"],
  "Cabbage (N+S)3": ["Ncabbage3", "Scabbage3"],
  "Ape (+W)2": ["Ape2", "Ape w2"],
  "Fortis Pond (N+E)2": ["Fortis Pond N2", "Fortis Pond E2"]
  // Add more combinations as needed
}
