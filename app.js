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