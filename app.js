const cards = [
    {
        front: 'What is a blowout?',
        back: 'A depression caused by deflation in an area where either migrating dunes exist or a small break develops in the surficial integrity of a of a stabilized windblown depost.',
        flipped: false,
    },
    {
        front: 'A combination of wind and water erosion (deflation) in an area where there are resistant rocks capping weaker more easily eroded rocks create _______',
        back: 'Pedestal rocks - commonly called balanced rocks',
        flipped: false,
    },
    {
        front: 'What are ventifacts?',
        back: 'Stones that have been abraded by the windo on at least one side so they are plished or faceted. They are usually only found in a unique environment of no vegetation, strong wind and plentiful sand.',
        flipped: false,
    },
    {
        front: 'What is a kettle?',
        back: 'A depression in the postglacial terrain formed by the melting of a large stagnant ice black allowing the settlement of the overlying glacial drift.',
        flipped: false,
    },
    {
        front: 'The annual rhythms of accumulation of sediment layers in a lacustrine environment are called ________',
        back: 'Varves',
        flipped: false,
    },
    {
        front: 'What is a valley train?',
        back: 'A long, narrow, deposit of outwash (sand and gravel), deposited by glacial meltwater, which beings at the end of moraine and extends downvalley on the outwash plain.',
        flipped: false,
    },
    {
        front: 'According to the Unified Soil Classification System, gravels have a grain size greater than what diameter?',
        back: 'gravel -> No. 4 sieve or 4.76mm',
        flipped: false,
    },
    {
        front: 'Chert is found commonly in the Coast Ranges Province of California. What is the depositional environment and how is it formed?',
        back: 'Chert originates in shallow sea water. Some cherts result from the enrichment of silica in the sea water from volcanic rocks.',
        flipped: false,
    },
    {
        front: 'Are slickensides indicative of faulting?',
        back: 'The presence of slickensides may inidcate faulting but this feature also results from non-fault related movement in clays, suck as shrinking and swelling.',
        flipped: false,
    },
    {
        front: 'What type of geologic units would constitute a "key bed"',
        back: 'Key beds are layers that have been deposited simultaneously over large areas. Good examples are volcanish ash, beds rich in fish scales, oysters, or corals.',
        flipped: false,
    },
    {
        front: 'When observing cross-bedded sandstones, how do you know where the top of the beds are?',
        back: 'The unit is right side up when cross-bedding is concave up.',
        flipped: false,
    },
    {
        front: 'What type of geomorphic features are diagnostic of faulting?',
        back: 'They include sag ponds, offset ridges, fault scarps, triangular facets, aligned springs, offset streams, and scarplets (especially when several other features are present.',
        flipped: false,
    },
    {
        front: 'What would cause a repetition or omission of units in cross section?',
        back: 'They may be caused by faulting. In general, if the fault is a reverse fault there will be a repetition of beds and if the fault is a normal fault the beds may be apparenetly missing.',
        flipped: false,
    },
    {
        front: 'What type of "V" will a vertical bed display on a map?',
        back: 'A vertical bed will have no "V". A vertical bed crosses all variations of topography with a straight line. This is also true of any vertical structural feature such as a fault.',
        flipped: false,
    },
    {
        front: 'What does a "Neutron Log" show and what is it commonly used for?',
        back: 'A radioactivity log curve of the intensity of radiation produced when the rocks in a borehole are bombarded by neutrons. It indicates the presence of fluid.',
        flipped: false,
    },
    {
        front: 'Define deflation.',
        back: 'The removal of loose material by wind erosion.',
        flipped: false,
    },
    {
        front: 'Where does helictite form and under what conditions?',
        back: 'Helictite, an irregular twiglike deposit, forms in a cavern where there is not enough water to form drips but the surface remains damn or the water comes from a tiny hole or tube within the deposit and the water flows out the end. ',
        flipped: false,
    },
    {
        front: 'What is a polje?',
        back: 'A sinkhole formed by solutional modification of the rock in a previously faulted or folded structure. This feature is the largest karst form and can be up to 30 miles or more in length and breadth.',
        flipped: false,
    },
    {
        front: 'What is a small deep lake formed in a cirque basin called?',
        back: 'Tarn.',
        flipped: false,
    },
    {
        front: 'What is a uvala?',
        back: 'An elongated karst depression that has formed by collapse or solution. These features can extend from 1000 feet to a mile or more.',
        flipped: false,
    },
    {
        front: 'What are the grooved or rilled surfaces characterstics of lapies a result of.',
        back: 'The solution of limestone by flowing rainwater on inclined surfaces. The grooves range in width from a few millimeters to more than a meter in the width and ommonly result in knifelike ridges. ',
        flipped: false,
    },
    {
        front: 'What is the red clayey soil found mantling the ground surface and extending into joints or fractures restulting from surface or near surface solution, usualy found on moderate to gentle slopes?',
        back: 'Terra rossa.',
        flipped: false,
    },
    {
        front: 'Seismic refraction is based on what? What is it used?',
        back: 'Seismic refraction methods are based on travel times of the seismic waves that pass through materials of differing densities, in order to map the layers.',
        flipped: false,
    },
    {
        front: 'Define "Body-Wave Magnitutde (Mb)"',
        back: 'The magnitude of an earthquake as estimated from the amplitude of the body waves.',
        flipped: false,
    },
    {
        front: 'What features are characteristics of larger clasts within a moraine deposit?',
        back: 'Many of the larger clasts are faceted and have striations or polish due to the abrasion during the movement of the glacier.',
        flipped: false,
    },
    {
        front: 'Are glacial deposits formed from direct deoposition of materials by glacio-fluvial or glacio-lacustrine processes stratified or unstratified?',
        back: 'Stratified deposits.',
        flipped: false,
    },
    {
        front: 'What do the presence of drumlins indicate.',
        back: 'Previously deposited glacial materials that have been overrun by another advance of glacier.',
        flipped: false,
    },
    {
        front: 'What geologic processes cause truncated or faceted spurs?',
        back: 'Truncated ridges, which characteristically have an inverted V-shaped face, can result from either the abrasion of glacial action as it straightens the valleys or by faulting.',
        flipped: false,
    },
    {
        front: 'What is the jagged sharp sawtooth-loke ridge that results from the growth of cirques on opposite sides of a mountain ridge by alpine glaciation called?',
        back: 'Arete (first "E" is accented)',
        flipped: false,
    },
    {
        front: 'What is the importance of knowing water saturation in an oil reservoir?',
        back: 'Below 60% of oil saturation, the reservoir will produce mostly water.',
        flipped: false,
    },
    {
        front: 'Give three examples of magmatic segregation deposits.',
        back: '1. Layered intrusions (chromite), 2.Kimberlite pipes (diamonds), 3. Ophiolites (asbestos). ',
        flipped: false,
    },
    {
        front: 'What does the "Single-Point Resistivity Log" show and what area is it limited to?',
        back: 'A log that measures the resistivity using two electrodes and having a limited area of investigation from 5 to 10 times the electrode diameter.',
        flipped: false,
    },
    {
        front: 'What does a "Spontaneous Potential Log" show and what is it a result of?',
        back: 'A log of the difference in DC voltage between an electrode in a well and an electrode at the surface. The difference in voltage is a result of the electrochemical potentials that develop between dissimilar borehole and formation fluids.',
        flipped: false,
    },
    {
        front: 'What is a sand sheet?',
        back: 'Often called sand drift, they are extensive flat areas covered with a coarse-grained sand that does not form dunes, but typically are covered with ripple marks.',
        flipped: false,
    },
    {
        front: 'What conditions do reservoir rocks need to have to allow migration, accumulation, and storage of petroleum to occur?',
        back: 'Reservoir rocks need to be sufficient porosity and permeability. Typical values of porosity range from 5% to 30%, most commonly in the 10% to 20% range. Permeabilities vary from 5-1000 millidarcys.',
        flipped: false,
    },
    {
        front: 'What is stratiform deposit?',
        back: 'A stratiform deposit is where the ore constitutes a layer or layers in the rock. It is also stratabound.',
        flipped: false,
    },
    {
        front: 'How are clastic rocks classified?',
        back: 'Clastic rocks may be classified according to size of particles, sorting and distribution of particles, or chemical content of silica, feldspar, and calcite.',
        flipped: false,
    },
    {
        front: 'Define diagenesis.',
        back: 'The change undergone by sedimentary rock after its original deposition and during and after lithification. Alteration may be chemical, physical, or biological, but not including metamorphism or weathering.',
        flipped: false,
    },
    {
        front: 'In what type of environment are you likely to find dolomite and why?',
        back: 'Dolomite is precipitated directly from waters in highly saline tidal flats. Saline water in the pore space is enriched in magnesium ions due to evaporation. Some of the excess magnesium is exchanged for calcium in the calcium carbonate, converting it to a dolomite.',
        flipped: false,
    },
    {
        front: 'What is a fold line and how is it used?',
        back: 'The fold line is a hinge line along which vertical cross section may be constructed and then flattened out to a horizontal or map view. It used to represent the subsurace along any given line in a map view. It need not be perpendicular to strike.',
        flipped: false,
    },
    {
        front: 'Define Maximum Capable Earthquake.',
        back: 'The max level of ground shaking ever expected at a site within the known geological framework. In Seismic Zones 3 & 4m it is the earthquake ground motion that has a 10% probability of being exceeded in 100 years.',
        flipped: false,
    },
    {
        front: 'In a distance-drawdown pumping test the line drawn on the semilog paper through the drawdown measurements is drawn through those points that are closests to the pumping well. Why?',
        back: 'In a distance-drawdown test, the points closest to the pumping well are the most accurate representation of the conditions because the further away from the pumping well the greater the likelihood that factors are present that would affece the water levels.',
        flipped: false,
    },
    {
        front: 'In a time-drawdown pumping test the line drawn on the semilog paper through the drawdown measurements is a drawn through those points that are further away from the time and test start. Why?',
        back: 'The points after the first 10 minutes are the most accurate because there has been time to stabilize or for for the cone of depression to reach a steady-state condition. In face the data taken in the first 10 minutes is not included in the analysis.',
        flipped: false,
    },
    {
        front: 'What is "Specific Yield?"',
        back: 'Ratio of the volume of water that drains from a saturated soil or rock due to gravity to the total volume of soil or rock, stated as a percentage.',
        flipped: false,
    },
    {
        front: 'What is "Time History"?',
        back: 'A record of ground acceleration versus time during an earthquake.',
        flipped: false,
    },
    {
        front: 'What is the US EPA recommended maximum TDS to ensure acceptable aesthetic and taste characteristics for drinking water?',
        back: 'For drinking water, the maximum TDS = 500 mg/l.',
        flipped: false,
    },
    {
        front: 'At what value of TDS water is considered to be saline?',
        back: 'TDS > 10,000 mg/ for saline water.',
        flipped: false,
    },


];





new Vue ({
    el: '#flashcard-app',
    data: {
        cards: cards,
        newFront: '',
        newBack: '',
        error: false
    },
    methods: {
        toggleCard: function(card){
            card.flipped = !card.flipped;
        },
        addNew: function(){
            if(!this.newFront || !this.newBack){
                this.error = true;
            }else{
                this.cards.push({
                    front:this.newFront,
                    back: this.newBack,
                    flipped: false
                });
                this.newFront = '';
                this.newBack = '';
                this.error = false;
            }
        }
    }
});