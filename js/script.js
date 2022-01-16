new Vue({
    el:"#app",
    data:{
        currentIndex: 0,
        images: [
            'https://unsplash.it/300/300?image=110',
            'https://unsplash.it/300/300?image=120',
            'https://unsplash.it/300/300?image=130',
            'https://unsplash.it/300/300?image=140',
            'https://unsplash.it/300/300?image=151',
            'https://unsplash.it/300/300?image=160',
        ]
        
    },
    methods:{
        nextIMG: function () {
            this.currentIndex++;
            //se siamo arrivati all'ultima immagine dello slider
            //setta il currentIndex a 0
            if(this.currentIndex === this.images.length)
                {this.currentIndex=0}
        },
        prevIMG: function () {
            this.currentIndex--;
            //se siamo arrivati alla prima immagine dello slider
            //setta il currentIndex all'ultima posizione
            //della lista di immagini
            if(this.currentIndex < 0)
                {this.currentIndex=this.images.length-1}
            
        }
    }
})