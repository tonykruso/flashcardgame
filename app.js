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
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },
    // {
    //     front: ,
    //     back: ,
    //     flipped: false,
    // },

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