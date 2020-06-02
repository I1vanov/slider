function Slider() {
    this.imagesUrls = [];
    this.currentImagesIndex = 0;
    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImage = null;

    this.start = function (elId) {
        var that = this;
        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);

        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImage = el.querySelector('.slide-imgs');


        //subscribe to events
        this.showPrevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtn(e);
        });
        this.showNextBtn.addEventListener('click', function (e) {
            that.onShowNextBtn();
        });

        //create images array

        this.imagesUrls.push('https://avatars.mds.yandex.net/get-pdb/931085/08e0818a-1e60-48e6-9f82-e198bd2d0fc4/s1200');
        this.imagesUrls.push('https://avatars.mds.yandex.net/get-pdb/194708/2ffd2293-79d0-4718-8a14-710987edf19e/s1200?webp=false');
        this.imagesUrls.push('https://foto.carexpert.ru/img/1920x1080/audi4908.jpg');
        this.imagesUrls.push('https://avatars.mds.yandex.net/get-pdb/1942074/c6fc8816-71e9-4d24-b08d-1be550f96947/s1200?webp=false');
        this.imagesUrls.push('https://avatars.mds.yandex.net/get-pdb/1025599/f6899c16-53e2-4ba6-85dc-6ed6e643ed69/s1200?webp=false');


        var currentImagesIndex = 0;
        this.slideImage.src = this.imagesUrls[this.currentImagesIndex];
        this.showPrevBtn.disabled = true;


        this.onShowPrevBtn = function (e) {
            this.currentImagesIndex--;
            this.slideImage.src = this.imagesUrls[this.currentImagesIndex];
            this.showNextBtn.disabled = false;

            if (this.currentImagesIndex === 0) {
                this.showPrevBtn.disabled = true;
            };
        };

        this.onShowNextBtn = function (e) {
            this.currentImagesIndex++;
            this.slideImage.src = this.imagesUrls[this.currentImagesIndex];
            this.showPrevBtn.disabled = false;

            if (this.currentImagesIndex === (this.imagesUrls.length - 1)) {
                this.showNextBtn.disabled = true;
            };
        };
    };
};